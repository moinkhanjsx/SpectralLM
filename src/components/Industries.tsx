import ElectronicIcon from '../assets/Electronic Icon.svg';
import PhysicsIcon from '../assets/Physics.svg';
import PharmaceuticalsIcon from '../assets/Pharmaceuticals.svg';
import MedicineIcon from '../assets/medecine.svg';
import AutomotiveIcon from '../assets/Automotive.svg';
import SpaceTechIcon from '../assets/Space Tech.svg';
import DroneTechIcon from '../assets/Drone Tech.svg';
import DefenceIcon from '../assets/Defence.svg';

interface IndustryCardProps {
  title: string
  desc: string
  icon: string
}

function IndustryCard({ title, desc, icon }: IndustryCardProps) {
  return (
    <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-6 hover:border-blue-500 transition group">
      <div className="w-12 h-12 flex items-center justify-center rounded-lg mb-4 group-hover:shadow-lg group-hover:shadow-blue-500/30 transition bg-gradient-to-br from-blue-400/20 to-cyan-400/20">
        <img src={icon} alt={title} className="w-8 h-8" />
      </div>
      <h3 className="text-lg font-bold mb-2">{title}</h3>
      <p className="text-sm text-slate-400">{desc}</p>
    </div>
  )
}

import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

export default function Industries() {
  const [ref, isIntersecting] = useIntersectionObserver({ threshold: 0.1 });

  const industries = [
    { title: 'Electronics', desc: 'Circuit design optimization, fault detection, and component analysis', icon: ElectronicIcon },
    { title: 'Physics', desc: 'Simulation acceleration, particle analysis, and theoretical modeling', icon: PhysicsIcon },
    { title: 'Pharmaceuticals', desc: 'Drug discovery, molecular modeling, and clinical trial optimization', icon: PharmaceuticalsIcon },
    { title: 'Medicine', desc: 'Diagnostic assistance, treatment planning, and research synthesis', icon: MedicineIcon },
    { title: 'Automotive', desc: 'Autonomous systems, safety analysis, and manufacturing optimization', icon: AutomotiveIcon },
    { title: 'Space Tech', desc: 'Mission planning, trajectory optimization, and satellite analysis', icon: SpaceTechIcon },
    { title: 'Drone Tech', desc: 'Flight path optimization, swarm intelligence, and payload analysis', icon: DroneTechIcon },
    { title: 'Defense', desc: 'Strategic analysis, threat detection, and secure communications', icon: DefenceIcon }
  ]

  return (
    <section id="industries" className="py-24 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center items-center gap-10">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">Built for 
            <span className="tracking-tight bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
             &nbsp;Your Industry
            </span>
        </h2>
        <p className="text-center text-slate-400 mb-16 max-w-2xl mx-auto">
          Specialized language models trained on domain-specific data, delivering unprecedented accuracy for your unique challenges.
        </p>

        <div ref={ref} className={`grid md:grid-cols-2 lg:grid-cols-4 gap-6 ${isIntersecting ? 'animate' : ''}`}>
          {industries.map((industry, idx) => (
            <IndustryCard key={idx} {...industry} />
          ))}
        </div>
      </div>
    </section>
  )
}
