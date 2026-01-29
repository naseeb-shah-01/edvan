// HeroSection.jsx
import React, { useState, useEffect } from "react";
import { useRouter } from 'next/navigation';


export default function HeroSection() {
  const navigate = useRouter();

  const heroSlides = [
    {
      title: "Fuel Your Career with 200+ Oil & Gas Trainings",
      subtitle:
        "Master the oil & gas industry with our specialized programs. Gain practical skills to advance in this dynamic sector.",
      cta: "Explore Programs",
      img: "/images/slide1.png",
    },
    {
      title: "Earn Energy Diploma from World-Class Universities",
      subtitle:
        "Earn internationally recognized diplomas from top institutions. Upgrade your skills with industry-aligned courses designed for real-world impact.",
      cta: "View Diplomas",
      img: "/images/slide2.png",
    },
    {
      title: "10,000+ Global Participants with 1000+ Placements",
      subtitle:
        "Become part of our thriving global community. Benefit from a proven record with 1000+ successful placements.",
      cta: "See Success Stories",
      img: "/images/slide3.png",
    },
    {
      title: "Personalized Mentorship for Your Success",
      subtitle:
        "Get dedicated 1-to-1 guidance from industry mentors. Receive support tailored to your career goals.",
      cta: "Meet Mentors",
      img: "/images/slide4.png",
    },
  ];

  const [slideIndex, setSlideIndex] = useState(0);

  useEffect(() => {
    const t = setInterval(() => {
      setSlideIndex((i) => (i + 1) % heroSlides.length);
    }, 4000);
    return () => clearInterval(t);
  }, [heroSlides.length]);

  // Primary CTA behaviour depends on the active slide
  const handlePrimaryClick = () => {
    const current = heroSlides[slideIndex];
    const label = current.cta?.toLowerCase() ?? "";

    if (label.includes("explore") || label.includes("program")) {
      // Explore Programs -> show all programs by default
      navigate("/programs?category=all");
      return;
    }

    if (label.includes("diploma") || label.includes("view")) {
      // View Diplomas -> show diploma category
      navigate("/programs?category=diploma");
      return;
    }

    if (label.includes("success") || label.includes("placement") || label.includes("stories")) {
      // Success Stories -> placements / success stories page
      navigate("/placements");
      return;
    }

    if (label.includes("mentor") || label.includes("meet")) {
      // Meet Mentors -> about page and scroll to mentors section
      navigate("/about#mentors");
      return;
    }

    // Fallback: go to programs all
    navigate("/programs?category=all");
  };

  // Secondary button (Request Info)
  const handleRequestInfo = () => {
    navigate("/request-info");
  };


  return (
    <section className="relative py-16 px-8 md:px-16 lg:px-24">
      <div className="max-w-[1240px] mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">
        <div className="space-y-6">
          <h2
            className="
              text-4xl 
              font-semibold 
              leading-tight sm:leading-snug lg:leading-snug
              tracking-wide text-gray-900
              whitespace-normal break-words
            "
            style={{ maxHeight: "4.8em" }}
          >
            {heroSlides[slideIndex].title}
          </h2>

          <p
            className="
              text-gray-600 
              text-base sm:text-lg md:text-xl 
              leading-relaxed
              whitespace-normal break-words
            "
            style={{ maxHeight: "3.5em" }}
          >
            {heroSlides[slideIndex].subtitle}
          </p>

          <div className="flex gap-4 mt-4 flex-wrap">
            <button
              onClick={handlePrimaryClick}
              className="px-6 py-3 bg-indigo-600 text-white rounded shadow hover:bg-indigo-700 transition"
            >
              {heroSlides[slideIndex].cta}
            </button>

            <button
              onClick={handleRequestInfo}
              className="px-6 py-3 border border-indigo-600 text-indigo-600 rounded hover:bg-indigo-50 transition"
            >
              Request Info
            </button>
          </div>

          <div className="flex gap-2 mt-6">
            {heroSlides.map((_, i) => (
              <button
                key={i}
                onClick={() => setSlideIndex(i)}
                aria-label={`Go to slide ${i + 1}`}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${i === slideIndex ? "bg-indigo-600 scale-110" : "bg-gray-300"
                  }`}
              />
            ))}
          </div>
        </div>

        <div className="relative w-full h-80 md:h-[500px] rounded-lg overflow-hidden shadow-lg">
          <img
            src={heroSlides[slideIndex].img}
            alt={heroSlides[slideIndex].title}
            onError={(e) => {
              e.target.src =
                "https://placehold.co/600x500/e2e8f0/94a3b8?text=Image+Not+Found";
            }}
            className="w-full h-full object-cover transition-all duration-700"
          />
        </div>
      </div>
    </section>
  );
}