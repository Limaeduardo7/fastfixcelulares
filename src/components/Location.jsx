import { MapPin, Phone, MessageCircle, ExternalLink } from 'lucide-react'
import ScrollReveal from '@/components/bits/ScrollReveal'
import ShinyText from '@/components/bits/ShinyText'

const DOW = new Date().getDay()

export default function Location() {
  return (
    <section id="localizacao" className="py-24 relative z-10">
      <div className="container-site">
        <ScrollReveal>
          <div className="text-center max-w-[720px] mx-auto mb-14">
            <ShinyText text="Onde estamos" className="text-[12px] tracking-[.22em] uppercase font-semibold mb-4" />
            <h2 className="text-clamp-section font-display font-semibold text-white tracking-[-0.03em] mb-4">
              No coração de Caxias do Sul.
            </h2>
            <p className="text-[17px] text-ink-200">
              Loja física no Centro, fácil de chegar, estacionamento rotativo na porta.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid lg:grid-cols-[1fr_1.1fr] gap-10 items-stretch max-lg:grid-cols-1">
          {/* Info card */}
          <ScrollReveal direction="left">
            <div className="bg-[#18181b] border border-white/[.07] rounded-[24px] p-9 flex flex-col h-full">
              <h3 className="text-[28px] font-display font-semibold text-white tracking-tight mb-2">FastFix Celulares</h3>
              <p className="text-[15px] text-ink-300 mb-7">Rua Dr. Montaury, 1271 — Centro</p>

              {[
                {
                  icon: MapPin,
                  label: 'Endereço',
                  value: 'Rua Dr. Montaury, 1271 · Centro · Caxias do Sul/RS',
                },
                {
                  icon: Phone,
                  label: 'Telefones',
                  value: (
                    <>
                      <a href="tel:+555499487768" className="hover:text-orange-400 transition-colors">(54) 99948-7768</a>
                      {' · '}
                      <a href="tel:+555498167367" className="hover:text-orange-400 transition-colors">(54) 98167-3607</a>
                    </>
                  ),
                },
                {
                  icon: MessageCircle,
                  label: 'WhatsApp',
                  value: (
                    <a href="https://wa.me/5554999487768" target="_blank" rel="noopener" className="hover:text-orange-400 transition-colors">
                      wa.me/5554999487768
                    </a>
                  ),
                },
              ].map(({ icon: Icon, label, value }) => (
                <div key={label} className="flex gap-3.5 py-4 border-t border-white/[.06] first:border-t-0 first:pt-0">
                  <div className="w-10 h-10 rounded-[10px] bg-orange-500/[.14] border border-orange-500/35 grid place-items-center flex-shrink-0">
                    <Icon className="w-[18px] h-[18px] stroke-orange-400" strokeWidth={1.8} />
                  </div>
                  <div>
                    <div className="text-[12px] text-ink-300 uppercase tracking-[.1em] font-medium mb-0.5">{label}</div>
                    <div className="text-white text-[15px] font-medium">{value}</div>
                  </div>
                </div>
              ))}

              <div className="mt-5 pt-5 border-t border-white/[.06]">
                <p className="text-[12px] text-ink-300 uppercase tracking-[.1em] mb-2.5">Horário de atendimento</p>
                {[
                  { label: 'Segunda a Sexta', hrs: '08:30 – 18:30', active: DOW >= 1 && DOW <= 5 },
                  { label: 'Sábado',           hrs: '09:00 – 13:00', active: DOW === 6 },
                  { label: 'Domingo',          hrs: 'Fechado',       active: false, closed: true },
                ].map(row => (
                  <div
                    key={row.label}
                    className={`flex justify-between text-sm py-1 ${row.active ? 'text-orange-400 font-semibold' : ''}`}
                  >
                    <span className={row.active ? 'text-orange-400' : 'text-ink-200'}>{row.label}</span>
                    <span className={row.closed ? 'text-ink-400' : row.active ? 'text-orange-400' : 'text-white'}>
                      {row.hrs}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>

          {/* Map */}
          <ScrollReveal direction="right">
            <div className="relative rounded-[24px] overflow-hidden border border-white/[.08] min-h-[480px] bg-ink-900">
              <iframe
                src="https://www.openstreetmap.org/export/embed.html?bbox=-51.1820%2C-29.1700%2C-51.1720%2C-29.1640&layer=mapnik&marker=-29.1670%2C-51.1770"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Mapa da FastFix em Caxias do Sul"
                className="w-full h-full border-0 absolute inset-0"
                style={{ filter: 'grayscale(.2) invert(.92) hue-rotate(180deg) brightness(.9) contrast(.9)' }}
              />
              <div className="absolute top-4 left-4 right-4 flex flex-col sm:flex-row sm:justify-between gap-2 pointer-events-none z-10">
                <div className="pointer-events-auto self-start flex items-center gap-2 px-3.5 py-2 rounded-full bg-[rgba(13,15,20,.9)] backdrop-blur-xl border border-white/10 text-[12px] text-white font-medium whitespace-nowrap">
                  <span className="w-2 h-2 rounded-full bg-whatsapp animate-pulse-dot flex-shrink-0" />
                  Aberto agora · até 18:30
                </div>
                <a
                  href="https://www.google.com/maps/search/?api=1&query=Rua+Dr.+Montaury+1271+Caxias+do+Sul"
                  target="_blank"
                  rel="noopener"
                  className="pointer-events-auto self-start flex items-center gap-2 px-3.5 py-2 rounded-full bg-orange-500/90 text-[12px] text-white font-medium hover:bg-orange-500 transition-colors whitespace-nowrap"
                >
                  Ver rota <ExternalLink className="w-3 h-3 flex-shrink-0" />
                </a>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
