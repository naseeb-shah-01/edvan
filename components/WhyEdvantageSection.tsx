"use client";

import React, { useRef, useEffect, useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

/* ===================== TYPES ===================== */

interface BlogArticle {
  id: number;
  imgSrc: string;
  title: string;
  date: string;
  link: string;
}

/* ===================== DATA ===================== */

const blogArticles: BlogArticle[] = [
  {
    id: 1,
    imgSrc: "/images/blog/b1.png",
    title: "The $100 Million Algorithm: AI's True Impact on Oil & Gas Efficiency",
    date: "12 May 2025",
    link: "/blog/ai-algorithm",
  },
  {
    id: 2,
    imgSrc: "/images/blog/b2.png",
    title: "The Silent Revolution in Field Operations",
    date: "05 May 2025",
    link: "/blog/field-operations",
  },
  {
    id: 3,
    imgSrc: "/images/blog/b3.png",
    title: "Beyond the Drill Site: The Ripple Effect",
    date: "24 Apr 2025",
    link: "/blog/ripple-effect",
  },
  {
    id: 4,
    imgSrc: "/images/blog/b4.png",
    title: "The Human Element in the Digital Age",
    date: "23 Apr 2025",
    link: "/blog/digital-age",
  },
  {
    id: 5,
    imgSrc: "/images/blog/b5.png",
    title: "What Comes Next? Securing Your Future in Energy",
    date: "15 Apr 2025",
    link: "/blog/securing-your-future",
  },
  {
    id: 6,
    imgSrc: "/images/blog/b6.png",
    title: "The Rise of Machine Learning in the Oil and Gas Industry",
    date: "10 Apr 2025",
    link: "/blog/machine-learning-oil-gas",
  },
];

/* ===================== COMPONENT ===================== */

const MediaSpotlightSection: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const [isHovering, setIsHovering] = useState(false);
  const router = useRouter();

  const scrollIntervalTime = 4000;
  const loopedArticles = [...blogArticles, ...blogArticles, ...blogArticles];
  const numOriginalArticles = blogArticles.length;

  const scrollToCard = (direction: "left" | "right") => {
    if (!scrollRef.current) return;

    const scrollElement = scrollRef.current;
    const firstCard = scrollElement.children[0] as HTMLElement;
    if (!firstCard) return;

    const cardWidth = firstCard.offsetWidth;
    const gap = 24;
    const scrollAmount = cardWidth + gap;
    const centerIndex = numOriginalArticles;
    const centerScrollPosition = centerIndex * scrollAmount;

    scrollElement.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });

    setTimeout(() => {
      const currentScroll = scrollElement.scrollLeft;
      if (
        currentScroll >
        centerScrollPosition +
          numOriginalArticles * scrollAmount -
          scrollElement.clientWidth
      ) {
        scrollElement.scrollLeft = centerScrollPosition;
      } else if (
        currentScroll <
        centerScrollPosition - scrollElement.clientWidth
      ) {
        scrollElement.scrollLeft =
          centerScrollPosition +
          numOriginalArticles * scrollAmount -
          scrollElement.clientWidth;
      }
    }, 500);
  };

  useEffect(() => {
    if (!scrollRef.current) return;
    const firstCard = scrollRef.current.children[0] as HTMLElement;
    if (!firstCard) return;

    const scrollAmount = firstCard.offsetWidth + 24;
    scrollRef.current.scrollLeft = numOriginalArticles * scrollAmount;
  }, []);

  useEffect(() => {
    if (isHovering) return;

    const interval = setInterval(() => {
      scrollToCard("right");
    }, scrollIntervalTime);

    return () => clearInterval(interval);
  }, [isHovering]);

  return (
    <section className="bg-white py-20 sm:py-24">
      <div className="max-w-7xl mx-auto px-4">

        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-semibold text-black">
            Learning Corner
          </h2>

          <p className="text-lg text-gray-700 max-w-2xl mx-auto mt-4 leading-relaxed">
            Explore our Learning Corner for expert insights, practical tips, and
            resources to boost your professional growth.
          </p>
        </div>

        {/* Carousel */}
        <div
          className="relative"
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        >
          <div
            ref={scrollRef}
            className="flex overflow-x-scroll scrollbar-hide space-x-6 pb-6"
          >
            {loopedArticles.map((article, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-80 bg-white border border-gray-100 rounded-xl shadow-lg overflow-hidden transition hover:shadow-2xl"
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={article.imgSrc}
                    alt={article.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform"
                  />
                </div>

                <div className="p-6 flex flex-col justify-between h-[14rem]">
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-4 line-clamp-2">
                      {article.title}
                    </h3>
                    <p className="text-sm text-gray-500">{article.date}</p>
                  </div>

                  <button
                    onClick={() => router.push(article.link)}
                    className="text-blue-600 font-semibold hover:text-blue-800"
                  >
                    Read Article →
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Controls */}
          <button
            onClick={() => scrollToCard("left")}
            className="absolute left-0 top-1/2 -translate-y-1/2 -ml-4 w-12 h-12 rounded-full flex items-center justify-center shadow-lg bg-gray-900 text-white hover:bg-gray-700"
          >
            <ArrowLeft />
          </button>

          <button
            onClick={() => scrollToCard("right")}
            className="absolute right-0 top-1/2 -translate-y-1/2 -mr-4 w-12 h-12 rounded-full flex items-center justify-center shadow-lg bg-gray-900 text-white hover:bg-gray-700"
          >
            <ArrowRight />
          </button>
        </div>
      </div>

      {/* CTA */}
      <div className="text-center mt-10">
        <Link
          href="/courses"
          className="inline-flex items-center justify-center bg-blue-600 text-white font-semibold px-10 py-4 text-lg rounded-xl shadow-lg hover:bg-blue-700 transition"
        >
          Go to E-Learning
        </Link>
      </div>

      {/* Hide Scrollbar */}
      <style jsx global>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
};

export default MediaSpotlightSection;
