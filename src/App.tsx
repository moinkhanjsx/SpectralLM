import './App.css'
import { lazy, Suspense } from 'react'

const Navigation = lazy(() => import('./components/Navigation'))
const Hero = lazy(() => import('./components/Hero'))
const Industries = lazy(() => import('./components/Industries'))
const WhyChoose = lazy(() => import('./components/WhyChoose'))
const Process = lazy(() => import('./components/Process'))
const CTA = lazy(() => import('./components/CTA'))
const Footer = lazy(() => import('./components/Footer'))

export default function App() {
  return (
    <div className="min-h-screen  bg-slate-950 text-white">
      <Suspense fallback={<div className="flex justify-center items-center min-h-screen">Loading...</div>}>
        <div className="app-container max-w-[1200px] flex flex-col justify-center">
          <Navigation />
          <Hero />
          <Industries />
          <WhyChoose />
          <Process />
          <CTA />
        </div>
        <Footer />
      </Suspense>
    </div>
  )
}
