import Link from "next/link"

export default function Footer() {
  return (
    <footer
      id="contact"
      className="bg-gradient-to-r from-[#f28c82] to-[#d45b66] text-yellow-50 py-12 relative overflow-hidden font-[Poppins]"
    >
      {/* Newsletter Top Center with Doodle Frame */}
      <div className="max-w-3xl mx-auto px-6 mb-12">
        <div className="doodle-frame bg-white/90 backdrop-blur-sm p-8 rounded-2xl shadow-lg text-center relative">
          {/* Title */}
          <h2 className="text-3xl font-bold text-[#d45b66] mb-4">Sweet Updates</h2>

          {/* Subtitle */}
          <p className="text-lg text-gray-700 mb-2">Subscribe to our newsletter for exclusive offers,</p>
          <p className="text-lg text-gray-700 mb-6">new product announcements, and baking tips!</p>

          {/* Form */}
          <form className="flex flex-col sm:flex-row gap-4 justify-center">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full sm:w-96 px-5 py-4 rounded-full border border-pink-200 text-lg text-black focus:outline-none focus:ring-2 focus:ring-pink-400"
            />
            <button
              type="submit"
              className="px-8 py-4 bg-gradient-to-r from-[#f28c82] to-[#d45b66] text-lg text-white font-semibold rounded-full shadow-md hover:from-[#d45b66] hover:to-[#f28c82] transition"
            >
              Subscribe
            </button>
          </form>

          {/* Checkbox */}
          <div className="flex items-center justify-center mt-4">
            <input type="checkbox" id="terms" className="mr-2 h-5 w-5 text-yellow-500 focus:ring-yellow-300" />
            <label htmlFor="terms" className="text-base text-gray-600">
              I agree to receive marketing emails from Honeyed Bakery
            </label>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10 text-center md:text-left relative z-10">
        {/* About */}
        <div className="space-y-3">
          <div className="flex items-center justify-center md:justify-start mb-4">
            <i className="bx bx-cake text-2xl mr-3"></i>
            <h3 className="text-xl font-bold logo-text">HONEYED</h3>
          </div>
          <p className="mb-4 leading-relaxed">
            Crafting delicious, artisanal baked goods with love and premium ingredients since 2010.
          </p>
          <div className="flex gap-3 justify-center md:justify-start">
            <a href="#" className="text-xl hover:text-white transition-colors p-2 rounded-full hover:bg-white/20">
              <i className="bx bxl-facebook-circle"></i>
            </a>
            <a href="#" className="text-xl hover:text-white transition-colors p-2 rounded-full hover:bg-white/20">
              <i className="bx bxl-instagram-alt"></i>
            </a>
            <a href="#" className="text-xl hover:text-white transition-colors p-2 rounded-full hover:bg-white/20">
              <i className="bx bxl-pinterest"></i>
            </a>
            <a href="#" className="text-xl hover:text-white transition-colors p-2 rounded-full hover:bg-white/20">
              <i className="bx bxl-tiktok"></i>
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="space-y-3">
          <h3 className="text-lg font-bold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <Link
                href="/"
                className="hover:text-white transition-colors flex items-center justify-center md:justify-start"
              >
                <i className="bx bx-chevron-right mr-2"></i>Home
              </Link>
            </li>
            <li>
              <Link
                href="/cakes"
                className="hover:text-white transition-colors flex items-center justify-center md:justify-start"
              >
                <i className="bx bx-chevron-right mr-2"></i>Cakes
              </Link>
            </li>
            <li>
              <Link
                href="/cupcakes"
                className="hover:text-white transition-colors flex items-center justify-center md:justify-start"
              >
                <i className="bx bx-chevron-right mr-2"></i>Cupcakes
              </Link>
            </li>
            <li>
              <Link
                href="/cookies"
                className="hover:text-white transition-colors flex items-center justify-center md:justify-start"
              >
                <i className="bx bx-chevron-right mr-2"></i>Cookies
              </Link>
            </li>
            <li>
              <Link
                href="/macarons"
                className="hover:text-white transition-colors flex items-center justify-center md:justify-start"
              >
                <i className="bx bx-chevron-right mr-2"></i>Macarons
              </Link>
            </li>
            <li>
              <Link
                href="/donuts"
                className="hover:text-white transition-colors flex items-center justify-center md:justify-start"
              >
                <i className="bx bx-chevron-right mr-2"></i>Donuts
              </Link>
            </li>
          </ul>
        </div>

        {/* Customer Service */}
        <div className="space-y-3">
          <h3 className="text-lg font-bold mb-4">Customer Service</h3>
          <ul className="space-y-2">
            <li>
              <a
                href="#contact"
                className="hover:text-white transition-colors flex items-center justify-center md:justify-start"
              >
                <i className="bx bx-chevron-right mr-2"></i>Contact Us
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-white transition-colors flex items-center justify-center md:justify-start"
              >
                <i className="bx bx-chevron-right mr-2"></i>FAQ
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-white transition-colors flex items-center justify-center md:justify-start"
              >
                <i className="bx bx-chevron-right mr-2"></i>Privacy Policy
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-white transition-colors flex items-center justify-center md:justify-start"
              >
                <i className="bx bx-chevron-right mr-2"></i>Terms of Service
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="space-y-3">
          <h3 className="text-lg font-bold mb-4">Contact Us</h3>
          <div className="space-y-3">
            <p className="flex items-center justify-center md:justify-start">
              <i className="bx bx-phone mr-3 text-lg"></i> +92 322 387 1813
            </p>
            <p className="flex items-center justify-center md:justify-start">
              <i className="bx bx-envelope mr-3 text-lg"></i> hello@honeyedbakery.com
            </p>
            <p className="flex items-center justify-center md:justify-start">
              <i className="bx bx-map mr-3 text-lg"></i> Lahore, Punjab, Pakistan
            </p>
            <p className="flex items-center justify-center md:justify-start">
              <i className="bx bx-time mr-3 text-lg"></i> Mon-Sat: 8am-8pm
            </p>
          </div>
        </div>
      </div>

      <div className="border-t border-pink-300 mt-8 pt-6 text-center max-w-5xl mx-auto px-6">
        <p>© 2025 Honeyed by Amal – All Rights Reserved | Made with ❤️ for dessert lovers</p>
      </div>
    </footer>
  )
}
