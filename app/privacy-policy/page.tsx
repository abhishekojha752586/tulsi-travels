export default function TermsOfService() {
  return (
    /* Ensuring deep background contrast with pure white text */
    <div className="relative z-10 min-h-screen bg-[#0f172a] text-white font-sans">
      
      {/* Spacer for the fixed Navbar */}
      <div className="h-24 md:h-28"></div>

      <div className="max-w-4xl mx-auto px-6 py-12 md:py-20">
        
        {/* Header Section */}
        <div className="mb-16 border-l-8 border-orange-600 pl-8">
          <h1 className="text-5xl md:text-7xl font-black tracking-tight mb-4 uppercase">
            Terms of <span className="text-orange-500">Service</span>
          </h1>
          <p className="text-slate-400 text-xl font-medium tracking-wide">
            Tulsi Tours & Travels • Last Revised: 2024
          </p>
        </div>
        
        <div className="space-y-16">
          {/* Section 1 */}
          <section className="group">
            <h2 className="text-3xl font-bold text-orange-500 mb-6 flex items-baseline">
              <span className="text-sm font-mono mr-4 opacity-50">01 /</span>
              Booking & Payments
            </h2>
            <p className="text-white text-lg md:text-xl leading-relaxed opacity-95 pl-0 md:pl-12 border-l border-slate-800 group-hover:border-orange-500 transition-colors">
              All tour bookings are subject to availability. A deposit may be required to confirm your spiritual tour or car rental. Full payment must be cleared at least 48 hours before the start of the journey to ensure a seamless experience.
            </p>
          </section>

          {/* Section 2 */}
          <section className="group">
            <h2 className="text-3xl font-bold text-orange-500 mb-6 flex items-baseline">
              <span className="text-sm font-mono mr-4 opacity-50 text-orange-500/50">02 /</span>
              Cancellation & Refunds
            </h2>
            <p className="text-white text-lg md:text-xl leading-relaxed opacity-95 pl-0 md:pl-12 border-l border-slate-800 group-hover:border-orange-500 transition-colors">
              Cancellations made 7 days prior to the journey are eligible for a partial refund. Please note that special spiritual tours (like Varanasi Dev Deepawali or Kumbh Mela) and no-shows are generally non-refundable due to high demand and advance bookings.
            </p>
          </section>

          {/* Section 3 */}
          <section className="group">
            <h2 className="text-3xl font-bold text-orange-500 mb-6 flex items-baseline">
              <span className="text-sm font-mono mr-4 opacity-50">03 /</span>
              User Responsibilities
            </h2>
            <p className="text-white text-lg md:text-xl leading-relaxed opacity-95 pl-0 md:pl-12 border-l border-slate-800 group-hover:border-orange-500 transition-colors">
              Travelers are responsible for providing accurate identification and following local guidelines at spiritual sites and temples. Tulsi Tours & Travels reserves the right to adjust itineraries based on local temple authority decisions or weather conditions.
            </p>
          </section>

          {/* Section 4 */}
          <section className="group">
            <h2 className="text-3xl font-bold text-orange-500 mb-6 flex items-baseline">
              <span className="text-sm font-mono mr-4 opacity-50">04 /</span>
              Limitation of Liability
            </h2>
            <p className="text-white text-lg md:text-xl leading-relaxed opacity-95 pl-0 md:pl-12 border-l border-slate-800 group-hover:border-orange-500 transition-colors">
              While we strive for perfection, Tulsi Tours & Travels acts as an intermediary for travel services and is not liable for delays caused by force majeure, traffic, or sudden changes in temple timings.
            </p>
          </section>

          {/* Contact Section */}
          <section className="mt-24 bg-gradient-to-r from-orange-600 to-orange-700 p-10 md:p-16 rounded-[2.5rem] shadow-2xl text-center">
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6">Need Clarity?</h2>
            <p className="text-orange-50 text-xl mb-10 max-w-2xl mx-auto font-medium">
              If you have any specific questions about our terms, please reach out to our support team before booking.
            </p>
            <a 
              href="mailto:info@tulsitours.com" 
              className="inline-block bg-white text-orange-600 text-xl font-black py-5 px-14 rounded-full hover:scale-105 hover:shadow-xl transition-all"
            >
              Contact Support
            </a>
          </section>
        </div>
      </div>

      <div className="h-20"></div>
    </div>
  );
}