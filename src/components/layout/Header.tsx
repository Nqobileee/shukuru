import Link from "next/link";

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-white/80 border-b border-shukuru-nude/30 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-6 h-24 flex items-center justify-between">
        {/* Logo left-aligned (luxurious text) */}
        <Link href="/" className="flex items-center flex-shrink-0 select-none">
          <span
            className="text-2xl md:text-3xl font-serif font-semibold tracking-[0.12em] text-shukuru-brown-deep"
            style={{ fontFamily: 'Playfair Display, serif', letterSpacing: '0.12em', fontWeight: 500 }}
          >
            Shukuru
            <span
              className="ml-2 text-base md:text-lg font-light tracking-[0.18em] text-shukuru-brown-light"
              style={{ fontFamily: 'Playfair Display, serif', fontWeight: 300 }}
            >
              Guest House
            </span>
          </span>
        </Link>

        {/* Desktop navigation center */}
        <nav className="hidden md:flex flex-1 justify-center space-x-8 text-sm uppercase tracking-widest text-shukuru-brown-light">
          <Link href="#rooms" className="hover:text-shukuru-brown-deep transition-colors duration-300">
            Our Rooms
          </Link>
          <Link href="#features" className="hover:text-shukuru-brown-deep transition-colors duration-300">
            Features
          </Link>
          <Link href="#gallery" className="hover:text-shukuru-brown-deep transition-colors duration-300">
            Gallery
          </Link>
          <Link href="#amenities" className="hover:text-shukuru-brown-deep transition-colors duration-300">
            Amenities
          </Link>
        </nav>

        {/* Right CTAs */}
        <div className="hidden md:flex flex-1 justify-end">
          <Link 
            href="#book" 
            className="px-4 py-1.5 border border-shukuru-brown text-shukuru-brown hover:bg-shukuru-brown hover:text-white transition-colors duration-300 rounded-full text-sm"
          >
            Book Now
          </Link>
        </div>

        {/* Mobile: logo left, menu right */}
        <div className="md:hidden flex flex-1 justify-end items-center">
          <button className="text-shukuru-brown-deep flex flex-col space-y-1.5 p-1.5">
            <span className="w-6 h-[2px] bg-current rounded"></span>
            <span className="w-6 h-[2px] bg-current rounded"></span>
            <span className="w-4 h-[2px] bg-current self-end rounded"></span>
          </button>
        </div>
      </div>
    </header>
  );
}
