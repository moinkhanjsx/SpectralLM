import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

export default function CTA() {
  const [ref, isIntersecting] = useIntersectionObserver({ threshold: 0.1 });

  return (
    <section ref={ref} id="contact" className={`py-24 mx-auto max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 text-center flex flex-col justify-center items-center gap-10 overflow-x-hidden ${isIntersecting ? 'animate' : ''}`}>
      <div className="md:w-[70%] mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col gap-5">
        <h2 className="text-3xl md:text-5xl font-bold mb-6">Ready to Transform Your R&D?</h2>
        <p className="text-xl text-slate-300 mb-8">
          Join the enterprises already accelerating discovery with custom SLMs. Let's discuss how we can build the perfect model for your needs.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
          <button className="bg-gradient-to-r from-blue-500 to-cyan-500 px-10 py-4 rounded-lg font-semibold hover:shadow-lg hover:shadow-blue-500/50 transition text-black font-semibold flex items-center justify-center gap-2">
            <FontAwesomeIcon icon={faEnvelope} className="text-black" />
            Schedule Consultation
          </button>
          <button className="border border-slate-500 px-10 py-4 rounded-lg font-semibold hover:bg-slate-800 transition flex items-center justify-center gap-2">
            View Case Studies
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </button>
        </div>
        <p className="text-sm text-slate-400">No commitment required • Response within 24 hours</p>
      </div>
    </section>
  )
}
