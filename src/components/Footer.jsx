import { Instagram } from 'lucide-react'
import WhatsAppIcon from '@/components/WhatsAppIcon'

export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-gray-200 bg-white pt-14 pb-7">
      <div className="container-site">
        <div className="mb-10 grid grid-cols-[1.4fr_1fr_1fr_1fr] gap-10 max-md:grid-cols-2 max-md:gap-8">
          <div>
            <a href="#" className="mb-4 inline-block" aria-label="FastFix Celulares">
              <img src="/logo-fastfix.png" alt="FastFix" className="h-[38px] w-auto" />
            </a>
            <p className="max-w-[340px] text-[14px] leading-relaxed text-gray-500">
              FastFix em Caxias do Sul ha mais de 10 anos, com opcoes para tela, bateria e outras necessidades do aparelho.
            </p>
            <div className="mt-[18px] flex gap-2.5">
              <a
                href="https://www.instagram.com/fastfix.caxias"
                target="_blank"
                rel="noopener"
                aria-label="Instagram"
                className="grid h-[38px] w-[38px] place-items-center rounded-[10px] border border-gray-200 bg-gray-100 transition-all hover:border-orange-300 hover:bg-orange-50"
              >
                <Instagram className="h-4 w-4 stroke-gray-600" strokeWidth={1.8} />
              </a>
              <a
                href="https://wa.me/5554999487768"
                target="_blank"
                rel="noopener"
                aria-label="WhatsApp"
                className="grid h-[38px] w-[38px] place-items-center rounded-[10px] border border-gray-200 bg-gray-100 transition-all hover:border-orange-300 hover:bg-orange-50"
              >
                <WhatsAppIcon className="h-4 w-4 text-gray-600" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="mb-3.5 text-[13px] font-semibold uppercase tracking-[.06em] text-gray-900">Mais procurados</h4>
            {['Tela nova', 'Bateria nova', 'Falhas internas', 'Caiu na agua'].map((item) => (
              <a key={item} href="#servicos" className="block py-1 text-[14px] text-gray-500 transition-colors hover:text-orange-500">
                {item}
              </a>
            ))}
          </div>

          <div>
            <h4 className="mb-3.5 text-[13px] font-semibold uppercase tracking-[.06em] text-gray-900">Institucional</h4>
            {[
              ['Como funciona', '#como-funciona'],
              ['Avaliacoes', '#depoimentos'],
              ['Perguntas', '#faq'],
              ['Onde estamos', '#localizacao'],
            ].map(([label, href]) => (
              <a key={label} href={href} className="block py-1 text-[14px] text-gray-500 transition-colors hover:text-orange-500">
                {label}
              </a>
            ))}
          </div>

          <div>
            <h4 className="mb-3.5 text-[13px] font-semibold uppercase tracking-[.06em] text-gray-900">Contato</h4>
            <a href="tel:+555499487768" className="block py-1 text-[14px] text-gray-500 transition-colors hover:text-orange-500">
              (54) 99948-7768
            </a>
            <a href="tel:+555498167367" className="block py-1 text-[14px] text-gray-500 transition-colors hover:text-orange-500">
              (54) 98167-3607
            </a>
            <a href="https://wa.me/5554999487768" target="_blank" rel="noopener" className="block py-1 text-[14px] text-gray-500 transition-colors hover:text-orange-500">
              WhatsApp
            </a>
            <p className="mt-2 text-[14px] leading-relaxed text-gray-400">
              Rua Dr. Montaury, 1271
              <br />
              Centro · Caxias do Sul/RS
            </p>
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-5 border-t border-gray-200 pt-6 text-[12px] text-gray-400">
          <span>© 2026 FastFix Celulares. Todos os direitos reservados.</span>
          <span>CNPJ 42.132.750/0001-67</span>
        </div>
      </div>
    </footer>
  )
}
