import { useState } from 'react'
import './duvidas.css'

type Duvida = {
  pergunta: string
  resposta: string
}

const duvidas: Duvida[] = [
  {
    pergunta: 'O app também é para iniciantes?',
    resposta:
      'Sim. Guiamos você com passos simples, versículos curtos e reflexões diretas — perfeito para quem está começando ou recomeçando.',
  },
  {
    pergunta: 'Tem notificações diárias?',
    resposta:
      'Sim. Enviamos um lembrete gentil todas as manhãs para que você nunca perca o seu devocional do dia.',
  },
  {
    pergunta: 'Como funciona a Bíblia no app?',
    resposta:
      'Leitura completa com versículos numerados, navegação por capítulo, anotações, marcação e salvamento de versículos.',
  },
  {
    pergunta: 'O app contém anúncios chatos?',
    resposta:
      'Não, o Com Cristo não contém anúncios chatos, justamente para que seja uma experiência simples e edificadora.',
  },
  {
    pergunta: 'Está disponíel para quais plataformas?',
    resposta:
      'O Com Cristo está disponível para Android, e para IOS.',
  },
]

function Duvidas() {
  const [aberta, setAberta] = useState<number | null>(null)

  const alternarDuvida = (index: number) => {
    setAberta((atual) => (atual === index ? null : index))
  }

  return (
    <section className="duvidas" id="duvidas">
      <div className="duvidas-container">

        <div className="duvidas-header">
          <h2>Dúvidas frequentes</h2>

          <p>
            Tudo o que você precisa saber antes de começar.
          </p>
        </div>

        <div className="duvidas-lista">
          {duvidas.map((duvida, index) => {
            const estaAberta = aberta === index

            return (
              <div
                className={`duvida ${estaAberta ? 'duvida-aberta' : ''}`}
                key={duvida.pergunta}
              >
                <button
                  type="button"
                  className="duvida-pergunta"
                  onClick={() => alternarDuvida(index)}
                  aria-expanded={estaAberta}
                >
                  <span>{duvida.pergunta}</span>

                  <span
                    className="duvida-icone"
                    aria-hidden="true"
                  >
                    {estaAberta ? '−' : '+'}
                  </span>
                </button>

                <div className="duvida-resposta">
                  <div className="duvida-resposta-conteudo">
                    <p>{duvida.resposta}</p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}

export default Duvidas