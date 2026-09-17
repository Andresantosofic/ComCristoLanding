import './navbar.css'
import logoComCristo from '../../assets/logo-com-cristo.png'

function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar-container">

        <a href="#" className="navbar-logo">
          <img src={logoComCristo} alt="Com Cristo" />
        </a>

      </div>
    </header>
  )
}

export default Navbar