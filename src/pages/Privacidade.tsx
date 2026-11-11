import { Link } from "react-router-dom";
import { useSeo } from "@/lib/seo";
import { openCookiePreferences } from "@/components/CookieBanner";

const H2 = ({ children }: { children: React.ReactNode }) => (
  <h2 className="text-xl font-semibold text-gray-800 mt-6">{children}</h2>
);

const Privacidade = () => {
  useSeo(
    "Política de Privacidade | Spier & Anorte",
    "Como a Spier & Anorte Sociedade de Advogados trata os dados pessoais recebidos pelo site, WhatsApp e e-mail, inclusive dados de saúde, em conformidade com a LGPD (Lei 13.709/2018)."
  );

  return (
    <div className="min-h-screen bg-white py-16 px-4">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Política de Privacidade</h1>
        <p className="text-sm text-gray-500 mb-8">Última atualização: 11 de novembro de 2026</p>

        <section className="prose prose-gray max-w-none space-y-6 text-gray-700 leading-relaxed">
          <p>
            O escritório <strong>Spier & Anorte Sociedade de Advogados</strong> (CNPJ 18.382.306/0001-15,
            registro OAB/RS 4.809), com sede na Avenida 15 de Novembro, 1924, Sala 304, Centro, Nova
            Petrópolis/RS, e unidade na Rua Berna, 715, Vila Suíça, Gramado/RS, é o controlador dos dados
            pessoais tratados neste site e nos nossos canais de atendimento, nos termos da Lei Geral de
            Proteção de Dados (Lei 13.709/2018, LGPD).
          </p>

          <H2>1. Dados que coletamos</H2>
          <ul className="list-disc pl-5 space-y-1">
            <li>
              <strong>Dados de contato</strong> que você informa no formulário, no WhatsApp ou por e-mail:
              nome, telefone, e-mail e o relato da sua situação.
            </li>
            <li>
              <strong>Dados de saúde</strong> (dado pessoal sensível, art. 5º, II, da LGPD), quando você conta
              sobre doença, acidente, sequela, gestação ou deficiência no relato ou nas respostas dos quizzes.
            </li>
            <li>
              <strong>Respostas dos quizzes</strong>: ficam apenas no seu navegador para mostrar o resultado e não
              são enviadas ao escritório, a menos que você mesmo as conte depois pelo WhatsApp.
            </li>
            <li>
              <strong>Dados de navegação</strong>, somente se você aceitar os cookies de medição: páginas
              visitadas, cliques nos botões de contato, tipo de dispositivo e região aproximada, de forma agregada.
            </li>
          </ul>

          <H2>2. Para que usamos e com qual base legal</H2>
          <ul className="list-disc pl-5 space-y-1">
            <li>
              <strong>Responder ao seu contato e analisar o seu caso</strong>: procedimentos preliminares a um
              contrato a pedido do titular (art. 7º, V) e, para os dados de saúde, o seu{" "}
              <strong>consentimento específico e destacado</strong> (art. 11, I), dado pela caixa de
              autorização dos formulários e quizzes.
            </li>
            <li>
              <strong>Prestar o serviço jurídico contratado</strong>: execução de contrato (art. 7º, V) e exercício
              regular de direitos em processo administrativo ou judicial (art. 7º, VI, e art. 11, II, "d").
            </li>
            <li>
              <strong>Cumprir obrigações legais e profissionais</strong>, inclusive as do Estatuto da Advocacia
              (art. 7º, II).
            </li>
            <li>
              <strong>Medir o uso do site</strong> (Google Analytics): somente com o seu consentimento no banner de
              cookies (art. 7º, I). Não enviamos ao Google Analytics seu nome, telefone, e-mail nem o conteúdo das
              suas mensagens.
            </li>
          </ul>
          <p>
            Não usamos seus dados para publicidade comportamental, não vendemos nem alugamos dados pessoais, e
            mantemos o sigilo profissional previsto no Estatuto da Advocacia.
          </p>

          <H2>3. WhatsApp</H2>
          <p>
            Ao enviar o formulário ou tocar em um botão de WhatsApp, a sua mensagem é aberta no aplicativo
            WhatsApp, serviço da <strong>WhatsApp LLC (grupo Meta Platforms)</strong>. A conversa passa a seguir
            também os termos e a política de privacidade do WhatsApp. Usamos o WhatsApp apenas para o atendimento
            do seu pedido. Se preferir, você pode falar conosco por telefone ou e-mail.
          </p>

          <H2>4. Cookies e Google Analytics (GA4)</H2>
          <p>
            O site usa armazenamento técnico essencial (por exemplo, para lembrar a sua escolha sobre cookies). O
            Google Analytics 4, serviço da <strong>Google LLC</strong>, só é carregado depois que você clica em
            "Aceitar" no banner de cookies. Se você clicar em "Recusar", ele não é carregado. Você pode mudar a sua
            escolha a qualquer momento em{" "}
            <button type="button" onClick={openCookiePreferences} className="text-amber-700 underline">
              Preferências de cookies
            </button>{" "}
            (também no rodapé do site).
          </p>

          <H2>5. Com quem os dados podem ser compartilhados</H2>
          <ul className="list-disc pl-5 space-y-1">
            <li>WhatsApp/Meta, como canal de comunicação escolhido por você.</li>
            <li>Google, no Google Analytics (somente com o seu aceite) e no Google Fonts, que entrega as fontes do site.</li>
            <li>GitHub (Microsoft), que hospeda as páginas do site.</li>
            <li>INSS, Poder Judiciário e demais órgãos públicos, quando necessário para o seu pedido ou processo.</li>
            <li>Autoridades, quando houver obrigação legal ou ordem judicial.</li>
          </ul>

          <H2>6. Transferência internacional</H2>
          <p>
            WhatsApp, Google e GitHub podem armazenar dados em servidores fora do Brasil, inclusive nos Estados
            Unidos. Essa transferência ocorre nos termos do art. 33 da LGPD, com base nas garantias contratuais
            desses fornecedores e, quando aplicável, no seu consentimento.
          </p>

          <H2>7. Por quanto tempo guardamos</H2>
          <p>
            Contatos que não viram contratação são mantidos pelo tempo necessário para responder e depois
            eliminados, salvo se você pedir para mantermos o contato. Dados de clientes são mantidos durante o
            atendimento e pelos prazos legais e prescricionais aplicáveis à atividade de advocacia.
          </p>

          <H2>8. Seus direitos</H2>
          <p>
            Você pode, a qualquer momento: confirmar se tratamos seus dados, acessá-los, corrigi-los, pedir a
            anonimização, o bloqueio ou a eliminação, pedir a portabilidade, saber com quem compartilhamos e{" "}
            <strong>revogar o consentimento</strong> (art. 18 da LGPD). Você também pode reclamar à Autoridade
            Nacional de Proteção de Dados (ANPD).
          </p>

          <H2>9. Contato e encarregado pelo tratamento de dados</H2>
          <p>
            <strong>Encarregado pelo tratamento de dados pessoais:</strong> Cassio Fraga Anorte, e-mail{" "}
            <a href="mailto:cassio@spiereanorte.adv.br" className="text-amber-700 underline">
              cassio@spiereanorte.adv.br
            </a>
            .
          </p>
          <p className="mt-2">Pedidos sobre os seus dados e o contato com o encarregado (art. 41 da LGPD) são recebidos por:</p>
          <ul className="list-disc pl-5 mt-2 space-y-1">
            <li>
              E-mail:{" "}
              <a href="mailto:cassio@spiereanorte.adv.br" className="text-amber-700 underline">
                cassio@spiereanorte.adv.br
              </a>
            </li>
            <li>WhatsApp: (54) 99987-0786</li>
            <li>Telefone: (54) 3286-7220</li>
          </ul>

          <H2>10. Redes sociais e TikTok</H2>
          <p>
            A integração do escritório com o TikTok serve apenas para publicar conteúdo educativo na conta oficial
            do escritório, com as permissões <strong>video.upload</strong> e <strong>user.info.basic</strong>. Não
            coletamos dados pessoais de usuários do TikTok por essa integração.
          </p>

          <H2>11. Alterações nesta política</H2>
          <p>
            Esta política pode ser atualizada. A data da última atualização fica no topo da página. Veja também os{" "}
            <Link to="/termos/" className="text-amber-700 underline">Termos de Uso</Link>.
          </p>
        </section>
        <p className="mt-10 text-sm">
          <Link to="/" className="text-amber-700 underline">Voltar ao início</Link>
        </p>
      </div>
    </div>
  );
};

export default Privacidade;
