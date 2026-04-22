import Aurora          from '@/components/bits/Aurora'
import Header          from '@/components/Header'
import Hero            from '@/components/Hero'
import LiveStrip       from '@/components/LiveStrip'
import Brands          from '@/components/Brands'
import Services        from '@/components/Services'
import HowItWorks      from '@/components/HowItWorks'
import Testimonials    from '@/components/Testimonials'
import FAQ             from '@/components/FAQ'
import Location        from '@/components/Location'
import FinalCTA        from '@/components/FinalCTA'
import Footer          from '@/components/Footer'
import FloatingWhatsApp from '@/components/FloatingWhatsApp'

export default function App() {
  return (
    <>
      <Aurora />
      <Header />
      <main className="relative z-10 bg-[#0a0a0b]">
        <Hero />
        <LiveStrip />
        <Brands />
        <Services />
        <HowItWorks />
        <Testimonials />
        <FAQ />
        <Location />
        <FinalCTA />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  )
}
