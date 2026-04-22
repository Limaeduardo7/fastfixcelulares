import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@/components/ui/accordion'
import ScrollReveal from '@/components/bits/ScrollReveal'
import ShinyText from '@/components/bits/ShinyText'
import CtaButton from '@/components/CtaButton'

const FAQS = [
  {
    q: 'Quanto tempo leva?',
    a: 'Pedidos de tela e bateria costumam ficar prontos no mesmo dia, geralmente entre 40 minutos e 4 horas, dependendo do modelo. Em situacoes mais delicadas, o prazo pode mudar, e voce recebe atualizacao a cada etapa.',
  },
  {
    q: 'A avaliacao e gratuita?',
    a: 'Sim. Olhamos o aparelho e passamos o valor fechado sem custo. Se voce nao quiser seguir, devolvemos o celular como chegou e voce nao paga nada.',
  },
  {
    q: 'Quais pecas voces usam?',
    a: 'Trabalhamos com pecas originais e linhas selecionadas premium, sempre testadas antes da instalacao. Voce recebe as opcoes disponiveis para o seu modelo e escolhe conforme o seu momento.',
  },
  {
    q: 'Tem garantia?',
    a: 'Sim. As opcoes feitas na loja contam com garantia por escrito. Se aparecer qualquer imprevisto dentro desse periodo, voce volta e a equipe verifica sem custo.',
  },
  {
    q: 'Meu celular caiu na agua. Ainda vale a pena levar?',
    a: 'Na maioria dos casos, sim, principalmente quando o aparelho chega rapido e sem novas tentativas de ligar. Quanto antes voce trouxer, maior a chance de aproveitar melhor o resultado.',
  },
  {
    q: 'Como funciona o pagamento?',
    a: 'Aceitamos Pix, dinheiro, debito e credito. Em boa parte dos pedidos, o parcelamento vai em ate 6x sem juros. O pagamento acontece apenas na entrega, com tudo explicado antes.',
  },
]

export default function FAQ() {
  return (
    <section id="faq" className="relative z-10 py-24">
      <div className="container-site">
        <ScrollReveal>
          <div className="mx-auto mb-14 max-w-[720px] text-center">
            <ShinyText text="Perguntas frequentes" className="mb-4 text-[12px] font-semibold uppercase tracking-[.22em]" />
            <h2 className="text-clamp-section font-display font-semibold tracking-[-0.03em] text-white">
              Tudo o que voce quer saber antes de vir.
            </h2>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <Accordion type="single" collapsible defaultValue="item-0" className="mx-auto max-w-[820px] space-y-3">
            {FAQS.map((faq, i) => (
              <AccordionItem key={i} value={`item-${i}`}>
                <AccordionTrigger>{faq.q}</AccordionTrigger>
                <AccordionContent>{faq.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </ScrollReveal>

        <ScrollReveal delay={0.15}>
          <div className="mt-10 flex justify-center">
            <CtaButton size="lg" />
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
