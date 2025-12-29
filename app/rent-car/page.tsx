import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { carFleet } from '@/lib/carData';
import { 
  CheckCircle, 
  Phone, 
  ShieldCheck, 
  MapPin, 
  Briefcase, 
  Wind, 
  XCircle, 
  MessageCircle, 
  CalendarCheck 
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Car Rental Service | Innova, Tempo Traveller, Taxi Booking',
  description: 'Book luxury and affordable cars for outstation and local trips. Available: Innova Crysta, Swift Dzire, and Tempo Traveller. Best rates guaranteed.',
  keywords: ['Car Rental Varanasi', 'Innova Booking', 'Tempo Traveller Rent', 'Taxi Service Ayodhya', 'Wedding Car Rental'],
};

export default function RentCarPage() {
  const phoneNumber = "919198623117"; // Your number

  return (
    <div className="bg-slate-50 min-h-screen pt-24 font-sans text-slate-900">
      
      {/* 1. HERO SECTION: Professional & Trust-Building */}
      <section className="bg-slate-900 text-white py-20 px-4 relative overflow-hidden">
        {/* Abstract Background Decoration */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-orange-600 rounded-full blur-[128px] opacity-20 transform translate-x-1/2 -translate-y-1/2"></div>
        
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <span className="inline-block py-1 px-3 rounded-full bg-orange-500/20 border border-orange-500/50 text-orange-300 text-xs font-bold tracking-wider uppercase mb-4">
            Certified & Sanitized Fleet
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight">
            Rent Premium Cars for <br />
            <span className="text-orange-500">Your Perfect Journey</span>
          </h1>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto mb-10 leading-relaxed">
            From compact sedans for small families to luxury Tempo Travellers for groups. 
            Transparent pricing, expert drivers, and 24/7 support.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="#fleet" className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 rounded-xl font-bold transition shadow-lg shadow-orange-900/50">
              Select Your Car
            </Link>
            <Link href="#rates" className="bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white/20 px-8 py-4 rounded-xl font-bold transition">
              View Tariff Card
            </Link>
          </div>
        </div>
      </section>

      {/* 2. HOW IT WORKS (New Section for Clarity) */}
      <section className="py-12 border-b border-slate-200 bg-white">
        <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-slate-100">
                <div className="p-4">
                    <div className="w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4 text-slate-700 font-bold text-xl">1</div>
                    <h3 className="font-bold text-lg">Choose Vehicle</h3>
                    <p className="text-sm text-gray-500 mt-1">Select the car that fits your group size.</p>
                </div>
                <div className="p-4">
                    <div className="w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4 text-slate-700 font-bold text-xl">2</div>
                    <h3 className="font-bold text-lg">Get Quote</h3>
                    <p className="text-sm text-gray-500 mt-1">Call or WhatsApp for the final price.</p>
                </div>
                <div className="p-4">
                    <div className="w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4 text-slate-700 font-bold text-xl">3</div>
                    <h3 className="font-bold text-lg">Pay Advance</h3>
                    <p className="text-sm text-gray-500 mt-1">Confirm booking and receive driver details.</p>
                </div>
            </div>
        </div>
      </section>

      {/* 3. THE FLEET SHOWCASE */}
      <section id="fleet" className="max-w-7xl mx-auto px-4 py-20">
        <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900">Our Premium Fleet</h2>
            <p className="text-gray-500 mt-2">Clean, AC Cabs with Professional Chauffeurs</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {carFleet.map((car) => (
            <div key={car.id} className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl border border-slate-100 transition-all duration-300 flex flex-col">
              
              {/* Image Area */}
              <div className="relative aspect-video bg-gray-100 overflow-hidden">
                <Image 
                  src={car.image} 
                  alt={car.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 right-3 bg-white/90 backdrop-blur text-slate-800 px-3 py-1 rounded-lg text-xs font-bold shadow-sm">
                   {car.category}
                </div>
              </div>
              
              <div className="p-6 flex-1 flex flex-col">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold text-slate-900">{car.name}</h3>
                  <div className="flex flex-col items-end">
                    <span className="text-xl font-bold text-orange-600">{car.ratePerKm}</span>
                    <span className="text-xs text-gray-400">per km</span>
                  </div>
                </div>

                {/* Key Specs Icons */}
                <div className="flex items-center gap-4 mb-6 text-sm text-gray-600 bg-slate-50 p-3 rounded-lg">
                    <div className="flex items-center gap-1">
                        <CalendarCheck size={16} className="text-slate-400"/>
                        <span>{car.seats} Seats</span>
                    </div>
                    <div className="flex items-center gap-1">
                        <Briefcase size={16} className="text-slate-400"/>
                        {/* Assuming bag logic or adding it manually */}
                        <span>2-3 Bags</span> 
                    </div>
                    <div className="flex items-center gap-1">
                        <Wind size={16} className="text-slate-400"/>
                        <span>AC</span>
                    </div>
                </div>

                {/* Features List */}
                <ul className="space-y-2 mb-8 flex-1">
                  {car.features.slice(0, 3).map((feature, index) => (
                    <li key={index} className="flex items-center text-gray-500 text-sm">
                      <CheckCircle size={14} className="text-green-500 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Action Buttons */}
                <div className="mt-auto grid grid-cols-2 gap-3">
                  <a 
                    href={`https://wa.me/${phoneNumber}?text=I want to book ${car.name}`}
                    target="_blank"
                    className="flex items-center justify-center bg-green-50 text-green-700 py-3 rounded-lg font-semibold hover:bg-green-100 transition"
                  >
                    <MessageCircle size={18} className="mr-2" />
                    WhatsApp
                  </a>
                  <a 
                    href={`tel:${phoneNumber}`} 
                    className="flex items-center justify-center bg-slate-900 text-white py-3 rounded-lg font-semibold hover:bg-slate-800 transition"
                  >
                    <Phone size={18} className="mr-2" />
                    Call Now
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. PRICING & INCLUSIONS (The Professional Part) */}
      <section id="rates" className="bg-slate-900 text-white py-20">
        <div className="max-w-6xl mx-auto px-4">
            
            <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-4">Transparent Tariff Card</h2>
                <p className="text-slate-400">No hidden algorithms. Simple, flat rates for everyone.</p>
            </div>

            {/* Layout: Table on Left, Inclusions on Right */}
            <div className="flex flex-col lg:flex-row gap-12">
                
                {/* Table */}
                <div className="lg:w-2/3 bg-white rounded-2xl overflow-hidden text-slate-900 shadow-xl">
                    <div className="overflow-x-auto">
                        <table className="w-full text-sm text-left">
                        <thead className="text-xs text-slate-500 uppercase bg-slate-50 border-b">
                            <tr>
                            <th className="px-6 py-4">Vehicle</th>
                            <th className="px-6 py-4">Rate/Km</th>
                            <th className="px-6 py-4">Driver Bata</th>
                            <th className="px-6 py-4 whitespace-nowrap">Min Km/Day</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100">
                            {carFleet.map((car, index) => (
                            <tr key={index} className="hover:bg-slate-50 transition">
                                <td className="px-6 py-4 font-bold">{car.name}</td>
                                <td className="px-6 py-4 text-orange-600 font-bold">{car.ratePerKm}</td>
                                <td className="px-6 py-4">{car.driverBata}</td>
                                <td className="px-6 py-4">300 km</td>
                            </tr>
                            ))}
                        </tbody>
                        </table>
                    </div>
                </div>

                {/* Inclusions / Exclusions Box */}
                <div className="lg:w-1/3 flex flex-col gap-6">
                    {/* What's Included */}
                    <div className="bg-slate-800/50 p-6 rounded-2xl border border-slate-700">
                        <h4 className="text-lg font-bold mb-4 text-green-400 flex items-center gap-2">
                            <CheckCircle size={20}/> Included
                        </h4>
                        <ul className="space-y-3 text-sm text-slate-300">
                            <li className="flex gap-2"><span className="w-1.5 h-1.5 bg-green-500 rounded-full mt-1.5"></span> Vehicle Fuel</li>
                            <li className="flex gap-2"><span className="w-1.5 h-1.5 bg-green-500 rounded-full mt-1.5"></span> Driver Allowance</li>
                            <li className="flex gap-2"><span className="w-1.5 h-1.5 bg-green-500 rounded-full mt-1.5"></span> Car Insurance</li>
                            <li className="flex gap-2"><span className="w-1.5 h-1.5 bg-green-500 rounded-full mt-1.5"></span> Clean & Sanitized Cab</li>
                        </ul>
                    </div>

                    {/* What's Excluded */}
                    <div className="bg-slate-800/50 p-6 rounded-2xl border border-slate-700">
                        <h4 className="text-lg font-bold mb-4 text-red-400 flex items-center gap-2">
                            <XCircle size={20}/> Excluded (Extra)
                        </h4>
                        <ul className="space-y-3 text-sm text-slate-300">
                            <li className="flex gap-2"><span className="w-1.5 h-1.5 bg-red-500 rounded-full mt-1.5"></span> Toll Taxes & Parking</li>
                            <li className="flex gap-2"><span className="w-1.5 h-1.5 bg-red-500 rounded-full mt-1.5"></span> State Entry Taxes</li>
                            <li className="flex gap-2"><span className="w-1.5 h-1.5 bg-red-500 rounded-full mt-1.5"></span> Night Charge (10 PM - 6 AM)</li>
                            <li className="flex gap-2"><span className="w-1.5 h-1.5 bg-red-500 rounded-full mt-1.5"></span> GST (5%)</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="mt-8 text-center">
                 <p className="text-slate-400 text-sm">
                    * Minimum 300km per day is charged for outstation trips. For local rentals, contact us for special packages.
                 </p>
            </div>
        </div>
      </section>

      {/* 5. WHY CHOOSE US */}
      <section className="py-20 max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="p-8 bg-orange-50 rounded-2xl border border-orange-100">
            <div className="w-14 h-14 bg-white text-orange-600 rounded-xl shadow-sm flex items-center justify-center mx-auto mb-6">
              <ShieldCheck size={28} />
            </div>
            <h3 className="font-bold text-xl mb-3 text-slate-900">Safety First</h3>
            <p className="text-slate-600">GPS tracked vehicles and verified drivers for your family's complete safety.</p>
          </div>
          <div className="p-8 bg-blue-50 rounded-2xl border border-blue-100">
            <div className="w-14 h-14 bg-white text-blue-600 rounded-xl shadow-sm flex items-center justify-center mx-auto mb-6">
              <MapPin size={28} />
            </div>
            <h3 className="font-bold text-xl mb-3 text-slate-900">Local Experts</h3>
            <p className="text-slate-600">Our drivers aren't just drivers; they are guides who know the best routes and food spots.</p>
          </div>
          <div className="p-8 bg-green-50 rounded-2xl border border-green-100">
            <div className="w-14 h-14 bg-white text-green-600 rounded-xl shadow-sm flex items-center justify-center mx-auto mb-6">
              <Phone size={28} />
            </div>
            <h3 className="font-bold text-xl mb-3 text-slate-900">Instant Support</h3>
            <p className="text-slate-600">On-road assistance and 24/7 customer care availability for any changes in plan.</p>
          </div>
        </div>
      </section>

    </div>
  );
}