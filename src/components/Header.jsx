import { useState, useEffect } from 'react'
import { X, Menu } from 'lucide-react'
import { Button } from '@/components/ui/button'
import WhatsAppIcon from '@/components/WhatsAppIcon'

const WA_BASE = 'https://wa.me/5554999487768?text='
const WA_HELLO = encodeURIComponent('Olá! Quero falar sobre meu celular')

const NAV_LINKS = [
  ['Serviços', 'servicos'],
  ['Como funciona', 'como-funciona'],
  ['Avaliações', 'depoimentos'],
  ['FAQ', 'faq'],
  ['Onde estamos', 'localizacao'],
]

export default function Header() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 1024) setOpen(false)
    }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  function handleNavClick(e, id) {
    e.preventDefault()
    setOpen(false)
    setTimeout(() => {
      const el = document.getElementById(id)
      if (!el) return
      window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 72, behavior: 'smooth' })
    }, 300)
  }

  return (
    <>
      <header className="relative z-50 border-b border-white/40 bg-white/70 backdrop-blur-2xl shadow-[0_1px_24px_rgba(0,0,0,.08)]">
        <div className="container-site flex items-center justify-between py-3.5">
          <a href="#" className="relative z-10 flex items-center gap-2.5" aria-label="FastFix Celulares">
            <img src="/logo-fastfix.png" alt="FastFix Celulares" className="h-[50px] w-auto" />
          </a>

          <nav className="hidden items-center gap-8 lg:flex" aria-label="Principal">
            {NAV_LINKS.map(([label, id]) => (
              <a
                key={id}
                href={`#${id}`}
                onClick={(e) => handleNavClick(e, id)}
                className="text-sm font-medium text-gray-600 transition-colors hover:text-gray-900"
              >
                {label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <Button asChild variant="topbar" size="sm" className="hidden sm:inline-flex">
              <a href={`${WA_BASE}${WA_HELLO}`} target="_blank" rel="noopener">
                <WhatsAppIcon className="h-4 w-4" />
                WhatsApp
              </a>
            </Button>

            <button
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-gray-200 text-gray-700 transition-colors hover:bg-gray-50 lg:hidden"
              onClick={() => setOpen((o) => !o)}
              aria-label={open ? 'Fechar menu' : 'Abrir menu'}
              aria-expanded={open}
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </header>

      <div
        className={`fixed inset-0 z-40 bg-black/40 backdrop-blur-sm transition-opacity duration-300 lg:hidden ${
          open ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'
        }`}
        onClick={() => setOpen(false)}
        aria-hidden="true"
      />

      <div
        className={`fixed top-0 right-0 z-50 flex h-full w-[280px] flex-col bg-white shadow-2xl transition-transform duration-300 ease-[cubic-bezier(.32,.72,0,1)] lg:hidden ${
          open ? 'translate-x-0' : 'translate-x-full'
        }`}
        aria-label="Menu mobile"
      >
        <div className="flex items-center justify-between border-b border-gray-100 px-6 py-4">
          <img src="/logo-fastfix.png" alt="FastFix" className="h-[42px] w-auto" />
          <button
            onClick={() => setOpen(false)}
            className="flex h-9 w-9 items-center justify-center rounded-xl border border-gray-200 text-gray-500 transition-colors hover:bg-gray-50"
            aria-label="Fechar menu"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        <nav className="flex flex-1 flex-col px-4 py-4" aria-label="Menu mobile">
          {NAV_LINKS.map(([label, id], i) => (
            <a
              key={id}
              href={`#${id}`}
              onClick={(e) => handleNavClick(e, id)}
              className="last:border-0 flex items-center gap-3 rounded-xl border-b border-gray-50 px-3 py-3.5 text-[15px] font-medium text-gray-700 transition-all hover:bg-gray-50 hover:text-gray-900"
              style={{ animationDelay: `${i * 40}ms` }}
            >
              <span className="h-1.5 w-1.5 flex-shrink-0 rounded-full bg-orange-400" />
              {label}
            </a>
          ))}
        </nav>

        <div className="border-t border-gray-100 px-5 pt-4 pb-8">
          <a
            href={`${WA_BASE}${WA_HELLO}`}
            target="_blank"
            rel="noopener"
            onClick={() => setOpen(false)}
            className="flex w-full items-center justify-center gap-2.5 rounded-2xl bg-gradient-to-b from-[#2DDD6C] to-[#19B356] py-4 text-[15px] font-bold text-white shadow-[0_10px_28px_-10px_rgba(37,211,102,.6)]"
          >
            <WhatsAppIcon className="h-5 w-5" />
            Falar no WhatsApp
          </a>
          <p className="mt-3 text-center text-[11px] text-gray-400">Resposta em até 2 minutos · Seg-Sex 08:30-18:30</p>
        </div>
      </div>
    </>
  )
}
