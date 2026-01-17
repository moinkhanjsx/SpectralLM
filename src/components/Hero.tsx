import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import { trackCustomEvent } from '../utils/performanceMonitor';

export default function Hero() {
  const [ref, isIntersecting] = useIntersectionObserver({ threshold: 0.1 });

  return (
    <section ref={ref} className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 text-center flex flex-col justify-center items-center gap-10 overflow-x-hidden ${isIntersecting ? 'animate' : ''}`}>
        <div className="border-1 border-blue-400 text-blue-400 rounded-2xl px-4 py-2 inline-block max-w-full">
            Industry-Specific AI Solutions
        </div>
      <h1 className="text-4xl md:text-7xl md:w-[70%] font-bold mb-6">
        Accelerate R&D with <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Custom SLMs</span>
      </h1>
      <div className="text-xl text-center text-slate-500 mb-8 max-w-2xl mx-auto justify-center">
        Purpose-built Small Language Models that solve complex problems with precision. From pharmaceuticals to defense tech — AI tailored to your domain.
      </div>
      <div className="flex flex-col sm:flex-row gap-4 justify-center text-xl border-b border-slate-800">
        <button 
          className="bg-gradient-to-r from-blue-500 to-cyan-500 px-6 py-3 rounded-lg font-bold hover:shadow-lg hover:shadow-blue-500/50 transition text-black flex items-center justify-center gap-2"
          onClick={() => trackCustomEvent('hero_request_demo', { section: 'hero', button: 'request_demo' })}
        >
          Request Demo
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
        </button>
        <button 
          className="border border-slate-500 px-6 py-3 rounded-lg font-bold hover:bg-slate-800 transition"
          onClick={() => trackCustomEvent('hero_explore_solutions', { section: 'hero', button: 'explore_solutions' })}
        >
          Explore Solutions
        </button>

      </div>
      <hr className="h-px bg-white my-6" />

      <div className="flex flex-col gap-2">
                <p className="text-slate-300">Trusted by leading organizations in</p>
                <ul className="text-slate-500 flex flex-wrap gap-2 sm:gap-3 justify-center">
                    <li>Electronics</li>
                    <li>Pharmaceuticals</li>
                    <li>Aerospace</li>
                    <li>Defense</li>
                    <li>Automotive</li>
                </ul>
            </div>
    </section>
  )
}
