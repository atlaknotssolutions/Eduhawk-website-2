
// export default MainLayout;
import React, { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../../component/Navbar";
import Footer from "../Footer";
import { MessageCircle, ArrowUp } from "lucide-react";   // ← Lucide Icons

const MainLayout = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const openWhatsApp = () => {
    window.open("https://api.whatsapp.com/send?phone=919630736070", "_blank");
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <main className="md:pt-1">
        <Outlet />
      </main>

      <Footer />

      {/* Floating Buttons - Side by Side */}
      <div className="fixed bottom-6 right-6 flex gap-4 z-50">
        
        {/* WhatsApp Button with Lucide Icon */}
        <button
          onClick={openWhatsApp}
          className="w-14 h-14 bg-[#25D366] hover:bg-[#20ba5c] text-white rounded-full shadow-xl flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95"
          title="Chat on WhatsApp"
        >
          <MessageCircle size={32} strokeWidth={2.2} />
        </button>

        {/* Scroll to Top Button - Blue Background */}
        {showScrollTop && (
          <button
            onClick={scrollToTop}
            className="w-14 h-14 bg-blue-600 hover:bg-blue-700 text-white rounded-full shadow-xl flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95"
            title="Scroll to Top"
          >
            <ArrowUp size={28} strokeWidth={3.5} />
          </button>
        )}
      </div>
    </div>
  );
};

export default MainLayout;