"use client";

import React, { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import {
  Instagram,
  Youtube,
  Linkedin,
  Send,
  Users,
} from "lucide-react";

/* ----------------- ICON ALIASES ----------------- */
const FaInstagram = Instagram;
const FaYoutube = Youtube;
const FaLinkedin = Linkedin;
const FaTelegram = Send;
const PiUsersThreeBold = Users;

/* ----------------- ICON COMPONENT PROPS ----------------- */
interface IconProps {
  className?: string;
}

/* ----------------- CUSTOM SVG ICONS ----------------- */
const WorkshopIcon: React.FC<IconProps> = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
    <polyline points="14 2 14 8 20 8" />
  </svg>
);

const SoftwareTrainingIcon: React.FC<IconProps> = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <rect x="2" y="3" width="20" height="14" rx="2" />
    <path d="M8 21h8M12 17v4" />
  </svg>
);

const VirtualInternshipsIcon: React.FC<IconProps> = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M12 22h6a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v5" />
  </svg>
);

const DelegatesSensitizedIcon: React.FC<IconProps> = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <circle cx="12" cy="8" r="5" />
    <path d="M20 21a8 8 0 0 0-16 0" />
  </svg>
);

/* ----------------- TYPES ----------------- */
interface CardItem {
  icon: React.ReactNode;
  value: string;
  label: string;
  color?: string;
}

interface MiniStackedCardProps {
  initialIndex?: number;
  ALL_CARDS: CardItem[];
}

/* ----------------- DATA ----------------- */
const Cards1: CardItem[] = [
  { icon: <FaLinkedin className="text-[#0A66C2]" />, value: "14000+", label: "LinkedIn Followers" },
  { icon: <FaYoutube className="text-[#FF0000]" />, value: "2000+", label: "YouTube Subscribers" },
  { icon: <FaInstagram className="text-[#E1306C]" />, value: "2000+", label: "Instagram Followers" },
  { icon: <FaTelegram className="text-blue-600" />, value: "2000+", label: "Telegram Subscribers" },
];

const StatsCards: CardItem[] = [
  { icon: <WorkshopIcon className="w-8 h-8 text-blue-600" />, value: "5+", label: "Years of Excellence" },
  { icon: <SoftwareTrainingIcon className="w-8 h-8 text-blue-600" />, value: "40+", label: "Countries Presence" },
  { icon: <VirtualInternshipsIcon className="w-8 h-8 text-blue-600" />, value: "10+", label: "Universities" },
  { icon: <DelegatesSensitizedIcon className="w-8 h-8 text-blue-600" />, value: "20+", label: "Corporate Partners" },
];

/* ----------------- MINI STACKED CARD ----------------- */
const MiniStackedCard: React.FC<MiniStackedCardProps> = ({
  initialIndex = 0,
  ALL_CARDS,
}) => {
  const [index, setIndex] = useState<number>(initialIndex);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    timerRef.current = setInterval(
      () => setIndex((i) => (i + 1) % ALL_CARDS.length),
      3000
    );
    return () => timerRef.current && clearInterval(timerRef.current);
  }, [ALL_CARDS.length]);

  return (
    <div className="flex flex-col gap-3">
      {ALL_CARDS.map((card, i) => (
        <div
          key={i}
          className={`flex items-center gap-4 p-4 rounded-xl border shadow-md transition ${
            i === index ? "border-blue-500 bg-white" : "opacity-50"
          }`}
        >
          {card.icon}
          <div>
            <p className="text-xl font-bold">{card.value}</p>
            <p className="text-gray-600 text-sm">{card.label}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

/* ----------------- MAIN COMPONENT ----------------- */
const CombinedPartnersSection: React.FC = () => {
  const router = useRouter();

  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-10">
        <MiniStackedCard ALL_CARDS={Cards1} />
        <MiniStackedCard initialIndex={1} ALL_CARDS={StatsCards} />
      </div>

      <div className="text-center mt-12">
        <button
          onClick={() => router.push("/about")}
          className="bg-blue-600 text-white px-10 py-4 rounded-full text-lg font-semibold hover:bg-blue-700 transition"
        >
          VIEW ALL
        </button>
      </div>
    </section>
  );
};

export default CombinedPartnersSection;
