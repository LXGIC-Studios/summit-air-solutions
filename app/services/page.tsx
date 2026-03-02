import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "HVAC Services | Summit Air Solutions - Nashville",
  description: "Cooling, heating, air quality, and maintenance services for Nashville homes. Same-day emergency service available.",
};

const services = [
  {
    title: "Cooling Services",
    image: "/images/comfortable-home.jpg",
    includes: [
      "Central AC installation and replacement",
      "AC repair and diagnostics",
      "Ductless mini-split systems",
      "Refrigerant recharge and leak repair",
      "Thermostat installation and calibration",
    ],
    signs: [
      "Warm air blowing from vents",
      "Unusual noises from the unit",
      "Frequent cycling on and off",
      "Higher than normal energy bills",
      "Uneven cooling between rooms",
    ],
    brands: "Carrier, Trane, Lennox, Rheem, Goodman, Daikin",
  },
  {
    title: "Heating Services",
    image: "/images/family.jpg",
    includes: [
      "Furnace installation and replacement",
      "Heat pump systems",
      "Boiler service and repair",
      "Duct sealing and insulation",
      "Heating system tune-ups",
    ],
    signs: [
      "Cold spots in your home",
      "Yellow or flickering pilot light",
      "Strange smells when heat runs",
      "System is over 15 years old",
      "Frequent repairs needed",
    ],
    brands: "Carrier, Trane, Lennox, Rheem, Goodman, Daikin",
  },
  {
    title: "Air Quality Solutions",
    image: "/images/home-interior.jpg",
    includes: [
      "Whole-home air purification",
      "HEPA filtration systems",
      "Humidity control (humidifiers & dehumidifiers)",
      "UV germicidal lights",
      "Duct cleaning and sanitization",
    ],
    signs: [
      "Excessive dust in your home",
      "Allergy symptoms worsening indoors",
      "Musty or stale odors",
      "Condensation on windows",
      "Family members with respiratory issues",
    ],
    brands: "Aprilaire, Honeywell, iWave, Lennox PureAir",
  },
  {
    title: "Maintenance Plans",
    image: "/images/tools.jpg",
    includes: [
      "Bi-annual system inspections",
      "Priority scheduling",
      "15% discount on all repairs",
      "No overtime charges",
      "Filter replacements included",
    ],
    signs: [
      "You haven't had a tune-up in over a year",
      "Energy bills are creeping up",
      "System performance has declined",
      "Equipment is 5+ years old",
      "You want to avoid surprise breakdowns",
    ],
    brands: "All major brands serviced",
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Page Header */}
      <section className="bg-[#2D3436] pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-[#00B894] text-sm font-bold uppercase tracking-widest mb-4">
            Our Services
          </p>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-4">
            Complete HVAC Solutions
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl">
            From installation to maintenance, we handle every aspect of your home comfort system.
          </p>
        </div>
      </section>

      {/* Service Sections */}
      {services.map((service, i) => (
        <section
          key={service.title}
          className={`py-24 ${i % 2 === 0 ? "bg-white" : "bg-[#F8F9FA]"}`}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className={`flex flex-col ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} gap-12 items-center`}>
              {/* Image */}
              <div className="flex-1 relative h-[350px] w-full rounded-xl overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Content */}
              <div className="flex-1">
                <h2 className="text-3xl font-extrabold text-[#2D3436] mb-6">
                  {service.title}
                </h2>

                <h3 className="text-sm font-bold uppercase tracking-wider text-[#00B894] mb-3">
                  What&apos;s Included
                </h3>
                <ul className="space-y-2 mb-6">
                  {service.includes.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-gray-600">
                      <svg className="w-5 h-5 text-[#00B894] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>

                <h3 className="text-sm font-bold uppercase tracking-wider text-[#00B894] mb-3">
                  Signs You Need Service
                </h3>
                <ul className="space-y-2 mb-6">
                  {service.signs.map((sign) => (
                    <li key={sign} className="flex items-start gap-2 text-gray-600">
                      <svg className="w-5 h-5 text-gray-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
                      </svg>
                      {sign}
                    </li>
                  ))}
                </ul>

                <p className="text-sm text-gray-400 mb-6">
                  <span className="font-bold">Brands:</span> {service.brands}
                </p>

                <Link
                  href="/contact"
                  className="inline-block bg-[#00B894] text-white font-bold px-8 py-3 rounded-lg hover:bg-[#00a884] transition-colors duration-300"
                >
                  Schedule Service
                </Link>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Emergency Service */}
      <section className="bg-[#2D3436] py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-8">
            <svg className="w-16 h-16 text-[#00B894] mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
            </svg>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
            Emergency HVAC Service
          </h2>
          <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
            HVAC emergencies don&apos;t wait, and neither do we. Our team is available around the clock for urgent heating and cooling issues.
          </p>
          <a
            href="tel:5558765432"
            className="inline-block bg-[#00B894] text-white font-bold px-10 py-4 rounded-lg hover:bg-[#00a884] transition-colors duration-300 text-lg"
          >
            Call (555) 876-5432. Available 24/7
          </a>
        </div>
      </section>
    </>
  );
}
