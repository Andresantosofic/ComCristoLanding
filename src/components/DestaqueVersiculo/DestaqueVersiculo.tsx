import './destaque-versiculo.css'

function DestaqueVersiculo() {
  return (
    <section className="destaque-versiculo">
      <div className="destaque-versiculo-container">
        <span className="destaque-versiculo-label">
          UMA PALAVRA PARA O SEU DIA
        </span>

        <blockquote>
          “Eu sou o caminho, a verdade e a vida. Ninguém vem ao Pai senão por
          mim.”
        </blockquote>

        <p className="destaque-versiculo-referencia">
          João 14:6
        </p>

        <p className="destaque-versiculo-texto">
          Em meio a tantas vozes e caminhos, Jesus continua sendo a direção
          segura. Todos os dias, encontre na Palavra um momento para parar,
          refletir e se aproximar de Deus.
        </p>
      </div>
    </section>
  )
}

export default DestaqueVersiculo