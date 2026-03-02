import Image from "next/image";
import Link from "next/link";

const stats = [
  { value: "15+", label: "Years Experience" },
  { value: "5,000+", label: "Homes Served" },
  { value: "Same-Day", label: "Service Available" },
  { value: "100%", label: "Licensed & Insured" },
];

const services = [
  {
    name: "Cooling",
    desc: "Expert AC installation, repair, and replacement to keep you cool all summer long.",
    icon: (
      <svg className="w-12 h-12 text-[#00B894]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 2v20M2 12h20M4.93 4.93l14.14 14.14M19.07 4.93L4.93 19.07M12 6l-2 2m2-2l2 2m-2 10l-2-2m2 2l2-2M6 12l2-2m-2 2l2 2m10-2l-2-2m2 2l-2 2" />
      </svg>
    ),
  },
  {
    name: "Heating",
    desc: "Furnace and heat pump services to keep your family warm through every Tennessee winter.",
    icon: (
      <svg className="w-12 h-12 text-[#00B894]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 6.51 6.51 0 0012 13.5a3.5 3.5 0 003.362-8.286z" />
      </svg>
    ),
  },
  {
    name: "Air Quality",
    desc: "Breathe easier with air purification, filtration, and humidity control solutions.",
    icon: (
      <svg className="w-12 h-12 text-[#00B894]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.5 12h5a2.5 2.5 0 000-5H7M3.5 16h9a2.5 2.5 0 000-5H10M3.5 8h3a2.5 2.5 0 000-5H5" />
      </svg>
    ),
  },
  {
    name: "Maintenance Plans",
    desc: "Preventative maintenance that extends equipment life and prevents costly breakdowns.",
    icon: (
      <svg className="w-12 h-12 text-[#00B894]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
      </svg>
    ),
  },
];

const testimonials = [
  {
    name: "Tom B.",
    city: "Murfreesboro",
    quote: "Summit installed our new system in one day. House has never been more comfortable.",
  },
  {
    name: "Angela P.",
    city: "Spring Hill",
    quote: "Their maintenance plan saved us from a breakdown in the middle of July. Worth every penny.",
  },
  {
    name: "Derek F.",
    city: "Gallatin",
    quote: "Professional, on time, and explained everything clearly. Highly recommend.",
  },
];

const brands = ["Carrier", "Trane", "Lennox", "Rheem", "Goodman", "Daikin"];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-[#2D3436] min-h-screen overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col-reverse md:flex-row items-stretch min-h-screen">
            {/* Left Content */}
            <div className="flex-1 flex flex-col justify-center px-6 sm:px-12 lg:px-16 py-20 md:py-0 z-10">
              <p className="text-[#00B894] text-sm font-bold uppercase tracking-widest mb-4">
                Nashville&apos;s Trusted HVAC Experts
              </p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6">
                Keep Your Home
                <br />
                Comfortable
                <br />
                Year-Round.
              </h1>
              <p className="text-gray-400 text-lg mb-8 max-w-md">
                Professional heating, cooling, and air quality services for homes across the Nashville metro area.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="bg-[#00B894] text-white font-bold px-8 py-4 rounded-lg hover:bg-[#00a884] transition-colors duration-300"
                >
                  Schedule Service
                </Link>
                <Link
                  href="/services"
                  className="border-2 border-white text-white font-bold px-8 py-4 rounded-lg hover:bg-white hover:text-[#2D3436] transition-all duration-300"
                >
                  Our Services
                </Link>
              </div>
            </div>

            {/* Right Image with clip-path */}
            <div className="relative flex-1 min-h-[400px] md:min-h-0">
              <div
                className="absolute inset-0 md:[clip-path:polygon(15%_0,100%_0,100%_100%,0_100%)]"
              >
                <Image
                  src="/images/hero-home.jpg"
                  alt="Modern comfortable home interior"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats - 2x2 Grid */}
      <section className="bg-[#2D3436] py-20">
        <div className="max-w-3xl mx-auto px-6">
          <div className="grid grid-cols-2 gap-12">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-4xl sm:text-5xl font-extrabold text-white mb-3">
                  {stat.value}
                </p>
                <div className="w-10 h-0.5 bg-[#00B894] mx-auto mb-3" />
                <p className="text-gray-400 text-sm font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services - 2x2 Block Grid */}
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#2D3436] mb-4">
              What We Do
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
              Comprehensive HVAC services tailored to your home and budget.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((service) => (
              <div
                key={service.name}
                className="group bg-white border border-gray-100 rounded-xl p-10 min-h-[250px] flex flex-col justify-center transition-all duration-300 hover:shadow-lg hover:border-l-4 hover:border-l-[#00B894]"
              >
                <div className="mb-6">{service.icon}</div>
                <h3 className="text-xl font-bold text-[#2D3436] mb-3">
                  {service.name}
                </h3>
                <p className="text-gray-500">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Brands */}
      <section className="bg-[#F8F9FA] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-extrabold text-[#2D3436] mb-10">
            Trusted by the Best
          </h2>
          <div className="flex flex-wrap justify-center gap-8 sm:gap-16">
            {brands.map((brand) => (
              <span
                key={brand}
                className="text-gray-400 text-lg sm:text-xl font-bold tracking-wide"
              >
                {brand}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-[#F8F9FA] py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#2D3436] mb-4">
              What Our Customers Say
            </h2>
          </div>
          <div className="flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory md:grid md:grid-cols-3 md:overflow-visible md:pb-0">
            {testimonials.map((t) => (
              <div
                key={t.name}
                className="min-w-[300px] md:min-w-0 snap-start bg-white rounded-xl p-8 border-t-4 border-t-[#00B894] shadow-sm"
              >
                <span className="text-6xl text-gray-200 leading-none font-serif">&ldquo;</span>
                <p className="text-[#2D3436] mt-2 mb-6">{t.quote}</p>
                <p className="font-bold text-[#2D3436]">{t.name}</p>
                <p className="text-gray-400 text-sm">{t.city}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Financing Callout */}
      <section className="bg-[#F8F9FA] pb-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-xl p-8 sm:p-12 border-l-[6px] border-l-[#00B894] shadow-sm flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl font-extrabold text-[#2D3436] mb-2">
                Flexible Financing Available
              </h3>
              <p className="text-gray-500">
                0% interest for qualified buyers
              </p>
            </div>
            <Link
              href="/contact"
              className="bg-[#00B894] text-white font-bold px-8 py-3 rounded-lg hover:bg-[#00a884] transition-colors duration-300 whitespace-nowrap"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-white py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#2D3436] mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-gray-500 mb-8">
            Schedule your service today or call for a free estimate.
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
