import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

interface FooterLink {
  label: string;
  href: string;
}

interface FooterSection {
  title: string;
  links: FooterLink[];
}

function FooterSection({ title, links }: FooterSection) {
  return (
    <div className="">
      <h4 className="font-bold mb-4">{title}</h4>
      <ul className="space-y-2 text-sm text-slate-400">
        {links.map((link) => (
          <li key={link.label}>
            <a href={link.href} className="hover:text-blue-400 transition">
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Footer() {
  const sections: FooterSection[] = [
    {
      title: "Solutions",
      links: [
        { label: "Electronics", href: "#" },
        { label: "Pharmaceuticals", href: "#" },
        { label: "Aerospace", href: "#" },
        { label: "Defense Tech", href: "#" },
      ],
    },
    {
      title: "Company",
      links: [
        { label: "About Us", href: "#" },
        { label: "Careers", href: "#" },
        { label: "Blog", href: "#" },
        { label: "Contact", href: "#" },
      ],
    },
  ];

  return (
    <footer className="border-t  border-slate-800 bg-slate-900/50 py-12">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-5 md:flex-row mb-8 pb-8 ">
          <div className="w-full md:w-1/2 md:px-5 flex flex-col gap-2 mb-8 md:mb-0">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 shrink-0 rounded-lg bg-gradient-to-br from-blue-400 to-cyan-500 text-black font-bold flex items-center justify-center text-lg shadow-lg">
                SL
              </div>
              <span className="text-2xl font-semibold tracking-tight bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-white">
                SpectraLM
              </span>
            </div>

            <p className="text-slate-400 text-sm">
              Industry-specific Small Language Models that accelerate R&D and
              solve complex problems with precision.
            </p>
            <div className="flex gap-3">
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">
                <FontAwesomeIcon icon={faTwitter} className="text-xl" style={{ color: 'transparent', stroke: 'white', strokeWidth: '3px', fill: 'none' }} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">
                <FontAwesomeIcon icon={faLinkedin} className="text-xl" style={{ color: 'transparent', stroke: 'white', strokeWidth: '3px', fill: 'none' }} />
              </a>
              <a href="mailto:contact@spectralm.com" className="hover:text-white transition">
                <FontAwesomeIcon icon={faEnvelope} className="text-xl" style={{ color: 'transparent', stroke: 'white', strokeWidth: '3px', fill: 'none' }} />
              </a>
            </div>
          </div>
          <div className="w-full md:w-1/2">
            <div className="flex flex-col md:flex-row justify-around gap-4 md:gap-0">
              {sections.map((section) => (
                <FooterSection key={section.title} {...section} />
              ))}
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between border-t border-slate-800 pt-8 text-center text-sm text-slate-400 gap-4 md:gap-0">
          <div className="flex flex-col text-start md:flex-row ">
            © 2026 SpectraLM. All rights reserved.{" "}
            <p className="font-bold"> &nbsp;| THE STSARC PRODUCT</p>
          </div>
          <div className="flex justify-center md:flex-col md:flex-row gap-5 md:gap-5 items-center">
            <ul className="flex gap-5 md:gap-5">
              <li>Privacy Policy</li>
              <li>Terms of Service</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
