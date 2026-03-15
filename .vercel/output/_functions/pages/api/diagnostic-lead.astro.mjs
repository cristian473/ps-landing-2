import { Resend } from 'resend';
import * as process from 'node:process';
import * as path from 'node:path';
import { fileURLToPath } from 'node:url';
import * as runtime from '@prisma/client/runtime/library';
import { PrismaLibSql } from '@prisma/adapter-libsql';
import { v as verifyRecaptcha } from '../../chunks/recaptcha_2MduZRbA.mjs';
export { renderers } from '../../renderers.mjs';

const config = {
  "generator": {
    "name": "client",
    "provider": {
      "fromEnvVar": null,
      "value": "prisma-client"
    },
    "output": {
      "value": "/Users/macpro/Documents/work/purosoftware/ps-landing-4/generated/prisma",
      "fromEnvVar": null
    },
    "config": {
      "engineType": "library"
    },
    "binaryTargets": [
      {
        "fromEnvVar": null,
        "value": "darwin-arm64",
        "native": true
      }
    ],
    "previewFeatures": [],
    "sourceFilePath": "/Users/macpro/Documents/work/purosoftware/ps-landing-4/prisma/schema.prisma",
    "isCustomOutput": true
  },
  "relativePath": "../../prisma",
  "clientVersion": "6.10.1",
  "engineVersion": "9b628578b3b7cae625e8c927178f15a170e74a9c",
  "datasourceNames": [
    "db"
  ],
  "activeProvider": "sqlite",
  "postinstall": false,
  "inlineDatasources": {
    "db": {
      "url": {
        "fromEnvVar": "TURSO_DATABASE_URL",
        "value": null
      }
    }
  },
  "inlineSchema": 'generator client {\n  provider = "prisma-client"\n  output   = "../generated/prisma"\n}\n\ndatasource db {\n  provider = "sqlite"\n  url      = env("TURSO_DATABASE_URL")\n}\n\nmodel DiagnosticLead {\n  id         String   @id @default(cuid())\n  createdAt  DateTime @default(now())\n  email      String\n  q1         String\n  q2         String\n  q3         String\n  q4         String\n  q5         String\n  q6         String\n  q7         String\n  totalScore Int\n  archetype  String\n}\n',
  "inlineSchemaHash": "4ae4889747ee6234f89169242231f3a7329bf7bb964080809eb4d7f810bc7483",
  "copyEngine": true,
  "runtimeDataModel": {
    "models": {},
    "enums": {},
    "types": {}
  },
  "dirname": ""
};
config.runtimeDataModel = JSON.parse('{"models":{"DiagnosticLead":{"dbName":null,"schema":null,"fields":[{"name":"id","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":true,"isReadOnly":false,"hasDefaultValue":true,"type":"String","nativeType":null,"default":{"name":"cuid","args":[1]},"isGenerated":false,"isUpdatedAt":false},{"name":"createdAt","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":true,"type":"DateTime","nativeType":null,"default":{"name":"now","args":[]},"isGenerated":false,"isUpdatedAt":false},{"name":"email","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","nativeType":null,"isGenerated":false,"isUpdatedAt":false},{"name":"q1","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","nativeType":null,"isGenerated":false,"isUpdatedAt":false},{"name":"q2","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","nativeType":null,"isGenerated":false,"isUpdatedAt":false},{"name":"q3","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","nativeType":null,"isGenerated":false,"isUpdatedAt":false},{"name":"q4","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","nativeType":null,"isGenerated":false,"isUpdatedAt":false},{"name":"q5","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","nativeType":null,"isGenerated":false,"isUpdatedAt":false},{"name":"q6","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","nativeType":null,"isGenerated":false,"isUpdatedAt":false},{"name":"q7","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","nativeType":null,"isGenerated":false,"isUpdatedAt":false},{"name":"totalScore","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Int","nativeType":null,"isGenerated":false,"isUpdatedAt":false},{"name":"archetype","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","nativeType":null,"isGenerated":false,"isUpdatedAt":false}],"primaryKey":null,"uniqueFields":[],"uniqueIndexes":[],"isGenerated":false}},"enums":{},"types":{}}');
config.engineWasm = void 0;
config.compilerWasm = void 0;
function getPrismaClientClass(dirname) {
  config.dirname = dirname;
  return runtime.getPrismaClient(config);
}

runtime.Public.validator;
runtime.Extensions.getExtensionContext;
({
  DbNull: runtime.objectEnumValues.classes.DbNull,
  JsonNull: runtime.objectEnumValues.classes.JsonNull,
  AnyNull: runtime.objectEnumValues.classes.AnyNull
});
runtime.objectEnumValues.instances.DbNull;
runtime.objectEnumValues.instances.JsonNull;
runtime.objectEnumValues.instances.AnyNull;
runtime.makeStrictEnum({
  Serializable: "Serializable"
});
runtime.Extensions.defineExtension;

const __dirname$1 = path.dirname(fileURLToPath(import.meta.url));
const PrismaClient = getPrismaClientClass(__dirname$1);
path.join(__dirname$1, "libquery_engine-darwin-arm64.dylib.node");
path.join(process.cwd(), "generated/prisma/libquery_engine-darwin-arm64.dylib.node");

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
