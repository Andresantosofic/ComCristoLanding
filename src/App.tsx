import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Pensamentos from './components/Pensamentos/Pensamentos'
import Recursos from './components/Recursos/Recursos'
import DestaqueVersiculo from './components/DestaqueVersiculo/DestaqueVersiculo'
import Ofertas from './components/Ofertas/Ofertas'
import Sobre from './components/Sobre/Sobre'
import Duvidas from './components/Duvidas/Duvidas'
import CTA from './components/CTA/CTA'
import Footer from './components/Footer/Footer'

function App() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <Pensamentos />
        <Recursos />
        <DestaqueVersiculo />
        <Ofertas />
        <Sobre />
        <Duvidas />
        <CTA />
      </main>

      <Footer />
    </>
  )
}

export default App