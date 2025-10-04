"use client"

export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 text-black">
      <div className="relative backdrop-blur-md shadow-md">
        <div className="flex justify-between items-center px-6 py-4">
          {/* Left Menu Icon */}
          <div className="text-3xl md:hidden">
            <i className="bx bx-menu"></i>
          </div>

          {/* Logo */}
          <div className="flex items-center">
            <i className="bx bx-cake text-3xl text-black"></i>
            <span className="text-xl font-bold text-black logo-text">HONEYED</span>
          </div>

          {/* Nav Links */}
          <nav className="hidden md:flex gap-8 text-sm font-bold uppercase text-black absolute left-1/2 transform -translate-x-1/2">
            <a href="#" className="hover:text-pink-900 transition">
              Home
            </a>
            <a href="#menu" className="hover:text-pink-900 transition">
              Menu
            </a>
            <a href="#about" className="hover:text-pink-900 transition">
              About Us
            </a>
            <a href="#contact" className="hover:text-pink-900 transition">
              Contact Us
            </a>
            <a href="#order" className="hover:text-pink-900 transition">
              Order
            </a>
          </nav>

          {/* Right Icons */}
          <div className="flex items-center gap-4 text-2xl ml-auto">
            <i className="bx bx-search cursor-pointer hover:text-pink-900 transition"></i>
            <i className="bx bx-heart cursor-pointer hover:text-pink-900 transition"></i>
            <i className="bx bx-cake cursor-pointer hover:text-pink-900 transition"></i>
          </div>
        </div>
      </div>
    </header>
  )
}
