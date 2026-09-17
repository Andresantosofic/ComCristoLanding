import { useEffect, useState } from 'react'
import './hero.css'

import telaHome from '../../assets/tela-home.jpg'
import telaBiblia from '../../assets/tela-biblia.jpg'
import telaFeed from '../../assets/tela-feed.jpg'
import telaDevocional from '../../assets/tela-devocional.jpg'
import telaWallpapers from '../../assets/tela-wallpapers.jpg'

const screenshots = [
  telaHome,
  telaBiblia,
  telaFeed,
  telaDevocional,
  telaWallpapers,
]

function Hero() {
  const [currentScreenshot, setCurrentScreenshot] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentScreenshot((current) =>
        (current + 1) % screenshots.length
      )
    }, 3500)

    return () => clearInterval(interval)
  }, [])

  return (
    <section className="hero">
      <div className="hero-container">

        <div className="hero-content">

          <h1>
            Silencie o barulho.
            <br />
            <span>Ouça a Palavra.</span>
          </h1>

          <p className="hero-description">
            Menos distrações. Mais presença. Encontre no Com Cristo um momento
            diário para se conectar com Deus, refletir e fortalecer sua fé.
          </p>

          <div className="hero-actions">

            <a
              href="https://play.google.com/store/apps/details?id=com.comcristo.app"
              className="hero-button hero-button-primary"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                className="hero-button-icon hero-google-play-icon"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  d="M3.4 2.8c-.4.4-.6 1-.6 1.8v14.8c0 .8.2 1.4.6 1.8L11.8 12 3.4 2.8Z"
                  fill="currentColor"
                />

                <path
                  d="M13 13.2 4.5 22c.5.2 1.1.1 1.8-.3l10-5.7-3.3-2.8Z"
                  fill="currentColor"
                />

                <path
                  d="M13 10.8 4.5 2c.5-.2 1.1-.1 1.8.3l10 5.7-3.3 2.8Z"
                  fill="currentColor"
                />

                <path
                  d="m19.4 10.4-3.1-1.8-3.7 3.4 3.7 3.4 3.1-1.8c1-.6 1-2.6 0-3.2Z"
                  fill="currentColor"
                />
              </svg>

              <span>Baixar grátis no Google Play</span>
            </a>

            <a
              href="https://comcristoweb.pages.dev/"
              className="hero-button hero-button-secondary"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                className="hero-button-icon"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  d="M16.7 12.7c0-2.2 1.8-3.3 1.9-3.4-1-1.5-2.6-1.7-3.2-1.7-1.3-.1-2.5.8-3.1.8-.7 0-1.7-.8-2.8-.8-1.4 0-2.7.8-3.4 2.1-1.5 2.6-.4 6.5 1.1 8.6.7 1 1.5 2.1 2.6 2.1 1 0 1.5-.7 2.8-.7 1.3 0 1.7.7 2.8.7 1.2 0 1.9-1 2.6-2 .8-1.1 1.1-2.2 1.1-2.3-.1 0-2.4-.9-2.4-3.4Z"
                  fill="currentColor"
                />

                <path
                  d="M14.7 6.3c.6-.7 1-1.7.9-2.7-.9 0-2 .6-2.6 1.3-.6.7-1 1.6-.9 2.6 1 .1 2-.5 2.6-1.2Z"
                  fill="currentColor"
                />
              </svg>

              <span>Instalar no IOS</span>
            </a>

          </div>

          <div className="hero-trust">
            <span>✦</span>
            Um momento com Deus, todos os dias.
          </div>

        </div>

        <div className="hero-visual">

          <div className="hero-glow"></div>

          <div className="hero-phone">

            <img
              key={currentScreenshot}
              src={screenshots[currentScreenshot]}
              alt="Tela do aplicativo Com Cristo"
              className="hero-screenshot"
            />

          </div>

        </div>

      </div>
    </section>
  )
}

export default Hero