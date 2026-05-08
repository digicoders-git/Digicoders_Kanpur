import { useState, useRef } from "react";

const services = [
  {
    name: "Summer Training",
    color: "#f59e0b",
    desc: "Intensive short-term training during summer vacations with industry projects and live exposure.",
    tags: ["2–6 Weeks", "Certificate", "Internship Letter"],
    tagBg: "bg-amber-100",
    tagText: "text-amber-800",
  },
  {
    name: "Winter Training",
    color: "#6366f1",
    desc: "Skill development program during winter vacations with practical workshops and core subjects.",
    tags: ["2–4 Weeks", "Certificate", "Live Projects"],
    tagBg: "bg-indigo-100",
    tagText: "text-indigo-800",
  },
  {
    name: "Industrial Training",
    color: "#10b981",
    desc: "6-month or 1-year training in a real industry environment to fulfill college requirements.",
    tags: ["6 Months", "Industry Exposure", "Stipend*"],
    tagBg: "bg-emerald-100",
    tagText: "text-emerald-800",
  },
  {
    name: "Internship Training",
    color: "#ef4444",
    desc: "Practical work experience with mentorship to strengthen your resume and career opportunities.",
    tags: ["1–3 Months", "Certificate", "Mentorship"],
    tagBg: "bg-red-100",
    tagText: "text-red-800",
  },
  {
    name: "Apprenticeship Training",
    color: "#8b5cf6",
    desc: "Long-term skill development program where you can learn and work at the same time.",
    tags: ["6–12 Months", "Paid", "Govt. Approved"],
    tagBg: "bg-violet-100",
    tagText: "text-violet-800",
  },
  {
    name: "Project Training",
    color: "#06b6d4",
    desc: "Work on real-world projects and build a strong portfolio with client-based assignments.",
    tags: ["Live Projects", "Portfolio", "Team Work"],
    tagBg: "bg-cyan-100",
    tagText: "text-cyan-800",
  },
  {
    name: "Vocational Training",
    color: "#ec4899",
    desc: "Job-oriented skill training designed to prepare students directly for employment.",
    tags: ["Skill-Based", "Job Ready", "Certificate"],
    tagBg: "bg-pink-100",
    tagText: "text-pink-800",
  },
  {
    name: "Syllabus Training",
    color: "#f97316",
    desc: "Customized training based on university syllabus to improve academic performance.",
    tags: ["University Aligned", "Doubt Sessions", "Notes"],
    tagBg: "bg-orange-100",
    tagText: "text-orange-800",
  },
  {
    name: "Python Training",
    color: "#6366f1",
    desc: "Learn Python programming from basics to advanced including Data Science, ML, and automation.",
    tags: ["Beginner–Advanced", "Projects", "Certification"],
    tagBg: "bg-indigo-100",
    tagText: "text-indigo-800",
  },
  {
    name: "ASP.NET Training",
    color: "#10b981",
    desc: "Build web applications using Microsoft ASP.NET framework and C# for full-stack development.",
    tags: ["C#", "Web Dev", "MVC Pattern"],
    tagBg: "bg-emerald-100",
    tagText: "text-emerald-800",
  },
  {
    name: "Java Training",
    color: "#ef4444",
    desc: "Complete Java ecosystem training from Core Java to Spring Boot with strong OOP concepts.",
    tags: ["Core + Advanced", "Spring Boot", "Projects"],
    tagBg: "bg-red-100",
    tagText: "text-red-800",
  },
  {
    name: "PHP Training",
    color: "#3b82f6",
    desc: "Develop dynamic websites and web applications using PHP and MySQL backend development.",
    tags: ["PHP + MySQL", "CMS", "Live Projects"],
    tagBg: "bg-blue-100",
    tagText: "text-blue-800",
  },
  {
    name: "Flutter Training",
    color: "#8b5cf6",
    desc: "Create Android and iOS applications using Google Flutter with a single codebase.",
    tags: ["Dart", "Cross-Platform", "UI Design"],
    tagBg: "bg-violet-100",
    tagText: "text-violet-800",
  },
  {
    name: "Android Training",
    color: "#22c55e",
    desc: "Learn Android app development using Kotlin or Java with Play Store publishing guidance.",
    tags: ["Kotlin/Java", "Play Store", "API Integration"],
    tagBg: "bg-green-100",
    tagText: "text-green-800",
  },
  {
    name: "MERN Stack Training",
    color: "#f43f5e",
    desc: "Full-stack web development using MongoDB, Express, React, and Node.js.",
    tags: ["Full Stack", "REST API", "Deployment"],
    tagBg: "bg-rose-100",
    tagText: "text-rose-800",
  },
  {
    name: "AI ML Training",
    color: "#06b6d4",
    desc: "Learn Artificial Intelligence and Machine Learning concepts with real dataset practice.",
    tags: ["Python", "TensorFlow", "Projects"],
    tagBg: "bg-cyan-100",
    tagText: "text-cyan-800",
  },
  {
    name: "CAD Mechanical Training",
    color: "#f97316",
    desc: "Design mechanical parts using industry-standard tools like AutoCAD, SolidWorks, and CATIA.",
    tags: ["AutoCAD", "SolidWorks", "2D/3D"],
    tagBg: "bg-orange-100",
    tagText: "text-orange-800",
  },
  {
    name: "CAD Civil Training",
    color: "#8b5cf6",
    desc: "Learn civil engineering drawing and structural design using AutoCAD.",
    tags: ["AutoCAD", "Structural", "Site Plans"],
    tagBg: "bg-violet-100",
    tagText: "text-violet-800",
  },
  {
    name: "CAD Electrical Training",
    color: "#22c55e",
    desc: "Learn electrical circuit design, wiring diagrams, and PCB design using CAD tools.",
    tags: ["AutoCAD Electrical", "PCB", "Wiring"],
    tagBg: "bg-green-100",
    tagText: "text-green-800",
  },
  {
    name: "Graphic Designing Training",
    color: "#f43f5e",
    desc: "Learn Adobe Photoshop, Illustrator, and CorelDRAW for branding, posters, and logo design.",
    tags: ["Photoshop", "Illustrator", "Portfolio"],
    tagBg: "bg-rose-100",
    tagText: "text-rose-800",
  },
  {
    name: "Digital Marketing Training",
    color: "#3b82f6",
    desc: "Learn SEO, social media marketing, Google Ads, and content marketing for freelancing and jobs.",
    tags: ["SEO/SEM", "Social Media", "Google Ads"],
    tagBg: "bg-blue-100",
    tagText: "text-blue-800",
  },
  {
    name: "Data Analytics Training",
    color: "#22c55e",
    desc: "Learn data analysis using Excel, Power BI, and Python with dashboard creation and insights.",
    tags: ["Power BI", "Excel", "Python"],
    tagBg: "bg-green-100",
    tagText: "text-green-800",
  },
];

