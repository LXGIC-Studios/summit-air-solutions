import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#2D3436] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-extrabold mb-4">Summit Air Solutions</h3>
            <p className="text-gray-400 text-sm mb-4">
              Keeping Nashville homes comfortable since 2009.
            </p>
            <p className="text-gray-400 text-sm">
              1234 Commerce St, Suite 200
              <br />
              Nashville, TN 37203
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider mb-4 text-gray-300">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {[
                { href: "/", label: "Home" },
                { href: "/services", label: "Services" },
                { href: "/about", label: "About" },
                { href: "/contact", label: "Contact" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 text-sm hover:text-[#00B894] transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services + Contact */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider mb-4 text-gray-300">
              Our Services
            </h4>
            <ul className="space-y-2 mb-6">
              {["Cooling", "Heating", "Air Quality", "Maintenance"].map((s) => (
                <li key={s} className="text-gray-400 text-sm">{s}</li>
              ))}
            </ul>
            <p className="text-gray-400 text-sm">
              <a href="tel:5558765432" className="hover:text-[#00B894] transition-colors duration-300">
                (555) 876-5432
              </a>
            </p>
            <p className="text-gray-400 text-sm">
              <a href="mailto:info@summitairsolutions.com" className="hover:text-[#00B894] transition-colors duration-300">
                info@summitairsolutions.com
              </a>
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 text-center">
          <p className="text-gray-500 text-xs">
            Built by{" "}
            <a
              href="https://lxgicstudios.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#00B894] transition-colors duration-300"
            >
              LXGIC Studios
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
