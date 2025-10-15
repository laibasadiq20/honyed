export default function HeroSection() {
  return (
    <section className="relative flex items-center justify-center h-[80vh] text-center pt-28">
      <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('/pic.jpg')" }}></div>
      <div className="absolute inset-0 bg-black/40"></div>
      <div className="relative z-10 px-4">
        <h1 className="text-5xl md:text-7xl font-extrabold text-white drop-shadow-lg">HONEYED</h1>
        <p className="mt-2 text-xl md:text-2xl italic text-white">by Amal</p>
        <a
          href="#menu"
          className="mt-6 inline-block px-8 py-3 bg-gradient-to-r from-[#f28c82] to-[#d45b66] text-white font-semibold rounded-full shadow-lg hover:from-[#d45b66] hover:to-[#f28c82] transition"
        >
          Explore Menu
        </a>
      </div>
    </section>
  )
}
