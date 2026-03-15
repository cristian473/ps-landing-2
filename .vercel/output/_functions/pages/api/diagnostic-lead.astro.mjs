import { Resend } from 'resend';
import * as nodePath from 'node:path';
import { fileURLToPath } from 'node:url';
import * as runtime from '@prisma/client/runtime/client';
import { PrismaLibSql } from '@prisma/adapter-libsql';
import { v as verifyRecaptcha } from '../../chunks/recaptcha_2MduZRbA.mjs';
export { renderers } from '../../renderers.mjs';

const config = {
  "previewFeatures": [],
  "clientVersion": "7.4.2",
  "engineVersion": "94a226be1cf2967af2541cca5529f0f7ba866919",
  "activeProvider": "sqlite",
  "inlineSchema": 'generator client {\n  provider = "prisma-client"\n  output   = "../generated/prisma"\n}\n\ndatasource db {\n  provider = "sqlite"\n}\n\nmodel DiagnosticLead {\n  id         String   @id @default(cuid())\n  createdAt  DateTime @default(now())\n  email      String\n  q1         String\n  q2         String\n  q3         String\n  q4         String\n  q5         String\n  q6         String\n  q7         String\n  totalScore Int\n  archetype  String\n}\n',
  "runtimeDataModel": {
    "models": {},
    "enums": {},
    "types": {}
  },
  "parameterizationSchema": {
    "strings": [],
    "graph": ""
  }
};
config.runtimeDataModel = JSON.parse('{"models":{"DiagnosticLead":{"fields":[{"name":"id","kind":"scalar","type":"String"},{"name":"createdAt","kind":"scalar","type":"DateTime"},{"name":"email","kind":"scalar","type":"String"},{"name":"q1","kind":"scalar","type":"String"},{"name":"q2","kind":"scalar","type":"String"},{"name":"q3","kind":"scalar","type":"String"},{"name":"q4","kind":"scalar","type":"String"},{"name":"q5","kind":"scalar","type":"String"},{"name":"q6","kind":"scalar","type":"String"},{"name":"q7","kind":"scalar","type":"String"},{"name":"totalScore","kind":"scalar","type":"Int"},{"name":"archetype","kind":"scalar","type":"String"}],"dbName":null}},"enums":{},"types":{}}');
config.parameterizationSchema = {
  strings: JSON.parse('["where","DiagnosticLead.findUnique","DiagnosticLead.findUniqueOrThrow","orderBy","cursor","DiagnosticLead.findFirst","DiagnosticLead.findFirstOrThrow","DiagnosticLead.findMany","data","DiagnosticLead.createOne","DiagnosticLead.createMany","DiagnosticLead.createManyAndReturn","DiagnosticLead.updateOne","DiagnosticLead.updateMany","DiagnosticLead.updateManyAndReturn","create","update","DiagnosticLead.upsertOne","DiagnosticLead.deleteOne","DiagnosticLead.deleteMany","having","_count","_avg","_sum","_min","_max","DiagnosticLead.groupBy","DiagnosticLead.aggregate","AND","OR","NOT","id","createdAt","email","q1","q2","q3","q4","q5","q6","q7","totalScore","archetype","equals","in","notIn","lt","lte","gt","gte","not","contains","startsWith","endsWith","set","increment","decrement","multiply","divide"]'),
  graph: "MAsQDxwAACUAMB0AAAQAEB4AACUAMB8BAAAAASBAACcAISEBACYAISIBACYAISMBACYAISQBACYAISUBACYAISYBACYAIScBACYAISgBACYAISkCACgAISoBACYAIQEAAAABACABAAAAAQAgDxwAACUAMB0AAAQAEB4AACUAMB8BACYAISBAACcAISEBACYAISIBACYAISMBACYAISQBACYAISUBACYAISYBACYAIScBACYAISgBACYAISkCACgAISoBACYAIQADAAAABAAgAwAABQAwBAAAAQAgAwAAAAQAIAMAAAUAMAQAAAEAIAMAAAAEACADAAAFADAEAAABACAMHwEAAAABIEAAAAABIQEAAAABIgEAAAABIwEAAAABJAEAAAABJQEAAAABJgEAAAABJwEAAAABKAEAAAABKQIAAAABKgEAAAABAQgAAAkAIAwfAQAAAAEgQAAAAAEhAQAAAAEiAQAAAAEjAQAAAAEkAQAAAAElAQAAAAEmAQAAAAEnAQAAAAEoAQAAAAEpAgAAAAEqAQAAAAEBCAAACwAwAQgAAAsAMAwfAQAuACEgQAAvACEhAQAuACEiAQAuACEjAQAuACEkAQAuACElAQAuACEmAQAuACEnAQAuACEoAQAuACEpAgAwACEqAQAuACECAAAAAQAgCAAADgAgDB8BAC4AISBAAC8AISEBAC4AISIBAC4AISMBAC4AISQBAC4AISUBAC4AISYBAC4AIScBAC4AISgBAC4AISkCADAAISoBAC4AIQIAAAAEACAIAAAQACACAAAABAAgCAAAEAAgAwAAAAEAIA8AAAkAIBAAAA4AIAEAAAABACABAAAABAAgBRUAACkAIBYAACoAIBcAAC0AIBgAACwAIBkAACsAIA8cAAAaADAdAAAXABAeAAAaADAfAQAbACEgQAAcACEhAQAbACEiAQAbACEjAQAbACEkAQAbACElAQAbACEmAQAbACEnAQAbACEoAQAbACEpAgAdACEqAQAbACEDAAAABAAgAwAAFgAwFAAAFwAgAwAAAAQAIAMAAAUAMAQAAAEAIA8cAAAaADAdAAAXABAeAAAaADAfAQAbACEgQAAcACEhAQAbACEiAQAbACEjAQAbACEkAQAbACElAQAbACEmAQAbACEnAQAbACEoAQAbACEpAgAdACEqAQAbACEOFQAAHwAgGAAAJAAgGQAAJAAgKwEAAAABLAEAAAAELQEAAAAELgEAAAABLwEAAAABMAEAAAABMQEAAAABMgEAIwAhMwEAAAABNAEAAAABNQEAAAABCxUAAB8AIBgAACIAIBkAACIAICtAAAAAASxAAAAABC1AAAAABC5AAAAAAS9AAAAAATBAAAAAATFAAAAAATJAACEAIQ0VAAAfACAWAAAgACAXAAAfACAYAAAfACAZAAAfACArAgAAAAEsAgAAAAQtAgAAAAQuAgAAAAEvAgAAAAEwAgAAAAExAgAAAAEyAgAeACENFQAAHwAgFgAAIAAgFwAAHwAgGAAAHwAgGQAAHwAgKwIAAAABLAIAAAAELQIAAAAELgIAAAABLwIAAAABMAIAAAABMQIAAAABMgIAHgAhCCsCAAAAASwCAAAABC0CAAAABC4CAAAAAS8CAAAAATACAAAAATECAAAAATICAB8AIQgrCAAAAAEsCAAAAAQtCAAAAAQuCAAAAAEvCAAAAAEwCAAAAAExCAAAAAEyCAAgACELFQAAHwAgGAAAIgAgGQAAIgAgK0AAAAABLEAAAAAELUAAAAAELkAAAAABL0AAAAABMEAAAAABMUAAAAABMkAAIQAhCCtAAAAAASxAAAAABC1AAAAABC5AAAAAAS9AAAAAATBAAAAAATFAAAAAATJAACIAIQ4VAAAfACAYAAAkACAZAAAkACArAQAAAAEsAQAAAAQtAQAAAAQuAQAAAAEvAQAAAAEwAQAAAAExAQAAAAEyAQAjACEzAQAAAAE0AQAAAAE1AQAAAAELKwEAAAABLAEAAAAELQEAAAAELgEAAAABLwEAAAABMAEAAAABMQEAAAABMgEAJAAhMwEAAAABNAEAAAABNQEAAAABDxwAACUAMB0AAAQAEB4AACUAMB8BACYAISBAACcAISEBACYAISIBACYAISMBACYAISQBACYAISUBACYAISYBACYAIScBACYAISgBACYAISkCACgAISoBACYAIQsrAQAAAAEsAQAAAAQtAQAAAAQuAQAAAAEvAQAAAAEwAQAAAAExAQAAAAEyAQAkACEzAQAAAAE0AQAAAAE1AQAAAAEIK0AAAAABLEAAAAAELUAAAAAELkAAAAABL0AAAAABMEAAAAABMUAAAAABMkAAIgAhCCsCAAAAASwCAAAABC0CAAAABC4CAAAAAS8CAAAAATACAAAAATECAAAAATICAB8AIQAAAAAAATYBAAAAAQE2QAAAAAEFNgIAAAABNwIAAAABOAIAAAABOQIAAAABOgIAAAABAAAAAAUVAAYWAAcXAAgYAAkZAAoAAAAAAAUVAAYWAAcXAAgYAAkZAAoBAgECAwEFBgEGBwEHCAEJCgEKDAILDQMMDwENEQIOEgQREwESFAETFQIaGAUbGQs"
};
async function decodeBase64AsWasm(wasmBase64) {
  const { Buffer } = await import('node:buffer');
  const wasmArray = Buffer.from(wasmBase64, "base64");
  return new WebAssembly.Module(wasmArray);
}
config.compilerWasm = {
  getRuntime: async () => await import('@prisma/client/runtime/query_compiler_fast_bg.sqlite.mjs'),
  getQueryCompilerWasmModule: async () => {
    const { wasm } = await import('@prisma/client/runtime/query_compiler_fast_bg.sqlite.wasm-base64.mjs');
    return await decodeBase64AsWasm(wasm);
  },
  importName: "./query_compiler_fast_bg.js"
};
function getPrismaClientClass() {
  return runtime.getPrismaClient(config);
}

