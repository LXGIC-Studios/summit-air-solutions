import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-charcoal text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        <div>
          <h3 className="text-xl font-extrabold mb-5 tracking-tight">
            <span className="text-teal">Summit</span> Air Solutions
          </h3>
          <p className="text-sm text-white/50 leading-relaxed">
            Professional HVAC services for residential and commercial properties. Keeping homes comfortable since 2009.
          </p>
        </div>
        <div>
          <h4 className="font-bold text-sm uppercase tracking-widest mb-5 text-white/70">Quick Links</h4>
          <ul className="space-y-3 text-sm text-white/50">
            <li><Link href="/" className="hover:text-teal transition-colors duration-300">Home</Link></li>
            <li><Link href="/services" className="hover:text-teal transition-colors duration-300">Services</Link></li>
            <li><Link href="/about" className="hover:text-teal transition-colors duration-300">About</Link></li>
            <li><Link href="/contact" className="hover:text-teal transition-colors duration-300">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold text-sm uppercase tracking-widest mb-5 text-white/70">Services</h4>
          <ul className="space-y-3 text-sm text-white/50">
            <li>Heating Systems</li>
            <li>AC Installation & Repair</li>
            <li>Indoor Air Quality</li>
            <li>Maintenance Plans</li>
            <li>24/7 Emergency Service</li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold text-sm uppercase tracking-widest mb-5 text-white/70">Contact</h4>
          <ul className="space-y-3 text-sm text-white/50">
            <li>
              <a href="tel:5558765432" className="hover:text-teal transition-colors duration-300 font-semibold text-white">(555) 876-5432</a>
            </li>
            <li>info@summitairsolutions.com</li>
            <li>1234 Summit Drive<br />Nashville, TN 37201</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10 text-center py-8 text-sm text-white/40">
        &copy; {new Date().getFullYear()} Summit Air Solutions. All rights reserved. |{" "}
        <a href="https://lxgicstudios.com" target="_blank" rel="noopener noreferrer" className="hover:text-teal transition-colors duration-300">
          Built by LXGIC Studios
        </a>
      </div>
    </footer>
  );
}
