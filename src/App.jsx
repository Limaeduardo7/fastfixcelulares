import { lazy, Suspense } from 'react'
import Aurora          from '@/components/bits/Aurora'
import Header          from '@/components/Header'
import Hero            from '@/components/Hero'
import LiveStrip       from '@/components/LiveStrip'

const Brands          = lazy(() => import('@/components/Brands'))
const Services        = lazy(() => import('@/components/Services'))
const HowItWorks      = lazy(() => import('@/components/HowItWorks'))
const Testimonials    = lazy(() => import('@/components/Testimonials'))
const FAQ             = lazy(() => import('@/components/FAQ'))
const Location        = lazy(() => import('@/components/Location'))
const FinalCTA        = lazy(() => import('@/components/FinalCTA'))
const Footer          = lazy(() => import('@/components/Footer'))
const FloatingWhatsApp = lazy(() => import('@/components/FloatingWhatsApp'))

export default function App() {
  return (
    <>
      <Aurora />
      <Header />
      <main className="relative z-10 bg-[#0a0a0b]">
        <Hero />
        <LiveStrip />
        <Suspense fallback={null}>
          <Brands />
          <Services />
          <HowItWorks />
          <Testimonials />
          <FAQ />
          <Location />
          <FinalCTA />
        </Suspense>
      </main>
      <Suspense fallback={null}>
        <Footer />
        <FloatingWhatsApp />
      </Suspense>
    </>
  )
}
