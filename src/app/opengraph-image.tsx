import { ImageResponse } from "next/og";
export const alt = "Zettas — atendimento, cobrança e gestão para academias";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#050b14",
          color: "#f5f9ff",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          padding: "65px 75px",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 40,
            fontWeight: 700,
            color: "#75c83e",
          }}
        >
          zettas.
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 22,
            marginTop: 45,
            color: "#38bdf8",
          }}
        >
          Uma operação feita para academias
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 65,
            fontWeight: 700,
            letterSpacing: -3,
            marginTop: 22,
            maxWidth: 1000,
          }}
        >
          Sua academia bem atendida.
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 38,
            marginTop: 17,
            maxWidth: 960,
            color: "#b3c3d5",
          }}
        >
          Sua equipe mais presente.
        </div>
        <div
          style={{
            display: "flex",
            borderTop: "1px solid #26425a",
            paddingTop: 30,
            marginTop: 42,
            fontSize: 22,
          }}
        >
          Atendimento no WhatsApp · Cobrança integrada · Gestão
        </div>
      </div>
    ),
    size,
  );
}
