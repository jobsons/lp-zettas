import type { CSSProperties } from "react";
import {
  ArrowUpRight,
  Check,
  CheckCheck,
  FileText,
  MessageCircle,
  ShieldCheck,
  Sparkles,
  UserRound,
  BarChart3,
  CreditCard,
} from "lucide-react";
export type DemoKind = "atendimento" | "cobranca" | "gestao";
export type DemoProps = { kind: DemoKind; compact?: boolean };
const bubble: CSSProperties = {
  padding: "18px 22px",
  borderRadius: "4px 20px 20px 20px",
  background: "#fff",
  border: "1px solid #e3e8ef",
  fontSize: 26,
  lineHeight: 1.45,
  maxWidth: "91%",
  boxShadow: "0 3px 10px #162d4b04",
};
function reveal(frame: number, start: number): CSSProperties {
  const progress = Math.min(1, Math.max(0, (frame - start) / 18));
  return { opacity: progress, translate: `0 ${(1 - progress) * 12}px` };
}
export function DemoArtwork({
  kind,
  frame = 690,
  compact = false,
}: DemoProps & { frame?: number }) {
  const step = frame < 210 ? 0 : frame < 420 ? 1 : 2;
  const captions =
    kind === "atendimento"
      ? [
          "Uma conversa. O contexto certo.",
          "A IA consulta as regras da academia.",
          "Sua equipe recebe a conversa com contexto.",
        ]
      : kind === "cobranca"
        ? [
            "A cobrança começa com dados atualizados.",
            "Mensalidades selecionadas pelas suas regras.",
            "Uma mensagem clara. Um caminho para pagar.",
          ]
        : [
            "As vendas do mês, em um só lugar.",
            "Informações organizadas por período.",
            "Um relatório pronto para o gestor.",
          ];
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        background: "#f1f5f9",
        color: "#18293d",
        fontFamily: "Inter, Arial, sans-serif",
        display: "flex",
        flexDirection: "column",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          height: 68,
          background: "#fff",
          borderBottom: "1px solid #e0e6ed",
          display: "flex",
          alignItems: "center",
          gap: 12,
          padding: "0 25px",
          flexShrink: 0,
        }}
      >
        <div
          style={{
            background: "#e9f1ff",
            color: "#2863d9",
            borderRadius: 12,
            padding: 9,
          }}
        >
          <Sparkles size={24} />
        </div>
        <span style={{ fontSize: 23, fontWeight: 700 }}>Academia Aurora</span>
        <span
          style={{
            marginLeft: "auto",
            fontSize: 17,
            display: "flex",
            alignItems: "center",
            gap: 7,
            color: "#41705c",
          }}
        >
          <span
            style={{
              width: 7,
              height: 7,
              background: "#42997d",
              borderRadius: "50%",
            }}
          />
          Operação integrada
        </span>
      </div>
      {kind === "atendimento" && (
        <div style={{ padding: "24px 27px", flex: 1 }}>
          <div
            style={{
              display: "flex",
              gap: 11,
              alignItems: "center",
              marginBottom: 22,
            }}
          >
            <div
              style={{
                width: 42,
                height: 42,
                borderRadius: "50%",
                background: "#dce7fb",
                display: "grid",
                placeItems: "center",
              }}
            >
              <UserRound size={22} />
            </div>
            <div>
              <div style={{ fontSize: 22, fontWeight: 600 }}>
                Marina · Aluna
              </div>
              <div style={{ fontSize: 16, color: "#758299" }}>
                Atendimento pelo WhatsApp
              </div>
            </div>
            <MessageCircle
              size={23}
              color="#7891aa"
              style={{ marginLeft: "auto" }}
            />
          </div>
          <div
            style={{
              ...bubble,
              marginLeft: "auto",
              background: "#e5edfb",
              borderColor: "#d9e5fa",
              borderRadius: "20px 4px 20px 20px",
            }}
          >
            Oi! Vi uma condição especial para o plano anual. Como funciona?
            <CheckCheck
              size={17}
              color="#4976bd"
              style={{ marginLeft: "auto", display: "block", marginTop: 6 }}
            />
          </div>
          <div
            style={{
              ...reveal(frame, 105),
              margin: "13px 0",
              display: "flex",
              alignItems: "center",
              gap: 8,
              color: "#62748c",
              fontSize: 17,
            }}
          >
            <ShieldCheck size={18} />
            Perfil de aluna identificado · Campanha consultada
          </div>
          <div style={{ ...bubble, ...reveal(frame, 225) }}>
            Oi, Marina! Sou a Bia. Temos uma condição especial para o plano
            anual. A equipe comercial vai conferir como ela se aplica a você.
          </div>
          <div
            style={{
              ...reveal(frame, 425),
              background: "#fff",
              border: "1px solid #dce5f0",
              borderRadius: 14,
              marginTop: 19,
              padding: "17px 20px",
              display: "flex",
              alignItems: "center",
              gap: 14,
            }}
          >
            <div
              style={{ background: "#ecf3ff", padding: 10, borderRadius: 12 }}
            >
              <ArrowUpRight color="#2863d9" size={24} />
            </div>
            <div>
              <div style={{ fontSize: 22, fontWeight: 600 }}>
                Equipe comercial acionada
              </div>
              <div style={{ fontSize: 17, color: "#64758b", marginTop: 4 }}>
                Histórico e resumo seguem com a conversa.
              </div>
            </div>
          </div>
        </div>
      )}
      {kind === "cobranca" && (
        <div style={{ padding: "26px 27px", flex: 1 }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              marginBottom: 19,
            }}
          >
            <span style={{ fontSize: 27, fontWeight: 700 }}>
              Cobrança organizada
            </span>
            <CreditCard color="#2863d9" size={27} />
          </div>
          <div
            style={{
              background: "white",
              border: "1px solid #dce5ef",
              borderRadius: 14,
              padding: "19px 22px",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 9,
                color: "#39765c",
                fontSize: 21,
                fontWeight: 600,
              }}
            >
              <Check size={21} />
              Dados atualizados da EVO
            </div>
            <div style={{ marginTop: 9, color: "#687c91", fontSize: 19 }}>
              Antes de enviar, a operação confere os dados.
            </div>
          </div>
          <div
            style={{
              ...reveal(frame, 160),
              display: "flex",
              gap: 10,
              margin: "20px 0",
              fontSize: 17,
            }}
          >
            {[
              "Mensalidade recorrente",
              "Atraso conferido",
              "Link validado",
            ].map((text) => (
              <span
                key={text}
                style={{
                  border: "1px solid #dce5ef",
                  borderRadius: 7,
                  padding: "9px 10px",
                  background: "#fafcff",
                }}
              >
                {text}
              </span>
            ))}
          </div>
          <div style={{ ...bubble, ...reveal(frame, 280), maxWidth: "100%" }}>
            Olá, Lucas! Identificamos uma mensalidade pendente de R$ 189,90.
            Você pode consultar e regularizar pelo link abaixo.
            <div
              style={{
                marginTop: 18,
                padding: "12px 18px",
                border: "1px solid #cbdaf3",
                borderRadius: 9,
                color: "#2863d9",
                display: "flex",
                justifyContent: "space-between",
                fontSize: 23,
                fontWeight: 600,
              }}
            >
              Consultar pagamento
              <ArrowUpRight size={23} />
            </div>
          </div>
          <div
            style={{
              ...reveal(frame, 450),
              fontSize: 18,
              marginTop: 19,
              color: "#65768b",
            }}
          >
            Regras de elegibilidade definidas com a academia.
          </div>
        </div>
      )}
      {kind === "gestao" && (
        <div style={{ padding: "24px 27px", flex: 1 }}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <div>
              <div style={{ fontSize: 27, fontWeight: 700 }}>Visão do mês</div>
              <div style={{ color: "#697c92", fontSize: 18, marginTop: 6 }}>
                Setembro · Valores demonstrativos
              </div>
            </div>
            <BarChart3 color="#2863d9" size={28} />
          </div>
          <div
            style={{
              marginTop: 22,
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 13,
            }}
          >
            {[
              ["Vendas no período", "R$ 42.580"],
              ["Vendas registradas", "128"],
            ].map(([label, value]) => (
              <div
                key={label}
                style={{
                  padding: "18px 20px",
                  background: "white",
                  border: "1px solid #e0e7f0",
                  borderRadius: 13,
                }}
              >
                <div style={{ color: "#6a7b90", fontSize: 18 }}>{label}</div>
                <div
                  style={{
                    fontSize: 34,
                    fontWeight: 700,
                    letterSpacing: -1,
                    marginTop: 9,
                  }}
                >
                  {value}
                </div>
              </div>
            ))}
          </div>
          <div
            style={{
              marginTop: 17,
              padding: "18px 20px",
              background: "white",
              border: "1px solid #e0e7f0",
              borderRadius: 13,
            }}
          >
            <div style={{ fontSize: 19, fontWeight: 600 }}>
              Vendas ao longo do mês
            </div>
            <div
              style={{
                height: 123,
                display: "flex",
                alignItems: "end",
                gap: 15,
                marginTop: 15,
                borderBottom: "1px solid #e5ebf3",
              }}
            >
              {[38, 61, 48, 83, 67, 95, 76, 100, 65, 87, 110, 90].map(
                (height, index) => (
                  <div
                    key={index}
                    style={{
                      flex: 1,
                      height:
                        height *
                        Math.min(1, Math.max(0.15, (frame - index * 9) / 80)),
                      background: index === 10 ? "#1e55c1" : "#82a6ed",
                      borderRadius: "4px 4px 0 0",
                    }}
                  />
                ),
              )}
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                color: "#8a98aa",
                fontSize: 16,
                marginTop: 7,
              }}
            >
              <span>01 set</span>
              <span>15 set</span>
              <span>30 set</span>
            </div>
          </div>
          <div
            style={{
              ...reveal(frame, 390),
              background: "#e7effb",
              border: "1px solid #d4e2f5",
              padding: "16px 20px",
              marginTop: 17,
              borderRadius: 12,
              display: "flex",
              gap: 13,
              alignItems: "center",
            }}
          >
            <FileText size={26} color="#2863d9" />
            <div>
              <div style={{ fontSize: 21, fontWeight: 600 }}>
                Relatório mensal preparado
              </div>
              <div style={{ color: "#65768b", fontSize: 17, marginTop: 4 }}>
                Períodos e categorias para acompanhar a operação.
              </div>
            </div>
          </div>
        </div>
      )}
      <div
        style={{
          flexShrink: 0,
          minHeight: 57,
          padding: "15px 24px",
          background: "#132c4c",
          color: "#fff",
          fontSize: compact ? 21 : 22,
          fontWeight: 500,
          display: "flex",
          alignItems: "center",
          gap: 12,
        }}
      >
        <span style={{ color: "#8ab4ff", fontSize: 17 }}>0{step + 1}</span>
        {captions[step]}
      </div>
      <div style={{ height: 3, background: "#dae6f8", flexShrink: 0 }}>
        <div
          style={{
            width: `${Math.min(100, (frame / 720) * 100)}%`,
            height: "100%",
            background: "#4b83ed",
          }}
        />
      </div>
    </div>
  );
}
