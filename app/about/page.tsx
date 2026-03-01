import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "About Us | Summit Air Solutions",
  description: "Founded in 2009, Summit Air Solutions has been providing expert HVAC services to the Denver metro area for over 15 years.",
};

const team = [
  { name: "Mike Reynolds", title: "Founder & Lead Technician", image: "/images/technician.jpg" },
  { name: "Jessica Chen", title: "Operations Manager", image: "/images/home-interior.jpg" },
  { name: "David Ortiz", title: "Senior HVAC Technician", image: "/images/ac-unit.jpg" },
  { name: "Rachel Adams", title: "Customer Relations", image: "/images/home-interior.jpg" },
];

const certs = [
  { label: "EPA Certified", abbr: "EPA" },
  { label: "NATE Certified", abbr: "NATE" },
  { label: "BBB A+ Rating", abbr: "A+" },
  { label: "Fully Licensed & Insured", abbr: "L&I" },
];

export default function AboutPage() {
  return (
    <>
      <section className="bg-charcoal py-28 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-charcoal via-charcoal-light to-teal/5" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white mb-5 tracking-tight">About Summit Air</h1>
          <p className="text-gray-400 max-w-2xl text-xl font-light">Keeping homes comfortable since 2009.</p>
        </div>
      </section>

      {/* History */}
      <section className="py-28 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h2 className="text-4xl md:text-5xl font-extrabold text-charcoal mb-8 tracking-tight">Our Story</h2>
            <div className="space-y-5 text-gray-500 leading-relaxed text-lg">
              <p>Summit Air Solutions was founded in 2009 by Mike Reynolds, a veteran HVAC technician with a simple mission: provide honest, high-quality heating and cooling services at fair prices.</p>
              <p>What started as a one-truck operation has grown into a full-service HVAC company serving over 5,000 homes across the Denver metro area. Despite our growth, we&apos;ve never lost sight of what matters most &mdash; treating every customer like family.</p>
              <p>Today, our team of certified technicians brings decades of combined experience to every job. We invest in ongoing training, the latest diagnostic equipment, and premium parts to ensure your comfort system performs at its best for years to come.</p>
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
              <div key={c.label} className="bg-white/5 backdrop-blur rounded-2xl p-10 text-center border border-white/10 transition-all duration-300 hover:-translate-y-1 hover:bg-white/10">
                <div className="w-16 h-16 bg-teal/10 rounded-full flex items-center justify-center mx-auto mb-5">
                  <span className="text-teal font-extrabold text-lg">{c.abbr}</span>
                </div>
                <div className="font-semibold text-white text-sm">{c.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-28 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-extrabold text-charcoal text-center mb-16 tracking-tight">Meet Our Team</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((t) => (
              <div key={t.name} className="rounded-2xl overflow-hidden border border-gray-100 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
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
      <section className="py-28 md:py-32 bg-slate-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold text-charcoal mb-6 tracking-tight">Service Area</h2>
          <p className="text-gray-500 max-w-2xl mx-auto mb-10 text-lg leading-relaxed">
            We proudly serve the greater Denver metro area including Aurora, Lakewood, Littleton, Arvada, Westminster, Thornton, Brighton, and surrounding communities within a 30-mile radius.
          </p>
          <div className="inline-block bg-teal/10 text-teal font-bold px-8 py-4 rounded-xl text-lg">
            Serving the Denver Metro Area &amp; Beyond
          </div>
        </div>
      </section>
    </>
  );
}
