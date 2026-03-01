import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Services | Summit Air Solutions",
  description: "AC installation & repair, heating systems, ductwork, indoor air quality, maintenance plans, and 24/7 emergency HVAC service.",
};

const services = [
  {
    icon: "❄️",
    title: "AC Installation & Repair",
    description: "From new high-efficiency central air systems to emergency repairs on your existing unit, our certified technicians handle it all. We work with all major brands including Carrier, Trane, Lennox, and Goodman. Every installation includes a full load calculation to ensure proper sizing.",
  },
  {
    icon: "🔥",
    title: "Heating Systems",
    description: "Stay warm with expert furnace and heat pump installation, repair, and maintenance. We service gas, electric, and dual-fuel systems. Our technicians diagnose issues fast and carry common parts on every truck for same-visit repairs.",
  },
  {
    icon: "🌀",
    title: "Ductwork & Ventilation",
    description: "Leaky or poorly designed ductwork can waste up to 30% of your energy. We offer duct sealing, insulation, repair, and complete redesigns. Improve airflow, reduce energy bills, and eliminate hot and cold spots throughout your home.",
  },
  {
    icon: "🌬️",
    title: "Indoor Air Quality",
    description: "Breathe easier with whole-home air purification systems, humidifiers, dehumidifiers, and UV germicidal lights. We also provide professional air duct cleaning to remove dust, allergens, and contaminants from your system.",
  },
  {
    icon: "🛡️",
    title: "Preventive Maintenance Plans",
    description: "Our Summit Shield maintenance plans include biannual tune-ups, priority scheduling, 15% parts discounts, and no overtime charges. Regular maintenance extends equipment life by up to 40% and keeps your warranty intact.",
  },
  {
    icon: "🚨",
    title: "Emergency 24/7 Service",
    description: "HVAC emergencies don't wait for business hours. Our team is available 24/7, 365 days a year. We guarantee a response within 60 minutes for emergency calls in our service area. No extra charge for nights or weekends with a maintenance plan.",
  },
];

export default function ServicesPage() {
  return (
    <>
      <section className="bg-charcoal py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Our Services</h1>
          <p className="text-gray-300 max-w-2xl">Comprehensive HVAC solutions tailored to your home&apos;s needs. Every service backed by our satisfaction guarantee.</p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {services.map((s, i) => (
            <div key={s.title} className={`rounded-xl p-8 md:p-10 ${i % 2 === 0 ? "bg-white border border-gray-100 shadow-md" : "bg-slate-light"}`}>
              <div className="flex flex-col md:flex-row md:items-start gap-6">
                <div className="w-14 h-14 bg-teal/10 rounded-xl flex items-center justify-center text-3xl shrink-0">
                  {s.icon}
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-bold text-charcoal mb-3">{s.title}</h2>
                  <p className="text-gray-600 mb-4 leading-relaxed">{s.description}</p>
                  <Link href="/contact" className="inline-block bg-teal hover:bg-teal-dark text-white text-sm font-semibold px-5 py-2.5 rounded-lg transition-colors">
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
