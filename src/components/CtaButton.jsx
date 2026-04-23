import WhatsAppIcon from '@/components/WhatsAppIcon'
import { trackConversion } from '@/lib/gtag'

const WA_LINK = 'https://wa.me/5554999487768?text=Ola!%20Quero%20falar%20sobre%20meu%20celular.'

export default function CtaButton({ className = '', size = 'md' }) {
  const sizes = {
    sm: 'px-5 py-3 text-[14px] gap-2',
    md: 'px-7 py-4 text-[15px] gap-2.5',
    lg: 'px-9 py-[18px] text-[16px] gap-3',
  }

  return (
    <a
      href={WA_LINK}
      target="_blank"
      rel="noopener"
      onClick={() => trackConversion('cta_button_click')}
      className={`inline-flex items-center justify-center rounded-full font-bold text-white
        bg-gradient-to-b from-[#2DDD6C] to-[#19B356]
        shadow-[0_14px_40px_-12px_rgba(37,211,102,.65),inset_0_1px_0_rgba(255,255,255,.25)]
        hover:-translate-y-0.5 hover:shadow-[0_20px_48px_-12px_rgba(37,211,102,.8)]
        transition-all duration-200 ${sizes[size]} ${className}`}
    >
      <WhatsAppIcon className="h-[18px] w-[18px] flex-shrink-0" />
      Falar com especialista
    </a>
  )
}
