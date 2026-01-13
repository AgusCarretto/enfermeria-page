import Hero from "./components/hero"
import Services from "./components/services"
import About from "./components/About"
import Contact from "./components/Contact"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"

function App() {
  return (
    <main className="min-h-screen bg-white pt-5">
      <Navbar/>
      <Hero />
      <Services/>
      <About /> 
      <Contact /> 
      <Footer/>
    </main>
  )
}

export default App