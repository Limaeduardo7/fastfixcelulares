import { Phone, Check } from 'lucide-react'
import { Button } from '@/components/ui/button'
import BlurText from '@/components/bits/BlurText'
import ScrollReveal from '@/components/bits/ScrollReveal'
import QuoteForm from '@/components/QuoteForm'
import WhatsAppIcon from '@/components/WhatsAppIcon'
import { trackConversion } from '@/lib/gtag'
const desktopBg = '/hero-desktop.png'
const mobileBg = '/hero-mobile.png'

const WA_HERO = `https://wa.me/5554999487768?text=${encodeURIComponent('Olá! Quero falar sobre meu celular')}`

const BULLETS = [
  'Peças selecionadas',
  'Equipe experiente',
  'Avaliação sem compromisso',
  'Loja física + WhatsApp',
]

export default function Hero() {
  return (
    <section className="relative z-10 overflow-hidden pt-14 pb-20">
      <div
        className="absolute inset-0 hidden bg-cover bg-center bg-no-repeat lg:block"
        style={{ backgroundImage: `url(${desktopBg})` }}
      />
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat lg:hidden"
        style={{ backgroundImage: `url(${mobileBg})` }}
      />
      <div className="absolute inset-0 bg-black/75" />

      <div className="container-site relative z-10">
        <div className="grid items-center gap-14 max-lg:grid-cols-1 max-lg:gap-10 lg:grid-cols-[1.2fr_.95fr]">
          <ScrollReveal direction="up" delay={0.05}>
            <div className="hero-pill mb-6 inline-flex items-center gap-2.5 rounded-full border border-white/[.08] bg-white/[.04] px-3.5 py-2 text-[13px] text-ink-200">
              <span className="h-2 w-2 rounded-full bg-whatsapp animate-pulse-dot shadow-[0_0_0_0_rgba(37,211,102,.6)]" />
              <span>
                <strong className="text-white">Aberto agora</strong> · Resposta em até <strong className="text-white">2 minutos</strong> no WhatsApp
              </span>
            </div>

            <h1 className="mb-5 text-clamp-hero font-display font-semibold leading-[1.0] tracking-[-0.035em] text-white">
              <BlurText text="Seu celular" delay={0.07} /> <BlurText text="funcionando hoje," delay={0.07} />{' '}
              <BlurText text="com quem entende." delay={0.07} />
            </h1>

            <p className="mb-7 max-w-[560px] text-[clamp(16px,1.4vw,19px)] text-ink-200">
              A FastFix atende <strong className="text-white">Caxias do Sul</strong> há mais de 10 anos com opções para
              tela, bateria e situações do dia a dia do aparelho. Tudo com peças selecionadas, equipe experiente e
              avaliação gratuita.
            </p>

            <div className="mb-8 grid max-w-[520px] grid-cols-2 gap-3 max-sm:grid-cols-1">
              {BULLETS.map((bullet) => (
                <div key={bullet} className="flex items-center gap-2.5 text-sm text-ink-100">
                  <span className="grid h-[22px] w-[22px] flex-shrink-0 place-items-center rounded-full border border-orange-500/35 bg-orange-500/[.15]">
                    <Check className="h-3 w-3 stroke-[3] stroke-orange-400" />
                  </span>
                  {bullet}
                </div>
              ))}
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <Button asChild variant="whatsapp" size="lg">
                <a href={WA_HERO} target="_blank" rel="noopener" onClick={() => trackConversion('hero_whatsapp_click')}>
                  <WhatsAppIcon className="h-[22px] w-[22px]" />
                  Falar com especialista
                  <span className="ml-1 transition-transform group-hover:translate-x-1">→</span>
                </a>
              </Button>
              <Button asChild variant="ghost" size="md">
                <a href="tel:+5554981673607">
                  <Phone className="h-4.5 w-4.5" />
                  (54) 98167-3607
                </a>
              </Button>
            </div>

            <div className="mt-9 flex flex-wrap items-center gap-7 border-t border-white/[.06] pt-7">
              <div className="flex items-center">
                {[
                  ['LC', '#B56B3E', '#6B3820'],
                  ['MR', '#3E6AB5', '#1D3C6B'],
                  ['JS', '#4C5470', '#1D2130'],
                  ['AP', '#B53E78', '#6B1D45'],
                ].map(([init, a, b]) => (
                  <div
                    key={init}
                    className="first:ml-0 -ml-2 grid h-[34px] w-[34px] place-items-center rounded-full border-2 border-ink-900 font-display text-[11px] font-bold text-white"
                    style={{ background: `linear-gradient(135deg,${a},${b})` }}
                  >
                    {init}
                  </div>
                ))}
              </div>
              <div>
                <div className="text-sm tracking-[2px] text-orange-400">★★★★★</div>
                <div className="mt-0.5 text-[13px] text-ink-300">
                  <strong className="text-white">+45.000 clientes</strong> atendidos · 4.9 de avaliação média
                </div>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={0.2}>
            <div id="orcamento">
              <QuoteForm />
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
