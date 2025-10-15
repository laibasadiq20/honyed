"use client"

import { useEffect, useMemo, useRef, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { productsIndex, type ProductItem } from "@/data/products"
import { useRouter } from "next/navigation"
import { inferRouteFromQuery } from "@/data/search-index"

interface SearchModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function SearchModal({ isOpen, onClose }: SearchModalProps) {
  const [query, setQuery] = useState("")
  const inputRef = useRef<HTMLInputElement>(null)
  const router = useRouter()

  const slugify = (s: string) =>
    s
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)/g, "")

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50)
    } else {
      setQuery("")
    }
  }, [isOpen])

  const results: ProductItem[] = useMemo(() => {
    const q = query.trim().toLowerCase()
    if (!q) return []
    return productsIndex
      .filter((p) => p.name.toLowerCase().includes(q) || p.category.toLowerCase().includes(q))
      .slice(0, 8)
  }, [query])

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-[60]">
      {/* backdrop */}
      <button aria-label="Close search" className="absolute inset-0 bg-black/40" onClick={onClose} />
      {/* panel */}
      <div
        role="dialog"
        aria-modal="true"
        className="absolute left-1/2 top-16 w-[92%] md:w-[720px] -translate-x-1/2 rounded-2xl bg-white/95 backdrop-blur-xl shadow-2xl border border-pink-100"
      >
        <div className="p-4 md:p-6">
          <div className="flex items-center gap-3">
            <i className="bx bx-search text-xl text-pink-700"></i>
            <input
              ref={inputRef}
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Escape") onClose()
                if (e.key === "Enter") {
                  const q = query.trim()
                  if (!q) return
                  if (results.length > 0) {
                    const top = results[0]
                    router.push(`${top.href}?product=${slugify(top.name)}`)
                    onClose()
                    return
                  }
                  const fallback = inferRouteFromQuery(q)
                  if (fallback) {
                    router.push(fallback)
                    onClose()
                  }
                }
              }}
              placeholder="Search cakes, cupcakes, cookies, macarons, donuts..."
              className="w-full bg-transparent outline-none text-base md:text-lg placeholder:text-gray-400"
              aria-label="Search products"
            />
            <button onClick={onClose} className="text-gray-500 hover:text-pink-700" aria-label="Close">
              <i className="bx bx-x text-2xl"></i>
            </button>
          </div>

          <div className="mt-4 border-t border-gray-100" />

          {query && (
            <div className="max-h-80 overflow-auto divide-y divide-gray-100">
              {results.length === 0 ? (
                <div className="p-6 text-sm text-gray-500">No matches found. Try a different term.</div>
              ) : (
                results.map((item) => (
                  <Link
                    key={item.id}
                    href={`${item.href}?product=${slugify(item.name)}`}
                    onClick={onClose}
                    className="flex items-center gap-4 p-3 hover:bg-pink-50/70 transition-colors"
                  >
                    <div className="relative w-12 h-12 rounded-lg overflow-hidden border border-gray-100 bg-white">
                      <Image
                        src={item.image || "/placeholder.svg"}
                        alt={item.name}
                        fill
                        className="object-cover"
                        sizes="48px"
                      />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm md:text-base font-semibold text-gray-900">{item.name}</p>
                      <p className="text-xs md:text-sm text-pink-700">{item.category}</p>
                    </div>
                    <span className="text-xs md:text-sm font-medium text-gray-600">View {item.category}</span>
                  </Link>
                ))
              )}
            </div>
          )}

          {!query && (
            <div className="p-4 text-xs text-gray-500">Tip: try “red velvet”, “macarons”, “nutella”, or “donuts”.</div>
          )}
        </div>
      </div>
    </div>
  )
}
