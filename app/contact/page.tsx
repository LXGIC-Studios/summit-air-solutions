import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact Us | Summit Air Solutions",
  description: "Schedule HVAC service or request a free estimate. Call (555) 876-5432 or fill out our contact form. 24/7 emergency service available.",
};

export default function ContactPage() {
  return (
    <>
      <section className="bg-charcoal py-28 md:py-32 relative overflow-hidden">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white mb-5 tracking-tight">Contact Us</h1>
          <p className="text-white/60 max-w-2xl text-xl font-light">Ready to schedule service? Fill out the form below or give us a call.</p>
        </div>
      </section>

      <section className="py-28 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">
            <div className="lg:col-span-3">
              <h2 className="text-3xl md:text-4xl font-extrabold text-charcoal mb-10 tracking-tight">Request Service</h2>
              <ContactForm />
            </div>

            <div className="lg:col-span-2 space-y-8">
              {/* Emergency Phone */}
              <div className="bg-teal rounded-2xl p-10 text-white">
                <div className="text-sm font-medium mb-2 uppercase tracking-widest text-white/70">Emergency? Call Now</div>
                <a href="tel:5558765432" className="text-3xl font-extrabold hover:underline tracking-tight">(555) 876-5432</a>
                <div className="text-sm mt-3 text-white/70">24/7 emergency service available</div>
              </div>

              {/* Hours */}
              <div className="bg-gray-light rounded-2xl p-10">
                <h3 className="font-bold text-charcoal mb-5 text-lg">Business Hours</h3>
                <ul className="space-y-4 text-sm text-gray-500">
                  <li className="flex justify-between"><span>Monday &ndash; Friday</span><span className="font-semibold text-charcoal">7:00 AM &ndash; 7:00 PM</span></li>
                  <li className="flex justify-between"><span>Saturday</span><span className="font-semibold text-charcoal">8:00 AM &ndash; 5:00 PM</span></li>
                  <li className="flex justify-between"><span>Sunday</span><span className="font-semibold text-charcoal">Closed</span></li>
                </ul>
              </div>

              {/* Emergency */}
              <div className="border-2 border-teal rounded-2xl p-10">
                <h3 className="font-bold text-charcoal mb-3 text-lg">Emergency Service</h3>
                <p className="text-sm text-gray-500 leading-relaxed">
                  HVAC emergency? We offer 24/7 emergency service, 365 days a year. Call us anytime at{" "}
                  <a href="tel:5558765432" className="text-teal font-bold">(555) 876-5432</a> and a technician will be dispatched within 60 minutes.
                </p>
              </div>

              {/* Address */}
              <div className="bg-gray-light rounded-2xl p-10">
                <h3 className="font-bold text-charcoal mb-3 text-lg">Our Location</h3>
                <p className="text-sm text-gray-500">
                  1234 Summit Drive<br />
                  Nashville, TN 37201
                </p>
                <p className="text-sm text-gray-400 mt-3">info@summitairsolutions.com</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
