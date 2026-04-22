import { MapPin, Phone, MessageCircle, ExternalLink } from 'lucide-react'
import ScrollReveal from '@/components/bits/ScrollReveal'
import ShinyText from '@/components/bits/ShinyText'

const DOW = new Date().getDay()

export default function Location() {
  return (
    <section id="localizacao" className="relative z-10 py-24">
      <div className="container-site">
        <ScrollReveal>
          <div className="mx-auto mb-14 max-w-[720px] text-center">
            <ShinyText text="Onde estamos" className="mb-4 text-[12px] font-semibold uppercase tracking-[.22em]" />
            <h2 className="mb-4 text-clamp-section font-display font-semibold tracking-[-0.03em] text-white">
              No centro de Caxias do Sul.
            </h2>
            <p className="text-[17px] text-ink-200">
              Loja no Centro, fácil de chegar, com estacionamento rotativo na porta.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid items-stretch gap-10 max-lg:grid-cols-1 lg:grid-cols-[1fr_1.1fr]">
          <ScrollReveal direction="left">
            <div className="flex h-full flex-col rounded-[24px] border border-white/[.07] bg-[#18181b] p-9">
              <h3 className="mb-2 text-[28px] font-display font-semibold tracking-tight text-white">FastFix Celulares</h3>
              <p className="mb-7 text-[15px] text-ink-300">Rua Dr. Montaury, 1271 - Centro</p>

              {[
                {
                  icon: MapPin,
                  label: 'Endereço',
                  value: 'Rua Dr. Montaury, 1271 | Centro | Caxias do Sul/RS',
                },
                {
                  icon: Phone,
                  label: 'Telefones',
                  value: (
                    <>
                      <a href="tel:+5554981673607" className="hover:text-orange-400 transition-colors">
                        (54) 98167-3607
                      </a>
                      {' | '}
                      <a href="tel:+555498167367" className="hover:text-orange-400 transition-colors">
                        (54) 98167-3607
                      </a>
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
                <div key={label} className="flex gap-3.5 border-t border-white/[.06] py-4 first:border-t-0 first:pt-0">
                  <div className="grid h-10 w-10 flex-shrink-0 place-items-center rounded-[10px] border border-orange-500/35 bg-orange-500/[.14]">
                    <Icon className="h-[18px] w-[18px] stroke-orange-400" strokeWidth={1.8} />
                  </div>
                  <div>
                    <div className="mb-0.5 text-[12px] font-medium uppercase tracking-[.1em] text-ink-300">{label}</div>
                    <div className="text-[15px] font-medium text-white">{value}</div>
                  </div>
                </div>
              ))}

              <div className="mt-5 border-t border-white/[.06] pt-5">
                <p className="mb-2.5 text-[12px] uppercase tracking-[.1em] text-ink-300">Horário de atendimento</p>
                {[
                  { label: 'Segunda a Sexta', hrs: '09:00 - 19:00', active: DOW >= 1 && DOW <= 5 },
                  { label: 'Sábado', hrs: '09:00 - 17:00', active: DOW === 6 },
                  { label: 'Domingo', hrs: 'Fechado', active: false, closed: true },
                ].map((row) => (
                  <div key={row.label} className={`flex justify-between py-1 text-sm ${row.active ? 'font-semibold text-orange-400' : ''}`}>
                    <span className={row.active ? 'text-orange-400' : 'text-ink-200'}>{row.label}</span>
                    <span className={row.closed ? 'text-ink-400' : row.active ? 'text-orange-400' : 'text-white'}>{row.hrs}</span>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right">
            <div className="relative min-h-[480px] overflow-hidden rounded-[24px] border border-white/[.08] bg-ink-900">
              <iframe
                src="https://maps.google.com/maps?q=FastFix+Conserto+de+Celular,+Rua+Dr.+Montaury,+1271,+Centro,+Caxias+do+Sul+-+RS,+95020-190&ftid=0x951ea39899633dcf:0x130bc7a51008b78&z=17&output=embed"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Mapa da FastFix em Caxias do Sul"
                className="absolute inset-0 h-full w-full border-0"
                style={{ filter: 'grayscale(.15) contrast(.95)' }}
              />
              <div className="absolute left-4 right-4 top-4 z-10 flex flex-col gap-2 pointer-events-none sm:flex-row sm:justify-between">
                <div className="pointer-events-auto self-start whitespace-nowrap rounded-full border border-white/10 bg-[rgba(13,15,20,.9)] px-3.5 py-2 text-[12px] font-medium text-white backdrop-blur-xl">
                  <span className="mr-2 inline-block h-2 w-2 rounded-full bg-whatsapp align-middle animate-pulse-dot" />
                  Aberto agora · até 19:00
                </div>
                <a
                  href="https://www.google.com/maps/search/?api=1&query=Rua+Dr.+Montaury+1271+Caxias+do+Sul"
                  target="_blank"
                  rel="noopener"
                  className="pointer-events-auto self-start whitespace-nowrap rounded-full bg-orange-500/90 px-3.5 py-2 text-[12px] font-medium text-white transition-colors hover:bg-orange-500"
                >
                  Ver rota <ExternalLink className="ml-2 inline h-3 w-3 flex-shrink-0" />
                </a>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
