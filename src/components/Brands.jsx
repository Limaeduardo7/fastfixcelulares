import Marquee from '@/components/bits/Marquee'

const BRANDS = [
  { name: 'Apple', accent: false },
  { name: 'Samsung', accent: false },
  { name: 'Xiaomi', accent: false },
  { name: 'Motorola', accent: false },
  { name: 'Asus', accent: false },
  { name: 'LG', accent: false },
  { name: 'Google', accent: true },
]

const brandItems = Array.from({ length: 4 }, (_, group) =>
  BRANDS.map(brand => (
    <span
      key={`${group}-${brand.name}`}
      className="font-display font-semibold text-xl tracking-tight text-ink-200 transition-colors hover:text-white cursor-default"
    >
      {brand.name}
      {brand.accent && <span className="text-orange-400">.</span>}
    </span>
  ))
).flat()

const separator = <span className="text-base text-orange-500/60 select-none">+</span>

const labelItems = [
  'Atendemos todas as marcas',
  separator,
  'Mais de 10 anos de experiencia',
  separator,
  'Avaliacao gratuita',
  separator,
  'Pecas selecionadas',
  separator,
  'Equipe experiente',
  separator,
  'Atendemos todas as marcas',
  separator,
  'Mais de 10 anos de experiencia',
  separator,
  'Avaliacao gratuita',
  separator,
  'Pecas selecionadas',
  separator,
  'Equipe experiente',
  separator,
].map((item, i) =>
  typeof item === 'string'
    ? <span key={i} className="whitespace-nowrap text-[11px] font-medium uppercase tracking-[.2em] text-ink-300">{item}</span>
    : <span key={i}>{item}</span>
)

export default function Brands() {
  return (
    <section className="relative z-10 overflow-hidden py-11">
      {/* Marquee 1 - label strip */}
      <div className="mb-5 border-y border-white/[.05] py-3">
        <Marquee items={labelItems} className="opacity-90" itemClassName="flex items-center" speed={35} />
      </div>

      {/* Marquee 2 - brand names */}
      <Marquee items={brandItems} className="opacity-85" />
    </section>
  )
}
