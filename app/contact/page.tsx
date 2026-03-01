import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact Us | Summit Air Solutions",
  description: "Schedule HVAC service or request a free estimate. Call (555) 876-5432 or fill out our contact form. 24/7 emergency service available.",
};

export default function ContactPage() {
  return (
    <>
      <section className="bg-charcoal py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Contact Us</h1>
          <p className="text-gray-300 max-w-2xl">Ready to schedule service? Fill out the form below or give us a call.</p>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Form */}
            <div className="lg:col-span-3">
              <h2 className="text-2xl font-bold text-charcoal mb-6">Request Service</h2>
              <ContactForm />
            </div>

            {/* Info */}
            <div className="lg:col-span-2 space-y-8">
              {/* Phone */}
              <div className="bg-teal rounded-xl p-6 text-white">
                <div className="text-sm font-medium mb-1">Call Us Now</div>
                <a href="tel:5558765432" className="text-2xl font-bold hover:underline">(555) 876-5432</a>
                <div className="text-sm mt-2 text-white/80">24/7 emergency service available</div>
              </div>

              {/* Hours */}
              <div className="bg-slate-light rounded-xl p-6">
                <h3 className="font-bold text-charcoal mb-4">Business Hours</h3>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex justify-between"><span>Monday – Friday</span><span className="font-medium">7:00 AM – 7:00 PM</span></li>
                  <li className="flex justify-between"><span>Saturday</span><span className="font-medium">8:00 AM – 5:00 PM</span></li>
                  <li className="flex justify-between"><span>Sunday</span><span className="font-medium">Closed</span></li>
                </ul>
              </div>

              {/* Emergency */}
              <div className="border-2 border-teal rounded-xl p-6">
                <h3 className="font-bold text-charcoal mb-2">🚨 Emergency Service</h3>
                <p className="text-sm text-gray-600">
                  HVAC emergency? We offer 24/7 emergency service, 365 days a year. Call us anytime at{" "}
                  <a href="tel:5558765432" className="text-teal font-semibold">(555) 876-5432</a> and a technician will be dispatched within 60 minutes.
                </p>
              </div>

              {/* Address */}
              <div className="bg-slate-light rounded-xl p-6">
                <h3 className="font-bold text-charcoal mb-2">📍 Our Location</h3>
                <p className="text-sm text-gray-600">
                  1234 Summit Drive<br />
                  Denver, CO 80202
                </p>
                <p className="text-sm text-gray-500 mt-2">✉️ info@summitairsolutions.com</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
