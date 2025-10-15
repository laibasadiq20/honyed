"use client"

import Link from "next/link"

interface MenuSectionProps {
  onOrderClick: () => void
}

export default function MenuSection({ onOrderClick }: MenuSectionProps) {
  const menuItems = [
    {
      title: "Cakes",
      description: "Delicious cakes for all occasions",
      image: "/cake.jpg",
      link: "/cakes",
    },
    {
      title: "Cupcakes",
      description: "Sweet mini treats for everyone",
      image: "/cupcakes.jpg",
      link: "/cupcakes",
    },
    {
      title: "Macarons",
      description: "Colorful French delicacies",
      image: "/macroon.jpg",
      link: "/macarons",
    },
    {
      title: "Cookies",
      description: "Fun bite-sized cake treats",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkt_EWXFXveId786uh3M0BOiEm6ynenjXdZQ&s",
      link: "/cookies",
    },
    {
      title: "Dounut",
      description: "Exclusive offers just for you",
      image: "/dounut.jpg",
      link: "/donuts",
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
            <img
              src={item.image || "/placeholder.svg"}
              className="rounded-lg mb-4 w-full h-40 object-cover transform transition duration-500 hover:scale-110"
              alt={item.title}
            />
            <h3 className="text-xl font-semibold text-[#d45b66]">{item.title}</h3>
            <p className="text-sm text-gray-600 mt-2">{item.description}</p>
            <Link href={item.link}>
              <button className="mt-4 px-4 py-2 bg-yellow-400 text-yellow-900 rounded-full text-sm font-medium hover:bg-yellow-300 transition">
                View Options
              </button>
            </Link>
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
