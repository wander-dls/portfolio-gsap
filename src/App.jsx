import Navbar from "./sections/Navbar"

const App = () =>  {
  return (
    <div>
      <Navbar />
      <section id="home" className="min-h-screen bg-rose-500" />
      <section id="services" className="min-h-screen bg-green-500" />
    </div>
  )
}
export default App