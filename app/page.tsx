import Link from 'next/link';
import { packages } from '@/lib/data';
import Image from 'next/image';
import { ArrowRight, MapPin, Phone, Star, ShieldCheck, Car, Users } from 'lucide-react';

export default function Home() {
  // Your phone number
  const phoneNumber = "919198623117"; 

  return (
    <div className="flex flex-col min-h-screen bg-slate-50 font-sans selection:bg-orange-100">
      
      {/* 1. HERO SECTION (Cinema Style) */}
      <section className="relative h-[90vh] w-full overflow-hidden">
        {/* Video Background */}
        <video
          className="absolute top-0 left-0 w-full h-full object-cover scale-105"
          autoPlay
          loop
          muted
          playsInline
          poster="/images/hero-bg.jpg"
        >
          <source src="/Travel_Agency_Hero_Video_Creation.mp4" type="video/mp4" />
        </video>

        {/* Gradient Overlay (Dark to transparent) */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-slate-900/90" />

        {/* Content */}
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center text-white px-4">
          <div className="animate-fade-in-up space-y-6 max-w-4xl">
            <span className="inline-block py-1 px-3 rounded-full bg-orange-600/30 border border-orange-500/50 backdrop-blur-sm text-orange-200 text-sm font-semibold tracking-wider uppercase mb-2">
              #1 Travel Agency in UP
            </span>
            
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight leading-tight drop-shadow-2xl">
              Discover the <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-300">Divine Soul</span> of India
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-200 font-light max-w-2xl mx-auto leading-relaxed">
              Premium Spiritual Yatras & Hill Station Getaways. <br className="hidden md:block"/>
              Crafted for comfort, safety, and lifelong memories.
            </p>

            <div className="flex flex-col sm:flex-row gap-5 justify-center pt-8">
              <Link 
                href="/packages" 
                className="group bg-gradient-to-r from-orange-600 to-red-600 text-white px-10 py-4 rounded-full font-bold text-lg shadow-lg shadow-orange-600/30 hover:shadow-orange-600/50 transition-all transform hover:-translate-y-1 flex items-center justify-center"
              >
                Explore Packages 
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
              </Link>
              <Link 
                href="/rent-car" 
                className="bg-white/10 backdrop-blur-md border border-white/30 text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-slate-900 transition-all transform hover:-translate-y-1"
              >
                Rent a Car
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 2. SERVICES / WHY US (New Section for Professional Look) */}
      <section className="py-20 px-4 bg-white relative -mt-20 z-20 max-w-7xl mx-auto rounded-t-3xl shadow-2xl mx-4 md:mx-auto w-[95%]">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center divide-y md:divide-y-0 md:divide-x divide-slate-100">
            <div className="p-4 space-y-3">
                <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Car size={32} />
                </div>
                <h3 className="text-xl font-bold text-slate-900">Luxury Fleet</h3>
                <p className="text-slate-500">Clean, AC sedans and Tempo Travellers for a comfortable journey.</p>
            </div>
            <div className="p-4 space-y-3">
                <div className="w-16 h-16 bg-orange-50 text-orange-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <ShieldCheck size={32} />
                </div>
                <h3 className="text-xl font-bold text-slate-900">Safe & Reliable</h3>
                <p className="text-slate-500">Verified drivers and 24/7 support for your family's safety.</p>
            </div>
            <div className="p-4 space-y-3">
                <div className="w-16 h-16 bg-green-50 text-green-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Star size={32} />
                </div>
                <h3 className="text-xl font-bold text-slate-900">5-Star Experience</h3>
                <p className="text-slate-500">Over 5,000 happy customers trust us for their Yatras.</p>
            </div>
        </div>
      </section>

      {/* 3. POPULAR PACKAGES */}
      <section className="max-w-7xl mx-auto px-4 py-24">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl font-bold text-slate-900">Trending Destinations</h2>
          <div className="w-20 h-1 bg-orange-500 mx-auto rounded-full"></div>
          <p className="text-gray-600 text-lg">The most booked spiritual tours this season</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {packages.slice(0, 3).map((pkg) => (
            <div key={pkg.id} className="group flex flex-col bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-lg hover:shadow-2xl hover:shadow-orange-500/10 transition-all duration-300 transform hover:-translate-y-2">
              
              {/* Image Area */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image 
                  src={pkg.image} 
                  alt={pkg.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60" />
                
                {/* Badges */}
                <div className="absolute top-4 left-4 bg-orange-600 text-white text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wide shadow-md">
                  Best Seller
                </div>
                <div className="absolute bottom-4 right-4 bg-white/95 backdrop-blur text-slate-900 text-sm font-bold px-4 py-2 rounded-xl flex items-center shadow-lg">
                   {pkg.days}
                </div>
              </div>

              {/* Content Area */}
              <div className="p-8 flex-1 flex flex-col">
                <div className="flex items-center text-xs font-semibold text-orange-600 mb-3 uppercase tracking-wider">
                    <MapPin size={14} className="mr-1" /> North India
                </div>
                
                <h3 className="text-2xl font-bold text-slate-900 mb-2 leading-tight group-hover:text-orange-600 transition-colors">
                    {pkg.title}
                </h3>
                
                <p className="text-slate-500 text-sm mb-6 line-clamp-2">
                    Experience the divinity of {pkg.title} with our all-inclusive package. Hotel, Cab, and Guide included.
                </p>
                
                {/* Buttons Container */}
                <div className="mt-auto grid grid-cols-2 gap-4">
                    {/* View Details Button (Secondary) */}
                    <Link href="/packages" className="flex items-center justify-center w-full py-3 rounded-xl border-2 border-slate-100 text-slate-600 font-semibold hover:border-orange-600 hover:text-orange-600 transition-colors bg-slate-50">
                        Details
                    </Link>

                    {/* Call Now Button (Primary) */}
                    <a 
                        href={`tel:${phoneNumber}`} 
                        className="flex items-center justify-center w-full py-3 rounded-xl bg-gradient-to-r from-emerald-500 to-green-600 text-white font-bold shadow-lg shadow-green-200 hover:shadow-green-300 transition-all transform hover:scale-[1.02]"
                    >
                        <Phone size={18} className="mr-2" />
                        Call Now
                    </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-16">
           <Link href="/packages" className="inline-flex items-center text-lg font-bold text-slate-900 hover:text-orange-600 transition-colors border-b-2 border-transparent hover:border-orange-600 pb-1">
             View All Packages <ArrowRight className="ml-2" size={20} />
           </Link>
        </div>
      </section>

      {/* 4. TRUST STRIP */}
      <section className="bg-slate-900 py-20 text-white border-t-4 border-orange-600">
        <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
                <div className="space-y-2">
                    <div className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-orange-400 to-orange-600">5k+</div>
                    <div className="text-slate-400 font-medium tracking-wide">Happy Travelers</div>
                </div>
                <div className="space-y-2">
                    <div className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-orange-400 to-orange-600">100%</div>
                    <div className="text-slate-400 font-medium tracking-wide">Safety Record</div>
                </div>
                <div className="space-y-2">
                    <div className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-orange-400 to-orange-600">50+</div>
                    <div className="text-slate-400 font-medium tracking-wide">Premium Cabs</div>
                </div>
                <div className="space-y-2">
                    <div className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-orange-400 to-orange-600">24/7</div>
                    <div className="text-slate-400 font-medium tracking-wide">Support Team</div>
                </div>
            </div>
        </div>
      </section>

    </div>
  );
}