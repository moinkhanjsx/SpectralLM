import './App.css'
import { lazy, Suspense } from 'react'

// Preload critical components
const Navigation = lazy(() => import('./components/Navigation'))
const Hero = lazy(() => import('./components/Hero'))

// Lazy load non-critical components
const Industries = lazy(() => import('./components/Industries'))
const WhyChoose = lazy(() => import('./components/WhyChoose'))
const Process = lazy(() => import('./components/Process'))
const CTA = lazy(() => import('./components/CTA'))
const Footer = lazy(() => import('./components/Footer'))
const Analytics = lazy(() => import('./components/Analytics'))

// Loading component with better UX
function LoadingSpinner() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-slate-950">
      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-400"></div>
    </div>
  )
}

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Suspense fallback={<LoadingSpinner />}>
        <div className="app-container max-w-[1200px] flex flex-col justify-center">
          <Navigation />
          <Hero />
          <Industries />
          <WhyChoose />
          <Process />
          <CTA />
        </div>
        <Footer />
        <Analytics />
      </Suspense>
    </div>
  )
}
