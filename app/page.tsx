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
      {/* Hero */}
      <section className="bg-charcoal relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-charcoal via-charcoal to-teal/20" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-28 md:py-36">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Keep Your Home <span className="text-teal">Comfortable</span> Year-Round
            </h1>
            <p className="text-lg text-gray-300 mb-8">
              Professional heating, cooling, and air quality services backed by 15+ years of experience. Same-day service available.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/contact" className="bg-teal hover:bg-teal-dark text-white font-semibold px-8 py-3.5 rounded-lg transition-colors text-lg">
                Schedule Service
              </Link>
              <a href="tel:5558765432" className="border border-white/30 text-white font-semibold px-8 py-3.5 rounded-lg hover:bg-white/10 transition-colors text-lg">
                Call (555) 876-5432
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold text-charcoal mb-3">Our Services</h2>
            <p className="text-gray-600 max-w-xl mx-auto">Comprehensive HVAC solutions for your home and business</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((s) => (
              <ServiceCard key={s.title} {...s} />
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 bg-slate-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-charcoal text-center mb-14">Why Choose Summit</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
            {stats.map((s) => (
              <StatCard key={s.label} {...s} />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-charcoal text-center mb-14">What Our Customers Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t) => (
              <TestimonialCard key={t.name} {...t} />
            ))}
          </div>
        </div>
      </section>

      {/* Financing */}
      <section className="py-20 bg-slate-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-charcoal mb-4">Flexible Financing Available</h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8">
            Don&apos;t let budget concerns keep you from staying comfortable. We offer flexible financing options with approved credit, including 0% APR plans on qualifying systems.
          </p>
          <Link href="/contact" className="inline-block bg-teal hover:bg-teal-dark text-white font-semibold px-8 py-3.5 rounded-lg transition-colors">
            Learn More
          </Link>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-20 md:py-28 bg-charcoal">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Get Started?</h2>
          <p className="text-gray-300 max-w-xl mx-auto mb-8">
            Schedule your service today and experience the Summit Air difference.
          </p>
          <Link href="/contact" className="inline-block bg-teal hover:bg-teal-dark text-white font-semibold px-8 py-4 rounded-lg text-lg transition-colors">
            Schedule Service
          </Link>
        </div>
      </section>
    </>
  );
}
