"use client";
import { useState } from "react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <>
      {/* Header */}
      <section className="bg-[#2D3436] pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-[#00B894] text-sm font-bold uppercase tracking-widest mb-4">
            Contact Us
          </p>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-4">
            Get in Touch
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl">
            Ready to schedule service or have a question? We&apos;re here to help.
          </p>
        </div>
      </section>

      {/* Form Section */}
      <section className="bg-[#F8F9FA] py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Emergency Banner */}
          <div className="bg-[#00B894] rounded-xl p-6 mb-10 text-center">
            <p className="text-white font-bold text-lg">
              For emergencies, call{" "}
              <a href="tel:5558765432" className="underline">
                (555) 876-5432
              </a>{" "}
              , available 24/7
            </p>
          </div>

          {submitted ? (
            <div className="bg-white rounded-xl p-12 text-center shadow-sm">
              <svg className="w-16 h-16 text-[#00B894] mx-auto mb-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <h2 className="text-2xl font-extrabold text-[#2D3436] mb-4">
                Request Received
              </h2>
              <p className="text-gray-500">
                We&apos;ll be in touch within 24 hours. For immediate assistance, call (555) 876-5432.
              </p>
            </div>
          ) : (
            <form
              className="bg-white rounded-xl p-8 sm:p-12 shadow-sm"
              onSubmit={(e) => {
                e.preventDefault();
                setSubmitted(true);
              }}
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-sm font-bold text-[#2D3436] mb-2">Name</label>
                  <input
                    type="text"
                    required
                    className="w-full border border-gray-200 rounded-lg px-4 py-3 text-[#2D3436] focus:outline-none focus:border-[#00B894] transition-colors duration-300"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-[#2D3436] mb-2">Phone</label>
                  <input
                    type="tel"
                    required
                    className="w-full border border-gray-200 rounded-lg px-4 py-3 text-[#2D3436] focus:outline-none focus:border-[#00B894] transition-colors duration-300"
                    placeholder="(555) 000-0000"
                  />
                </div>
              </div>

              <div className="mb-6">
                <label className="block text-sm font-bold text-[#2D3436] mb-2">Email</label>
                <input
                  type="email"
                  required
                  className="w-full border border-gray-200 rounded-lg px-4 py-3 text-[#2D3436] focus:outline-none focus:border-[#00B894] transition-colors duration-300"
                  placeholder="you@example.com"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-sm font-bold text-[#2D3436] mb-2">Service Type</label>
                  <select
                    required
                    className="w-full border border-gray-200 rounded-lg px-4 py-3 text-[#2D3436] focus:outline-none focus:border-[#00B894] transition-colors duration-300 bg-white"
                  >
                    <option value="">Select a service</option>
                    <option>AC Repair</option>
                    <option>Heating</option>
                    <option>Air Quality</option>
                    <option>Maintenance</option>
                    <option>Emergency</option>
                    <option>Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-bold text-[#2D3436] mb-2">Preferred Date</label>
                  <input
                    type="date"
                    className="w-full border border-gray-200 rounded-lg px-4 py-3 text-[#2D3436] focus:outline-none focus:border-[#00B894] transition-colors duration-300"
                  />
                </div>
              </div>

              <div className="mb-8">
                <label className="block text-sm font-bold text-[#2D3436] mb-2">Urgency</label>
                <div className="flex flex-wrap gap-4">
                  {["Routine", "Within a Week", "Emergency"].map((option) => (
                    <label key={option} className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="radio"
                        name="urgency"
                        value={option}
                        className="accent-[#00B894]"
                        defaultChecked={option === "Routine"}
                      />
                      <span className="text-[#2D3436] text-sm font-medium">{option}</span>
                    </label>
                  ))}
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-[#00B894] text-white font-bold py-4 rounded-lg hover:bg-[#00a884] transition-colors duration-300"
              >
                Submit Request
              </button>
            </form>
          )}
        </div>
      </section>
    </>
  );
}
