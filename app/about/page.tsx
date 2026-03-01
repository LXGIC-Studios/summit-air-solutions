import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "About Us | Summit Air Solutions",
  description: "Founded in 2009, Summit Air Solutions has been providing expert HVAC services to Middle Tennessee for over 15 years.",
};

const team = [
  { name: "Mike Reynolds", title: "Founder & Lead Technician", image: "/images/technician.jpg" },
  { name: "Jessica Chen", title: "Operations Manager", image: "/images/comfortable-home.jpg" },
  { name: "David Ortiz", title: "Senior HVAC Technician", image: "/images/technician-work.jpg" },
  { name: "Rachel Adams", title: "Customer Relations", image: "/images/modern-home.jpg" },
];

const certs = [
  { label: "NATE Certified", icon: (
    <svg className="w-8 h-8 text-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
    </svg>
  )},
  { label: "EPA Licensed", icon: (
    <svg className="w-8 h-8 text-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
    </svg>
  )},
  { label: "BBB A+ Rating", icon: (
    <svg className="w-8 h-8 text-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
    </svg>
  )},
  { label: "Licensed & Insured", icon: (
    <svg className="w-8 h-8 text-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
    </svg>
  )},
];

export default function AboutPage() {
  return (
    <>
      <section className="bg-charcoal py-28 md:py-32 relative overflow-hidden">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white mb-5 tracking-tight">About Summit Air</h1>
          <p className="text-white/60 max-w-2xl text-xl font-light">Keeping homes comfortable since 2009.</p>
        </div>
      </section>

      {/* History */}
      <section className="py-28 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-extrabold text-charcoal mb-8 tracking-tight">Our Story</h2>
              <div className="space-y-5 text-gray-500 leading-relaxed text-lg">
                <p>Summit Air Solutions was founded in 2009 with a simple mission: provide honest, high-quality heating and cooling services at fair prices to Middle Tennessee homeowners.</p>
                <p>What started as a one-truck operation has grown into a full-service HVAC company serving over 5,000 homes across the region. Despite our growth, we have never lost sight of what matters most &mdash; treating every customer like family.</p>
                <p>Today, our team of certified technicians brings decades of combined experience to every job. We invest in ongoing training, the latest diagnostic equipment, and premium parts to ensure your comfort system performs at its best for years to come.</p>
              </div>
            </div>
            <div className="relative h-80 lg:h-[500px] rounded-2xl overflow-hidden">
              <Image src="/images/family-home.jpg" alt="Comfortable home" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-28 md:py-32 bg-charcoal">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white text-center mb-16 tracking-tight">Certifications & Accreditations</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {certs.map((c) => (
              <div key={c.label} className="bg-white/5 rounded-2xl p-10 text-center border border-white/10 transition-all duration-300 hover:-translate-y-1 hover:bg-white/10">
                <div className="w-16 h-16 bg-teal/10 rounded-full flex items-center justify-center mx-auto mb-5">
                  {c.icon}
                </div>
                <div className="font-semibold text-white text-sm">{c.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-28 md:py-32 bg-gray-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-extrabold text-charcoal text-center mb-16 tracking-tight">Meet Our Team</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((t) => (
              <div key={t.name} className="rounded-2xl overflow-hidden bg-white border border-gray-100 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                <div className="relative h-60 bg-gray-200">
                  <Image src={t.image} alt={t.name} fill className="object-cover" />
                </div>
                <div className="p-6">
                  <div className="font-bold text-charcoal text-lg">{t.name}</div>
                  <div className="text-sm text-gray-400">{t.title}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Area */}
      <section className="py-28 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold text-charcoal mb-6 tracking-tight">Service Area</h2>
          <p className="text-gray-500 max-w-2xl mx-auto mb-10 text-lg leading-relaxed">
            We proudly serve Middle Tennessee including Nashville, Murfreesboro, Franklin, Spring Hill, Gallatin, Hendersonville, Lebanon, and surrounding communities within a 40-mile radius.
          </p>
          <div className="inline-block bg-teal/10 text-teal font-bold px-8 py-4 rounded-xl text-lg">
            Serving Middle Tennessee
          </div>
        </div>
      </section>
    </>
  );
}
