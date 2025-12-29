import Link from 'next/link';
import { 
  Facebook, 
  Instagram, 
  Twitter, 
  MapPin, 
  Phone, 
  Mail, 
  ChevronRight, 
  Code, 
  Heart,
  MessageCircle 
} from 'lucide-react';

export default function Footer() {
  // Replace with your personal/agency WhatsApp number
  const developerNumber = "918127190604"; 
  const developerName = "Abhishek Ojha"; // Or your name

  return (
    <footer className="bg-slate-950 text-slate-400 pt-20 pb-10 border-t border-slate-900 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* TOP SECTION: Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Column 1: Brand Info */}
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-white tracking-tight">
              Tulsi <span className="text-orange-600">Tours & Travels</span>
            </h2>
            <p className="text-sm leading-relaxed text-slate-400">
              Your trusted partner for spiritual journeys across India. 
              Specializing in Varanasi, Ayodhya, and Chardham Yatra with premium comfort.
            </p>
            <div className="flex space-x-5 pt-2">
              <a href="#" className="text-slate-400 hover:text-orange-500 transform hover:scale-110 transition duration-300"><Facebook size={22} /></a>
              <a href="#" className="text-slate-400 hover:text-pink-600 transform hover:scale-110 transition duration-300"><Instagram size={22} /></a>
              <a href="#" className="text-slate-400 hover:text-blue-400 transform hover:scale-110 transition duration-300"><Twitter size={22} /></a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-lg font-bold text-white mb-6 border-b border-orange-600/30 inline-block pb-2">Quick Links</h3>
            <ul className="space-y-3">
              {['About Us', 'Tour Packages', 'Rent a Car', 'Photo Gallery', 'Contact Us'].map((item) => (
                <li key={item}>
                  <Link href={`/${item.toLowerCase().replace(/ /g, '-')}`} className="group flex items-center hover:text-white transition duration-300">
                    <ChevronRight size={16} className="text-orange-600 mr-2 group-hover:translate-x-1 transition-transform" /> 
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Popular Tours */}
          <div>
            <h3 className="text-lg font-bold text-white mb-6 border-b border-orange-600/30 inline-block pb-2">Popular Tours</h3>
            <ul className="space-y-3">
              {[
                { name: 'Varanasi Spiritual Tour', url: '/packages' },
                { name: 'Ayodhya Ram Mandir', url: '/packages' },
                { name: 'Prayagraj Sangam', url: '/packages' },
                { name: 'Chardham Yatra 2025', url: '/packages' },
                { name: 'Luxury Car Rental', url: '/rent-car' },
              ].map((tour) => (
                <li key={tour.name}>
                  <Link href={tour.url} className="group flex items-center hover:text-white transition duration-300">
                    <ChevronRight size={16} className="text-orange-600 mr-2 group-hover:translate-x-1 transition-transform" /> 
                    {tour.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact Info */}
          <div>
            <h3 className="text-lg font-bold text-white mb-6 border-b border-orange-600/30 inline-block pb-2">Get in Touch</h3>
            <ul className="space-y-6">
              <li className="flex items-start group">
                <div className="bg-slate-900 p-2 rounded-lg mr-3 group-hover:bg-orange-600/10 transition-colors">
                    <MapPin className="text-orange-600 group-hover:scale-110 transition-transform" size={20} />
                </div>
                <span className="text-sm">
                 893, Anand Nagar, Lal Bangla, <br/> Kanpur, Uttar Pradesh
                </span>
              </li>
              <li className="flex items-center group">
                <div className="bg-slate-900 p-2 rounded-lg mr-3 group-hover:bg-orange-600/10 transition-colors">
                    <Phone className="text-orange-600 group-hover:scale-110 transition-transform" size={20} />
                </div>
                <a href="tel:+919198623117" className="hover:text-white transition font-medium">+91 9198623117</a>
              </li>
              <li className="flex items-center group">
                <div className="bg-slate-900 p-2 rounded-lg mr-3 group-hover:bg-orange-600/10 transition-colors">
                    <Mail className="text-orange-600 group-hover:scale-110 transition-transform" size={20} />
                </div>
                <a href="mailto:info@tulsitours.com" className="hover:text-white transition">info@tulsitours.com</a>
              </li>
            </ul>
          </div>

        </div>

        {/* BOTTOM SECTION: Copyright & Developer Credit */}
        <div className="border-t border-slate-900 pt-8 mt-8 flex flex-col md:flex-row justify-between items-center gap-6 text-sm">
          
          {/* Copyright */}
          <div className="text-slate-500 text-center md:text-left">
            <p>© {new Date().getFullYear()} Tulsi Tours and Travels. All rights reserved.</p>
            <div className="mt-2 space-x-3 text-xs">
              <Link href="/privacy-policy" className="hover:text-white transition">Privacy Policy</Link>
              <span>•</span>
              <Link href="/terms-of-service" className="hover:text-white transition">Terms of Service</Link>
            </div>
          </div>

          {/* DEVELOPER CREDIT SECTION (Animated & Professional) */}
          <a 
            href={`https://wa.me/${developerNumber}?text=Hi, I saw the Tulsi Tours website and I want to build something similar.`}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex items-center bg-slate-900/50 hover:bg-slate-900 border border-slate-800 hover:border-orange-500/30 rounded-full px-5 py-2 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(234,88,12,0.1)]"
          >
            {/* Pulsing Dot */}
            <span className="absolute -top-1 -right-1 flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
            </span>

            <span className="text-slate-400 group-hover:text-slate-200 mr-2 transition-colors">
              Designed & Developed by
            </span>
            
            <span className="font-bold text-orange-500 group-hover:text-orange-400 flex items-center gap-2">
              <Code size={16} className="group-hover:rotate-12 transition-transform duration-300" />
              {developerName}
            </span>
          </a>

        </div>
      </div>
    </footer>
  );
}