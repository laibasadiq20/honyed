"use client"

import { useState } from "react"
import Link from "next/link"
import { useWishlist } from "@/hooks/use-wishlist"
import WishlistSidebar from "./wishlist-sidebar"
import SearchModal from "./search-modal" // import SearchModal and add search state

interface HeaderProps {
  currentPage?: string
}

export default function Header({ currentPage = "home" }: HeaderProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isWishlistOpen, setIsWishlistOpen] = useState(false)
  const [isSearchOpen, setIsSearchOpen] = useState(false) // search modal state
  const { wishlist } = useWishlist()

  const navLinks = [
    { href: "/", label: "Home", page: "home" },
    { href: "/cakes", label: "Cakes", page: "cakes" },
    { href: "/cupcakes", label: "Cupcakes", page: "cupcakes" },
    { href: "/cookies", label: "Cookies", page: "cookies" },
    { href: "/macarons", label: "Macarons", page: "macarons" },
    { href: "/donuts", label: "Donuts", page: "donuts" },
  ]

  return (
    <>
      {/* Mobile Menu */}
      <div
        className={`fixed top-0 left-0 w-80 h-full z-50 bg-white/95 backdrop-blur-md shadow-2xl transition-transform duration-300 ${
          isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="p-6">
          <div className="flex justify-between items-center mb-8">
            <div className="flex items-center">
              <i className="bx bx-cake text-3xl text-pink-600"></i>
              <span className="text-xl font-bold text-pink-600 ml-3 logo-text">HONEYED</span>
            </div>
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-2xl text-gray-700 hover:text-pink-600 transition-colors"
            >
              <i className="bx bx-x"></i>
            </button>
          </div>

          <nav className="flex flex-col space-y-4 uppercase font-semibold">
            {navLinks.map((link) => (
              <Link
                key={link.page}
                href={link.href}
                className={`py-3 border-b border-gray-100 hover:text-pink-600 transition-colors ${
                  currentPage === link.page ? "text-pink-600" : ""
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="mt-8 pt-6 border-t border-gray-200">
            <h3 className="font-semibold mb-4">Contact Info</h3>
            <p className="flex items-center mb-2">
              <i className="bx bx-phone mr-3 text-pink-600"></i> 03223871813
            </p>
            <p className="flex items-center">
              <i className="bx bx-envelope mr-3 text-pink-600"></i> hello@honeyedbakery.com
            </p>
          </div>
        </div>
      </div>

      {/* Header */}
      <header className="fixed top-0 left-0 w-full z-40">
        <div className="backdrop-blur-md shadow-lg bg-white/90">
          <div className="flex justify-between items-center px-6 py-4">
            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className="text-2xl md:hidden hover:text-pink-600 transition-colors"
            >
              <i className="bx bx-menu"></i>
            </button>

            {/* Logo */}
            <Link href="/" className="flex items-center">
              <i className="bx bx-cake text-3xl text-black"></i>
              <span className="logo-text text-xl font-bold text-black ml-2">HONEYED</span>
            </Link>

            {/* Navigation */}
            <nav className="hidden md:flex gap-8 text-sm font-bold uppercase absolute left-1/2 transform -translate-x-1/2">
              {navLinks.map((link) => (
                <Link
                  key={link.page}
                  href={link.href}
                  className={`hover:text-pink-900 transition-colors py-2 border-b-2 ${
                    currentPage === link.page
                      ? "text-pink-900 border-pink-500"
                      : "border-transparent hover:border-pink-500"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Right Icons */}
            <div className="flex items-center gap-3 text-xl">
              <button
                onClick={() => setIsSearchOpen(true)}
                className="hover:text-pink-900 transition-colors p-2 rounded-full hover:bg-pink-50"
                aria-label="Open search"
              >
                <i className="bx bx-search"></i>
              </button>
              <button
                onClick={() => setIsWishlistOpen(true)}
                className="relative cursor-pointer hover:text-pink-900 transition-colors p-2 rounded-full hover:bg-pink-50"
                aria-label="Open wishlist"
              >
                <i className="bx bx-heart"></i>
                {wishlist.length > 0 && (
                  <span className="absolute -top-1 -right-1 bg-red-600 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold">
                    {wishlist.length}
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-black/50 z-40" onClick={() => setIsMobileMenuOpen(false)} />
      )}

      {/* Wishlist Sidebar */}
      <WishlistSidebar isOpen={isWishlistOpen} onClose={() => setIsWishlistOpen(false)} />
      <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
    </>
  )
}
