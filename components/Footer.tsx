import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-charcoal text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-lg font-bold mb-4">
            <span className="text-teal">Summit</span> Air Solutions
          </h3>
          <p className="text-sm text-gray-400">
            Professional HVAC services for residential and commercial properties. Keeping your home comfortable since 2009.
          </p>
        </div>
        <div>
          <h4 className="font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm text-gray-400">
            <li><Link href="/" className="hover:text-teal transition-colors">Home</Link></li>
            <li><Link href="/services" className="hover:text-teal transition-colors">Services</Link></li>
            <li><Link href="/about" className="hover:text-teal transition-colors">About</Link></li>
            <li><Link href="/contact" className="hover:text-teal transition-colors">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-4">Contact</h4>
          <ul className="space-y-2 text-sm text-gray-400">
            <li>📞 (555) 876-5432</li>
            <li>✉️ info@summitairsolutions.com</li>
            <li>📍 1234 Summit Drive, Denver, CO 80202</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-gray-800 text-center py-6 text-sm text-gray-500">
        © {new Date().getFullYear()} Summit Air Solutions. All rights reserved. |{" "}
        <a href="https://lxgicstudios.com" target="_blank" rel="noopener noreferrer" className="hover:text-teal transition-colors">
          Built by LXGIC Studios
        </a>
      </div>
    </footer>
  );
}
