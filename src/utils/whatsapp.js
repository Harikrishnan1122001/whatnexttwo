import { WHATSAPP_NUMBER, SITE } from '../config.js'

/**
 * Builds a wa.me deep link that opens WhatsApp with a prefilled message.
 * Works on desktop (opens WhatsApp Web) and mobile (opens the app).
 * @param {string} courseName - the course the visitor clicked on
 * @returns {string} the WhatsApp URL
 */
export function buildWhatsAppLink(courseName) {
  const message = `Hi ${SITE.name}, I am interested in the ${courseName} course.`
  const encoded = encodeURIComponent(message)
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encoded}`
}

/**
 * Opens WhatsApp in a new tab with a prefilled interest message for a course.
 * @param {string} courseName
 */
export function openWhatsAppForCourse(courseName) {
  const url = buildWhatsAppLink(courseName)
  window.open(url, '_blank', 'noopener,noreferrer')
}
