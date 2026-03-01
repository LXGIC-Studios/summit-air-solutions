"use client";

export default function ContactForm() {
  return (
    <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <input type="text" placeholder="Full Name *" required className="w-full px-4 py-3 rounded-lg border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-teal focus:border-transparent" />
        <input type="tel" placeholder="Phone Number *" required className="w-full px-4 py-3 rounded-lg border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-teal focus:border-transparent" />
      </div>
      <input type="email" placeholder="Email Address *" required className="w-full px-4 py-3 rounded-lg border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-teal focus:border-transparent" />
      <select className="w-full px-4 py-3 rounded-lg border border-gray-300 text-sm text-gray-600 focus:outline-none focus:ring-2 focus:ring-teal focus:border-transparent">
        <option value="">Select Service Type</option>
        <option>AC Installation & Repair</option>
        <option>Heating Systems</option>
        <option>Ductwork & Ventilation</option>
        <option>Indoor Air Quality</option>
        <option>Preventive Maintenance</option>
        <option>Emergency Service</option>
      </select>
      <input type="date" className="w-full px-4 py-3 rounded-lg border border-gray-300 text-sm text-gray-600 focus:outline-none focus:ring-2 focus:ring-teal focus:border-transparent" />
      <textarea rows={4} placeholder="Tell us about your needs..." className="w-full px-4 py-3 rounded-lg border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-teal focus:border-transparent resize-none" />
      <button type="submit" className="w-full bg-teal hover:bg-teal-dark text-white font-semibold py-3 rounded-lg transition-colors">
        Request Service
      </button>
    </form>
  );
}
