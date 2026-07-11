// ─────────────────────────────────────────────────────────────
// EDIT THESE VALUES — everything on the site reads from here.
// ─────────────────────────────────────────────────────────────

// WhatsApp number in international format, digits only, NO "+" and NO spaces.
// Example: 91 (India code) + 10-digit number => "919876543210"
export const WHATSAPP_NUMBER = "919876543210";

// Phone number used for the "Call Now" button (tel: link). Keep the "+".
export const PHONE_NUMBER = "+91 98765 43210";

export const BRAND = {
  name: "What Next",
  tagline: "Live online classes. One platform. Google Meet only.",
  email: "hello@whatnext.in",
  city: "Madurai, Tamil Nadu",
};

// Default message pre-filled when someone taps the floating WhatsApp button.
export const DEFAULT_WHATSAPP_MESSAGE =
  "Hi What Next! I'd like to know more about your live online classes.";

export function buildWhatsAppLink(message) {
  const text = encodeURIComponent(message || DEFAULT_WHATSAPP_MESSAGE);
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${text}`;
}

export function buildCallLink() {
  return `tel:${PHONE_NUMBER.replace(/\s/g, "")}`;
}
