import { SITE } from '../config.js'

export default function Navbar() {
  return (
    <header className="navbar">
      <a className="navbar__brand" href="#top">
        <img src="/logo.png" alt={SITE.name} className="navbar__logo" />
      </a>
      <nav className="navbar__links">
        <a href="#courses">Courses</a>
        <a href="#about">Why us</a>
        <a href="#contact">Contact</a>
      </nav>
      <a href="#courses" className="navbar__cta">
        Start learning
      </a>
    </header>
  )
}
