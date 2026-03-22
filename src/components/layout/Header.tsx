import Link from "next/link";

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-white/80 border-b border-shukuru-nude/30 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-6 h-24 flex items-center justify-between">
        <div className="flex-1">
          {/* Left navigation */}
          <nav className="hidden md:flex space-x-8 text-sm uppercase tracking-widest text-shukuru-brown-light">
            <Link href="#rooms" className="hover:text-shukuru-brown-deep transition-colors duration-300">
              Our Rooms
            </Link>
            <Link href="#features" className="hover:text-shukuru-brown-deep transition-colors duration-300">
              Features
            </Link>
            <Link href="#gallery" className="hover:text-shukuru-brown-deep transition-colors duration-300">
              Gallery
            </Link>
          </nav>
        </div>
        
        {/* Logo */}
        <Link href="/" className="text-3xl font-serif text-shukuru-brown-deep tracking-wide flex-shrink-0 relative overflow-hidden group text-center flex flex-col">
          <span className="relative z-10">Shukuru</span>
          <span className="text-xs uppercase tracking-[0.3em] text-shukuru-brown-light mt-1">Guest House</span>
        </Link>
        
        <div className="flex-1 flex justify-end">
          {/* Right navigation / CTAs */}
          <nav className="hidden md:flex space-x-8 text-sm uppercase tracking-widest text-shukuru-brown-light items-center">
            <Link href="#amenities" className="hover:text-shukuru-brown-deep transition-colors duration-300">
              Amenities
            </Link>
            <Link 
              href="#book" 
              className="px-5 py-2 border border-shukuru-brown text-shukuru-brown hover:bg-shukuru-brown hover:text-white transition-colors duration-300"
            >
              Book Now
            </Link>
          </nav>
        </div>

        {/* Mobile Menu Icon Placeholder */}
        <button className="md:hidden text-shukuru-brown-deep flex flex-col space-y-1.5 p-2">
          <span className="w-6 h-[1px] bg-current"></span>
          <span className="w-6 h-[1px] bg-current"></span>
          <span className="w-4 h-[1px] bg-current self-end"></span>
        </button>
      </div>
    </header>
  );
}
