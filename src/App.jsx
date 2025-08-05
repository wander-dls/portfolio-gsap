import Hero from "./sections/Hero"
import Navbar from "./sections/Navbar"
import ServicesSummary from "./sections/ServicesSummary"
import Services from "./sections/Services"
import ReactLenis from "lenis/react"
import About from "./sections/About"

const App = () =>  {
  return (
    <ReactLenis root className="relative w-screen min-h-screen overflow-x-auto">
      <Navbar />
      <Hero />
      <ServicesSummary />
      <Services />
      <About />
    </ReactLenis>
  )
}
export default App