import { SITE } from '../config.js'
import { buildWhatsAppLink } from '../utils/whatsapp.js'
import Reveal from './Reveal.jsx'

export default function Footer() {
  const generalLink = buildWhatsAppLink('right')

  return (
    <footer className="footer" id="contact">
      <Reveal as="div" className="footer__cta">
        <h2>Not sure which course fits?</h2>
        <p>Tell us where you're starting from — we'll point you at one track, not four.</p>
        <a
          className="btn btn--whatsapp btn--large"
          href={generalLink}
          target="_blank"
          rel="noopener noreferrer"
        >
          Chat with What Next
        </a>
      </Reveal>

      <div className="footer__base">
        <img src="/logo.png" alt={SITE.name} className="footer__logo" />
        <p>
          © {new Date().getFullYear()} {SITE.name}. {SITE.tagline}.
        </p>
      </div>
    </footer>
  )
}
