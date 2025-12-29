export default function PrivacyPolicy() {
  return (
    /* Forces a Dark Background and White Text. 
       "relative z-10" helps it stay above global background layers.
    */
    <div className="relative z-10 min-h-screen bg-[#0f172a] text-white font-sans">
      
      {/* Spacer to push content below your fixed Navbar */}
      <div className="h-24 md:h-28"></div>

      <div className="max-w-4xl mx-auto px-6 py-12 md:py-20">
        
        {/* Header Section */}
        <div className="mb-16 border-l-8 border-orange-600 pl-8">
          <h1 className="text-5xl md:text-7xl font-black tracking-tight mb-4 uppercase">
            Privacy <span className="text-orange-500">Policy</span>
          </h1>
          <p className="text-slate-400 text-xl font-medium tracking-wide">
            Tulsi Tours & Travels • Effective 2024
          </p>
        </div>
        
        <div className="space-y-16">
          {/* Section 1 */}
          <section className="group">
            <h2 className="text-3xl font-bold text-orange-500 mb-6 flex items-baseline">
              <span className="text-sm font-mono mr-4 opacity-50">01 /</span>
              Information We Collect
            </h2>
            <p className="text-white text-lg md:text-xl leading-relaxed opacity-90 pl-0 md:pl-12 border-l border-slate-800 group-hover:border-orange-500 transition-colors">
              At Tulsi Tours & Travels, we collect personal information such as your name, contact number, email address, and travel preferences when you book a tour or contact us through our website.
            </p>
          </section>

          {/* Section 2 */}
          <section className="group">
            <h2 className="text-3xl font-bold text-orange-500 mb-6 flex items-baseline">
              <span className="text-sm font-mono mr-4 opacity-50">02 /</span>
              How We Use Your Information
            </h2>
            <p className="text-white text-lg md:text-xl leading-relaxed opacity-90 pl-0 md:pl-12 border-l border-slate-800 group-hover:border-orange-500 transition-colors">
              Your information is used solely to process your bookings, communicate travel itineraries, and improve our services. We do not sell your data to third parties.
            </p>
          </section>

          {/* Section 3 */}
          <section className="group">
            <h2 className="text-3xl font-bold text-orange-500 mb-6 flex items-baseline">
              <span className="text-sm font-mono mr-4 opacity-50">03 /</span>
              Data Security
            </h2>
            <p className="text-white text-lg md:text-xl leading-relaxed opacity-90 pl-0 md:pl-12 border-l border-slate-800 group-hover:border-orange-500 transition-colors">
              We implement industry-standard security measures to protect your personal information from unauthorized access or disclosure during your spiritual journey with us.
            </p>
          </section>

          {/* Contact Section - Bright Orange for attention */}
          <section className="mt-24 bg-orange-600 p-10 md:p-16 rounded-[2.5rem] shadow-2xl shadow-orange-900/20 text-center">
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6">Contact Us</h2>
            <p className="text-orange-50 text-xl mb-10 max-w-2xl mx-auto font-medium">
              Questions about your data or your upcoming tour? Reach out to our team directly.
            </p>
            <a 
              href="mailto:info@tulsitours.com" 
              className="inline-block bg-white text-orange-600 text-xl font-black py-5 px-14 rounded-full hover:scale-105 transition-transform shadow-lg"
            >
              info@tulsitours.com
            </a>
          </section>
        </div>
      </div>

      {/* Footer-like bottom padding */}
      <div className="h-20"></div>
    </div>
  );
}