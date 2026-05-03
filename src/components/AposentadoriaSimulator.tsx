import { useState } from "react";

type Sex = "F" | "M";

const AposentadoriaSimulator = () => {
  const [sex, setSex] = useState<Sex>("F");
  const [tempo, setTempo] = useState(20);
  const [idade, setIdade] = useState(50);

  const tempoAlvo = sex === "F" ? 30 : 35;
  const idadeAlvo = sex === "F" ? 62 : 65;

  const faltaTempo = Math.max(0, tempoAlvo - tempo);
  const faltaIdade = Math.max(0, idadeAlvo - idade);

  const jaTemDireito = faltaTempo === 0 && faltaIdade === 0;

  const SexButton = ({ value, label }: { value: Sex; label: string }) => {
    const active = sex === value;
    return (
      <button
        type="button"
        onClick={() => setSex(value)}
        className="flex-1 transition-all font-mono uppercase"
        style={{
          padding: "14px 16px",
          fontSize: 11,
          letterSpacing: "0.18em",
          fontWeight: 700,
          backgroundColor: active ? "#d4b888" : "transparent",
          color: active ? "#14110e" : "#f4ede0",
          border: active ? "1px solid #d4b888" : "1px solid rgba(184,153,104,0.18)",
          borderRadius: 2,
        }}
      >
        {label}
      </button>
    );
  };

  return (
    <section style={{ backgroundColor: "#1f1a15", padding: "120px 24px" }}>
      <div className="mx-auto" style={{ maxWidth: 1320 }}>
        <div className="grid grid-cols-1 lg:grid-cols-2" style={{ gap: 80 }}>
          {/* LEFT */}
          <div>
            <div
              className="font-mono uppercase"
              style={{ fontSize: 11, letterSpacing: "0.32em", color: "#d4b888", marginBottom: 24 }}
            >
              Capítulo V — Simulador
            </div>
            <h2
              className="font-display"
              style={{
                fontSize: "clamp(40px, 6vw, 72px)",
                fontWeight: 400,
                lineHeight: 1.04,
                color: "#f4ede0",
                letterSpacing: "-0.01em",
              }}
            >
              Quanto falta para a sua{" "}
              <em style={{ fontStyle: "italic", color: "#d4b888" }}>aposentadoria</em>?
            </h2>
            <p
              className="font-editorial italic"
              style={{ fontSize: 19, lineHeight: 1.55, color: "#b8b1a9", marginTop: 28, textAlign: "justify" }}
            >
              Uma estimativa preliminar pelas regras gerais pós-EC 103/2019. Não substitui a análise individual do CNIS, mas ajuda você a entender o terreno antes da consulta.
            </p>
            <div
              className="font-mono uppercase"
              style={{ fontSize: 10, letterSpacing: "0.2em", color: "#87807a", marginTop: 32, lineHeight: 1.6 }}
            >
              ⚠ Resultado meramente indicativo — cada caso depende de regras de transição, períodos especiais e CNIS completo.
            </div>
          </div>

          {/* RIGHT — Form */}
          <div
            style={{
              backgroundColor: "#14110e",
              border: "1px solid rgba(184,153,104,0.18)",
              padding: 40,
              borderRadius: 4,
            }}
          >
            {/* Sex toggle */}
            <div style={{ marginBottom: 32 }}>
              <div
                className="font-mono uppercase"
                style={{ fontSize: 10, letterSpacing: "0.22em", color: "#b8b1a9", marginBottom: 12 }}
              >
                Sexo
              </div>
              <div className="flex" style={{ gap: 8 }}>
                <SexButton value="F" label="Feminino" />
                <SexButton value="M" label="Masculino" />
              </div>
            </div>

            {/* Tempo slider */}
            <SliderField
              label="Tempo de contribuição"
              value={tempo}
              min={0}
              max={45}
              suffix="anos"
              onChange={setTempo}
            />

            {/* Idade slider */}
            <SliderField
              label="Idade atual"
              value={idade}
              min={18}
              max={80}
              suffix="anos"
              onChange={setIdade}
            />

            {/* Results */}
            <div className="grid grid-cols-2" style={{ gap: 24, marginTop: 32 }}>
              <ResultCell label="Falta · Tempo" value={faltaTempo} />
              <ResultCell label="Falta · Idade" value={faltaIdade} />
            </div>

            {/* Final message */}
            <div
              className="font-editorial italic"
              style={{
                marginTop: 28,
                padding: "20px 22px",
                fontSize: 16,
                lineHeight: 1.5,
                color: "#f4ede0",
                backgroundColor: jaTemDireito ? "rgba(212,184,136,0.18)" : "#1f1a15",
                border: jaTemDireito ? "1px solid #d4b888" : "1px solid rgba(184,153,104,0.18)",
                borderRadius: 2,
              }}
            >
              {jaTemDireito
                ? "Você já tem direito — fale com um sócio para análise completa do seu CNIS."
                : "Em transição — fale com um sócio para análise completa do seu CNIS."}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const SliderField = ({
  label,
  value,
  min,
  max,
  suffix,
  onChange,
}: {
  label: string;
  value: number;
  min: number;
  max: number;
  suffix: string;
  onChange: (v: number) => void;
}) => (
  <div style={{ marginBottom: 28 }}>
    <div className="flex items-baseline justify-between" style={{ marginBottom: 12 }}>
      <span
        className="font-mono uppercase"
        style={{ fontSize: 10, letterSpacing: "0.22em", color: "#b8b1a9" }}
      >
        {label}
      </span>
      <span className="font-display italic" style={{ fontSize: 22, color: "#d4b888" }}>
        {value} <span style={{ fontSize: 12, color: "#b8b1a9", fontStyle: "normal" }}>{suffix}</span>
      </span>
    </div>
    <input
      type="range"
      min={min}
      max={max}
      value={value}
      onChange={(e) => onChange(Number(e.target.value))}
      className="w-full"
      style={{ accentColor: "#d4b888" }}
    />
  </div>
);

const ResultCell = ({ label, value }: { label: string; value: number }) => (
  <div
    style={{
      borderTop: "1px solid rgba(184,153,104,0.18)",
      paddingTop: 18,
    }}
  >
    <div
      className="font-mono uppercase"
      style={{ fontSize: 10, letterSpacing: "0.22em", color: "#b8b1a9", marginBottom: 10 }}
    >
      {label}
    </div>
    <div className="font-display italic" style={{ fontSize: 48, color: "#d4b888", lineHeight: 1 }}>
      {value}
      <span
        className="font-body"
        style={{ fontSize: 14, color: "#b8b1a9", fontStyle: "normal", marginLeft: 8 }}
      >
        anos
      </span>
    </div>
  </div>
);

export default AposentadoriaSimulator;