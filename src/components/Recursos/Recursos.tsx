import './recursos.css'

import telaHome from '../../assets/tela-home.jpg'
import telaDevocional from '../../assets/tela-devocional.jpg'
import telaBiblia from '../../assets/tela-biblia.jpg'
import telaWallpapers from '../../assets/tela-wallpapers.jpg'
import telaFeed from '../../assets/tela-feed.jpg'

function Recursos() {
  return (
    <section className="recursos" id="recursos">
      <div className="recursos-container">

<div className="recursos-destaque">
  <h2>
    Tudo para sua caminhada com Cristo em <span>um só lugar.</span>
  </h2>
</div>

        {/* 1 — TELA INICIAL */}
        <div className="recurso-row">
          <div className="recurso-media">
            <div className="recurso-phone">
              <img
                src={telaHome}
                alt="Tela inicial do aplicativo Com Cristo"
              />
            </div>
          </div>

          <div className="recurso-content">
            <span className="recurso-tag">
              Tela inicial
            </span>

            <h2>
              Sua caminhada com Deus começa aqui.
            </h2>

            <p>
              Tenha acesso ao versículo do dia, devocional,
              Bíblia, sentimentos, ofertas e outros conteúdos
              para manter sua conexão com Deus durante o dia.
            </p>
          </div>
        </div>

        {/* 2 — DEVOCIONAL */}
        <div className="recurso-row recurso-row-reverse">
          <div className="recurso-media">
            <div className="recurso-phone">
              <img
                src={telaDevocional}
                alt="Tela de devocional diário do aplicativo Com Cristo"
              />
            </div>
          </div>

          <div className="recurso-content">
            <span className="recurso-tag">
              Devocional diário
            </span>

            <h2>
              Poucos minutos por dia para renovar sua fé.
            </h2>

            <p>
              Acompanhe sua sequência de dias, entenda mais sobre o tema se aprofundando no estudo, reflita sobre a palavra, e aplique o que aprendeu no seu dia a dia.
            </p>
          </div>
        </div>

        {/* 3 — BÍBLIA */}
        <div className="recurso-row">
          <div className="recurso-media">
            <div className="recurso-phone">
              <img
                src={telaBiblia}
                alt="Bíblia Sagrada completa no aplicativo Com Cristo"
              />
            </div>
          </div>

          <div className="recurso-content">
            <span className="recurso-tag">
              Bíblia Sagrada completa
            </span>

            <h2>
              Leia, grife e faça anotações direto no texto.
            </h2>

            <p>
              Navegue por todos os livros e capítulos, escolha
              entre versões disponíveis, ajuste o tamanho da
              fonte e transforme sua leitura em um estudo de
              verdade.
            </p>
          </div>
        </div>

        {/* 4 — PAPÉIS DE PAREDE */}
        <div className="recurso-row recurso-row-reverse">
          <div className="recurso-media">
            <div className="recurso-phone">
              <img
                src={telaWallpapers}
                alt="Galeria de papéis de parede cristãos do aplicativo Com Cristo"
              />
            </div>
          </div>

          <div className="recurso-content">
            <span className="recurso-tag">
              Papéis de parede cristãos
            </span>

            <h2>
              Leve uma palavra de fé para a tela do seu celular.
            </h2>

            <p>
              Uma galeria com novos papéis de parede e frases
              inspiradoras, atualizada com frequência, para
              lembrar você de Deus toda vez que olhar para o
              telefone.
            </p>
          </div>
        </div>

        {/* 5 — FEED */}
        <div className="recurso-row">
          <div className="recurso-media">
            <div className="recurso-phone">
              <img
                src={telaFeed}
                alt="Feed de conteúdo cristão do aplicativo Com Cristo"
              />
            </div>
          </div>

          <div className="recurso-content">
            <span className="recurso-tag">
              Feed de conteúdo cristão
            </span>

            <h2>
              Conteúdos sobre Cristo e o reino.
            </h2>

            <p>
              Acompanhe publicações com mensagens de fé,
              direto no seu feed dentro do app — pensadas para
              reconectar você com Deus mesmo quando o tempo é
              curto.
            </p>
          </div>
        </div>

      </div>
    </section>
  )
}

export default Recursos