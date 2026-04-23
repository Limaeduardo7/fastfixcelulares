import { useState } from 'react'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Badge } from '@/components/ui/badge'
import { Lock } from 'lucide-react'
import WhatsAppIcon from '@/components/WhatsAppIcon'
import { trackConversion } from '@/lib/gtag'

const WA_NUMBER = '5554999487768'
const ISSUES = ['Tela trincada', 'Bateria fraca', 'Nao liga', 'Nao carrega', 'Caiu na agua', 'Outro']

function maskPhone(val) {
  const v = val.replace(/\D/g, '').slice(0, 11)
  if (v.length > 10) return v.replace(/(\d{2})(\d{5})(\d{0,4}).*/, '($1) $2-$3')
  if (v.length > 6) return v.replace(/(\d{2})(\d{4,5})(\d{0,4}).*/, '($1) $2-$3')
  if (v.length > 2) return v.replace(/(\d{2})(\d{0,5}).*/, '($1) $2')
  if (v.length > 0) return v.replace(/(\d{0,2}).*/, '($1')
  return v
}

export default function QuoteForm() {
  const [form, setForm] = useState({ nome: '', fone: '', marca: '', modelo: '' })
  const [selected, setSelected] = useState([])

  function toggleIssue(issue) {
    setSelected((prev) => (prev.includes(issue) ? prev.filter((i) => i !== issue) : [...prev, issue]))
  }

  function handleSubmit(e) {
    e.preventDefault()
    trackConversion('quote_form_submit')
    const issues = selected.join(', ')
    const msg =
      `Olá, FastFix! Gostaria de receber uma avaliação.\n\n` +
      `• Nome: ${form.nome}\n` +
      `• WhatsApp: ${form.fone}\n` +
      `• Aparelho: ${form.marca} ${form.modelo}\n` +
      (issues ? `• Situacao: ${issues}\n` : '') +
      `\nPode me retornar?`

    window.open(`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(msg)}`, '_blank', 'noopener')
  }

  return (
    <div className="relative rounded-3xl border border-white/[.07] bg-[#18181b] p-[30px] shadow-[0_24px_64px_-12px_rgba(0,0,0,.65)] gradient-border-card">
      <div className="mb-2 flex items-center justify-between">
        <h2 className="text-xl font-display font-semibold tracking-tight text-white">Avaliação gratuita</h2>
        <Badge>EM 2 MIN</Badge>
      </div>
      <p className="mb-5 text-[13.5px] text-ink-300">Nos conte o que aconteceu e retornamos no WhatsApp com valor e prazo.</p>

      <form onSubmit={handleSubmit} className="space-y-3.5">
        <div className="grid grid-cols-2 gap-3 max-sm:grid-cols-1">
          <div>
            <Label htmlFor="qf-nome">Seu nome</Label>
            <Input id="qf-nome" placeholder="Ex.: Maria" required value={form.nome} onChange={(e) => setForm((p) => ({ ...p, nome: e.target.value }))} />
          </div>
          <div>
            <Label htmlFor="qf-fone">WhatsApp</Label>
            <Input
              id="qf-fone"
              type="tel"
              inputMode="tel"
              placeholder="(54) 9 9999-0000"
              required
              value={form.fone}
              onChange={(e) => setForm((p) => ({ ...p, fone: maskPhone(e.target.value) }))}
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3 max-sm:grid-cols-1">
          <div>
            <Label htmlFor="qf-marca">Marca</Label>
            <select
              id="qf-marca"
              required
              value={form.marca}
              onChange={(e) => setForm((p) => ({ ...p, marca: e.target.value }))}
              className="w-full appearance-none rounded-xl border border-white/[.08] bg-[#1a1a1e] px-3.5 py-3.5 font-body text-white outline-none transition-colors focus:border-orange-500/60 focus:bg-[#222226]"
              style={{
                backgroundImage:
                  "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'><path d='M2 4l4 4 4-4' stroke='%237A8396' stroke-width='1.6' fill='none' stroke-linecap='round' stroke-linejoin='round'/></svg>\")",
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'right 16px center',
                paddingRight: '40px',
              }}
            >
              <option value="">Selecione</option>
              {['Apple / iPhone', 'Samsung', 'Xiaomi', 'Motorola', 'LG', 'Asus', 'Outra'].map((brand) => (
                <option key={brand}>{brand}</option>
              ))}
            </select>
          </div>
          <div>
            <Label htmlFor="qf-modelo">Modelo</Label>
            <Input id="qf-modelo" placeholder="Ex.: iPhone 13" required value={form.modelo} onChange={(e) => setForm((p) => ({ ...p, modelo: e.target.value }))} />
          </div>
        </div>

        <div>
          <Label>O que aconteceu?</Label>
          <div className="mt-0.5 flex flex-wrap gap-2" role="group" aria-label="Situações">
            {ISSUES.map((issue) => (
              <button
                key={issue}
                type="button"
                onClick={() => toggleIssue(issue)}
                className={[
                  'inline-flex items-center gap-1.5 rounded-full px-3 py-2 text-[13px] transition-all select-none',
                  selected.includes(issue)
                    ? 'border border-orange-500/45 bg-orange-500/[.14] text-orange-300'
                    : 'border border-white/[.08] bg-ink-800 text-ink-100 hover:border-white/20',
                ].join(' ')}
              >
                {selected.includes(issue) && '✓ '}
                {issue}
              </button>
            ))}
          </div>
        </div>

        <button
          type="submit"
          className="mt-1 flex w-full items-center justify-center gap-2.5 overflow-hidden whitespace-nowrap rounded-[14px] bg-gradient-to-b from-[#2DDD6C] to-[#19B356] py-4 text-[13.5px] font-bold text-white shadow-[0_10px_28px_-10px_rgba(37,211,102,.6),inset_0_1px_0_rgba(255,255,255,.25)] transition-transform hover:-translate-y-px sm:text-[15.5px]"
        >
          <WhatsAppIcon className="h-[18px] w-[18px] flex-shrink-0 sm:h-5 sm:w-5" />
          <span className="truncate">Receber valor no WhatsApp</span>
        </button>

        <p className="flex items-center justify-center gap-1.5 pt-0.5 text-center text-[12px] text-ink-300">
          <Lock className="h-3 w-3" />
          Seus dados são usados apenas para este atendimento. Sem spam.
        </p>
      </form>
    </div>
  )
}
