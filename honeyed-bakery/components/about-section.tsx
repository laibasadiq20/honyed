export default function AboutSection() {
  return (
    <section id="about" className="py-20 px-4 md:px-8 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-10 left-5 w-10 h-10 bg-yellow-200/40 rounded-full floating"></div>
      <div className="absolute top-1/3 right-8 w-8 h-8 bg-pink-200/40 rounded-full floating delay-1"></div>
      <div className="absolute bottom-20 left-10 w-12 h-12 bg-yellow-200/30 rounded-full floating delay-2"></div>

      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Image Collage with Doodle Frames */}
          <div className="w-full md:w-1/2 relative flex justify-center">
            <div className="grid grid-cols-2 gap-6 w-full max-w-md">
              {/* Cake */}
              <div className="doodle-frame transform rotate-[-4deg]">
                <img
                  src="cake.jpg"
                  alt="Specialty Cake"
                  className="w-full h-48 object-cover rounded hand-drawn-border"
                />
                <p className="text-center mt-2 text-sm text-gray-600 font-medium">Signature Cakes</p>
              </div>

              {/* Macaron */}
              <div className="doodle-frame transform rotate-[3deg] mt-10">
                <img
                  src="macroon.jpg"
                  alt="Colorful Macarons"
                  className="w-full h-48 object-cover rounded hand-drawn-border"
                />
                <p className="text-center mt-2 text-sm text-gray-600 font-medium">French Macarons</p>
              </div>

              {/* Donut */}
              <div className="doodle-frame transform rotate-[2deg]">
                <img
                  src="dounut.jpg"
                  alt="Gourmet Donuts"
                  className="w-full h-48 object-cover rounded hand-drawn-border"
                />
                <p className="text-center mt-2 text-sm text-gray-600 font-medium">Artisan Donuts</p>
              </div>

              {/* Cupcakes */}
              <div className="doodle-frame transform rotate-[-3deg] mt-10 hand-drawn-border">
                <img src="cupcakes.jpg" alt="Delicious Cupcakes" className="w-full h-48 object-cover rounded" />
                <p className="text-center mt-2 text-sm text-gray-600 font-medium">Sweet Cupcakes</p>
              </div>
            </div>
          </div>

          {/* Text Content */}
          <div className="w-full md:w-1/2 bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg">
            <h2 className="text-4xl font-bold text-[#d45b66] mb-6 relative inline-block">
              Our Story
              <span className="absolute -bottom-2 left-0 w-1/3 h-1 bg-yellow-400 rounded-full"></span>
            </h2>
            {/* Main Story */}
            <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-6">
              At <span className="font-semibold text-[#d45b66]">Honeyed</span>, we blend the warmth of homemade baking
              with a touch of modern elegance. Founded in 2015 by{" "}
              <span className="font-medium text-[#d45b66]">Amal</span>, our dream was to craft desserts that create
              memories—soft, delicate, and unforgettable.
            </p>

            <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-8">
              From fluffy cakes to pastel macarons, every recipe is baked fresh with organic ingredients and a whole lot
              of love. No artificial flavors, no shortcuts—just pure, simple sweetness.
            </p>

            <div className="flex space-x-4">
              <div className="flex-1 bg-gradient-to-r from-yellow-100 to-pink-100 p-4 rounded-lg text-center hand-drawn-border">
                <i className="bx bx-time-five text-3xl text-[#d45b66] mb-2"></i>
                <p className="font-semibold">Fresh Daily</p>
              </div>
              <div className="flex-1 bg-gradient-to-r from-yellow-100 to-pink-100 p-4 rounded-lg text-center hand-drawn-border">
                <i className="bx bx-heart text-3xl text-[#d45b66] mb-2"></i>
                <p className="font-semibold">Made with Love</p>
              </div>
              <div className="flex-1 bg-gradient-to-r from-yellow-100 to-pink-100 p-4 rounded-lg text-center hand-drawn-border">
                <i className="bx bx-leaf text-3xl text-[#d45b66] mb-2"></i>
                <p className="font-semibold">Organic Ingredients</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
