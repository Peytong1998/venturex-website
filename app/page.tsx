'use client'
import Link from "next/link"
import Image from "next/image"
import { useEffect, useState } from "react"

const ACCENT = "#3EA8FF"

// SVG icons
const CampaignIcon = () => (
  <svg width="32" height="32" fill="none" viewBox="0 0 24 24" stroke={ACCENT}><rect x="4" y="4" width="16" height="16" rx="3" strokeWidth="2"/><path d="M8 8h8M8 12h8M8 16h4" strokeWidth="2" strokeLinecap="round"/></svg>
)
const StrategyIcon = () => (
  <svg width="32" height="32" fill="none" viewBox="0 0 24 24" stroke={ACCENT}><circle cx="12" cy="12" r="9" strokeWidth="2"/><path d="M12 7v5l3 3" strokeWidth="2" strokeLinecap="round"/></svg>
)
const EmailIcon = () => (
  <svg width="32" height="32" fill="none" viewBox="0 0 24 24" stroke={ACCENT}><rect x="3" y="5" width="18" height="14" rx="2" strokeWidth="2"/><path d="M3 7l9 6 9-6" strokeWidth="2"/></svg>
)
const SupportIcon = () => (
  <svg width="32" height="32" fill="none" viewBox="0 0 24 24" stroke={ACCENT}><circle cx="12" cy="12" r="10" strokeWidth="2"/><path d="M8 15s1.5 2 4 2 4-2 4-2" strokeWidth="2" strokeLinecap="round"/><circle cx="9" cy="10" r="1" fill={ACCENT}/><circle cx="15" cy="10" r="1" fill={ACCENT}/></svg>
)
const CheckIcon = () => (
  <svg width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="#3EA8FF"><circle cx="12" cy="12" r="11" strokeWidth="2"/><path d="M7 13l3 3 7-7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
)
const LinkedInIcon = () => (
  <svg width="20" height="20" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="16" cy="16" r="16" fill="#0A66C2"/>
    <path d="M11.75 13.5H9.5V22.5H11.75V13.5ZM10.625 12.5C11.25 12.5 11.75 12 11.75 11.375C11.75 10.75 11.25 10.25 10.625 10.25C10 10.25 9.5 10.75 9.5 11.375C9.5 12 10 12.5 10.625 12.5ZM22.5 17.25C22.5 15.125 21.25 14 19.5 14C18.5 14 17.75 14.5 17.5 15H17.5V13.5H15.25V22.5H17.5V17.75C17.5 16.75 18 16.25 18.75 16.25C19.5 16.25 20 16.75 20 17.75V22.5H22.25V17.25H22.5Z" fill="white"/>
  </svg>
)

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  useEffect(() => {
    const handleSmoothScroll = (e: Event) => {
      const targetElement = e.currentTarget as HTMLAnchorElement | null;
      if (!targetElement) return;
      const href = targetElement.getAttribute('href');
      if (href && href.startsWith('#')) {
        const section = document.querySelector(href);
        if (section) {
          e.preventDefault();
          section.scrollIntoView({ behavior: 'smooth' });
          setMenuOpen(false); // close menu on mobile after click
        }
      }
    };
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => link.addEventListener('click', handleSmoothScroll));
    return () => {
      links.forEach(link => link.removeEventListener('click', handleSmoothScroll));
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-white text-black font-sans">
      {/* Header */}
      <header className="w-full py-6 px-8 flex items-center justify-between border-b border-gray-100 bg-white">
        <div className="flex items-center gap-3">
          <Image src="/VX.png" alt="Venture X Logo" width={36} height={36} className="rounded" />
          <span className="font-bold text-2xl tracking-tight">Venture X</span>
        </div>
        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-8 text-base font-medium">
          <Link href="#" className="hover:text-[${ACCENT}] transition-colors">Home</Link>
          <Link href="#services" className="hover:text-[${ACCENT}] transition-colors">Services</Link>
          <Link href="#about" className="hover:text-[${ACCENT}] transition-colors">About</Link>
          <Link href="#contact" className="hover:text-[${ACCENT}] transition-colors">Contact</Link>
        </nav>
        {/* Hamburger Icon for Mobile */}
        <button
          className="md:hidden flex flex-col justify-center items-center w-10 h-10 rounded focus:outline-none focus:ring-2 focus:ring-[${ACCENT}] z-50"
          aria-label="Open menu"
          onClick={() => setMenuOpen(true)}
        >
          <span className={`block w-6 h-0.5 bg-black mb-1 transition-all ${menuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
          <span className={`block w-6 h-0.5 bg-black mb-1 transition-all ${menuOpen ? 'opacity-0' : ''}`}></span>
          <span className={`block w-6 h-0.5 bg-black transition-all ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
        </button>

        {/* Mobile Menu Overlay and Drawer */}
        {menuOpen && (
          <>
            {/* Overlay */}
            <div
              className="fixed inset-0 bg-black/40 z-40 md:hidden"
              onClick={() => setMenuOpen(false)}
            />
            {/* Drawer */}
            <nav
              className="fixed top-0 right-0 z-50 w-64 h-full bg-white shadow-lg flex flex-col gap-8 text-lg font-medium p-10 transition-transform duration-200 md:hidden"
              style={{ transform: menuOpen ? 'translateX(0)' : 'translateX(100%)' }}
              aria-label="Mobile menu"
            >
              <button
                className="self-end mb-8 text-3xl font-bold text-gray-400 hover:text-black focus:outline-none"
                aria-label="Close menu"
                onClick={() => setMenuOpen(false)}
              >
                &times;
              </button>
              <Link href="#" onClick={() => setMenuOpen(false)} className="hover:text-[${ACCENT}] transition-colors">Home</Link>
              <Link href="#services" onClick={() => setMenuOpen(false)} className="hover:text-[${ACCENT}] transition-colors">Services</Link>
              <Link href="#about" onClick={() => setMenuOpen(false)} className="hover:text-[${ACCENT}] transition-colors">About</Link>
              <Link href="#contact" onClick={() => setMenuOpen(false)} className="hover:text-[${ACCENT}] transition-colors">Contact</Link>
            </nav>
          </>
        )}
      </header>

      {/* Hero Section */}
      <section className="w-full flex flex-col items-center justify-center text-center py-32 px-4" style={{letterSpacing: '-0.01em'}}>
        <h1 className="text-5xl md:text-6xl font-extrabold mb-6 max-w-3xl leading-tight">Modern Braze Consulting for Ambitious Teams</h1>
        <p className="text-xl text-gray-600 mb-10 max-w-xl">Venture X delivers expert Braze solutions with clarity, speed, and a personal touch. Let's elevate your marketing automation—simply and effectively.</p>
        <Link href="#contact" className="inline-block px-8 py-4 rounded-full text-lg font-semibold bg-[#3EA8FF] text-white shadow hover:opacity-90 transition">Work With Me</Link>
      </section>

      {/* Services Section */}
      <section id="services" className="w-full py-28 px-4 bg-[#F7F9FB]">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="bg-white rounded-xl shadow-sm p-8 flex flex-col items-center text-center border border-gray-100">
              <div className="mb-4">{CampaignIcon()}</div>
              <h3 className="font-semibold text-lg mb-2">Braze Campaign Execution</h3>
              <p className="text-gray-600">End-to-end campaign setup, template creation, and launch for Braze.</p>
            </div>
            <div className="bg-white rounded-xl shadow-sm p-8 flex flex-col items-center text-center border border-gray-100">
              <div className="mb-4">{StrategyIcon()}</div>
              <h3 className="font-semibold text-lg mb-2">Strategy & Optimization</h3>
              <p className="text-gray-600">Technical audits, troubleshooting, and ongoing optimization for results.</p>
            </div>
            <div className="bg-white rounded-xl shadow-sm p-8 flex flex-col items-center text-center border border-gray-100">
              <div className="mb-4">{EmailIcon()}</div>
              <h3 className="font-semibold text-lg mb-2">Email HTML Development</h3>
              <p className="text-gray-600">Responsive, cross-client compatible email templates that look great everywhere.</p>
            </div>
            <div className="bg-white rounded-xl shadow-sm p-8 flex flex-col items-center text-center border border-gray-100">
              <div className="mb-4">{SupportIcon()}</div>
              <h3 className="font-semibold text-lg mb-2">Personalized Support</h3>
              <p className="text-gray-600">Direct, one-on-one consulting and fast communication for your team.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="w-full py-28 px-4">
        <div className="max-w-xl mx-auto">
          <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-10 flex flex-col gap-8">
            <div className="text-center">
              <h2 className="text-2xl font-bold mb-2">Monthly Retainer</h2>
              <div className="flex items-end justify-center gap-2 mb-4">
                <span className="text-5xl font-extrabold">$2,500</span>
                <span className="text-gray-400 text-lg mb-1">/ 4 Weeks</span>
              </div>
            </div>
            <div>
              <div className="font-semibold mb-2">Included Support:</div>
              <ul className="flex flex-col gap-3 mb-6">
                <li className="flex items-start gap-2"><span>{CheckIcon()}</span>Direct Slack Connect Support — Fast responses from Braze experts for technical guidance and questions</li>
                <li className="flex items-start gap-2"><span>{CheckIcon()}</span>Up to 20 Hours of Braze Consulting — Hands-on, async execution (campaign builds, QA, logic setup)</li>
                <li className="flex items-start gap-2"><span>{CheckIcon()}</span>Biweekly 30-Minute Syncs — Use these to align on priorities, unblock issues, and review performance</li>
              </ul>
              <div className="font-semibold mb-2">Best For:</div>
              <ul className="flex flex-col gap-3 mb-6">
                <li className="flex items-start gap-2"><span>{CheckIcon()}</span>Businesses seeking reliable Braze execution without hiring full-time</li>
                <li className="flex items-start gap-2"><span>{CheckIcon()}</span>Teams needing expert campaign support</li>
                <li className="flex items-start gap-2"><span>{CheckIcon()}</span>Organizations aiming to maximize Braze ROI</li>
              </ul>
              <a href="#contact" className="block w-full mt-4 px-8 py-4 rounded-lg text-lg font-semibold bg-[#181A1B] text-white text-center shadow hover:opacity-90 transition">Check Availability</a>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="w-full py-28 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">About Venture X</h2>
          <p className="text-lg text-gray-700">Venture X is a modern Braze consultancy focused on clarity, speed, and results. We help ambitious teams unlock the full power of Braze with expert guidance, hands-on execution, and a commitment to simplicity. Our approach is always personal, transparent, and tailored to your needs.</p>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="w-full py-28 px-4 bg-[#F7F9FB]">
        <div className="max-w-xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Contact</h2>
          <form className="flex flex-col gap-6 bg-white p-10 rounded-xl shadow-sm border border-gray-100">
            <input type="text" name="name" placeholder="Name" className="px-4 py-3 rounded border border-gray-200 focus:border-[${ACCENT}] outline-none text-base" required />
            <input type="email" name="email" placeholder="Email" className="px-4 py-3 rounded border border-gray-200 focus:border-[${ACCENT}] outline-none text-base" required />
            <textarea name="message" placeholder="Message" rows={5} className="px-4 py-3 rounded border border-gray-200 focus:border-[${ACCENT}] outline-none text-base resize-none" required />
            <button type="submit" className="mt-2 px-8 py-3 rounded-full bg-[#3EA8FF] text-white font-semibold text-lg shadow hover:opacity-90 transition">Send Message</button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full py-8 px-4 border-t border-gray-100 bg-white mt-auto">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-sm text-gray-500">© {new Date().getFullYear()} Venture X. All rights reserved.</div>
          <nav className="flex gap-6 text-sm text-gray-500">
            <Link href="#" className="hover:text-[${ACCENT}]">Home</Link>
            <Link href="#services" className="hover:text-[${ACCENT}]">Services</Link>
            <Link href="#about" className="hover:text-[${ACCENT}]">About</Link>
            <Link href="#contact" className="hover:text-[${ACCENT}]">Contact</Link>
          </nav>
          <div className="flex gap-4">
            <a href="https://www.linkedin.com/in/peyton-griffin/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:opacity-80">{LinkedInIcon()}</a>
          </div>
        </div>
      </footer>
    </div>
  )
}
