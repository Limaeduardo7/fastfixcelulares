import WhatsAppIcon from '@/components/WhatsAppIcon'
import { trackConversion } from '@/lib/gtag'

const WA = `https://wa.me/5554999487768?text=${encodeURIComponent('Olá! Preciso consertar meu celular')}`

export default function FloatingWhatsApp() {
  return (
    <a
      href={WA}
      target="_blank"
      rel="noopener"
      aria-label="Falar no WhatsApp"
      onClick={() => trackConversion('floating_whatsapp_click')}
      className="fixed bottom-6 right-6 z-[100] flex items-center gap-2.5 pl-4 pr-5 py-3.5 bg-gradient-to-b from-[#2DDD6C] to-[#19B356] text-white font-semibold text-sm rounded-full shadow-[0_18px_42px_-10px_rgba(37,211,102,.6),inset_0_1px_0_rgba(255,255,255,.25)] hover:-translate-y-0.5 hover:scale-[1.02] transition-transform max-sm:bottom-3.5 max-sm:right-3.5"
    >
      <div className="relative w-[34px] h-[34px] rounded-full bg-white/20 grid place-items-center flex-shrink-0">
        <span className="absolute inset-[-6px] rounded-full border-2 border-white/50 animate-pulse-ring" />
        <WhatsAppIcon className="w-5 h-5" />
      </div>
      <span className="max-sm:hidden">Falar no WhatsApp</span>
    </a>
  )
}
