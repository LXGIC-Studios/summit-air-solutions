import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Services | Summit Air Solutions",
  description: "AC installation & repair, heating systems, ductwork, indoor air quality, maintenance plans, and 24/7 emergency HVAC service.",
};

const services = [
  {
    icon: "cooling",
    title: "AC Installation & Repair",
    description: "From new high-efficiency central air systems to emergency repairs on your existing unit, our certified technicians handle it all. We work with all major brands including Carrier, Trane, Lennox, and Goodman. Every installation includes a full load calculation to ensure proper sizing.",
  },
  {
    icon: "heating",
    title: "Heating Systems",
    description: "Stay warm with expert furnace and heat pump installation, repair, and maintenance. We service gas, electric, and dual-fuel systems. Our technicians diagnose issues fast and carry common parts on every truck for same-visit repairs.",
  },
  {
    icon: "ductwork",
    title: "Ductwork & Ventilation",
    description: "Leaky or poorly designed ductwork can waste up to 30% of your energy. We offer duct sealing, insulation, repair, and complete redesigns. Improve airflow, reduce energy bills, and eliminate hot and cold spots throughout your home.",
  },
  {
    icon: "airquality",
    title: "Indoor Air Quality",
    description: "Breathe easier with whole-home air purification systems, humidifiers, dehumidifiers, and UV germicidal lights. We also provide professional air duct cleaning to remove dust, allergens, and contaminants from your system.",
  },
  {
    icon: "maintenance",
    title: "Preventive Maintenance Plans",
    description: "Our Summit Shield maintenance plans include biannual tune-ups, priority scheduling, 15% parts discounts, and no overtime charges. Regular maintenance extends equipment life by up to 40% and keeps your warranty intact.",
  },
  {
    icon: "emergency",
    title: "Emergency 24/7 Service",
    description: "HVAC emergencies don't wait for business hours. Our team is available 24/7, 365 days a year. We guarantee a response within 60 minutes for emergency calls in our service area. No extra charge for nights or weekends with a maintenance plan.",
  },
];

const iconMap: Record<string, React.ReactNode> = {
  heating: (
    <svg className="w-7 h-7 text-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 6.75 6.75 0 0012 15a6.75 6.75 0 003.362-9.786z" />
    </svg>
  ),
  cooling: (
    <svg className="w-7 h-7 text-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v18m0-18l4 4m-4-4L8 7m4 14l4-4m-4 4l-4-4M3 12h18M3 12l4-4m-4 4l4 4m14-4l-4-4m4 4l-4 4" />
    </svg>
  ),
  airquality: (
    <svg className="w-7 h-7 text-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth={1.5} fill="none" />
    </svg>
  ),
  maintenance: (
    <svg className="w-7 h-7 text-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
    </svg>
  ),
  ductwork: (
    <svg className="w-7 h-7 text-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12c0-1.232-.046-2.453-.138-3.662a4.006 4.006 0 00-3.7-3.7 48.678 48.678 0 00-7.324 0 4.006 4.006 0 00-3.7 3.7c-.017.22-.032.441-.046.662M19.5 12l3-3m-3 3l-3-3m-12 3c0 1.232.046 2.453.138 3.662a4.006 4.006 0 003.7 3.7 48.656 48.656 0 007.324 0 4.006 4.006 0 003.7-3.7c.017-.22.032-.441.046-.662M4.5 12l3 3m-3-3l-3 3" />
    </svg>
  ),
  emergency: (
    <svg className="w-7 h-7 text-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
    </svg>
  ),
};

export default function ServicesPage() {
  return (
    <>
      <section className="bg-charcoal py-20 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Our Services</h1>
          <p className="text-gray-300 max-w-2xl text-lg">Comprehensive HVAC solutions tailored to your home&apos;s needs. Every service backed by our satisfaction guarantee.</p>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
          {services.map((s, i) => (
            <div key={s.title} className={`rounded-xl p-8 md:p-12 ${i % 2 === 0 ? "bg-white border border-gray-100 shadow-md" : "bg-slate-light"}`}>
              <div className="flex flex-col md:flex-row md:items-start gap-6">
                <div className="w-14 h-14 bg-teal/10 rounded-xl flex items-center justify-center shrink-0">
                  {iconMap[s.icon]}
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-bold text-charcoal mb-3">{s.title}</h2>
                  <p className="text-gray-600 mb-5 leading-relaxed">{s.description}</p>
                  <Link href="/contact" className="inline-block bg-teal hover:bg-teal-dark text-white text-sm font-semibold px-6 py-3 rounded-lg transition-colors">
                    Schedule Now
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
