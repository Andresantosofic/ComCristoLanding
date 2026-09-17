import './recursos-rapidos.css'

function RecursosRapidos() {
  return (
    <section className="recursos-rapidos">
      <div className="recursos-rapidos-container">

        <div className="recurso-rapido">
          <div className="recurso-rapido-icon">♡</div>
          <div>
            <h3>Favoritos</h3>
            <p>Guarde seus conteúdos favoritos para acessar quando quiser.</p>
          </div>
        </div>

        <div className="recurso-rapido">
          <div className="recurso-rapido-icon">◷</div>
          <div>
            <h3>Lembretes</h3>
            <p>Tenha um lembrete para não deixar seu momento com Deus de lado.</p>
          </div>
        </div>

        <div className="recurso-rapido">
          <div className="recurso-rapido-icon">♡</div>
          <div>
            <h3>Como está seu coração?</h3>
            <p>Registre como você está se sentindo e acompanhe sua caminhada.</p>
          </div>
        </div>

        <div className="recurso-rapido">
          <div className="recurso-rapido-icon">✓</div>
          <div>
            <h3>Sequência de dias</h3>
            <p>Construa o hábito de estar com Deus todos os dias.</p>
          </div>
        </div>

      </div>
    </section>
  )
}

export default RecursosRapidos