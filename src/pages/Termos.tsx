import { useEffect } from "react";

const Termos = () => {
  useEffect(() => {
    document.title = "Termos de Uso | Spier & Anorte Advocacia";
  }, []);

  return (
    <div className="min-h-screen bg-white py-16 px-4">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Termos de Uso</h1>
        <p className="text-sm text-gray-500 mb-8">Última atualização: maio de 2026</p>

        <section className="prose prose-gray max-w-none space-y-6 text-gray-700 leading-relaxed">
          <p>
            Ao utilizar os serviços digitais do escritório <strong>Spier & Anorte Advocacia</strong>,
            incluindo o site <strong>spiereanorte.adv.br</strong> e os conteúdos publicados em
            plataformas de mídia social, você concorda com os termos descritos abaixo.
          </p>

          <h2 className="text-xl font-semibold text-gray-800 mt-6">1. Natureza do conteúdo</h2>
          <p>
            O conteúdo publicado pelo escritório Spier & Anorte tem caráter exclusivamente
            informativo e educacional, em conformidade com o Provimento 205/2021 do Conselho
            Federal da OAB. Nenhum conteúdo publicado constitui consulta jurídica individualizada
            ou garantia de resultado.
          </p>

          <h2 className="text-xl font-semibold text-gray-800 mt-6">2. Uso da plataforma TikTok</h2>
          <p>
            O escritório Spier & Anorte utiliza a API do TikTok exclusivamente para publicação de
            conteúdo educativo sobre direito previdenciário. Nenhum dado pessoal de terceiros é
            coletado, armazenado ou compartilhado por meio desta integração. Os vídeos publicados
            são de autoria do escritório e visam informar a população sobre benefícios do INSS e
            direitos previdenciários.
          </p>

          <h2 className="text-xl font-semibold text-gray-800 mt-6">3. Propriedade intelectual</h2>
          <p>
            Todo o conteúdo disponibilizado — textos, vídeos, imagens e roteiros — é de propriedade
            exclusiva do escritório Spier & Anorte. É vedada a reprodução total ou parcial sem
            autorização prévia e por escrito.
          </p>

          <h2 className="text-xl font-semibold text-gray-800 mt-6">4. Limitação de responsabilidade</h2>
          <p>
            O escritório não se responsabiliza por decisões tomadas com base exclusivamente no
            conteúdo publicado nas redes sociais, sem consulta jurídica individualizada. Para
            análise do seu caso específico, entre em contato pelo WhatsApp: (54) 99987-0786.
          </p>

          <h2 className="text-xl font-semibold text-gray-800 mt-6">5. Contato</h2>
          <p>
            Dúvidas sobre estes termos podem ser enviadas para:{" "}
            <a href="mailto:contato@spiereanorte.adv.br" className="text-amber-700 underline">
              contato@spiereanorte.adv.br
            </a>
          </p>
        </section>
      </div>
    </div>
  );
};

export default Termos;
