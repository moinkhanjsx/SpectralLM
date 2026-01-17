interface ProcessStepProps {
  step: string;
  title: string;
  desc: string;
}

function ProcessStep({ step, title, desc }: ProcessStepProps) {
  return (
    <div className="relative">
      <div className="bg-slate-900 border-none flex flex-col gap-1 rounded-lg p-6">
        <div className="text-5xl font-bold text-blue-400 mb-3">{step}</div>
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-sm text-slate-300">{desc}</p>
      </div>
    </div>
  );
}

import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

export default function Process() {
  const [ref, isIntersecting] = useIntersectionObserver({ threshold: 0.1 });

  const steps = [
    {
      step: "01",
      title: "Discovery",
      desc: "We analyze your domain requirements, data sources, and specific use cases to design the optimal SLM architecture.",
    },
    {
      step: "02",
      title: "Data Integration",
      desc: "Secure ingestion of your proprietary data, research papers, and domain knowledge into our training pipeline.",
    },
    {
      step: "03",
      title: "Custom Training",
      desc: "Fine-tuning on your specific terminology, methodologies, and constraints for maximum relevance and accuracy.",
    },
    {
      step: "04",
      title: "Deployment",
      desc: "Flexible deployment options — cloud, on-premise, or hybrid — with full API access and monitoring tools.",
    },
  ];

  return (
    <section
      id="process"
      className="bg-slate-900/50 py-24  border-slate-800"
    >
      <div className="mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center items-center gap-10">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
          From Concept
          <span className="tracking-tight bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            &nbsp;to Production
          </span>
        </h2>
        <p className="text-center text-slate-400 mb-16 max-w-2xl mx-auto">
          A streamlined process to deliver your custom SLM, typically in 4-8
          weeks.
        </p>

        <div ref={ref} className={`grid md:grid-cols-4 gap-6 ${isIntersecting ? 'animate' : ''}`}>
          {steps.map((item, idx) => (
            <ProcessStep key={idx} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
}
