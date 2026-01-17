import slm from "../assets/slm.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBullseye, faBolt, faShieldAlt, faChartLine } from '@fortawesome/free-solid-svg-icons';

interface FeatureCardProps {
  title: string;
  desc: string;
  icon: any;
}

function FeatureCard({ title, desc, icon }: FeatureCardProps) {
  return (
    <div className="text-sm border-none flex gap-4 items-start">
      <div className="w-14 h-14 bg-slate-700 rounded-lg flex-shrink-0 group-hover:shadow-lg group-hover:shadow-blue-500/30 transition flex items-center justify-center">
        <FontAwesomeIcon icon={icon} className="text-blue-400 text-2xl" />
      </div>
      <div className="flex-1">
        <h3 className="text-lg font-bold mb-3">{title}</h3>
        <p className="text-slate-300 leading-relaxed">{desc}</p>
      </div>
    </div>
  );
}

import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

export default function WhyChoose() {
  const [ref, isIntersecting] = useIntersectionObserver({ threshold: 0.1 });

  const features = [
    {
      title: "Domain Precision",
      desc: "Models trained exclusively on your industry data. No generic responses — only accurate, relevant insights for your specific use case.",
      icon: faBullseye,
    },
    {
      title: "10x Faster Research",
      desc: "Accelerate hypothesis testing, literature review, and data analysis. What took weeks now takes hours.",
      icon: faBolt,
    },
    {
      title: "Enterprise Security",
      desc: "On-premise deployment options, data encryption, and compliance with industry regulations including HIPAA, ITAR, and ISO 27001.",
      icon: faShieldAlt,
    },
    {
      title: "Measurable ROI",
      desc: "Track productivity gains, error reduction, and time savings with comprehensive analytics dashboards.",
      icon: faChartLine,
    },
  ];

  return (
    <section id="why" className="py-24 flex flex-col md:flex-row overflow-x-hidden">
      <div className="w-full md:w-1/2 px-4 sm:px-6 lg:px-8 flex flex-col gap-5">
        <h2 className="text-4xl md:text-5xl font-bold text-start mb-4">
          Why Choose
          <span className="tracking-tight bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            &nbsp;Custom SLMs?
          </span>
        </h2>
        <p className="text-start text-slate-400 mb-16 max-w-2xl mx-auto">
          Generic AI models can't match the precision required for specialized
          R&D. Our Small Language Models are purpose-built to understand your
          domain's terminology, methodologies, and constraints.
        </p>

        <div ref={ref} className={`flex flex-col gap-5 ${isIntersecting ? 'animate' : ''}`}>
          {features.map((feature, idx) => (
            <FeatureCard key={idx} {...feature} />
          ))}
        </div>
      </div>
      <div className="w-full md:w-1/2 mt-16 md:mt-0 flex justify-center items-center">
        <img
          src={slm}
          alt="SLM Diagram"
          className="w-full md:w-[70%] rounded-lg shadow-lg"
          loading="lazy"
        />
      </div>
    </section>
  );
}
