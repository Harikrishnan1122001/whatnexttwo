import { FaWhatsapp, FaPhoneAlt } from "react-icons/fa";
import { buildWhatsAppLink, buildCallLink } from "../data/config";

export default function FloatingContact() {
  return (
    <div className="float-contact">
      <a
        className="float-btn float-btn--call"
        href={buildCallLink()}
        aria-label="Call What Next"
      >
        <FaPhoneAlt />
      </a>
      <a
        className="float-btn float-btn--whatsapp"
        href={buildWhatsAppLink()}
        target="_blank"
        rel="noreferrer"
        aria-label="Chat with What Next on WhatsApp"
      >
        <FaWhatsapp />
      </a>
    </div>
  );
}
