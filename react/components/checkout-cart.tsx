"use client"

interface CartItem {
  id: string
  name: string
  description: string
  price: number
  quantity: number
  image: string
}

interface CheckoutCartProps {
  items: CartItem[]
  onUpdateQuantity: (id: string, quantity: number) => void
  onRemoveItem: (id: string) => void
}

export default function CheckoutCart({ items, onUpdateQuantity, onRemoveItem }: CheckoutCartProps) {
  return (
    <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg">
      <h2 className="text-2xl font-bold text-[#d45b66] mb-6">Order Summary</h2>

      <div className="space-y-4">
        {items.map((item) => (
          <div key={item.id} className="flex items-center gap-4 pb-4 border-b border-[#f3d9fa] last:border-b-0">
            <img src={item.image || "/placeholder.svg"} alt={item.name} className="w-20 h-20 object-cover rounded-lg" />
            <div className="flex-1">
              <h3 className="font-semibold text-lg">{item.name}</h3>
              <p className="text-gray-600 text-sm">{item.description}</p>
              <div className="flex items-center justify-between mt-2">
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
                    className="w-8 h-8 rounded-full border border-[#f3d9fa] bg-white flex items-center justify-center hover:bg-[#fdf2f8] hover:border-[#d45b66] transition"
                  >
                    -
                  </button>
                  <input
                    type="text"
                    value={item.quantity}
                    readOnly
                    className="w-10 text-center border border-[#f3d9fa] rounded px-2 py-1"
                  />
                  <button
                    onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                    className="w-8 h-8 rounded-full border border-[#f3d9fa] bg-white flex items-center justify-center hover:bg-[#fdf2f8] hover:border-[#d45b66] transition"
                  >
                    +
                  </button>
                </div>
                <span className="font-semibold text-lg">Rs {(item.price * item.quantity).toLocaleString()}</span>
              </div>
            </div>
            <button
              onClick={() => onRemoveItem(item.id)}
              className="text-[#d45b66] hover:text-[#f28c82] transition text-xl"
            >
              <i className="bx bx-trash"></i>
            </button>
          </div>
        ))}
      </div>

      <div className="text-center mt-6">
        <button className="text-[#d45b66] font-semibold flex items-center justify-center mx-auto hover:text-[#f28c82] transition">
          <i className="bx bx-plus mr-2"></i> Add More Items
        </button>
      </div>
    </div>
  )
}
