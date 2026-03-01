"use client";

export default function ContactForm() {
  return (
    <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <input type="text" placeholder="Full Name *" required className="w-full px-5 py-4 rounded-xl border border-gray-200 text-sm text-charcoal focus:outline-none focus:ring-2 focus:ring-teal focus:border-transparent transition-all duration-300" />
        <input type="tel" placeholder="Phone Number *" required className="w-full px-5 py-4 rounded-xl border border-gray-200 text-sm text-charcoal focus:outline-none focus:ring-2 focus:ring-teal focus:border-transparent transition-all duration-300" />
      </div>
      <input type="email" placeholder="Email Address *" required className="w-full px-5 py-4 rounded-xl border border-gray-200 text-sm text-charcoal focus:outline-none focus:ring-2 focus:ring-teal focus:border-transparent transition-all duration-300" />
      <select className="w-full px-5 py-4 rounded-xl border border-gray-200 text-sm text-charcoal focus:outline-none focus:ring-2 focus:ring-teal focus:border-transparent transition-all duration-300">
        <option value="">Select Service Type</option>
        <option>AC Installation & Repair</option>
        <option>Heating Systems</option>
        <option>Indoor Air Quality</option>
        <option>Preventive Maintenance</option>
        <option>Emergency Service</option>
      </select>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-sm text-gray-500 mb-1.5">Preferred Date</label>
          <input type="date" className="w-full px-5 py-4 rounded-xl border border-gray-200 text-sm text-charcoal focus:outline-none focus:ring-2 focus:ring-teal focus:border-transparent transition-all duration-300" />
        </div>
        <div>
          <label className="block text-sm text-gray-500 mb-1.5">Urgency</label>
          <select className="w-full px-5 py-4 rounded-xl border border-gray-200 text-sm text-charcoal focus:outline-none focus:ring-2 focus:ring-teal focus:border-transparent transition-all duration-300">
            <option value="">Select urgency</option>
            <option>Routine / No rush</option>
            <option>This week</option>
            <option>Urgent - ASAP</option>
            <option>Emergency - System down</option>
          </select>
        </div>
      </div>
      <textarea rows={4} placeholder="Tell us about your needs..." className="w-full px-5 py-4 rounded-xl border border-gray-200 text-sm text-charcoal focus:outline-none focus:ring-2 focus:ring-teal focus:border-transparent resize-none transition-all duration-300" />
      <button type="submit" className="w-full bg-teal hover:bg-teal-dark text-white font-bold py-4 rounded-xl transition-all duration-300 text-lg hover:scale-[1.02]">
        Request Service
      </button>
    </form>
  );
}
