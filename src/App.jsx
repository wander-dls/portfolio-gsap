import Hero from "./sections/Hero"
import Navbar from "./sections/Navbar"
import ServicesSummary from "./sections/ServicesSummary"
import Services from "./sections/Services"
import ReactLenis from "lenis/react"
import About from "./sections/About"
import Work from "./sections/Work"
import ContactSummary from "./sections/ContactSummary"

const App = () =>  {
  return (
    <ReactLenis root className="relative w-screen min-h-screen overflow-x-auto">
      <Navbar />
      <Hero />
      <ServicesSummary />
      <Services />
      <About />
      <Work />
      <ContactSummary />
    </ReactLenis>
  )
}
export default App