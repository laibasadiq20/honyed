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

      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-16 text-center md:text-left relative z-10">
        {/* Contact Us - LEFT */}
        <div className="space-y-3 md:justify-self-start">
          <h3 className="flex items-center justify-center md:justify-start gap-2 text-2xl font-semibold tracking-wide text-yellow-50">
            <i className="bx bxs-phone-call text-yellow-300 text-3xl"></i>Contact Us
          </h3>
          <p className="text-lg flex items-center justify-center md:justify-start gap-2">
            <i className="bx bxs-phone text-yellow-300 text-xl"></i> +92 325 3657672
          </p>
          <p className="text-lg flex items-center justify-center md:justify-start gap-2">
            <i className="bx bxs-phone text-yellow-300 text-xl"></i> +92 322 3871813
          </p>
          <p className="text-lg flex items-center justify-center md:justify-start gap-2">
            <i className="bx bxs-envelope text-yellow-300 text-xl"></i>
            hello@honeyedbakery.com
          </p>
        </div>

        {/* Opening Hours - CENTER */}
        <div className="space-y-3 md:justify-self-center">
          <h3 className="flex items-center justify-center gap-2 text-2xl font-semibold tracking-wide text-yellow-50">
            <i className="bx bx-time-five text-yellow-300 text-3xl"></i>Opening Hours
          </h3>
          <p className="text-lg">Mon – Fri: 8:00 AM – 8:00 PM</p>
          <p className="text-lg">Sat – Sun: 9:00 AM – 6:00 PM</p>
        </div>

        {/* Follow Us - RIGHT */}
        <div className="space-y-4 md:justify-self-end">
          <h3 className="flex items-center justify-center md:justify-end gap-2 text-2xl font-semibold tracking-wide text-yellow-50">
            <i className="bx bxs-heart text-yellow-300 text-3xl"></i>Follow Us
          </h3>

          {/* Social Icons */}
          <div className="flex justify-center md:justify-end gap-6 text-3xl">
            <a href="#" className="hover:text-yellow-300 transform transition duration-300 hover:scale-125">
              <i className="bx bxl-instagram"></i>
            </a>
            <a href="#" className="hover:text-yellow-300 transform transition duration-300 hover:scale-125">
              <i className="bx bxl-facebook-circle"></i>
            </a>
            <a href="#" className="hover:text-yellow-300 transform transition duration-300 hover:scale-125">
              <i className="bx bxl-whatsapp"></i>
            </a>
            <a href="#" className="hover:text-yellow-300 transform transition duration-300 hover:scale-125">
              <i className="bx bxl-tiktok"></i>
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="w-full mt-12 pt-6 border-t border-yellow-200/40 text-center text-base md:text-lg text-yellow-50 tracking-wide">
        &copy; 2025 <span className="font-semibold">Honeyed by Amal</span>. All Rights Reserved.
      </div>
    </footer>
  )
}
