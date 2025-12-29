import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Award, Users, Heart, Clock, Map } from 'lucide-react';

export const metadata: Metadata = {
  title: 'About Us | Trusted Travel Agency for Spiritual & Family Tours',
  description: 'Learn about Tulsi Tours and Travels. We have 10+ years of experience in organizing spiritual Yatras to Varanasi, Ayodhya, and Chardham with safe and reliable service.',
};

export default function AboutPage() {
  return (
    <div className="bg-white min-h-screen pt-24">
      
      {/* 1. Hero Section */}
      <section className="bg-slate-900 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Your Journey, Our Passion</h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            At <span className="text-orange-500 font-semibold">Tulsi Tours</span>, we don't just book tickets; 
            we craft spiritual experiences and lifelong memories across India's holiest cities.
          </p>
        </div>
      </section>

      {/* 2. Our Story & Mission */}
      <section className="py-16 max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-12">
          
          {/* --- IMAGE SECTION UPDATED --- */}
          {/* Removed fixed height (h-[400px]) so the image scales naturally */}
          <div className="w-full md:w-1/2">
             <Image 
               src="/About US.png" 
               alt="About Tulsi Tours Team"
               // Set width/height to define the aspect ratio (browser calculates the rest)
               width={800} 
               height={600}
               // 'w-full h-auto' makes it responsive: full width, auto height
               className="w-full h-auto rounded-2xl shadow-xl object-contain"
             />
          </div>
          
          {/* Content Side */}
          <div className="w-full md:w-1/2 space-y-6">
            <h2 className="text-3xl font-bold text-slate-900">Who We Are</h2>
            <p className="text-gray-600 leading-relaxed">
              Founded with the vision of making spiritual travel accessible and comfortable, Tulsi Tours and Travels 
              has grown from a small taxi service in Varanasi to a full-fledged travel agency covering 
              North India's most significant destinations.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Just like the <span className="italic font-semibold text-green-700">Tulsi</span> plant is sacred and essential in every Indian home, 
              we aim to be the essential partner in your sacred journeys. Whether it is the Ganga Aarti in Varanasi, 
              the Ram Mandir in Ayodhya, or the snowy peaks of Himachal, we treat every guest like family.
            </p>
            <div className="pt-4">
                <h3 className="text-xl font-bold mb-3 text-gray-700">Our Mission</h3>
                <blockquote className="border-l-4 border-orange-500 pl-4 italic text-gray-700">
                    "To provide safe, transparent, and spiritually fulfilling travel experiences with zero hidden costs."
                </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* 3. The "Trust Numbers" */}
      <section className="bg-orange-50 py-12">
        <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                <div className="space-y-2">
                    <div className="text-4xl font-bold text-orange-600">10+</div>
                    <div className="text-sm text-gray-600 font-medium">Years Experience</div>
                </div>
                <div className="space-y-2">
                    <div className="text-4xl font-bold text-orange-600">5000+</div>
                    <div className="text-sm text-gray-600 font-medium">Happy Travelers</div>
                </div>
                <div className="space-y-2">
                    <div className="text-4xl font-bold text-orange-600">50+</div>
                    <div className="text-sm text-gray-600 font-medium">Destinations</div>
                </div>
                <div className="space-y-2">
                    <div className="text-4xl font-bold text-orange-600">24/7</div>
                    <div className="text-sm text-gray-600 font-medium">Support Available</div>
                </div>
            </div>
        </div>
      </section>

      {/* 4. Why Choose Us Grid */}
      <section className="py-20 max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 text-black">Why Travel With Us?</h2>
            <p className="text-gray-600">We understand the nuances of family and religious travel.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 border border-gray-100 rounded-xl shadow-sm hover:shadow-lg transition bg-white">
                <div className="w-14 h-14 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center mb-6">
                    <Users size={28} />
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-800">Local Experts</h3>
                <p className="text-gray-600">
                    Our drivers and guides are locals. They know the best time for Darshan, hidden food spots, and shortcuts to avoid traffic.
                </p>
            </div>

            <div className="p-8 border border-gray-100 rounded-xl shadow-sm hover:shadow-lg transition bg-white">
                <div className="w-14 h-14 bg-green-100 text-green-600 rounded-lg flex items-center justify-center mb-6">
                    <Award size={28} />
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-800">Transparent Pricing</h3>
                <p className="text-gray-600">
                    No shockers at the end of the trip. Our quotes include tolls, parking, and driver allowance details clearly.
                </p>
            </div>

            <div className="p-8 border border-gray-100 rounded-xl shadow-sm hover:shadow-lg transition bg-white">
                <div className="w-14 h-14 bg-purple-100 text-purple-600 rounded-lg flex items-center justify-center mb-6">
                    <Heart size={28} />
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-800">Personalized Care</h3>
                <p className="text-gray-600">
                    Traveling with elderly parents or small kids? We customize the itinerary to ensure their comfort and safety first.
                </p>
            </div>
        </div>
      </section>

      {/* 5. Final Call to Action */}
      <section className="bg-slate-900 py-16 px-4 pt-24">
          <div className="max-w-4xl mx-auto text-center text-white">
              <h2 className="text-3xl font-bold mb-6">Plan Your Next Yatra With Us</h2>
              <p className="text-slate-300 mb-8 text-lg">
                  Let us handle the logistics while you focus on the divine experience.
              </p>
              <Link 
                href="/contact" 
                className="inline-block bg-orange-600 hover:bg-orange-700 text-white font-bold py-4 px-8 rounded-lg transition"
              >
                  Contact Us Today
              </Link>
          </div>
      </section>

    </div>
  );
}