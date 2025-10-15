export type SearchItem = {
  name: string
  category: "cakes" | "cupcakes" | "cookies" | "macarons" | "donuts"
  href: string
}

// Curated examples so exact names work. You can expand freely.
export const SEARCH_ITEMS: SearchItem[] = [
  // Cakes
  { name: "Chocolate Fudge Cake", category: "cakes", href: "/cakes" },
  { name: "Red Velvet Cake", category: "cakes", href: "/cakes" },
  { name: "Black Forest Cake", category: "cakes", href: "/cakes" },
  { name: "Lotus Biscoff Cake", category: "cakes", href: "/cakes" },
  { name: "Vanilla Cake", category: "cakes", href: "/cakes" },

  // Cupcakes
  { name: "Sweet Cupcakes", category: "cupcakes", href: "/cupcakes" },
  { name: "Chocolate Cupcakes", category: "cupcakes", href: "/cupcakes" },

  // Cookies
  { name: "Nutella Cookie", category: "cookies", href: "/cookies" },
  { name: "Milk Chocolate Cookie", category: "cookies", href: "/cookies" },
  { name: "Triple Chocolate Cookie", category: "cookies", href: "/cookies" },

  // Macarons
  { name: "French Macarons", category: "macarons", href: "/macarons" },

  // Donuts
  { name: "Artisan Donuts", category: "donuts", href: "/donuts" },
]

// Fallback router: if a name contains a keyword, send to the module route.
export function inferRouteFromQuery(q: string): string | null {
  const s = q.toLowerCase()
  if (/\bcake(s)?\b/.test(s)) return "/cakes"
  if (/\bcupcake(s)?\b/.test(s)) return "/cupcakes"
  if (/\bdonut(s)?\b|\bdoughnut(s)?\b/.test(s)) return "/donuts"
  if (/\bmacaron(s)?\b/.test(s)) return "/macarons"
  if (/\bcookie(s)?\b/.test(s)) return "/cookies"
  return null
}
