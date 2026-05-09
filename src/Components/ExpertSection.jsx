import { useRef, useState } from "react";
import ExpertCard from "./ExpertCard";

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

const ArrowBtn = ({ direction, onClick, disabled }) => (
  <button
    onClick={onClick}
    disabled={disabled}
    className="w-11 h-11 rounded-full border flex items-center justify-center transition-all duration-200"
    style={
      disabled
        ? { borderColor: '#e5e7eb', color: '#d1d5db', background: 'white' }
        : { borderColor: '#ffcc80', color: '#ff8c00', background: 'white' }
    }
    onMouseEnter={e => {
      if (!disabled) {
        e.currentTarget.style.background = '#ff8c00';
        e.currentTarget.style.color = 'white';
        e.currentTarget.style.borderColor = '#ff8c00';
      }
    }}
    onMouseLeave={e => {
      if (!disabled) {
        e.currentTarget.style.background = 'white';
        e.currentTarget.style.color = '#ff8c00';
        e.currentTarget.style.borderColor = '#ffcc80';
      }
    }}
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

const ExpertSection = () => {
  const sliderRef = useRef(null);
  const [canScrollLeft,  setCanScrollLeft]  = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [activeIndex,    setActiveIndex]    = useState(0);

  const SCROLL_AMOUNT = 310;

  const updateArrows = () => {
    const el = sliderRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 0);
    setCanScrollRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 4);
    setActiveIndex(Math.round(el.scrollLeft / SCROLL_AMOUNT));
  };

  const scrollLeft  = () => { sliderRef.current?.scrollBy({ left: -SCROLL_AMOUNT, behavior: "smooth" }); setTimeout(updateArrows, 300); };
  const scrollRight = () => { sliderRef.current?.scrollBy({ left:  SCROLL_AMOUNT, behavior: "smooth" }); setTimeout(updateArrows, 300); };

  return (
    <section className="bg-white pb-5 px-4" id="experts">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="text-center mb-6">
          <span
            className="inline-block text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4"
            style={{ background: '#fff3e0', color: '#e65100' }}
          >
            Meet Our Team
          </span>

          <div className="mx-auto mt-1 h-[2px] w-28 md:w-32 rounded-full"
            style={{ background: 'linear-gradient(to right, #ff8c00, transparent)' }} />

          <h2 className="text-3xl md:text-5xl font-bold text-gray-900">
            Learn from Industry{' '}
            <span style={{ color: '#ff8c00', fontStyle: 'italic' }}>Experts</span>
          </h2>

          <p className="text-gray-400 mt-2 text-sm md:text-base">
            Experienced trainers with real-world project backgrounds.
          </p>
        </div>

        {/* Slider */}
        <div className="relative">
          <div className="absolute left-0 top-1/2 -translate-y-1/2 z-10">
            <ArrowBtn direction="left" onClick={scrollLeft} disabled={!canScrollLeft} />
          </div>
          <div className="absolute right-0 top-1/2 -translate-y-1/2 z-10">
            <ArrowBtn direction="right" onClick={scrollRight} disabled={!canScrollRight} />
          </div>

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

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-6">
          {expertsData.map((_, i) => (
            <span
              key={i}
              className="h-2 rounded-full transition-all duration-300"
              style={{
                width: i === activeIndex ? '20px' : '8px',
                background: i === activeIndex ? '#ff8c00' : '#e5e7eb',
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExpertSection;
