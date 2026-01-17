import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: "Industries", href: "#industries" },
    { label: "Why Choose", href: "#why" },
    { label: "How It Works", href: "#process" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-slate-800 bg-slate-950/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        <div className="flex h-16 items-center">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="h-8 w-8 shrink-0 rounded-lg bg-gradient-to-br from-blue-400 to-cyan-500 text-black font-bold flex items-center justify-center text-lg shadow-lg">
              SL
            </div>
            <span className="text-2xl font-semibold tracking-tight bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              SpectraLM
            </span>
          </div>

          {/* Centered Desktop Navigation */}
          <div className="flex-1 flex justify-center">
            <div className="hidden md:flex items-center gap-8 text-sm font-medium">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="relative transition-colors duration-200 text-slate-500 hover:text-white after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-blue-400 after:transition-all after:duration-200 hover:after:w-full"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Desktop CTAs */}
          <div className="hidden md:flex items-center gap-3">
            <button className="px-4 py-2 rounded-lg border border-slate-700 text-slate-200 font-semibold hover:bg-slate-800 transition-colors">
              Sign In
            </button>
            <button className="px-4 py-2 rounded-lg bg-gradient-to-br from-blue-400 to-cyan-500 text-white font-semibold shadow hover:brightness-110 transition-transform duration-200 hover:scale-[1.02] text-black">
              Get Started
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-slate-800 transition-colors"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
        </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute top-16 left-0 right-0 z-40 transition-all duration-300 ease-in-out overflow-hidden ${
          mobileMenuOpen ? "max-h-[500px] opacity-100 translate-y-0" : "max-h-0 opacity-0 -translate-y-4"
        }`}
      >
        <div className="bg-slate-900 border-t border-slate-800 w-full">
          <div className="max-w-7xl mx-auto px-4 py-4 space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="block px-4 py-3 rounded-lg text-slate-300 hover:bg-slate-800 hover:text-white transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}

            <div className="pt-2 flex gap-3">
              <button className="flex-1 px-4 py-2.5 rounded-lg border border-slate-700 text-slate-200 font-semibold hover:bg-slate-800 transition-colors">
                Sign In
              </button>
              <button className="flex-1 px-4 py-2.5 rounded-lg bg-gradient-to-br from-blue-400 to-cyan-500 text-white font-semibold shadow hover:brightness-110 transition-transform duration-200 hover:scale-[1.01]">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
