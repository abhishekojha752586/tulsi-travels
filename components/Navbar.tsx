'use client'; // Essential: This tells Next.js this component uses Browser APIs (window.scroll)

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Phone } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  // Logic: Transparent only on Home Page AND when at the top
  const isHome = pathname === '/';
  const isTransparent = isHome && !isScrolled;

  useEffect(() => {
    const handleScroll = () => {
      // If user scrolls down more than 10px, change state
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Dynamic Class Helpers
  const navBackground = isTransparent 
    ? 'bg-transparent shadow-none' 
    : 'bg-white shadow-md';
    
  const textColor = isTransparent 
    ? 'text-white hover:text-orange-400' 
    : 'text-slate-700 hover:text-orange-600';

  const logoColor = isTransparent 
    ? 'text-white' 
    : 'text-orange-600';

  const buttonStyle = isTransparent
    ? 'bg-white text-orange-600 hover:bg-orange-50'
    : 'bg-orange-600 text-white hover:bg-orange-700';

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out ${navBackground}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className={`text-2xl font-bold tracking-tight transition-colors ${logoColor}`}>
              Tulsi Tours & Travels
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 items-center">
            <Link href="/" className={`font-medium transition-colors ${textColor}`}>Home</Link>
            <Link href="/about" className={`font-medium transition-colors ${textColor}`}>About Us</Link>
            <Link href="/packages" className={`font-medium transition-colors ${textColor}`}>Packages</Link>
            <Link href="/rent-car" className={`font-medium transition-colors ${textColor}`}>Rent Car</Link>
            <Link href="/gallery" className={`font-medium transition-colors ${textColor}`}>Gallery</Link>
            
            <Link 
              href="/contact" 
              className={`px-5 py-2.5 rounded-full font-semibold shadow-sm transition-all transform hover:scale-105 ${buttonStyle}`}
            >
              Contact Us
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`p-2 rounded-md ${isTransparent ? 'text-white' : 'text-slate-900'}`}
            >
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
{isMobileMenuOpen && (
  <div className="md:hidden bg-white shadow-xl absolute top-full left-0 w-full">
    <div className="px-4 pt-2 pb-6 space-y-2 flex flex-col">
      <Link href="/" onClick={() => setIsMobileMenuOpen(false)} className="block px-3 py-3 text-base font-medium text-gray-700 hover:bg-orange-50 hover:text-orange-600 rounded-md">Home</Link>
      <Link href="/about" onClick={() => setIsMobileMenuOpen(false)} className="block px-3 py-3 text-base font-medium text-gray-700 hover:bg-orange-50 hover:text-orange-600 rounded-md">About Us</Link>
      <Link href="/packages" onClick={() => setIsMobileMenuOpen(false)} className="block px-3 py-3 text-base font-medium text-gray-700 hover:bg-orange-50 hover:text-orange-600 rounded-md">Packages</Link>
      <Link href="/rent-car" onClick={() => setIsMobileMenuOpen(false)} className="block px-3 py-3 text-base font-medium text-gray-700 hover:bg-orange-50 hover:text-orange-600 rounded-md">Rent Car</Link>
      
      {/* ADD THIS LINK BELOW */}
      <Link href="/gallery" onClick={() => setIsMobileMenuOpen(false)} className="block px-3 py-3 text-base font-medium text-gray-700 hover:bg-orange-50 hover:text-orange-600 rounded-md">Gallery</Link>
      
      <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)} className="block px-3 py-3 text-base font-medium text-white bg-orange-600 rounded-md text-center mt-4">Contact Us</Link>
    </div>
  </div>
)}
    </nav>
  );
}