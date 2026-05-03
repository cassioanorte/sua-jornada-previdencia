import { useState, FormEvent } from "react";

const benefitOptions = [
  "Aposentadoria",
  "Auxílio-doença/invalidez",
  "Auxílio-acidente",
  "BPC/LOAS",
  "Pensão por morte",
  "Salário-maternidade",
  "Revisão",
  "Não sei ainda",
];

const contactItems = [
  {
    label: "WhatsApp",
    value: "(54) 99987-0786",
    sub: "Resposta em ~2h úteis",
  },
  {
    label: "E-mail",
    value: "cassio@spiereanorte.adv.br",
    sub: "Para envio de documentos",
  },
  {
    label: "Gramado · RS",
    value: "R. Berna, 715 — Vila Suíça",
    sub: "Sede · CEP 95670-554",
  },
  {
    label: "Nova Petrópolis · RS",
    value: "Av. 15 de Novembro, 1924 · Sala 304",
    sub: "Centro · CEP 95150-000",
  },
];

const inputBase: React.CSSProperties = {
  width: "100%",
  background: "transparent",
  border: "none",
  borderBottom: "1px solid rgba(184,153,104,0.25)",
  color: "#f4ede0",
  fontFamily: '"Cormorant Garamond", Georgia, serif',
  fontSize: 17,
  padding: "10px 0 12px",
  outline: "none",
};

const labelStyle: React.CSSProperties = {
  display: "block",
  fontFamily: '"JetBrains Mono", monospace',
  fontSize: 9,
  letterSpacing: "0.24em",
  textTransform: "uppercase",
  color: "#b8b1a9",
  marginBottom: 6,
};

const ContatoSection = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    benefit: "",
    message: "",
  });

  const update = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm({ ...form, [k]: e.target.value });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.message.trim()) {
      window.open("https://wa.link/hdn70i", "_blank");
      return;
    }
    const text =
      `Olá! Meu nome é ${form.name}.\n\n` +
      (form.benefit ? `Tipo de benefício: ${form.benefit}\n` : "") +
      `\n${form.message}\n\n` +
      (form.email ? `E-mail: ${form.email}\n` : "") +
      (form.phone ? `Telefone: ${form.phone}` : "");
    const url = `https://wa.me/5554999870786?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank");
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
              Capítulo VII — Contato
            </div>
            <h2
              className="font-display"
              style={{
                fontSize: "clamp(40px, 6.4vw, 80px)",
                fontWeight: 400,
                lineHeight: 1.04,
                color: "#f4ede0",
                letterSpacing: "-0.01em",
              }}
            >
              A primeira consulta é{" "}
              <em style={{ fontStyle: "italic", color: "#d4b888" }}>conversa</em>, não{" "}
              <em style={{ fontStyle: "italic", color: "#d4b888" }}>contrato</em>.
            </h2>
            <p
              className="font-editorial italic"
              style={{
                fontSize: 20,
                lineHeight: 1.55,
                color: "#b8b1a9",
                maxWidth: 480,
                marginTop: 28,
                textAlign: "justify",
              }}
            >
              Em até 24 horas úteis, um dos sócios retorna com uma leitura honesta — viável,
              inviável ou dependente de mais informação.
            </p>

            <ul style={{ marginTop: 48 }}>
              {contactItems.map((item) => (
                <li
                  key={item.label}
                  className="grid grid-cols-1 sm:grid-cols-[150px_1fr]"
                  style={{
                    gap: 24,
                    paddingBottom: 16,
                    paddingTop: 16,
                    borderBottom: "1px solid rgba(184,153,104,0.18)",
                  }}
                >
                  <span
                    className="font-mono uppercase"
                    style={{ fontSize: 10, letterSpacing: "0.24em", color: "#d4b888", paddingTop: 6 }}
                  >
                    {item.label}
                  </span>
                  <span>
                    <span
                      className="font-display block"
                      style={{ fontSize: 22, color: "#f4ede0", lineHeight: 1.25 }}
                    >
                      {item.value}
                    </span>
                    <span style={{ fontSize: 13, color: "#87807a", marginTop: 4, display: "block" }}>
                      {item.sub}
                    </span>
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* RIGHT — Form */}
          <form
            onSubmit={handleSubmit}
            style={{
              backgroundColor: "#14110e",
              border: "1px solid rgba(184,153,104,0.18)",
              padding: 44,
              borderRadius: 4,
            }}
          >
            <div
              className="font-mono uppercase"
              style={{ fontSize: 10, letterSpacing: "0.28em", color: "#d4b888", marginBottom: 32 }}
            >
              Solicitar consulta
            </div>

            <div style={{ marginBottom: 24 }}>
              <label htmlFor="name" style={labelStyle}>Nome completo</label>
              <input id="name" type="text" required value={form.name} onChange={update("name")} style={inputBase} />
            </div>

            <div style={{ marginBottom: 24 }}>
              <label htmlFor="email" style={labelStyle}>E-mail</label>
              <input id="email" type="email" required value={form.email} onChange={update("email")} style={inputBase} />
            </div>

            <div style={{ marginBottom: 24 }}>
              <label htmlFor="phone" style={labelStyle}>Telefone / WhatsApp</label>
              <input id="phone" type="tel" required value={form.phone} onChange={update("phone")} style={inputBase} />
            </div>

            <div style={{ marginBottom: 24 }}>
              <label htmlFor="benefit" style={labelStyle}>Tipo de benefício</label>
              <select
                id="benefit"
                value={form.benefit}
                onChange={update("benefit")}
                style={{ ...inputBase, appearance: "none", cursor: "pointer" }}
              >
                <option value="" style={{ backgroundColor: "#14110e" }}>Selecione…</option>
                {benefitOptions.map((o) => (
                  <option key={o} value={o} style={{ backgroundColor: "#14110e", color: "#f4ede0" }}>
                    {o}
                  </option>
                ))}
              </select>
            </div>

            <div style={{ marginBottom: 32 }}>
              <label htmlFor="message" style={labelStyle}>Conte o que está acontecendo</label>
              <textarea
                id="message"
                required
                rows={4}
                value={form.message}
                onChange={update("message")}
                style={{
                  ...inputBase,
                  border: "1px solid rgba(184,153,104,0.25)",
                  padding: 14,
                  resize: "vertical",
                  borderRadius: 2,
                }}
              />
            </div>

            <button
              type="submit"
              className="w-full font-mono uppercase transition-opacity hover:opacity-90"
              style={{
                backgroundColor: "#d4b888",
                color: "#14110e",
                padding: "18px 24px",
                borderRadius: 999,
                fontSize: 11,
                letterSpacing: "0.18em",
                fontWeight: 700,
              }}
            >
              Enviar consulta →
            </button>

            <p
              style={{
                fontSize: 11,
                color: "#87807a",
                marginTop: 18,
                lineHeight: 1.55,
                textAlign: "justify",
              }}
            >
              Suas informações são confidenciais e protegidas pelo sigilo profissional (art. 34 EOAB).
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContatoSection;