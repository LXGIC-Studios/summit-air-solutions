import Link from "next/link";
import Image from "next/image";
import ServiceCard from "@/components/ServiceCard";
import StatCard from "@/components/StatCard";
import TestimonialCard from "@/components/TestimonialCard";

const services = [
  { icon: "cooling", title: "Cooling", description: "AC installation, tune-ups, and emergency repairs for reliable summer comfort." },
  { icon: "heating", title: "Heating", description: "Furnace installation, repair, and maintenance to keep your home warm all winter long." },
  { icon: "airquality", title: "Air Quality", description: "Air purifiers, humidifiers, and duct cleaning for healthier indoor air." },
  { icon: "maintenance", title: "Maintenance Plans", description: "Preventive maintenance plans that save money and extend equipment life." },
];

const stats = [
  { number: "15+", label: "Years Experience" },
  { number: "5,000+", label: "Homes Served" },
  { number: "Same-Day", label: "Service Available" },
  { number: "100%", label: "Licensed & Insured" },
];

const testimonials = [
  { quote: "Summit installed our new system in one day. House has never been more comfortable.", name: "Tom B.", location: "Murfreesboro" },
  { quote: "Their maintenance plan saved us from a breakdown in the middle of July. Worth every penny.", name: "Angela P.", location: "Spring Hill" },
  { quote: "Professional, on time, and explained everything clearly. Highly recommend.", name: "Derek F.", location: "Gallatin" },
];

const brands = ["Carrier", "Trane", "Lennox", "Rheem", "Goodman", "Daikin"];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="min-h-screen relative overflow-hidden flex items-center">
        <Image
          src="/images/hero-home.jpg"
          alt="Modern comfortable home interior"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-charcoal/70" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
          <div className="max-w-3xl">
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold text-white leading-[1.05] mb-8 tracking-tight">
              Keep Your Home Comfortable Year-Round
            </h1>
            <p className="text-xl md:text-2xl text-white/70 mb-12 leading-relaxed max-w-2xl font-light">
              Professional heating, cooling, and air quality services backed by 15+ years of experience.
            </p>
            <div className="flex flex-wrap gap-5">
              <Link href="/contact" className="bg-teal hover:bg-teal-dark text-white font-bold px-10 py-5 rounded-xl transition-all duration-300 text-lg hover:scale-105">
                Schedule Service
              </Link>
              <a href="tel:5558765432" className="border border-white/30 text-white font-semibold px-10 py-5 rounded-xl hover:bg-white/10 transition-all duration-300 text-lg">
                Call (555) 876-5432
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-28 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold text-charcoal mb-4 tracking-tight">Our Services</h2>
            <p className="text-gray-500 max-w-xl mx-auto text-lg">Comprehensive HVAC solutions for your home and business</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((s) => (
              <ServiceCard key={s.title} {...s} />
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-28 md:py-32 bg-charcoal">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white text-center mb-16 tracking-tight">Why Choose Summit</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
            {stats.map((s) => (
              <StatCard key={s.label} {...s} />
            ))}
          </div>
        </div>
      </section>

      {/* Brands */}
      <section className="py-20 md:py-24 bg-gray-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-extrabold text-charcoal text-center mb-12 tracking-tight">Brands We Service</h2>
          <div className="flex flex-wrap justify-center items-center gap-10 md:gap-16">
            {brands.map((b) => (
              <span key={b} className="text-xl md:text-2xl font-bold text-charcoal/40 tracking-wide uppercase">{b}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-28 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-extrabold text-charcoal text-center mb-16 tracking-tight">What Our Customers Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t) => (
              <TestimonialCard key={t.name} {...t} />
            ))}
          </div>
        </div>
      </section>

      {/* Financing */}
      <section className="py-28 md:py-32 bg-gray-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto border-2 border-teal rounded-2xl p-12 md:p-16 text-center bg-white">
            <h2 className="text-4xl md:text-5xl font-extrabold text-charcoal mb-6 tracking-tight">Flexible Financing Available</h2>
            <p className="text-gray-500 max-w-2xl mx-auto mb-4 text-lg leading-relaxed">
              0% interest for qualified buyers. Do not let budget concerns keep you from staying comfortable.
            </p>
            <p className="text-charcoal font-semibold mb-10 text-lg">We offer flexible financing options with approved credit on qualifying systems.</p>
            <Link href="/contact" className="inline-block bg-teal hover:bg-teal-dark text-white font-bold px-10 py-5 rounded-xl transition-all duration-300 text-lg hover:scale-105">
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-28 md:py-32 bg-charcoal">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 tracking-tight">Ready to Get Started?</h2>
          <p className="text-white/60 max-w-xl mx-auto mb-10 text-lg">
            Schedule your service today and experience the Summit Air difference.
          </p>
          <Link href="/contact" className="inline-block bg-teal hover:bg-teal-dark text-white font-bold px-12 py-5 rounded-xl text-lg transition-all duration-300 hover:scale-105">
            Schedule Service
          </Link>
        </div>
      </section>
    </>
  );
}
