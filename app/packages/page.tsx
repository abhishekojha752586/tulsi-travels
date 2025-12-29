import { packages } from '@/lib/data';
import { Metadata } from 'next';
import Image from 'next/image';
import { MessageCircle, Clock } from 'lucide-react'; 

export const metadata: Metadata = {
  title: 'All Tour Packages - Tulsi Tour & Travels',
  description: 'Explore our wide range of spiritual and hill station tour packages. Custom itineraries for Varanasi, Ayodhya, Himachal, and more.',
};

export default function PackagesPage() {
  const whatsappNumber = "919198623117"; 

  return (
    <div className="min-h-screen bg-slate-50 pt-36 pb-20 px-4">
      <div className="max-w-7xl mx-auto text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6">
          Explore Our <span className="text-orange-600">Premium Packages</span>
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          From the sacred Ghats of Varanasi to the majestic peaks of Himachal. 
          Select a destination and get a customized quote instantly.
        </p>
      </div>
      
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {packages.map((pkg) => {
          
          const message = `Namaste, I am interested in the *${pkg.title}* (${pkg.days}) package. Please let me know the price and itinerary details.`;
          const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

          return (
            <div 
              key={pkg.id} 
              className="group bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-2xl transition-all duration-300 overflow-hidden flex flex-col"
            >
              
              {/* FIX: Changed 'h-64' to 'aspect-[4/3]'.
                 This keeps the box ratio constant. As width shrinks, height shrinks too.
                 No more zooming/cropping on mobile!
              */}
              <div className="relative aspect-[4/3] w-full bg-gray-200 overflow-hidden">
                <Image 
                  src={pkg.image}
                  alt={pkg.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                
                <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-md text-white px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1">
                  <Clock size={12} />
                  {pkg.days}
                </div>
              </div>
              
              <div className="p-6 flex-1 flex flex-col">
                <h2 className="text-2xl font-bold text-slate-800 mb-2 group-hover:text-orange-600 transition-colors">
                  {pkg.title}
                </h2>
                
                <p className="text-gray-500 text-sm mb-6">
                  Customizable itinerary available with luxury & budget options.
                </p>

                <div className="mt-auto">
                  <a 
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-green-600 hover:bg-green-700 text-white py-3.5 rounded-xl font-semibold flex items-center justify-center gap-2 transition-colors shadow-green-200 hover:shadow-lg"
                  >
                    <MessageCircle size={20} />
                    Message for more details
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}