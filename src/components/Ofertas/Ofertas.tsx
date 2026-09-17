import { useState } from 'react'
import './ofertas.css'

function Ofertas() {
  const [pixCopiado, setPixCopiado] = useState(false)

  const chavePix = 'comcristoapp@gmail.com'

  const copiarPix = async () => {
    try {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(chavePix)
      } else {
        const textarea = document.createElement('textarea')

        textarea.value = chavePix

        textarea.style.position = 'fixed'
        textarea.style.left = '-9999px'
        textarea.style.top = '0'
        textarea.style.opacity = '0'

        document.body.appendChild(textarea)

        textarea.focus()
        textarea.select()
        textarea.setSelectionRange(0, textarea.value.length)

        const sucesso = document.execCommand('copy')

        document.body.removeChild(textarea)

        if (!sucesso) {
          throw new Error('Não foi possível copiar a chave Pix.')
        }
      }

      setPixCopiado(true)

      setTimeout(() => {
        setPixCopiado(false)
      }, 2500)
    } catch (error) {
      console.error('Erro ao copiar chave Pix:', error)

      alert(
        `Não foi possível copiar automaticamente.\n\nChave Pix:\n${chavePix}`
      )
    }
  }

  return (
    <section className="ofertas" id="ofertas">
      <div className="ofertas-container">

        <div className="ofertas-conteudo">
          <h2>
            Apoie nosso projeto e missão.
          </h2>

          <p>
            O Com Cristo existe para edificar vidas, levar a Palavra de Deus e
            fortalecer a fé diariamente. Se o aplicativo tem melhorado seus
            dias e te edificado cada vez mais, considere fazer um gesto de
            generosidade. Sua oferta ajuda a manter o app, alcançar mais
            pessoas e seguir com nosso projeto de caridade.
          </p>
        </div>

        <div className="ofertas-versiculo">
          <blockquote>
            “Cada um dê conforme determinou em seu coração,
            não com pesar ou por obrigação, pois Deus ama quem
            dá com alegria.”
          </blockquote>

          <span>
            — 2 Coríntios 9:7
          </span>
        </div>

        <div className="ofertas-card">

          {/* PIX */}

          <button
            type="button"
            className="oferta-botao"
            onClick={copiarPix}
          >
            <span className="oferta-icone">
              <svg
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  d="M7.5 7.5h3.2a3.3 3.3 0 0 1 0 6.6H9.2a3.3 3.3 0 0 1 0-6.6h1.1"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                />

                <path
                  d="M16.5 16.5h-3.2a3.3 3.3 0 0 1 0-6.6h1.5a3.3 3.3 0 0 1 0 6.6h-1.1"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                />
              </svg>
            </span>

            <span className="oferta-texto">
              <strong>
                {pixCopiado
                  ? 'Chave Pix copiada!'
                  : 'Doar com Pix'}
              </strong>

              <small>
                {pixCopiado
                  ? chavePix
                  : 'Toque para copiar a chave Pix'}
              </small>
            </span>
          </button>

          {/* CARTÃO */}

          <a
            href="https://link.mercadopago.com.br/andresantosdsn"
            className="oferta-botao"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="oferta-icone">
              <svg
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <rect
                  x="3"
                  y="6"
                  width="18"
                  height="12"
                  rx="2"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                />

                <path
                  d="M3 10h18"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                />
              </svg>
            </span>

            <span className="oferta-texto">
              <strong>
                Doar com cartão
              </strong>

              <small>
                Crédito ou débito, via Mercado Pago
              </small>
            </span>
          </a>

          {/* SEGURANÇA */}

          <div className="oferta-seguranca">
            <svg
              className="oferta-seguranca-icone"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                d="M12 3 5 6v5c0 4.5 2.9 8.5 7 10 4.1-1.5 7-5.5 7-10V6l-7-3Z"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinejoin="round"
              />

              <path
                d="m9 12 2 2 4-4"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>

            <p>
              Pagamentos com cartão são processados com segurança pelo Mercado Pago.
            </p>
          </div>

        </div>

      </div>
    </section>
  )
}

export default Ofertas