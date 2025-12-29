'use client'; 

import { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send, MessageCircle } from 'lucide-react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: 'Tour Package',
    message: ''
  });

  const whatsappNumber = "919198623117"; 

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `*New Enquiry via Website* \n\nName: ${formData.name}\nPhone: ${formData.phone}\nService: ${formData.service}\nMessage: ${formData.message}`;
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
  };

  return (
    <div className="bg-slate-50 min-h-screen pt-24 pb-12">
      
      {/* 1. Page Header */}
      <section className="bg-slate-900 text-white py-16 px-4 mb-12">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto">
            Have questions about a Yatra? Want to book a cab? 
            Reach out to us and we will plan your perfect journey.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
        
        {/* 2. Contact Information Cards */}
        <div className="space-y-8">
            <div>
                <h2 className="text-3xl font-bold text-slate-800 mb-6">Get in Touch</h2>
                <p className="text-gray-600 mb-8">
                    We are available 24/7 on WhatsApp and Phone. Visit our office for a cup of tea and travel planning.
                </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 flex flex-col items-start hover:shadow-md transition">
                    <div className="bg-orange-100 p-3 rounded-full mb-4">
                        <Phone className="text-orange-600" size={24} />
                    </div>
                    <h3 className="font-bold text-lg text-slate-800">Phone & WhatsApp</h3>
                    <p className="text-gray-500 text-sm mb-2">Mon-Sun from 8am to 10pm</p>
                    <a href="tel:+919198623117" className="text-orange-600 font-bold hover:underline">
                        +91 9198623117
                    </a>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 flex flex-col items-start hover:shadow-md transition">
                    <div className="bg-blue-100 p-3 rounded-full mb-4">
                        <Mail className="text-blue-600" size={24} />
                    </div>
                    <h3 className="font-bold text-lg text-slate-800">Email Us</h3>
                    <p className="text-gray-500 text-sm mb-2">For corporate bookings</p>
                    <a href="mailto:info@tulsitours.com" className="text-blue-600 font-bold hover:underline">
                        info@tulsitours.com
                    </a>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 flex flex-col items-start hover:shadow-md transition sm:col-span-2">
                    <div className="flex justify-between w-full">
                        <div className="bg-green-100 p-3 rounded-full mb-4">
                            <MapPin className="text-green-600" size={24} />
                        </div>
                        <div className="bg-slate-100 px-3 py-1 rounded-full h-fit text-xs font-bold text-slate-600 flex items-center">
                            <Clock size={12} className="mr-1"/> Open 09:00 AM - 08:00 PM
                        </div>
                    </div>
                    <h3 className="font-bold text-lg text-slate-800">Head Office</h3>
                    <p className="text-gray-600">
                        893, Anand Nagar, Lal Bangla, <br /> Kanpur, Uttar Pradesh, India
                    </p>
                </div>
            </div>
        </div>

        {/* 3. Enquiry Form (FIXED TEXT COLOR) */}
        <div className="bg-white rounded-2xl shadow-xl border border-slate-100 p-8">
            <h3 className="text-2xl font-bold text-slate-800 mb-6 flex items-center gap-2">
                Send us a Message <MessageCircle className="text-green-500" />
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div className="space-y-2">
                        <label className="text-sm font-semibold text-gray-700">Your Name</label>
                        <input 
                            type="text" 
                            required
                            // Added 'text-gray-900' for dark text color
                            className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 text-gray-900 placeholder-gray-400 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none transition"
                            placeholder="John Doe"
                            onChange={(e) => setFormData({...formData, name: e.target.value})}
                        />
                    </div>
                    <div className="space-y-2">
                        <label className="text-sm font-semibold text-gray-700">Phone Number</label>
                        <input 
                            type="tel" 
                            required
                            // Added 'text-gray-900'
                            className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 text-gray-900 placeholder-gray-400 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none transition"
                            placeholder="+91 98765 43210"
                            onChange={(e) => setFormData({...formData, phone: e.target.value})}
                        />
                    </div>
                </div>

                <div className="space-y-2">
                    <label className="text-sm font-semibold text-gray-700">Interested In</label>
                    <select 
                        // Added 'text-gray-900'
                        className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 text-gray-900 focus:border-orange-500 outline-none"
                        onChange={(e) => setFormData({...formData, service: e.target.value})}
                    >
                        <option>Tour Package</option>
                        <option>Car Rental</option>
                        <option>Hotel Booking</option>
                        <option>Other Enquiry</option>
                    </select>
                </div>

                <div className="space-y-2">
                    <label className="text-sm font-semibold text-gray-700">Message</label>
                    <textarea 
                        rows={4}
                        // Added 'text-gray-900'
                        className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 text-gray-900 placeholder-gray-400 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none transition"
                        placeholder="Tell us about your travel dates and requirements..."
                        onChange={(e) => setFormData({...formData, message: e.target.value})}
                    ></textarea>
                </div>

                <button 
                    type="submit"
                    className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-4 rounded-xl shadow-lg shadow-green-200 hover:shadow-green-300 transition-all transform hover:-translate-y-1 flex items-center justify-center gap-2"
                >
                    <Send size={20} />
                    Send via WhatsApp
                </button>
                <p className="text-xs text-center text-gray-400">
                    *This will open WhatsApp on your device with your details filled in.
                </p>
            </form>
        </div>
      </div>

      {/* 4. Full Width Map */}
      <div className="w-full h-[450px] bg-gray-200 relative">
        <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3572.339659024982!2d80.3999999!3d26.4499999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjbCsDI2JzU5LjkiTiA4MMKwMjMnNTkuOSJF!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin" 
            width="100%" 
            height="100%" 
            style={{border:0}} 
            allowFullScreen 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            className="grayscale hover:grayscale-0 transition duration-500"
        />
        <div className="absolute top-4 left-4 md:top-10 md:left-20 bg-white p-4 rounded-lg shadow-lg max-w-xs hidden md:block">
            <h4 className="font-bold text-slate-900">Tulsi Tours & Travels</h4>
            <p className="text-sm text-gray-600">Lal Bangla, Kanpur</p>
            <a 
                href="https://maps.google.com" 
                target="_blank" 
                className="text-xs text-blue-600 font-semibold hover:underline mt-2 inline-block"
            >
                Get Directions
            </a>
        </div>
      </div>

    </div>
  );
}