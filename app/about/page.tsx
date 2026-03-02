import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Summit Air Solutions - Nashville HVAC",
  description: "Serving Nashville since 2009. NATE Certified, EPA Licensed, BBB A+ Accredited HVAC professionals.",
};

const certifications = [
  { name: "NATE Certified", desc: "North American Technician Excellence" },
  { name: "EPA Licensed", desc: "EPA Section 608 Certified" },
  { name: "BBB A+ Accredited", desc: "Better Business Bureau" },
];

const serviceAreas = [
  "Nashville", "Franklin", "Murfreesboro", "Brentwood", "Spring Hill",
  "Gallatin", "Hendersonville", "Mount Juliet", "Lebanon", "Smyrna",
];

const team = [
  { name: "James Mitchell", role: "Founder & Lead Technician", years: "17 years experience" },
  { name: "Sarah Chen", role: "Operations Manager", years: "10 years in HVAC" },
  { name: "Marcus Williams", role: "Senior Installer", years: "12 years experience" },
  { name: "Emily Foster", role: "Customer Relations", years: "8 years experience" },
];

export default function AboutPage() {
  return (
    <>
      {/* Header */}
      <section className="bg-[#2D3436] pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-[#00B894] text-sm font-bold uppercase tracking-widest mb-4">
            About Us
          </p>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-4">
            Nashville&apos;s HVAC Experts Since 2009
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl">
            What started as a one-man operation has grown into one of Middle Tennessee&apos;s most trusted HVAC companies.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="flex-1 relative h-[400px] w-full rounded-xl overflow-hidden">
              <Image
                src="/images/hvac-unit.jpg"
                alt="HVAC equipment"
                fill
                className="object-cover"
              />
            </div>
            <div className="flex-1">
              <h2 className="text-3xl font-extrabold text-[#2D3436] mb-6">Our Story</h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  Summit Air Solutions was founded in 2009 by James Mitchell, a veteran HVAC technician with a simple vision: provide honest, reliable heating and cooling services to Nashville-area homeowners.
                </p>
                <p>
                  Starting with a single truck and a commitment to doing things right, James built Summit on the principles of transparency, quality workmanship, and genuine care for every customer.
                </p>
                <p>
                  Today, our team of certified technicians serves over 5,000 homes across the Nashville metro area. We&apos;ve grown, but our values haven&apos;t changed. Every job gets our full attention, and every customer gets treated like family.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="bg-[#F8F9FA] py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-[#2D3436] text-center mb-16">
            Certifications & Accreditations
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {certifications.map((cert) => (
              <div
                key={cert.name}
                className="bg-white rounded-xl p-8 text-center border border-gray-100 shadow-sm"
              >
                <div className="w-16 h-16 bg-[#00B894] rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-[#2D3436] mb-2">{cert.name}</h3>
                <p className="text-gray-500 text-sm">{cert.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Area */}
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-extrabold text-[#2D3436] mb-4">
            Service Area
          </h2>
          <p className="text-gray-500 mb-12 max-w-2xl mx-auto">
            We proudly serve homes throughout the Nashville metropolitan area and surrounding communities.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {serviceAreas.map((area) => (
              <span
                key={area}
                className="bg-[#F8F9FA] text-[#2D3436] font-semibold px-6 py-3 rounded-lg text-sm"
              >
                {area}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="bg-[#F8F9FA] py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-[#2D3436] text-center mb-16">
            Meet Our Team
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member) => (
              <div key={member.name} className="bg-white rounded-xl p-8 text-center shadow-sm">
                <div className="w-20 h-20 bg-[#2D3436] rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-10 h-10 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-[#2D3436] mb-1">{member.name}</h3>
                <p className="text-[#00B894] text-sm font-semibold mb-2">{member.role}</p>
                <p className="text-gray-400 text-sm">{member.years}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-extrabold text-[#2D3436] mb-4">
            Work With Nashville&apos;s Best
          </h2>
          <p className="text-gray-500 mb-8">
            Experience the Summit difference. Schedule your service today.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-[#00B894] text-white font-bold px-10 py-4 rounded-lg hover:bg-[#00a884] transition-colors duration-300"
          >
            Schedule Service
          </Link>
        </div>
      </section>
    </>
  );
}
