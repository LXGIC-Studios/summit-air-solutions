import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Services | Summit Air Solutions",
  description: "AC installation & repair, heating systems, indoor air quality, maintenance plans, and 24/7 emergency HVAC service.",
};

const services = [
  {
    icon: "cooling",
    title: "AC Installation & Repair",
    image: "/images/hvac-unit.jpg",
    description: "From new high-efficiency central air systems to emergency repairs on your existing unit, our certified technicians handle it all. We work with all major brands including Carrier, Trane, Lennox, and Goodman.",
    includes: ["Full load calculation for proper sizing", "Energy-efficient system recommendations", "Same-day emergency repairs", "Parts and labor warranty"],
    signs: ["Uneven cooling throughout your home", "Rising energy bills", "Unusual noises from the unit", "System is 10+ years old"],
    brands: "Carrier, Trane, Lennox, Goodman, Rheem, Daikin",
  },
  {
    icon: "heating",
    title: "Heating Systems",
    image: "/images/technician-work.jpg",
    description: "Stay warm with expert furnace and heat pump installation, repair, and maintenance. We service gas, electric, and dual-fuel systems. Our technicians diagnose issues fast and carry common parts on every truck.",
    includes: ["Furnace installation and replacement", "Heat pump service", "Gas and electric systems", "Same-visit repairs"],
    signs: ["Cold spots in your home", "Frequent cycling on and off", "Yellow pilot light", "Strange smells when running"],
    brands: "Carrier, Trane, Lennox, Rheem, Goodman, Daikin",
  },
  {
    icon: "airquality",
    title: "Indoor Air Quality",
    image: "/images/comfortable-home.jpg",
    description: "Breathe easier with whole-home air purification systems, humidifiers, dehumidifiers, and UV germicidal lights. We also provide professional air duct cleaning to remove dust, allergens, and contaminants.",
    includes: ["Whole-home air purifiers", "Humidifier and dehumidifier installation", "UV germicidal lights", "Professional duct cleaning"],
    signs: ["Excessive dust buildup", "Allergy symptoms indoors", "Musty or stale odors", "Inconsistent humidity levels"],
    brands: "Carrier, Trane, Lennox, Honeywell, Aprilaire",
  },
  {
    icon: "maintenance",
    title: "Preventive Maintenance Plans",
    image: "/images/modern-home.jpg",
    description: "Our Summit Shield maintenance plans include biannual tune-ups, priority scheduling, 15% parts discounts, and no overtime charges. Regular maintenance extends equipment life by up to 40%.",
    includes: ["Biannual system tune-ups", "Priority scheduling", "15% parts discount", "No overtime charges"],
    signs: ["No maintenance in over a year", "System running less efficiently", "Higher than normal energy bills", "Want to protect your warranty"],
    brands: "All major HVAC brands serviced",
  },
];

const iconMap: Record<string, React.ReactNode> = {
  heating: (
    <svg className="w-8 h-8 text-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 6.75 6.75 0 0012 15a6.75 6.75 0 003.362-9.786z" />
    </svg>
  ),
  cooling: (
    <svg className="w-8 h-8 text-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v18m0-18l4 4m-4-4L8 7m4 14l4-4m-4 4l-4-4M3 12h18M3 12l4-4m-4 4l4 4m14-4l-4-4m4 4l-4 4" />
    </svg>
  ),
  airquality: (
    <svg className="w-8 h-8 text-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 12h4m-2-2v4m6-6c2.5 0 4.5 1 6 3-1.5 2-3.5 3-6 3s-4.5-1-6-3c.5-.67 1.2-1.27 2-1.73" />
    </svg>
  ),
  maintenance: (
    <svg className="w-8 h-8 text-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
      <rect x="3" y="4" width="18" height="18" rx="2" strokeLinecap="round" strokeLinejoin="round" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M16 2v4M8 2v4M3 10h18" />
    </svg>
  ),
};

export default function ServicesPage() {
  return (
    <>
      <section className="bg-charcoal py-28 md:py-32 relative overflow-hidden">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white mb-5 tracking-tight">Our Services</h1>
          <p className="text-white/60 max-w-2xl text-xl font-light">Comprehensive HVAC solutions tailored to your home. Every service backed by our satisfaction guarantee.</p>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
          {services.map((s, i) => (
            <div key={s.title} className={`rounded-2xl overflow-hidden ${i % 2 === 0 ? "bg-white border border-gray-100" : "bg-gray-light"}`}>
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="relative h-64 lg:h-auto min-h-[300px]">
                  <Image src={s.image} alt={s.title} fill className="object-cover" />
                </div>
                <div className="p-10 md:p-14">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-14 h-14 bg-teal/10 rounded-2xl flex items-center justify-center shrink-0">
                      {iconMap[s.icon]}
                    </div>
                    <h2 className="text-3xl font-extrabold text-charcoal tracking-tight">{s.title}</h2>
                  </div>
                  <p className="text-gray-500 mb-8 leading-relaxed text-lg">{s.description}</p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-8">
                    <div>
                      <h3 className="font-bold text-charcoal mb-3">What It Includes</h3>
                      <ul className="space-y-2 text-sm text-gray-500">
                        {s.includes.map((item) => (
                          <li key={item} className="flex items-start gap-2">
                            <svg className="w-4 h-4 text-teal mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                            </svg>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h3 className="font-bold text-charcoal mb-3">Signs You Need It</h3>
                      <ul className="space-y-2 text-sm text-gray-500">
                        {s.signs.map((item) => (
                          <li key={item} className="flex items-start gap-2">
                            <svg className="w-4 h-4 text-charcoal/40 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                              <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01M12 3a9 9 0 100 18 9 9 0 000-18z" />
                            </svg>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <p className="text-sm text-gray-400 mb-6">Brands serviced: {s.brands}</p>

                  <Link href="/contact" className="inline-block bg-teal hover:bg-teal-dark text-white font-bold px-8 py-3.5 rounded-xl transition-all duration-300 hover:scale-105">
                    Schedule Service
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
