import { Metadata } from 'next';
import Image from 'next/image';
import { galleryImages } from '@/lib/galleryData';
import { MapPin } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Photo Gallery - Our Travel Memories',
  description: 'Explore photos from our previous tours to Varanasi, Ayodhya, Chardham, and Himachal Pradesh. See the experiences we create.',
  // Adding Open Graph image for social media sharing
  openGraph: {
    images: ['/images/gallery/img1.jpg'], // Use your best image here
  }
};

export default function GalleryPage() {
  return (
    <div className="bg-white min-h-screen py-32">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-slate-900">
          Memories from Incredible India
        </h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          A visual journey through the spiritual paths and scenic routes taken by our happy travelers. 
          Get inspired for your next trip with Tulsi Tours.
        </p>
      </div>

      {/* The Grid 
        We use grid-cols-2 on mobile and grid-cols-3 or 4 on larger screens for a modern look.
      */}
      <div className="max-w-[1400px] mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {galleryImages.map((item) => (
            <div 
              key={item.id} 
              className="group relative h-64 md:h-80 rounded-xl overflow-hidden bg-gray-100 shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer"
            >
              {/* The Optimized Image Component 
                - fill: Makes image fill the container absolute parent container
                - object-cover: Ensures image doesn't stretch awkwardly
                - sizes: CRITICAL for performance. Tells browser which size to download based on screen width.
              */}
              <Image
                src={item.src}
                alt={item.alt}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out"
                sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
                priority={item.id <= 4} // Load first 4 images immediately, lazy load the rest
              />

              {/* Hover Overlay with Location */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 p-4 text-white flex items-center">
                  <MapPin size={18} className="text-orange-500 mr-2" />
                  <span className="font-medium text-sm md:text-base">{item.location}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Call to Action at Bottom */}
      <div className="text-center mt-20">
         <p className="text-xl text-gray-700 font-medium mb-4">Want to see these places yourself?</p>
         <a href="/packages" className="inline-block bg-orange-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-orange-700 transition">
            Explore Our Packages
         </a>
      </div>

    </div>
  );
}