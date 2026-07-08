import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import Courses from './components/Courses.jsx'
import About from './components/About.jsx'
import Footer from './components/Footer.jsx'
import RiseMeter from './components/RiseMeter.jsx'

export default function App() {
  return (
    <>
      <RiseMeter />
      <Navbar />
      <main>
        <Hero />
        <Courses />
        <About />
      </main>
      <Footer />
    </>
  )
}
