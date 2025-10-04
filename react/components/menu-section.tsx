"use client"

interface MenuSectionProps {
  onOrderClick: () => void
}

export default function MenuSection({ onOrderClick }: MenuSectionProps) {
  const menuItems = [
    {
      title: "Cakes",
      description: "Delicious cakes for all occasions",
      image:
        "https://images.food52.com/hCMCcgnrNaS51pbWEJUbEXkrLVo=/60a6e4b8-2765-4480-88f3-f96f73107941--2022-0607_angel-food-cake-with-strawberries-and-whipped-cream_seo_3x2_mj-kroeger-067.jpg",
      icon: "bx-cake",
      link: "Cake.html",
    },
    {
      title: "Cupcakes",
      description: "Sweet mini treats for everyone",
      image: "https://www.recipetineats.com/tachyon/2020/09/Vanilla-Cupcakes-with-Vanilla-Swiss-Meringue-2.jpg",
      icon: "bx-muffin",
      link: "cupcakes.html",
    },
    {
      title: "Macarons",
      description: "Colorful French delicacies",
      image: "https://preppykitchen.com/wp-content/uploads/2020/04/French-Macarons-feature-1200.jpg",
      icon: "bx-cookie",
      link: "macarons.html",
    },
    {
      title: "Cookies",
      description: "Fun bite-sized cake treats",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkt_EWXFXveId786uh3M0BOiEm6ynenjXdZQ&s",
      icon: "bx-candles",
      link: "cookies.html",
    },
    {
      title: "Dounut",
      description: "Exclusive offers just for you",
      image:
        "https://hips.hearstapps.com/hmg-prod/images/glazed-donut-recipe-1-65008ab2b45fb.jpg?crop=1xw:1xh;center,top&resize=1200:*",
      icon: "bx-gift",
      link: "Dounut.html",
    },
  ]

  return (
    <section
      id="menu"
      className="py-20 bg-gradient-to-b from-[#fde0e6] via-[#fcd5ce] to-[#fbeaf5] text-center relative overflow-hidden"
    >
      <h2 className="text-4xl font-bold text-[#d45b66] mb-12 relative inline-block">
        Our Menu
        <span className="absolute -bottom-2 left-1/4 w-1/2 h-1 bg-yellow-400 rounded-full"></span>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 px-8 md:px-16 relative z-10">
        {menuItems.map((item, index) => (
          <div
            key={index}
            className="menu-item bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transform transition duration-300 hover:-translate-y-2 relative"
          >
            <div className="absolute top-4 right-4 w-10 h-10 bg-yellow-200 rounded-full flex items-center justify-center text-yellow-800">
              <i className={`bx ${item.icon}`}></i>
            </div>
            <img
              src={item.image || "/placeholder.svg"}
              className="rounded-lg mb-4 w-full h-40 object-cover transform transition duration-500 hover:scale-110"
              alt={item.title}
            />
            <h3 className="text-xl font-semibold text-[#d45b66]">{item.title}</h3>
            <p className="text-sm text-gray-600 mt-2">{item.description}</p>
            <a href={item.link}>
              <button className="mt-4 px-4 py-2 bg-yellow-400 text-yellow-900 rounded-full text-sm font-medium hover:bg-yellow-300 transition">
                View Options
              </button>
            </a>
          </div>
        ))}
      </div>

      <div className="mt-12">
        <button
          onClick={onOrderClick}
          className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-[#f28c82] to-[#d45b66] text-white font-bold rounded-full shadow-lg hover:from-[#d45b66] hover:to-[#f28c82] transition-all duration-300 transform hover:scale-105"
        >
          Place Your Order <i className="bx bx-chevron-right text-xl ml-2"></i>
        </button>
      </div>
    </section>
  )
}
