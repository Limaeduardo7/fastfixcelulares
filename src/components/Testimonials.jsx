import ScrollReveal from '@/components/bits/ScrollReveal'
import ShinyText from '@/components/bits/ShinyText'
import CountUp from '@/components/bits/CountUp'
import CtaButton from '@/components/CtaButton'

const REVIEWS = [
  {
    body: 'Meu iPhone 12 nao ligava depois de cair na agua. Em outros lugares disseram que nao valia a pena tentar. Na FastFix me explicaram tudo com calma e em 2 dias eu ja estava com o aparelho em maos e minhas fotos salvas.',
    name: 'Luciana C.',
    init: 'LC',
    grad: ['#B56B3E', '#6B3820'],
    time: 'Ha 3 semanas',
  },
  {
    body: 'Fui pela manha e sai com tudo resolvido antes do almoco. Preco justo, atendimento claro e uma experiencia muito tranquila do comeco ao fim.',
    name: 'Marcos R.',
    init: 'MR',
    grad: ['#3E6AB5', '#1D3C6B'],
    time: 'Ha 1 mes',
  },
  {
    body: 'O atendimento pelo WhatsApp foi rapido e honesto. Passei o modelo, recebi a orientacao e quando cheguei na loja ja sabiam exatamente como me atender. Tudo muito organizado.',
    name: 'Ana Paula S.',
    init: 'AP',
    grad: ['#B53E78', '#6B1D45'],
    time: 'Ha 2 meses',
  },
]

export default function Testimonials() {
  return (
    <section id="depoimentos" className="relative z-10 py-24">
      <div className="container-site">
        <ScrollReveal>
          <div className="mx-auto mb-14 max-w-[720px] text-center">
            <ShinyText text="Quem ja passou por aqui" className="mb-4 text-[12px] font-semibold uppercase tracking-[.22em]" />
            <h2 className="mb-4 text-clamp-section font-display font-semibold tracking-[-0.03em] text-white">
              +45 mil atendimentos. A nota fala por si.
            </h2>
            <p className="text-[17px] text-ink-200">
              Avaliacoes reais de clientes atendidos em nossa loja no Centro de Caxias do Sul.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid gap-5 max-lg:grid-cols-1 lg:grid-cols-3">
          {REVIEWS.map((review, i) => (
            <ScrollReveal key={review.name} direction="up" delay={i * 0.1}>
              <div className="flex h-full flex-col rounded-[20px] border border-white/[.07] bg-[#18181b] p-7">
                <div className="mb-3.5 text-[15px] tracking-[2px] text-orange-400">★★★★★</div>
                <p className="flex-1 text-[15.5px] leading-snug text-ink-100">
                  <span className="mr-1 align-[-18px] font-display text-[44px] leading-none text-orange-400">"</span>
                  {review.body}
                </p>
                <div className="mt-5 flex items-center gap-3 border-t border-white/[.06] pt-[18px]">
                  <div
                    className="grid h-[42px] w-[42px] flex-shrink-0 place-items-center rounded-full font-display text-sm font-bold text-white"
                    style={{ background: `linear-gradient(135deg,${review.grad[0]},${review.grad[1]})` }}
                  >
                    {review.init}
                  </div>
                  <div>
                    <div className="text-[14.5px] font-semibold text-white">{review.name}</div>
                    <div className="mt-0.5 flex items-center gap-2 text-[12px] text-ink-300">
                      <span className="inline-flex items-center gap-1 rounded border border-white/[.08] bg-white/[.05] px-1.5 py-0.5 text-[10px] text-ink-200">★ Google</span>
                      {review.time}
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={0.3}>
          <div className="mx-auto mt-12 flex max-w-[720px] flex-wrap items-center justify-center gap-7 rounded-[20px] border border-white/[.07] bg-[#18181b] p-[22px_32px]">
            <div className="font-display text-[48px] leading-none tracking-tight text-white">
              4.9<span className="text-orange-400">★</span>
            </div>
            <div className="text-[13px] text-ink-300">
              <div className="mb-1 block text-sm tracking-[2px] text-orange-400">★★★★★</div>
              Baseado em <strong className="text-white"><CountUp end={1240} suffix="+" /></strong> avaliacoes verificadas no Google · +10 anos em Caxias do Sul
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <div className="mt-10 flex justify-center">
            <CtaButton size="lg" />
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
