import { useRef, useState } from "react";
import ExpertCard from "./ExpertCard";

// ── Data ──────────────────────────────────────────────────────────
const expertsData = [
  {
    id: 1,
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    name: "Rajesh Kumar",
    role: "Full Stack Developer",
    experience: "8+ Years in Web Development",
    expertise: ["React", "Node.js", "MongoDB"],
    linkedin: "#",
  },
  {
    id: 2,
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    name: "Priya Sharma",
    role: "Data Science Expert",
    experience: "6+ Years in ML & AI",
    expertise: ["Python", "TensorFlow", "NLP"],
    linkedin: "#",
  },
  {
    id: 3,
    image: "https://randomuser.me/api/portraits/men/56.jpg",
    name: "Amit Verma",
    role: "DevOps Engineer",
    experience: "7+ Years in Cloud & CI/CD",
    expertise: ["AWS", "Docker", "Kubernetes"],
    linkedin: "#",
  },
  {
    id: 4,
    image: "https://randomuser.me/api/portraits/women/68.jpg",
    name: "Sneha Gupta",
    role: "UI/UX Designer",
    experience: "5+ Years in Product Design",
    expertise: ["Figma", "React", "Tailwind"],
    linkedin: "#",
  },
  {
    id: 5,
    image: "https://randomuser.me/api/portraits/men/77.jpg",
    name: "Vikram Singh",
    role: "Cybersecurity Analyst",
    experience: "9+ Years in Network Security",
    expertise: ["Ethical Hacking", "VAPT", "Linux"],
    linkedin: "#",
  },
  {
    id: 6,
    image: "https://randomuser.me/api/portraits/women/12.jpg",
    name: "Anjali Mishra",
    role: "Android Developer",
    experience: "5+ Years in Mobile Apps",
    expertise: ["Kotlin", "Java", "Firebase"],
    linkedin: "#",
  },
];

// ── Arrow Button ──────────────────────────────────────────────────
const ArrowBtn = ({ direction, onClick, disabled }) => (
  <button
    onClick={onClick}
    disabled={disabled}
    className={`
      w-11 h-11 rounded-full border flex items-center justify-center transition-all duration-200
      ${disabled
        ? "border-gray-200 text-gray-300  bg-white"
        : "border-blue-200 text-blue-600 bg-white hover:bg-blue-600 hover:text-white hover:border-blue-600 shadow-sm"
      }
    `}
  >
    {direction === "left" ? (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2.2} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
      </svg>
    ) : (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2.2} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
      </svg>
    )}
  </button>
);

// ── Main ExpertSection Component ──────────────────────────────────
const ExpertSection = () => {
  const sliderRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const SCROLL_AMOUNT = 310;

  const updateArrows = () => {
    const el = sliderRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 0);
    setCanScrollRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 4);
  };

  const scrollLeft = () => {
    sliderRef.current?.scrollBy({ left: -SCROLL_AMOUNT, behavior: "smooth" });
    setTimeout(updateArrows, 300);
  };

  const scrollRight = () => {
    sliderRef.current?.scrollBy({ left: SCROLL_AMOUNT, behavior: "smooth" });
    setTimeout(updateArrows, 300);
  };

  return (
    <section className="bg-white py-10 px-4" id="experts">
      <div className="max-w-6xl mx-auto">

        {/* ✅ CENTERED HEADER */}
        <div className="text-center mb-6">
          <span className="flex flex-col items-center justify-center gap-2 text-blue-600 text-sm font-semibold tracking-widest uppercase mb-2">
            Meet Our Team
            <div className="mx-auto mt-1 h-[2px] w-26 md:w-32 bg-gradient-to-r from-blue-500 to-transparent rounded-full"></div>

          </span>

          <h2 className="text-3xl md:text-5xl font-bold text-gray-900">
            Learn from Industry <span className="text-blue-600 italic">Experts</span>
          </h2>

          <p className="text-gray-400 mt-2 text-sm md:text-base">
            Experienced trainers with real-world project backgrounds.
          </p>
        </div>

        {/* ✅ SLIDER WITH OVERLAY ARROWS */}
        <div className="relative">

          {/* LEFT ARROW */}
          <div className="absolute left-0 top-1/2 -translate-y-1/2 z-10">
            <ArrowBtn direction="left" onClick={scrollLeft} disabled={!canScrollLeft} />
          </div>

          {/* RIGHT ARROW */}
          <div className="absolute right-0 top-1/2 -translate-y-1/2 z-10">
            <ArrowBtn direction="right" onClick={scrollRight} disabled={!canScrollRight} />
          </div>

          {/* SLIDER */}
          <div
            ref={sliderRef}
            onScroll={updateArrows}
            className="flex gap-5 overflow-x-auto pb-4 scroll-smooth px-8"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {expertsData.map((expert) => (
              <ExpertCard key={expert.id} {...expert} />
            ))}
          </div>
        </div>

        {/* DOTS */}
        <div className="flex justify-center gap-2 mt-6">
          {expertsData.map((_, i) => (
            <span
              key={i}
              className="w-2 h-2 rounded-full bg-gray-200"
              style={{ background: i === 0 ? "#2563eb" : undefined }}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default ExpertSection;
