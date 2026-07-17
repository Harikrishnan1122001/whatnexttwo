// Centralized contact / brand config — update these before deploying.
const config = {
  brandName: 'Rosewater & Sky',
  tagline: 'Wedding & Event Curation',
  phone: '+91 90000 00000',
  phoneRaw: '9100000000',       // digits only, used for tel: and whatsapp links
  whatsappNumber: '919100000000', // country code + number, no plus/spaces
  email: 'hello@rosewaterandsky.com',
  address: 'Madurai, Tamil Nadu, India',
  instagram: 'https://instagram.com/',
  facebook: 'https://facebook.com/',
  pinterest: 'https://pinterest.com/',
};

export const whatsappLink = (message) =>
  `https://wa.me/${config.whatsappNumber}?text=${encodeURIComponent(message)}`;

export default config;
