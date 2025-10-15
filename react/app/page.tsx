"use client"

import { useState } from "react"
import Header from "@/components/header"
import HeroSection from "@/components/hero-section"
import AboutSection from "@/components/about-section"
import HowItWorksSection from "@/components/how-it-works-section"
import MenuSection from "@/components/menu-section"
import LoginModal from "@/components/login-modal"
import FeedbackSection from "@/components/feedback-section"
import Footer from "@/components/footer"

export default function Home() {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false)

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#f3d9fa] via-[#fde2e4] to-[#fff3b0]">
      <Header currentPage="home" />
      <HeroSection />
      <AboutSection />
      <HowItWorksSection onOrderClick={() => setIsLoginModalOpen(true)} />
      <MenuSection onOrderClick={() => setIsLoginModalOpen(true)} />
      <LoginModal isOpen={isLoginModalOpen} onClose={() => setIsLoginModalOpen(false)} />
      <FeedbackSection />
      <Footer />
    </div>
  )
}
