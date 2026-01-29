
import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

/* ⭐ Reusable Star Rating Component (Corrected) */
const StarRating = ({ rating }) => {
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    if (i <= rating) {
      // Full Star
      stars.push(
        <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
      );
    } else if (i === Math.ceil(rating) && !Number.isInteger(rating)) {
      // Half Star (Clipped Overlay Technique)
      stars.push(
        <div key={i} className="relative w-5 h-5">
          {/* Background Gray Star */}
          <Star className="w-5 h-5 text-gray-300 absolute top-0 left-0" />
          {/* Foreground Yellow Star (Clipped to 50%) */}
          <div className="absolute top-0 left-0 w-[50%] overflow-hidden h-full">
            <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
          </div>
        </div>
      );
    } else {
      // Empty Star
      stars.push(<Star key={i} className="w-5 h-5 text-gray-300" />);
    }
  }
  return <div className="flex items-center gap-1 my-2">{stars}</div>;
};

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [feedbackIndex, setFeedbackIndex] = useState(0);

  /* ---------------- DATA: TOP TESTIMONIALS ---------------- */
  const testimonials = [
    {
      id: 1,
      name: "Rajveer Singh Choudhary",
      quote:
        "This training enhanced my technical expertise and opened new career opportunities.",
      feedback:
        "The Cement Slurry Design program deepened my understanding of well cementing principles and real-field design applications. The hands-on sessions and expert-led discussions helped me strengthen my professional capabilities and grow in my role at Infosys.",
      position: "Senior Associate Consultant",
      company: "Infosys",
      logo: "/images/Infosys.png",
      image: "/images/Rajveer.png",
      rating: 5,
    },
    {
      id: 2,
      name: "Ashish",
      quote:
        "The Well Engineering internship shaped my technical foundation for a strong career start.",
      feedback:
        "The internship program gave me a clear understanding of drilling design, well operations, and engineering practices. Working on real-world case studies helped me secure my opportunity with ONGC.",
      position: "Placed at",
      company: "ONGC",
      logo: "/images/ongc.png",
      image: "/images/Ashish.png",
      rating: 5,
    },
    {
      id: 3,
      name: "Navan Kumar Sahu",
      quote:
        "Digital tools in stratigraphy gave me a new perspective on subsurface interpretation.",
      feedback:
        "The Sequence Stratigraphy in the Era of Digitalization training helped me combine geological knowledge with modern data techniques. This course gave me the professional edge to begin my journey at ONGC.",
      position: "Placed at",
      company: "ONGC",
      logo: "/images/ongc.png",
      image: "/images/Navan.png",
      rating: 5,
    },
    {
      id: 4,
      name: "Aakansha",
      quote:
        "This training gave me the confidence to connect geology with digital innovation.",
      feedback:
        "The Sequence Stratigraphy in the Era of Digitalization program helped me explore data-driven geological analysis. The sessions were interactive and industry-relevant, helping me secure my position at Lepton Software.",
      position: "Placed at",
      company: "Lepton Software",
      logo: "/images/lepton.png",
      image: "/images/Aakansha.png",
      rating: 5,
    },
    {
      id: 5,
      name: "Saksham Vats",
      quote:
        "Reservoir training transformed my understanding of field development and analysis.",
      feedback:
        "The course provided practical exposure to reservoir concepts and helped me understand real-time production optimization. It played a vital role in helping me join Enverus.",
      position: "Placed at",
      company: "Enverus",
      logo: "/images/enverus.png",
      image: "/images/Saksham.png",
      rating: 5,
    },
    {
      id: 6,
      name: "Mohammed Ishtiyaq",
      quote:
        "The Data Analytics diploma opened doors to my career in digital oilfield operations.",
      feedback:
        "Through the Diploma in Oil & Gas Data Analytics, I developed strong analytical and data interpretation skills for well operations. The practical modules and mentorship helped me secure my role at SLB as a Data Analyst.",
      position: "Digital Well Operations Analyst",
      company: "SLB",
      logo: "/images/slb.png",
      image: "/images/Mohammed.png",
      rating: 5,
    },
    {
      id: 7,
      name: "Rumana Akther",
      quote:
        "This program built my technical depth and confidence to enter global oilfield services.",
      feedback:
        "The Comprehensive Development Program with emphasis on Drilling and Well Engineering helped me connect classroom learning to field applications. It gave me the solid foundation I needed for my position at Halliburton.",
      position: "Associate Technical Professional",
      company: "Halliburton",
      logo: "/images/Halliburton.png",
      image: "/images/Rumana.png",
      rating: 5,
    },
    {
      id: 8,
      name: "Varshita Solanki",
      quote:
        "Industry-focused training that prepared me for success in oilfield operations.",
      feedback:
        "The Comprehensive Oil & Gas Development Program gave me exposure to drilling, reservoir, and production concepts with real-time case studies. The learning experience helped me earn my position at SLB.",
      position: "Reservoir Engineer",
      company: "SLB",
      logo: "/images/slb.png",
      image: "/images/Varshita.png",
      rating: 5,
    },
    {
      id: 9,
      name: "Ali Haris",
      quote:
        "Learning digital stratigraphy gave me the industry-ready skills I was looking for.",
      feedback:
        "The Sequence Stratigraphy in the Era of Digitalization program helped me understand modern geological interpretation using digital tools. The course structure and mentor guidance gave me the clarity and confidence to secure my role at Rezlytics.",
      position: "Placed at",
      company: "Rezlytics",
      logo: "/images/rezlytix.png",
      image: "/images/Ali.png",
      rating: 5,
    },
  ];

  /* ---------------- DATA: BOTTOM FEEDBACK ---------------- */
  const learnerFeedback = [
    {
      name: "Imtiaz Ahmed",
      position: "MS Petroleum Engineering, Khazar University, Azerbaijan",
      text: "The training covered Python, ML, and DL with strong petroleum-focused applications. The instructors demonstrated excellent command over each concept and maintained a positive learning environment. A highly valuable program for anyone entering petroleum data science.",
      rating: 5,
    },
    {
      name: "Prashant Kumar",
      position: "Geophysicist, Lagos (E&P Company)",
      text: "The three-month data science program was detailed and professionally structured. It covered Python, ML, DL, databases, and analytics comprehensively. The tutors were excellent, making this course extremely helpful for career growth in oil and gas.",
      rating: 4.5,
    },
    {
      name: "Syed Suhail Ahmed",
      position: "Student, Presidency University",
      text: "As a fresher, I gained a strong understanding of data science through real industry examples. The faculty shared practical insights and live project workflows, making learning easier. Perfect for students entering data analysis roles.",
      rating: 4,
    },
    {
      name: "Sahil Vora",
      position: "B.Tech, PDEU Gandhinagar",
      text: "A comprehensive and easy-to-follow program covering Python, Pandas, ML, DL, and visualization. The instructors explained complex concepts clearly, and the hands-on approach made learning highly effective. Great for academic and professional growth.",
      rating: 5,
    },
    {
      name: "Hossein Rashidi",
      position: "CMMS Engineer, Major Gas Refinery, Iran",
      text: "A very useful course for understanding data science applications in refinery and maintenance operations. It motivated me to integrate data mining into my job. I gladly recommend it to engineers seeking modern analytical skills.",
      rating: 4.5,
    },
    {
      name: "Muhammad Yunus",
      position: "MS Geoscience, National Dong Hwa University, Taiwan",
      text: "Insightful, beginner-friendly, and well delivered. I consistently learned something new in every session. Training quality and Edvantage’s support were excellent. Highly recommended for geoscience learners.",
      rating: 5,
    },
    {
      name: "Mahdi",
      position: "Senior Petroleum Engineering Student, University of Basrah",
      text: "An outstanding program full of real industry assignments and problem-solving exercises. It helped me grow from a beginner to a confident learner without requiring prior experience. I will definitely recommend it to my network.",
      rating: 4.5,
    },
  ];

  /* ---------------- AUTO ROTATION LOGIC ---------------- */
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 2) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  useEffect(() => {
    const timer = setInterval(() => {
      setFeedbackIndex((prev) => (prev + 2) % learnerFeedback.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [learnerFeedback.length]);

  /* ---------------- MANUAL CONTROLS ---------------- */
  const next = () =>
    setCurrentIndex((prev) => (prev + 2) % testimonials.length);
  const prev = () =>
    setCurrentIndex(
      (prev) => (prev - 2 + testimonials.length) % testimonials.length
    );

  const nextFeedback = () =>
    setFeedbackIndex((prev) => (prev + 2) % learnerFeedback.length);
  const prevFeedback = () =>
    setFeedbackIndex(
      (prev) => (prev - 2 + learnerFeedback.length) % learnerFeedback.length
    );

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Success Stories from Our Placed Participants
        </h2>

        {/* ---------- TOP TESTIMONIAL CARDS ---------- */}
        <div className="relative">
          <div className="grid md:grid-cols-2 gap-8">
            {[
              testimonials[currentIndex],
              testimonials[(currentIndex + 1) % testimonials.length],
            ].map((t, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col h-full"
              >
                <div className="flex flex-col md:flex-row h-full">
                  <div className="p-6 md:p-8 md:w-1/2 flex flex-col justify-center">
                    <p className="text-lg text-blue-700 font-medium mb-4">
                      “{t.quote}”
                    </p>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {t.feedback}
                    </p>
                  </div>

                  <img
                    src={t.image}
                    className="md:w-1/2 h-64 md:h-auto object-cover object-top"
                    alt={t.name}
                  />
                </div>

                <div className="bg-gray-50 p-4 text-center border-t">
                  <h4 className="text-xl font-bold text-gray-900">{t.name}</h4>
                  <p className="text-sm text-gray-500 mb-2">
                    {t.position}, {t.company}
                  </p>
                  <img
                    src={t.logo}
                    className="h-12 md:h-14 mx-auto object-contain opacity-90"
                    alt={t.company}
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Controls */}
          <button
            onClick={prev}
            className="hidden md:flex absolute -left-12 top-1/2 -translate-y-1/2 bg-white hover:bg-gray-100 p-3 rounded-full shadow-lg border transition-colors"
          >
            <ChevronLeft className="h-6 w-6 text-gray-700" />
          </button>

          <button
            onClick={next}
            className="hidden md:flex absolute -right-12 top-1/2 -translate-y-1/2 bg-white hover:bg-gray-100 p-3 rounded-full shadow-lg border transition-colors"
          >
            <ChevronRight className="h-6 w-6 text-gray-700" />
          </button>
        </div>

        {/* ---------- BOTTOM FEEDBACK SECTION ---------- */}
        <div className="mt-20 bg-white rounded-3xl shadow-2xl p-8 md:p-12 relative">
          <h3 className="text-2xl md:text-3xl font-bold text-center text-gray-900 mb-10">
            What Our Learners Say
          </h3>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              learnerFeedback[feedbackIndex],
              learnerFeedback[(feedbackIndex + 1) % learnerFeedback.length],
            ].map((fb, i) => (
              <div
                key={i}
                className="bg-blue-50/50 p-6 rounded-2xl border border-blue-100 flex flex-col justify-between h-[260px]"
              >
                <p className="italic text-gray-700 text-sm md:text-base leading-relaxed">
                  “{fb.text}”
                </p>

                <div className="mt-4">
                  {/* ⭐ Star Rating Component */}
                  <StarRating rating={fb.rating} />

                  <div className="mt-2">
                    <h4 className="font-bold text-lg text-gray-900">
                      {fb.name}
                    </h4>
                    <p className="text-blue-600 text-xs md:text-sm font-medium">
                      {fb.position}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Controls */}
          <button
            onClick={prevFeedback}
            className="hidden md:flex absolute -left-6 top-1/2 -translate-y-1/2 bg-white hover:bg-gray-100 p-3 rounded-full shadow-lg border transition-colors"
          >
            <ChevronLeft className="h-6 w-6 text-gray-700" />
          </button>

          <button
            onClick={nextFeedback}
            className="hidden md:flex absolute -right-6 top-1/2 -translate-y-1/2 bg-white hover:bg-gray-100 p-3 rounded-full shadow-lg border transition-colors"
          >
            <ChevronRight className="h-6 w-6 text-gray-700" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;