import type { APIRoute } from "astro";
import { Resend } from "resend";
import prisma from "../../lib/prisma";

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

interface AnswerPayload {
  questionText: string;
  responseLabel: string;
  score: number;
}

function getArchetype(totalScore: number): string {
  if (totalScore <= 13) return "El Bombero";
  if (totalScore <= 19) return "El Artesano";
  if (totalScore <= 24) return "El Gestor";
  return "El Estratega";
}

export const POST: APIRoute = async ({ request }) => {
  try {
    const body = await request.json();
    const { email, answers } = body as {
      email?: string;
      answers?: AnswerPayload[];
    };

    // Validate email
    if (!email || !emailRegex.test(email.trim())) {
      return new Response(
        JSON.stringify({ success: false, error: "Email inválido." }),
        { status: 400, headers: { "Content-Type": "application/json" } },
      );
    }

    // Validate answers: must be array of 7 items with score 1-4
    if (!Array.isArray(answers) || answers.length !== 7) {
      return new Response(
        JSON.stringify({ success: false, error: "Respuestas inválidas." }),
        { status: 400, headers: { "Content-Type": "application/json" } },
      );
    }

    const qValues: string[] = [];
    let totalScore = 0;

    for (let i = 0; i < 7; i++) {
      const a = answers[i];
      if (
        !a ||
        typeof a.score !== "number" ||
        a.score < 1 ||
        a.score > 4 ||
        typeof a.questionText !== "string" ||
        typeof a.responseLabel !== "string"
      ) {
        return new Response(
          JSON.stringify({
            success: false,
            error: `Respuesta inválida para pregunta ${i + 1}.`,
          }),
          { status: 400, headers: { "Content-Type": "application/json" } },
        );
      }
      qValues.push(`Q:${a.questionText}:R:${a.responseLabel}`);
      totalScore += a.score;
    }

    const archetype = getArchetype(totalScore);

    const lead = await prisma.diagnosticLead.create({
      data: {
        email: email.trim(),
        q1: qValues[0],
        q2: qValues[1],
        q3: qValues[2],
        q4: qValues[3],
        q5: qValues[4],
        q6: qValues[5],
        q7: qValues[6],
        totalScore,
        archetype,
      },
    });

    // Send notification email via Resend (fire-and-forget)
    const resendKey = import.meta.env.RESEND_API_KEY;
    if (resendKey) {
      const resend = new Resend(resendKey);
      const answersHtml = answers
        .map(
          (a, i) =>
            `<tr><td style="padding:6px 12px;border:1px solid #ddd;"><strong>${i + 1}. ${a.questionText}</strong></td><td style="padding:6px 12px;border:1px solid #ddd;">${a.responseLabel}</td></tr>`,
        )
        .join("");

      resend.emails
        .send({
          from: "cristian@contacto.puro.software",
          to: "cristian@puro.software",
          subject: `Nuevo lead diagnóstico: ${archetype} — ${email.trim()}`,
          html: `
            <h2>Nuevo lead del diagnóstico digital</h2>
            <p><strong>Email:</strong> ${email.trim()}</p>
            <p><strong>Arquetipo:</strong> ${archetype}</p>
            <p><strong>Puntaje total:</strong> ${totalScore}/28</p>
            <table style="border-collapse:collapse;margin-top:12px;">
              <thead>
                <tr>
                  <th style="padding:6px 12px;border:1px solid #ddd;text-align:left;">Pregunta</th>
                  <th style="padding:6px 12px;border:1px solid #ddd;text-align:left;">Respuesta</th>
                </tr>
              </thead>
              <tbody>${answersHtml}</tbody>
            </table>
          `,
        })
        .catch((err) => console.error("Resend error:", err));
    }

    return new Response(
      JSON.stringify({ success: true, data: { id: lead.id } }),
      { status: 200, headers: { "Content-Type": "application/json" } },
    );
  } catch (error) {
    console.error("diagnostic-lead error:", error);
    return new Response(
      JSON.stringify({ success: false, error: "Error interno del servidor." }),
      { status: 500, headers: { "Content-Type": "application/json" } },
    );
  }
};
