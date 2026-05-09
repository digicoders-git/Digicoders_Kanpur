import React from "react";
import { FaDownload } from "react-icons/fa";
import { IoIosPhonePortrait } from "react-icons/io";

const Notice = () => {
  return (
    <div
      className="relative z-[1001] px-4 md:px-10 py-2 md:py-2.5 flex flex-col md:flex-row md:items-center gap-2 md:gap-4 overflow-hidden text-xs md:text-sm"
      style={{ background: '#0d1b2a', color: 'white' }}
    >
      {/* LEFT SECTION */}
      <div className="flex items-center justify-between md:justify-start gap-3 w-full md:w-auto">

        <div className="flex items-center gap-1.5 shrink-0">
          <IoIosPhonePortrait size={16} style={{ color: '#ff8c00' }} />
          <a
            href="tel:+919720535155"
            className="whitespace-nowrap font-bold tracking-wide text-[11px] md:text-sm text-white hover:text-orange-400 transition-colors"
          >
            +91 9720535155
          </a>
        </div>

        {/* Divider (desktop) */}
        <span className="hidden md:inline text-white/20">|</span>

        {/* Mobile download buttons */}
        <div className="flex md:hidden items-center gap-3">
          <div className="flex items-center gap-1 cursor-pointer text-gray-300 hover:text-orange-400 transition-colors">
            <FaDownload size={11} />
            <span className="text-[11px] font-semibold">Profile</span>
          </div>
          <div className="flex items-center gap-1 cursor-pointer text-gray-300 hover:text-orange-400 transition-colors">
            <FaDownload size={11} />
            <span className="text-[11px] font-semibold">Brochure</span>
          </div>
        </div>
      </div>

      {/* TICKER */}
      <div className="overflow-hidden w-full md:flex-1">
        <span
          className="whitespace-nowrap inline-block text-[11px] md:text-xs font-medium"
          style={{ color: '#ffd180', animation: 'notice-marquee 14s linear infinite' }}
        >
          🎓 Registrations Open for Training Session 2026–27 &nbsp;•&nbsp;
          Toll Free: 1800-200-5802 &nbsp;•&nbsp;
          B.Tech | Diploma | BCA | MCA &nbsp;•&nbsp;
          CSE / IT / CE / EE &nbsp;•&nbsp;
          Aliganj, Lucknow &nbsp;•&nbsp;
          Yashodha Nagar, Kanpur &nbsp;•&nbsp;
        </span>
      </div>

      {/* RIGHT SECTION (Desktop Only) */}
      <div className="hidden md:flex items-center gap-4 md:ml-auto">
        {[
          'Company Profile',
          'Brochure',
          'Placement Brochure',
          'Student Login',
        ].map((label) => (
          <div key={label} className="flex items-center gap-1.5 cursor-pointer text-gray-400 hover:text-orange-400 transition-colors">
            <FaDownload size={12} />
            <span className="text-xs font-semibold">{label}</span>
          </div>
        ))}
      </div>

      {/* Thin orange bottom border accent */}
      <div className="absolute bottom-0 left-0 right-0 h-[2px]"
        style={{ background: 'linear-gradient(to right, #ff8c00, #2e7d32, #ff8c00)' }} />

      <style>{`
        @keyframes notice-marquee {
          0%   { transform: translateX(100%); }
          100% { transform: translateX(-100%); }
        }
        @media (max-width: 768px) {
          .notice-ticker { animation-duration: 12s; }
        }
      `}</style>
    </div>
  );
};

export default Notice;
