import { Link } from "react-router-dom";

// Aviso de privacidade + consentimento específico (LGPD art. 7, I e art. 11, I).
// Usado em todo formulário ou quiz que coleta dado pessoal ou de saúde.
interface ConsentCheckboxProps {
  id: string;
  checked: boolean;
  onChange: (v: boolean) => void;
  tone?: "dark" | "light";
}

export const CONSENT_TEXT =
  "Concordo que a Spier & Anorte use os dados que eu informar, inclusive informações sobre a minha saúde, apenas para analisar e responder o meu pedido de atendimento, e que o contato aconteça pelo WhatsApp.";

const ConsentCheckbox = ({ id, checked, onChange, tone = "light" }: ConsentCheckboxProps) => {
  const dark = tone === "dark";
  const text = dark ? "#cfc6ba" : "hsl(var(--muted-foreground))";
  const link = dark ? "#d4b888" : "hsl(var(--accent))";
  return (
    <div style={{ marginTop: 4, marginBottom: 20 }}>
      <label
        htmlFor={id}
        style={{ display: "flex", gap: 10, alignItems: "flex-start", cursor: "pointer", fontSize: 13, lineHeight: 1.5, color: text, textAlign: "left" }}
      >
        <input
          id={id}
          type="checkbox"
          required
          checked={checked}
          onChange={(e) => onChange(e.target.checked)}
          style={{ marginTop: 3, width: 18, height: 18, flexShrink: 0, accentColor: "#d4b888" }}
        />
        <span>{CONSENT_TEXT}</span>
      </label>
      <p style={{ fontSize: 12, lineHeight: 1.5, color: text, marginTop: 8, textAlign: "left" }}>
        Usamos seus dados só para responder ao seu contato. Você pode pedir a exclusão a qualquer momento. Veja a{" "}
        <Link to="/privacidade/" style={{ color: link, textDecoration: "underline" }}>
          Política de Privacidade
        </Link>
        .
      </p>
    </div>
  );
};

export default ConsentCheckbox;
