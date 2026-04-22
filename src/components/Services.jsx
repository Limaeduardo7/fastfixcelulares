import { Smartphone, BatteryMedium, Cpu } from 'lucide-react'
import SpotlightCard from '@/components/bits/SpotlightCard'
import ScrollReveal from '@/components/bits/ScrollReveal'
import ShinyText from '@/components/bits/ShinyText'
import CtaButton from '@/components/CtaButton'

const SERVICES = [
  {
    icon: Smartphone,
    title: 'Tela nova',
    price: 'A partir de R$ 189 · No mesmo dia',
    desc: 'Para vidro quebrado, imagem escura, touch parado, manchas ou linhas. Temos opções compatíveis com o seu modelo.',
    feats: ['Avaliação gratuita em 15 min', 'Peças testadas e garantidas', '90 dias de garantia'],
    wa: 'Olá! Quero saber o valor para tela nova',
    cta: 'Ver valor da tela',
  },
  {
    icon: BatteryMedium,
    title: 'Bateria nova',
    price: 'A partir de R$ 149 · Em até 40 minutos',
    desc: 'Para aparelho descarregando rápido, desligando sozinho ou perdendo autonomia ao longo do dia.',
    feats: ['Teste grátis da bateria', 'Opções para iPhone e Android', '6 meses de garantia'],
    wa: 'Olá! Quero saber o valor para bateria nova',
    cta: 'Ver valor da bateria',
  },
  {
    icon: Cpu,
    title: 'Falhas internas',
    price: 'Valor sob consulta · Loja em Caxias do Sul',
    desc: 'Para aparelho que não liga, não carrega, reinicia sozinho, perde sinal ou apresentou falha depois de contato com água.',
    feats: ['Avaliação gratuita', 'Valor explicado antes de seguir', 'Atendimento por etapas'],
    wa: 'Olá! Meu celular está com uma falha interna',
    cta: 'Falar sobre o aparelho',
  },
]

export default function Services() {
  return (
    <section id="servicos" className="relative z-10 py-24">
      <div className="container-site">
        <ScrollReveal>
          <div className="mx-auto mb-14 max-w-[720px] text-center">
            <ShinyText text="O que mais procuram" className="mb-4 text-[12px] font-semibold uppercase tracking-[.22em]" />
            <h2 className="mb-4 text-clamp-section font-display font-semibold tracking-[-0.03em] text-white">
              As escolhas mais pedidas na loja.
            </h2>
            <p className="text-[17px] text-ink-200">
              Três frentes concentram boa parte dos nossos atendimentos e costumam resolver o dia a dia de quem precisa usar o celular sem pausa.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid gap-5 max-lg:grid-cols-1 lg:grid-cols-3">
          {SERVICES.map((service, i) => (
            <ScrollReveal key={service.title} direction="up" delay={i * 0.1}>
              <SpotlightCard className="flex h-full flex-col rounded-[20px] border border-white/[.07] bg-[#18181b] p-[30px] transition-all duration-300 hover:-translate-y-1 hover:border-orange-500/40">
                <div className="relative mb-6 grid h-[52px] w-[52px] place-items-center rounded-[14px] border border-orange-500/35 bg-orange-500/[.14]">
                  <service.icon className="h-[26px] w-[26px] stroke-orange-400" strokeWidth={1.8} />
                </div>

                <h3 className="mb-2 text-[22px] font-display font-semibold text-white">{service.title}</h3>
                <p className="mb-3.5 font-mono text-[13px] tracking-[.02em] text-orange-300">{service.price}</p>
                <p className="mb-5 text-[14.5px] leading-relaxed text-ink-200">{service.desc}</p>

                <ul className="mb-5 flex-1 space-y-2">
                  {service.feats.map((feature) => (
                    <li key={feature} className="flex items-center gap-2.5 text-[13.5px] text-ink-200">
                      <span className="h-1.5 w-1.5 flex-shrink-0 rounded-full bg-orange-400" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <a
                  href={`https://wa.me/5554999487768?text=${encodeURIComponent(service.wa)}`}
                  target="_blank"
                  rel="noopener"
                  className="flex items-center gap-2 border-t border-white/[.08] pt-[14px] text-[14px] font-semibold text-white transition-all hover:gap-3.5"
                >
                  {service.cta} <span className="text-orange-400">→</span>
                </a>
              </SpotlightCard>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={0.15}>
          <div className="mt-12 flex justify-center">
            <CtaButton size="lg" />
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
