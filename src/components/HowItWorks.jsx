import { MessageCircle, FileText, CheckCircle } from 'lucide-react'
import ScrollReveal from '@/components/bits/ScrollReveal'
import ShinyText from '@/components/bits/ShinyText'
import CtaButton from '@/components/CtaButton'

const STEPS = [
  {
    num: '01',
    icon: MessageCircle,
    title: 'Conte o que aconteceu',
    desc: 'Chama no WhatsApp ou preenche o formulario aqui do site com marca, modelo e o que esta acontecendo. A gente responde em minutos.',
    time: 'Resposta em ate 2 min',
  },
  {
    num: '02',
    icon: FileText,
    title: 'Avaliacao e valor',
    desc: 'A gente analisa seu aparelho e passa um valor claro, sem custo e sem compromisso. Se fizer sentido para voce, seguimos. Se nao fizer, tudo bem.',
    time: 'Avaliacao gratuita',
  },
  {
    num: '03',
    icon: CheckCircle,
    title: 'Tudo pronto',
    desc: 'Pedidos mais comuns ficam prontos em algumas horas. Situacoes mais delicadas podem levar mais tempo, e voce acompanha cada etapa.',
    time: 'Maioria pronta em ate 4h',
  },
]

export default function HowItWorks() {
  return (
    <section id="como-funciona" className="relative z-10 py-24">
      <div className="container-site">
        <ScrollReveal>
          <div className="mx-auto mb-14 max-w-[720px] text-center">
            <ShinyText text="Como funciona" className="mb-4 text-[12px] font-semibold uppercase tracking-[.22em]" />
            <h2 className="mb-4 text-clamp-section font-display font-semibold tracking-[-0.03em] text-white">
              Do primeiro contato ao aparelho pronto, em 3 passos.
            </h2>
            <p className="text-[17px] text-ink-200">Sem burocracia, sem surpresa no valor e sem espera sem fim.</p>
          </div>
        </ScrollReveal>

        <div className="grid gap-6 max-lg:grid-cols-1 lg:grid-cols-3">
          {STEPS.map((step, i) => (
            <ScrollReveal key={step.num} direction="up" delay={i * 0.12}>
              <div className="rounded-[20px] border border-white/[.07] bg-[#0e0e11] p-8">
                <div className="mb-5 flex items-center gap-2.5 font-mono text-[12px] tracking-[.1em] text-orange-400">
                  <span>PASSO {step.num}</span>
                  <div className="h-px flex-1 bg-gradient-to-r from-orange-500/50 to-transparent" />
                </div>
                <div className="mb-5 grid h-14 w-14 place-items-center rounded-2xl border border-white/[.08] bg-gradient-to-br from-[#1a1f2b] to-[#0c0f16]">
                  <step.icon className="h-7 w-7 stroke-orange-400" strokeWidth={1.6} />
                </div>
                <h3 className="mb-2.5 text-[22px] font-display font-semibold text-white">{step.title}</h3>
                <p className="mb-4 text-[14.5px] leading-relaxed text-ink-200">{step.desc}</p>
                <span className="text-[12px] text-ink-300">{step.time}</span>
              </div>
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
