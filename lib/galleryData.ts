// lib/galleryData.ts

export interface GalleryItem {
  id: number;
  src: string;
  alt: string; 
  location: string;
}

export const galleryImages: GalleryItem[] = [
  { 
    id: 1, 
    src: '/Deepotsav-Ayodhya-Shailendra-Kumar-Dwivedi-Shutterstock-Featured.jpg', 
    alt: 'Grand Deepotsav celebration with millions of diyas on the banks of Saryu river', 
    location: 'Ayodhya' 
  },
  { 
    id: 2, 
    src: '/ganga aarti.jpeg', 
    alt: 'Priests performing the evening Ganga Aarti with large brass lamps at the ghats', 
    location: 'Varanasi' 
  },
  { 
    id: 3, 
    src: '/Ganga Aarti.png', 
    alt: 'Spiritual Ganga Aarti ceremony at Dashashwamedh Ghat during twilight', 
    location: 'Varanasi' 
  },
  { 
    id: 4, 
    src: '/Kashi.jpeg', 
    alt: 'Panoramic view of the ancient Kashi Vishwanath temple and the ghats of Varanasi', 
    location: 'Kashi (Varanasi)' 
  },
  { 
    id: 5, 
    src: '/kashi saint.jpeg', 
    alt: 'A sadhu (saint) in traditional saffron attire sitting by the holy Ganges', 
    location: 'Varanasi' 
  },
  { 
    id: 6, 
    src: '/Maha_Kumbh.png', 
    alt: 'Massive gathering of devotees and colorful tents at the Maha Kumbh Mela', 
    location: 'Prayagraj' 
  },
  { 
    id: 7, 
    src: '/taj-mahal.jpg', 
    alt: 'The iconic white marble Taj Mahal under a clear blue sky', 
    location: 'Agra' 
  },
  { 
    id: 8, 
    src: '/Shree-Ram-Janmabhoomi-Mandir.jpg', 
    alt: 'Exterior architectural view of the Shree Ram Janmabhoomi Mandir', 
    location: 'Ayodhya' 
  },
  { 
    id: 9, 
    src: '/Ayodhya Ram Mandir.png', 
    alt: 'Detailed view of the intricate carvings on the Ayodhya Ram Mandir structure', 
    location: 'Ayodhya' 
  },
  { 
    id: 10, 
    src: '/dev diwali.jpeg', 
    alt: 'Ghats of Varanasi illuminated with thousands of lamps during Dev Deepawali', 
    location: 'Varanasi' 
  },
  { 
    id: 11, 
    src: '/DIwali-ayodhya.jpg', 
    alt: 'Aerial view of Ayodhya city glowing with lights during Diwali festivities', 
    location: 'Ayodhya' 
  },
  { 
    id: 12, 
    src: '/himachal-pradesh-tourism.webp', 
    alt: 'Scenic landscape of snow-capped Himalayan peaks and lush green valleys', 
    location: 'Himachal Pradesh' 
  },
];