import Link from "next/link";
import ServiceCard from "@/components/ServiceCard";
import StatCard from "@/components/StatCard";
import TestimonialCard from "@/components/TestimonialCard";

const services = [
  { icon: "heating", title: "Heating", description: "Furnace installation, repair, and maintenance to keep your home warm all winter long." },
  { icon: "cooling", title: "Cooling", description: "AC installation, tune-ups, and emergency repairs for reliable summer comfort." },
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
  { quote: "Summit Air replaced our entire HVAC system in one day. Professional, clean, and the price was very fair. Our energy bills dropped 30%!", name: "Sarah M.", location: "Denver, CO", rating: 5 },
  { quote: "Called at 10 PM on a Saturday when our furnace died. They had someone out within an hour. Absolute lifesavers in the middle of winter.", name: "James T.", location: "Aurora, CO", rating: 5 },
  { quote: "Been on their maintenance plan for 3 years now. Never had an unexpected breakdown and our system runs like new. Highly recommend!", name: "Linda K.", location: "Lakewood, CO", rating: 5 },
];

export default function Home() {
  return (
    <>
      {/* Hero - Full viewport, dramatic */}
      <section className="min-h-screen bg-charcoal relative overflow-hidden flex items-center">
        <div className="absolute inset-0 bg-gradient-to-br from-charcoal via-charcoal-light to-teal/10 animate-gradient" />
        {/* Subtle decorative elements */}
        <div className="absolute top-1/4 right-1/4 w-3 h-3 bg-teal rounded-full animate-pulse-glow" />
        <div className="absolute bottom-1/3 right-1/3 w-2 h-2 bg-teal/60 rounded-full animate-pulse-glow [animation-delay:1.5s]" />
        <div className="absolute top-1/2 right-[15%] w-1.5 h-1.5 bg-teal/40 rounded-full animate-pulse-glow [animation-delay:0.8s]" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
          <div className="max-w-3xl">
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold text-white leading-[1.05] mb-8 tracking-tight">
              Keep Your Home{" "}
              <span className="text-teal">Comfortable</span>{" "}
              Year-Round
            </h1>
            <p className="text-xl md:text-2xl text-gray-400 mb-12 leading-relaxed max-w-2xl font-light">
              Professional heating, cooling, and air quality services backed by 15+ years of experience.
            </p>
            <div className="flex flex-wrap gap-5">
              <Link href="/contact" className="bg-teal hover:bg-teal-dark text-white font-bold px-10 py-5 rounded-xl transition-all duration-300 text-lg hover:scale-105 hover:shadow-[0_0_30px_rgba(14,165,233,0.4)]">
                Schedule Service
              </Link>
              <a href="tel:5558765432" className="border border-white/20 text-white font-semibold px-10 py-5 rounded-xl hover:bg-white/5 transition-all duration-300 text-lg hover:border-white/40">
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

      {/* Stats - Dark band */}
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
      <section className="py-28 md:py-32 bg-slate-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold text-charcoal mb-6 tracking-tight">Flexible Financing Available</h2>
          <p className="text-gray-500 max-w-2xl mx-auto mb-10 text-lg leading-relaxed">
            Don&apos;t let budget concerns keep you from staying comfortable. We offer flexible financing options with approved credit, including 0% APR plans on qualifying systems.
          </p>
          <Link href="/contact" className="inline-block bg-teal hover:bg-teal-dark text-white font-bold px-10 py-5 rounded-xl transition-all duration-300 text-lg hover:scale-105 hover:shadow-[0_0_30px_rgba(14,165,233,0.4)]">
            Learn More
          </Link>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-28 md:py-32 bg-charcoal relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal via-charcoal-light to-charcoal" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 tracking-tight">Ready to Get Started?</h2>
          <p className="text-gray-400 max-w-xl mx-auto mb-10 text-lg">
            Schedule your service today and experience the Summit Air difference.
          </p>
          <Link href="/contact" className="inline-block bg-teal hover:bg-teal-dark text-white font-bold px-12 py-5 rounded-xl text-lg transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(14,165,233,0.4)]">
            Schedule Service
          </Link>
        </div>
      </section>
    </>
  );
}
