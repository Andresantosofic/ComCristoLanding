import './footer.css'

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-brand">
          <h2>Com Cristo</h2>

          <p>
            Um momento com Deus, todos os dias.
          </p>
        </div>

        <div className="footer-links">

          <div className="footer-column">
            <h3>Com Cristo</h3>

            <a href="#recursos">
              Recursos
            </a>

            <a href="#sobre">
              Sobre
            </a>
          </div>

          <div className="footer-column">
            <h3>Informações</h3>

            <a
              href="https://sites.google.com/view/comcristoapp/pol%C3%ADtica-de-privacidade"
              target="_blank"
              rel="noopener noreferrer"
            >
              Política de Privacidade
            </a>

            <a
              href="https://sites.google.com/view/comcristoapp/termos-de-uso?authuser=0"
              target="_blank"
              rel="noopener noreferrer"
            >
              Termos de Uso
            </a>

            <a href="mailto:contato.andresantosapps@gmail.com">
              Contato
            </a>
          </div>

        </div>
      </div>

      <div className="footer-bottom">
        <p>
          © 2026 Com Cristo. Todos os direitos reservados.
        </p>

        <p>
          Desenvolvido por André Santos Nunes
        </p>
      </div>
    </footer>
  )
}

export default Footer