function ServicePill({ service }) {
  const [hovered, setHovered] = useState(false);
  const [modalStyle, setModalStyle] = useState({});
  const pillRef = useRef(null);

  const handleMouseEnter = () => {
    if (pillRef.current) {
      const rect = pillRef.current.getBoundingClientRect();
      const modalWidth = 220;
      const viewportWidth = window.innerWidth;

      if (rect.left + modalWidth / 2 > viewportWidth - 16) {
        setModalStyle({ right: 0, left: "auto", transform: "none" });
      } else if (rect.left < modalWidth / 2) {
        setModalStyle({ left: 0, right: "auto", transform: "none" });
      } else {
        setModalStyle({ left: "50%", transform: "translateX(-50%)" });
      }
    }
    setHovered(true);
  };

  const handleMouseLeave = () => setHovered(false);

  return (
    <div
      ref={pillRef}
      className="relative inline-flex"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Pill */}
      <div className="flex items-center gap-2 px-4 py-2 rounded-full border cursor-pointer select-none transition-all duration-200 border-zinc-700 bg-white hover:bg-blue-200 hover:border-zinc-500 text-sm font-medium text-black">
        <span className="w-2 h-2 rounded-full flex-shrink-0" style={{ backgroundColor: service.color }} />
        {service.name}
        <span className="text-xs text-zinc-500 ml-1">{service.num}</span>
      </div>

      {/* Hover Modal */}
      {hovered && (
        <div
          className="absolute z-50 bottom-[calc(100%+10px)] w-[220px] bg-zinc-900 border border-zinc-700 rounded-2xl p-3 shadow-2xl pointer-events-none"
          style={modalStyle}
        >
          <div className="absolute bottom-[-5px] w-[9px] h-[9px] bg-white border-r border-b border-zinc-700 rotate-45"
            style={
              modalStyle.left === "50%"
                ? { left: "50%", transform: "translateX(-50%) rotate(45deg)" }
                : modalStyle.right === 0
                ? { right: 12, left: "auto" }
                : { left: 12 }
            }
          />
          <div className="flex items-center gap-2 mb-2">
            <span className="w-2.5 h-2.5 rounded-full flex-shrink-0" style={{ backgroundColor: service.color }} />
            <p className="text-sm font-semibold text-white leading-tight">{service.name}</p>
          </div>
          <p className="text-xs text-zinc-400 leading-relaxed mb-3">{service.desc}</p>
          <div className="flex flex-wrap gap-1.5">
            {service.tags.map((tag) => (
              <span key={tag} className={`text-[11px] font-medium px-2 py-0.5 rounded-full ${service.tagBg} ${service.tagText}`}>
                {tag}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default function ServicesSection() {
  return (
    <section className="bg-white text-black px-4 py-10 sm:px-8 md:px-12 lg:px-16">
      <h2 className="text-5xl sm:text-3xl text-center font-bold text-black tracking-widest uppercase mb-2">
        Our Services
      </h2>
        <div className="mx-auto mb-6 h-[2px] w-32 md:w-48 bg-gradient-to-r from-blue-500 to-transparent rounded-full"></div>


      <div className="flex flex-wrap gap-3">
        {services.map((service) => (
          <ServicePill key={service.name} service={service} />
        ))}
      </div>
    </section>
  );
}
