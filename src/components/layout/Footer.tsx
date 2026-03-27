import Link from "next/link";
import { MapPin, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-shukuru-brown-deep text-shukuru-cream pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 mb-16">
        <div>
          <h2 className="text-3xl font-serif mb-2">Shukuru</h2>
          <h3 className="text-sm uppercase tracking-widest text-shukuru-nude mb-6">Guest House</h3>
          <p className="text-shukuru-nude/80 max-w-sm leading-relaxed font-light">
            A sanctuary of comfort and elegance. Your perfect stay away from home.
          </p>
        </div>
        
        <div>
          <h3 className="text-sm uppercase tracking-widest mb-6 text-shukuru-nude">Contact Us</h3>
          <ul className="space-y-4 font-light text-shukuru-cream/80">
            {/* Address removed for cleaner look */}
            <li className="flex items-center">
              <Mail className="w-4 h-4 mr-3 text-shukuru-nude" />
              <a href="mailto:shukuruguesthouse@gmail.com" className="hover:text-white transition-colors">
                shukuruguesthouse@gmail.com
              </a>
            </li>
          </ul>
        </div>
        
        <div>
          <h3 className="text-sm uppercase tracking-widest mb-6 text-shukuru-nude">Explore</h3>
          <ul className="space-y-4 font-light text-shukuru-cream/80 flex flex-col">
            <Link href="#rooms" className="hover:text-white transition-colors w-fit">Our Rooms</Link>
            <Link href="#features" className="hover:text-white transition-colors w-fit">Features</Link>
            <Link href="#gallery" className="hover:text-white transition-colors w-fit">Gallery</Link>
            <Link href="#amenities" className="hover:text-white transition-colors w-fit">Amenities</Link>
            <Link href="#book" className="hover:text-white transition-colors w-fit">Book a Stay</Link>
          </ul>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 border-t border-shukuru-nude/20 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-shukuru-nude/60 tracking-wider font-light">
        <p>&copy; {new Date().getFullYear()} Shukuru Guest House. All rights reserved.</p>
        <p className="mt-2 md:mt-0">Designed elegantly.</p>
      </div>
    </footer>
  );
}
