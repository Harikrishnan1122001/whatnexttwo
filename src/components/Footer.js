import { BRAND, PHONE_NUMBER } from "../data/config";
import logo from "../assets/logo.png";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="wrap">
        <div className="footer__row">
          <img src={logo} alt={BRAND.name} className="footer__logo" />
          <div className="footer__meta">
            <span>{BRAND.city}</span>
            <span>{PHONE_NUMBER}</span>
            <span>{BRAND.email}</span>
            <span>Classes live on Google Meet</span>
          </div>
        </div>
        <div className="footer__bottom">
          © {year} {BRAND.name}. All courses conducted live online — enquire on WhatsApp or by phone.
        </div>
      </div>
    </footer>
  );
}
