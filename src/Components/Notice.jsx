import React from "react";
import { FaDownload } from "react-icons/fa";
import { IoIosPhonePortrait } from "react-icons/io";

const Notice = () => {
  return (
    <div className="relative z-[1001] bg-gradient-to-r from-black via-gray-900 to-black text-white px-4 md:px-10 py-2 md:py-3 flex flex-col md:flex-row md:items-center gap-2 md:gap-4 overflow-hidden text-xs md:text-sm">

      {/* LEFT SECTION (Phone) */}
      <div className="flex items-center justify-between md:justify-start gap-3 w-full md:w-auto">
        
        <div className="flex items-center gap-1 md:gap-2 shrink-0">
          <IoIosPhonePortrait size={18} />
          <a
            href="tel:+919720535155"
            className="whitespace-nowrap font-bold tracking-wide text-[11px] md:text-sm"
          >
            +91 9720535155
          </a>
        </div>
        

        {/* Mobile buttons (stay here on small screen) */}
        <div className="flex md:hidden items-center gap-3">
          <div className="flex items-center gap-1 cursor-pointer hover:text-blue-400">
            <FaDownload size={12} />
            <span className="text-[11px] font-semibold">Profile</span>
          </div>
          <div className="flex items-center gap-1 cursor-pointer hover:text-blue-400">
            <FaDownload size={12} />
            <span className="text-[11px] font-semibold">Brochure</span>
          </div>
        </div>
      </div>

      {/* TICKER */}
      <div className="overflow-hidden w-full md:flex-1">
        <span className="whitespace-nowrap inline-block animate-marquee">
          Registrations Open for Training Session 2026–27 &nbsp;•&nbsp;
          Toll Free: 1800-200-5802 &nbsp;•&nbsp;
          B.Tech | Diploma | BCA | MCA &nbsp;•&nbsp;
          CSE / IT / CE / EE &nbsp; | &nbsp;•&nbsp;
          Aliganj, Lucknow &nbsp;•&nbsp;
          Yasodha Nagar, Kanpur
        </span>
      </div>

      {/* RIGHT SECTION (Desktop Only) */}
      <div className="hidden md:flex items-center gap-4 md:ml-auto">
        <div className="flex items-center gap-2 cursor-pointer hover:text-blue-400">
          <FaDownload size={14} />
          <span className="text-sm font-semibold">Company Profile</span>
        </div>

        <div className="flex items-center gap-2 cursor-pointer hover:text-blue-400">
          <FaDownload size={14} />
          <span className="text-sm font-semibold">Brochure</span>
        </div>
        
        <div className="flex items-center gap-2 cursor-pointer hover:text-blue-400">
          <FaDownload size={14} />
          <span className="text-sm font-semibold">Placement Brochure</span>
        </div>
        <div className="flex items-center gap-2 cursor-pointer hover:text-blue-400">
          <FaDownload size={14} />
          <span className="text-sm font-semibold">Student Login</span>
        </div>
      </div>

      {/* STYLE */}
      <style>
        {`
          @keyframes marquee {
            0% { transform: translateX(100%); }
            100% { transform: translateX(-100%); }
          }

          .animate-marquee {
            animation: marquee 8s linear infinite;
          }

          @media (max-width: 768px) {
            .animate-marquee {
              animation-duration: 10s;
            }
          }
        `}
      </style>
    </div>
  );
};

export default Notice;