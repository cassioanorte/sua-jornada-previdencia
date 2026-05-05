import { useEffect } from "react";

const Privacidade = () => {
  useEffect(() => {
    document.title = "Política de Privacidade | Spier & Anorte Advocacia";
  }, []);

  return (
    <div className="min-h-screen bg-white py-16 px-4">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Política de Privacidade</h1>
        <p className="text-sm text-gray-500 mb-8">Última atualização: maio de 2026</p>

        <section className="prose prose-gray max-w-none space-y-6 text-gray-700 leading-relaxed">
          <p>
            O escritório <strong>Spier & Anorte Advocacia</strong> (CNPJ: a informar) respeita sua
            privacidade e está comprometido com a proteção dos seus dados pessoais, em conformidade
            com a Lei Geral de Proteção de Dados (Lei 13.709/2018 — LGPD).
          </p>

          <h2 className="text-xl font-semibold text-gray-800 mt-6">1. Dados coletados</h2>
          <p>
            Ao entrar em contato pelo WhatsApp, formulário do site ou e-mail, coletamos apenas os
            dados fornecidos voluntariamente por você: nome, telefone e descrição da situação.
            Esses dados são utilizados exclusivamente para retorno de contato e análise do caso.
          </p>

          <h2 className="text-xl font-semibold text-gray-800 mt-6">2. Integração com TikTok</h2>
          <p>
            Nossa integração com a plataforma TikTok é utilizada exclusivamente para publicação de
            conteúdo educativo de autoria do escritório. Não coletamos, processamos nem armazenamos
            dados pessoais de usuários do TikTok. A integração utiliza somente as permissões
            necessárias para publicação de vídeos na conta oficial do escritório
            (<strong>video.upload</strong> e <strong>user.info.basic</strong>).
          </p>

          <h2 className="text-xl font-semibold text-gray-800 mt-6">3. Compartilhamento de dados</h2>
          <p>
            Não vendemos, alugamos nem compartilhamos seus dados pessoais com terceiros para fins
            comerciais. Dados podem ser compartilhados apenas quando exigido por lei ou por
            determinação judicial.
          </p>

          <h2 className="text-xl font-semibold text-gray-800 mt-6">4. Retenção de dados</h2>
          <p>
            Os dados são mantidos pelo tempo necessário para a prestação do serviço jurídico ou
            pelo prazo legal aplicável. Você pode solicitar a exclusão dos seus dados a qualquer
            momento pelo e-mail abaixo.
          </p>

          <h2 className="text-xl font-semibold text-gray-800 mt-6">5. Seus direitos (LGPD)</h2>
          <p>
            Você tem direito a acessar, corrigir, portar e solicitar a exclusão dos seus dados
            pessoais. Para exercer esses direitos, entre em contato:
          </p>
          <ul className="list-disc pl-5 mt-2 space-y-1">
            <li>
              E-mail:{" "}
              <a href="mailto:contato@spiereanorte.adv.br" className="text-amber-700 underline">
                contato@spiereanorte.adv.br
              </a>
            </li>
            <li>WhatsApp: (54) 99987-0786</li>
          </ul>

          <h2 className="text-xl font-semibold text-gray-800 mt-6">6. Cookies</h2>
          <p>
            O site utiliza apenas cookies técnicos essenciais para funcionamento. Não utilizamos
            cookies de rastreamento ou publicidade comportamental.
          </p>

          <h2 className="text-xl font-semibold text-gray-800 mt-6">7. Alterações nesta política</h2>
          <p>
            Reservamo-nos o direito de atualizar esta política a qualquer momento. Alterações
            relevantes serão comunicadas pelo site ou pelo WhatsApp.
          </p>
        </section>
      </div>
    </div>
  );
};

export default Privacidade;
