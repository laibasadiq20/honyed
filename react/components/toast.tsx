interface ToastProps {
  message: string
  type: "success" | "error"
  show: boolean
}

export default function Toast({ message, type, show }: ToastProps) {
  return (
    <div
      className={`fixed bottom-24 right-6 ${type === "error" ? "bg-red-600" : "bg-pink-500"} text-white px-6 py-4 rounded-xl shadow-lg z-50 transition-all duration-300 ${
        show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-24 pointer-events-none"
      }`}
    >
      <div className="flex items-center">
        <i className={`bx ${type === "error" ? "bx-error-circle" : "bx-check-circle"} text-xl mr-3`}></i>
        <span>{message}</span>
      </div>
    </div>
  )
}
