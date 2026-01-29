// src/components/WhatsAppButton.jsx
import React from "react";

const WhatsAppButton = () => {
  // Updated phone number as requested
  const phoneNumber = "916200261265"; // ✅ include country code (91 for India)
  const message = "Hello, I want to know more about your services."; // default pre-filled msg

  const openWhatsApp = () => {
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  return (
    <>
      <button
        onClick={openWhatsApp}
        className="fixed bottom-6 right-6 w-16 h-16 rounded-full bg-green-500 hover:bg-green-600 shadow-2xl flex items-center justify-center transition-all z-50 animate-bounce-glow"
      >
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
          alt="WhatsApp"
          className="w-9 h-9 object-contain"
        />
      </button>

      {/* This style tag defines the 'animate-bounce-glow' animation.
        It creates a subtle bounce and a green "glow" using box-shadow.
      */}
      <style>{`
        @keyframes bounce-glow {
          0%, 100% {
            transform: translateY(-4%);
            animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
            box-shadow: 0 0 10px rgba(37, 211, 102, 0.7), 0 0 20px rgba(37, 211, 102, 0.5);
          }
          50% {
            transform: translateY(0);
            animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
            box-shadow: 0 0 20px rgba(37, 211, 102, 1), 0 0 30px rgba(37, 211, 102, 0.7);
          }
        }
        
        .animate-bounce-glow {
          animation: bounce-glow 2s infinite;
        }
      `}</style>
    </>
  );
};

export default WhatsAppButton;