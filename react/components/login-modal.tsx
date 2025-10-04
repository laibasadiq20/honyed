"use client"

import { useState } from "react"

interface LoginModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function LoginModal({ isOpen, onClose }: LoginModalProps) {
  const [activeTab, setActiveTab] = useState<"login" | "register">("login")
  const [loginEmail, setLoginEmail] = useState("")
  const [loginPassword, setLoginPassword] = useState("")
  const [registerName, setRegisterName] = useState("")
  const [registerEmail, setRegisterEmail] = useState("")
  const [registerPassword, setRegisterPassword] = useState("")
  const [registerConfirm, setRegisterConfirm] = useState("")

  const handleLoginSubmit = () => {
    if (loginEmail && loginPassword) {
      alert("Login successful! Redirecting to order page...")
      onClose()
    } else {
      alert("Please fill in all fields")
    }
  }

  const handleRegisterSubmit = () => {
    if (registerName && registerEmail && registerPassword && registerConfirm) {
      if (registerPassword === registerConfirm) {
        alert("Registration successful! You can now login.")
        setActiveTab("login")
      } else {
        alert("Passwords do not match")
      }
    } else {
      alert("Please fill in all fields")
    }
  }

  if (!isOpen) return null

  return (
    <div
      className={`login-modal ${isOpen ? "active" : ""}`}
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          onClose()
        }
      }}
    >
      <div className="login-content">
        <button className="close-modal" onClick={onClose}>
          <i className="bx bx-x"></i>
        </button>

        <div className="login-tabs">
          <div className={`login-tab ${activeTab === "login" ? "active" : ""}`} onClick={() => setActiveTab("login")}>
            Login
          </div>
          <div
            className={`login-tab ${activeTab === "register" ? "active" : ""}`}
            onClick={() => setActiveTab("register")}
          >
            Register
          </div>
        </div>

        {/* Login Form */}
        {activeTab === "login" && (
          <div className="login-form">
            <div className="form-group">
              <label htmlFor="login-email">Email Address</label>
              <input
                type="email"
                id="login-email"
                placeholder="your@email.com"
                value={loginEmail}
                onChange={(e) => setLoginEmail(e.target.value)}
              />
            </div>

            <div className="form-group">
              <label htmlFor="login-password">Password</label>
              <input
                type="password"
                id="login-password"
                placeholder="••••••••"
                value={loginPassword}
                onChange={(e) => setLoginPassword(e.target.value)}
              />
            </div>

            <div className="form-group">
              <button className="login-btn" onClick={handleLoginSubmit}>
                Login
              </button>
            </div>

            <div className="social-login">
              <span>Or login with</span>
              <div className="social-buttons">
                <button className="social-btn google">
                  <i className="bx bxl-google"></i>
                </button>
                <button className="social-btn fb">
                  <i className="bx bxl-facebook"></i>
                </button>
              </div>
            </div>

            <div className="text-center text-sm text-gray-600">
              Don't have an account?{" "}
              <a
                href="#"
                className="text-pink-600 font-medium"
                onClick={(e) => {
                  e.preventDefault()
                  setActiveTab("register")
                }}
              >
                Register here
              </a>
            </div>
          </div>
        )}

        {/* Register Form */}
        {activeTab === "register" && (
          <div className="login-form">
            <div className="form-group">
              <label htmlFor="register-name">Full Name</label>
              <input
                type="text"
                id="register-name"
                placeholder="Your Name"
                value={registerName}
                onChange={(e) => setRegisterName(e.target.value)}
              />
            </div>

            <div className="form-group">
              <label htmlFor="register-email">Email Address</label>
              <input
                type="email"
                id="register-email"
                placeholder="your@email.com"
                value={registerEmail}
                onChange={(e) => setRegisterEmail(e.target.value)}
              />
            </div>

            <div className="form-group">
              <label htmlFor="register-password">Password</label>
              <input
                type="password"
                id="register-password"
                placeholder="••••••••"
                value={registerPassword}
                onChange={(e) => setRegisterPassword(e.target.value)}
              />
            </div>

            <div className="form-group">
              <label htmlFor="register-confirm">Confirm Password</label>
              <input
                type="password"
                id="register-confirm"
                placeholder="••••••••"
                value={registerConfirm}
                onChange={(e) => setRegisterConfirm(e.target.value)}
              />
            </div>

            <div className="form-group">
              <button className="login-btn" onClick={handleRegisterSubmit}>
                Create Account
              </button>
            </div>

            <div className="text-center text-sm text-gray-600">
              Already have an account?{" "}
              <a
                href="#"
                className="text-pink-600 font-medium"
                onClick={(e) => {
                  e.preventDefault()
                  setActiveTab("login")
                }}
              >
                Login here
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