runtime.Extensions.getExtensionContext;
({
  DbNull: runtime.NullTypes.DbNull,
  JsonNull: runtime.NullTypes.JsonNull,
  AnyNull: runtime.NullTypes.AnyNull
});
runtime.makeStrictEnum({
  Serializable: "Serializable"
});
runtime.Extensions.defineExtension;

globalThis["__dirname"] = nodePath.dirname(fileURLToPath(import.meta.url));
const PrismaClient = getPrismaClientClass();

const adapter = new PrismaLibSql({
  url: "libsql://purosoftwarediagnosticleads-cristian-purosoftware.aws-us-east-1.turso.io",
  authToken: "eyJhbGciOiJFZERTQSIsInR5cCI6IkpXVCJ9.eyJhIjoicnciLCJpYXQiOjE3NzIyNDAyNzIsImlkIjoiMDE5Y2ExYzAtNWMwMS03MDc0LWE1ZmMtMDkxOWU1MmNkNzk0IiwicmlkIjoiOTdlZTQ5OTgtODJkMy00NDBiLTgzODMtODM4ZTkzOTRhMTAzIn0.gfqMgnlQEh0u4WSxJMq5U192KNERx00-eVLewCXki4aT3qKUKmgE3OmsUSN1sQdGpvAII19DYdT5NHu4Ow-bDA"
});
const prisma = new PrismaClient({ adapter });

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
function getArchetype(totalScore) {
  if (totalScore <= 13) return "El Bombero";
  if (totalScore <= 19) return "El Artesano";
  if (totalScore <= 24) return "El Gestor";
  return "El Estratega";
}
const POST = async ({ request }) => {
  try {
    const body = await request.json();
    const { email, answers, recaptchaToken } = body;
    const recaptchaResult = await verifyRecaptcha(
      recaptchaToken || "",
      "diagnostic_lead"
    );
    if (!recaptchaResult.success) {
      return new Response(
        JSON.stringify({ success: false, error: recaptchaResult.error }),
        { status: 403, headers: { "Content-Type": "application/json" } }
      );
    }
    if (!email || !emailRegex.test(email.trim())) {
      return new Response(
        JSON.stringify({ success: false, error: "Email inválido." }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }
    if (!Array.isArray(answers) || answers.length !== 7) {
      return new Response(
        JSON.stringify({ success: false, error: "Respuestas inválidas." }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }
    const qValues = [];
    let totalScore = 0;
    for (let i = 0; i < 7; i++) {
      const a = answers[i];
      if (!a || typeof a.score !== "number" || a.score < 1 || a.score > 4 || typeof a.questionText !== "string" || typeof a.responseLabel !== "string") {
        return new Response(
          JSON.stringify({
            success: false,
            error: `Respuesta inválida para pregunta ${i + 1}.`
          }),
          { status: 400, headers: { "Content-Type": "application/json" } }
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
        archetype
      }
    });
    const resendKey = "re_VTviCcPx_MyX6XuhvdFRuMHKRPhDW3sd2";
    if (resendKey) {
      const resend = new Resend(resendKey);
      const answersHtml = answers.map(
        (a, i) => `<tr><td style="padding:6px 12px;border:1px solid #ddd;"><strong>${i + 1}. ${a.questionText}</strong></td><td style="padding:6px 12px;border:1px solid #ddd;">${a.responseLabel}</td></tr>`
      ).join("");
      resend.emails.send({
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
          `
      }).catch((err) => console.error("Resend error:", err));
    }
    return new Response(
      JSON.stringify({ success: true, data: { id: lead.id } }),
      { status: 200, headers: { "Content-Type": "application/json" } }
    );
  } catch (error) {
    console.error("diagnostic-lead error:", error);
    return new Response(
      JSON.stringify({ success: false, error: "Error interno del servidor." }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  POST
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
