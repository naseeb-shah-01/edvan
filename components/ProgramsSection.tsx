"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

/* ------------------------------------
   📘 Types
------------------------------------ */
type Program = {
  id: number;
  detailsId: string | null;
  title: string;
  duration: string;
  tag?: string;
  image: string;
};

type ProgramCategory =
  | "upcoming"
  | "diploma"
  | "elearning"
  | "placement";

/* ------------------------------------
   📘 Programs Data
------------------------------------ */
const programs: Record<ProgramCategory, Program[]> = {
  upcoming: [
    {
      id: 27,
      detailsId: "49",
      title: "Digital Oil & Gas Career Accelerator",
      duration: "90+ Hours · Live Weekend + Recordings",
      tag: "Upcoming",
      image: "/images/Oil & Gas career Accelerator.jpg",
    },
    {
      id: 28,
      detailsId: "50",
      title: "Python, Machine Learning & GenAI for Oil & Gas Professionals",
      duration: "50+ Hours · Live Weekend + Recordings",
      tag: "Upcoming",
      image: "/images/Python gen ai.png",
    },
  ],

  diploma: [
    {
      id: 1,
      detailsId: "32",
      title: "Diploma for HSE in Oil & Gas",
      duration: "60 Hours · Online",
      tag: "Diploma",
      image: "/images/Diploma for HSE in Oil & Gas.avif",
    },
  ],

  elearning: [
    {
      id: 6,
      detailsId: "28",
      title:
        "Petroleum Geomechanics & CCUS: From Subsurface Principles to Field-Scale Applications",
      duration: "40 Hours · Online",
      tag: "Self-Placed",
      image: "/images/Petroleum Geomechanics & CCUS.png",
    },
  ],

  placement: [
    {
      id: 26,
      detailsId: null,
      title: "Placement Booster Program",
      duration: "60 Hours · Online",
      tag: "Placement Booster Program",
      image:
        "https://images.pexels.com/photos/257736/pexels-photo-257736.jpeg",
    },
  ],
};

/* ------------------------------------
   🎓 Program Card
------------------------------------ */
type ProgramCardProps = {
  program: Program;
};

const ProgramCard: React.FC<ProgramCardProps> = ({ program }) => {
  const targetLink = program.detailsId
    ? `/course/${program.detailsId}`
    : "/programs";

  return (
    <div className="bg-white shadow-lg rounded-xl overflow-hidden hover:shadow-2xl transition-shadow">
      <img
        src={program.image}
        alt={program.title}
        className="w-full h-40 object-cover"
      />

      <div className="p-4">
        <h4 className="font-bold text-lg mb-1 line-clamp-2">
          {program.title}
        </h4>

        <p className="text-gray-600 text-sm mb-2">{program.duration}</p>

        {program.tag && (
          <span className="px-3 py-1 bg-blue-100 text-blue-700 font-semibold rounded-full inline-block mb-2">
            {program.tag}
          </span>
        )}

        <Link
          href={targetLink}
          className={`mt-2 inline-flex items-center text-blue-600 font-semibold hover:underline ${
            !program.detailsId ? "opacity-70 pointer-events-none" : ""
          }`}
        >
          View Program <ChevronRight className="w-4 h-4 ml-1" />
        </Link>
      </div>
    </div>
  );
};

/* ------------------------------------
   🧭 Main Programs Section
------------------------------------ */
const ProgramsSection: React.FC = () => {
  const sections = [
    { id: "all", title: "All Programs" },
    { id: "upcoming", title: "Upcoming Courses & Webinars" },
    { id: "diploma", title: "Diploma" },
    { id: "elearning", title: "Self-Placed Courses" },
    { id: "placement", title: "Placement Booster Program" },
  ] as const;

  const [activeSection, setActiveSection] = useState<
    "all" | ProgramCategory
  >("all");

  const displayedPrograms: Program[] =
    activeSection === "all"
      ? Object.values(programs).flat()
      : programs[activeSection];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        {/* Heading */}
        <div className="mb-10 text-center">
          <h2 className="text-4xl font-bold mb-3 text-gray-900">
            Fuel Your Career with Our Specialized Programs
          </h2>
          <p className="text-gray-700 text-lg">
            Explore programs curated to enhance your skills and career prospects.
          </p>
        </div>

        <div className="grid grid-cols-12 gap-8">
          {/* Sidebar */}
          <div className="col-span-12 lg:col-span-3 space-y-3">
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() =>
                  setActiveSection(section.id as typeof activeSection)
                }
                className={`w-full flex items-center justify-between px-4 py-3 rounded-lg font-semibold transition ${
                  activeSection === section.id
                    ? "bg-blue-600 text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {section.title}
                <ChevronRight className="w-4 h-4" />
              </button>
            ))}
          </div>

          {/* Programs Grid */}
          <div className="col-span-12 lg:col-span-9">
            {displayedPrograms.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {displayedPrograms.map((program) => (
                  <ProgramCard key={program.id} program={program} />
                ))}
              </div>
            ) : (
              <p className="text-gray-600">No programs available.</p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProgramsSection;
