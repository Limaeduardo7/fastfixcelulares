export const GA_AW = 'AW-17219551112'
export const GA_GT = 'GT-M348M77X'

/** Dispara evento de conversão no Google Ads */
export function trackConversion(label = 'whatsapp_click') {
  window.gtag?.('event', 'conversion', {
    send_to: GA_AW,
    event_label: label,
  })
  window.gtag?.('event', label, {
    send_to: GA_GT,
  })
}
