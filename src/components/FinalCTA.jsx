import { Check } from 'lucide-react'
import { Button } from '@/components/ui/button'
import BlurText from '@/components/bits/BlurText'
import ScrollReveal from '@/components/bits/ScrollReveal'
import ShinyText from '@/components/bits/ShinyText'
import WhatsAppIcon from '@/components/WhatsAppIcon'

const WA = 'https://wa.me/5554999487768?text=Ola!%20Vi%20a%20FastFix%20no%20Google%20e%20quero%20entender%20o%20que%20faz%20mais%20sentido%20para%20o%20meu%20celular.'

export default function FinalCTA() {
  return (
    <section className="relative z-10 overflow-hidden py-[120px]">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(900px 500px at 50% 100%, rgba(255,106,26,.22), transparent 60%)' }}
      />
      <div className="container-site relative z-10 mx-auto max-w-[820px] text-center">
        <ScrollReveal>
          <ShinyText text="Seu celular merece mais que improviso" className="mb-6 text-[12px] font-semibold uppercase tracking-[.22em]" />
          <h2 className="mb-6 text-clamp-final font-display font-semibold leading-none tracking-[-0.035em] text-white">
            <BlurText text="Chama no WhatsApp." delay={0.07} />
            <br />
            <span>A gente </span>
            <BlurText text="atende hoje" delay={0.07} />
            <span>.</span>
          </h2>
          <p className="mb-10 text-[19px] text-ink-200">Avaliacao gratuita, sem compromisso. Resposta em ate 2 minutos.</p>

          <Button asChild variant="whatsapp" size="xl">
            <a href={WA} target="_blank" rel="noopener">
              <WhatsAppIcon className="h-[26px] w-[26px]" />
              Falar no WhatsApp agora
              <span className="ml-1">→</span>
            </a>
          </Button>

          <div className="mt-5 flex flex-wrap items-center justify-center gap-5 text-[13px] text-ink-300">
            {['Avaliacao gratuita', 'Resposta em 2 min', '+10 anos em Caxias do Sul'].map((text) => (
              <span key={text} className="flex items-center gap-1.5">
                <Check className="h-3.5 w-3.5 stroke-ink-300" strokeWidth={2.4} />
                {text}
              </span>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
