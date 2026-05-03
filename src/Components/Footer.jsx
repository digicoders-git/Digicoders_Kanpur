import { useState } from "react";

const trainingLinks = [
    "Vocational Training",
    "Summer Training",
    "Winter Training",
    "Industrial Training",
    "Apprenticeship Training",
    "Internship Training",
    "Project Training",
    "Faculty Training",
  ];

  const quickLinks = [
    "Home", "About Us", "Our Experts", "Placement",
    "Gallery", "Blogs", "FAQ's", "Contact Us",
  ];

  const services = [
    "Software Development",
    "Website Development",
    "Mobile App Development",
    "Digital Marketing",
  ];

  const socialLinks = [
    { label: "f", title: "Facebook", bg: "bg-blue-600" },
    { label: "📸", title: "Instagram", bg: "bg-gradient-to-br from-orange-400 to-pink-600" },
    { label: "▶", title: "YouTube", bg: "bg-red-600" },
    { label: "in", title: "LinkedIn", bg: "bg-blue-700" },
    { label: "𝕏", title: "Twitter", bg: "bg-sky-500" },
  ];

const Footer = () => {
  const [formData, setFormData] = useState({ name: "", email: "" });

  return (
    <footer className="bg-white border-t-4 border-blue-600 font-sans">

      {/* ── Top Announcement Bar ── */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 py-3 text-center text-white text-sm font-semibold tracking-wide">
        🏆 Uttar Pradesh's #1 Software Training Company
        <span className="opacity-60 mx-2">|</span>
        1000+ Projects Launched
        <span className="opacity-60 mx-2">|</span>
        📞 +91 9198483820
      </div>

      {/* ── Main Grid ── */}
      <div className="max-w-6xl mx-auto px-6 py-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

        {/* ── Col 1: Brand & About ── */}
        <div>
          <h2 className="text-2xl font-extrabold text-blue-600 tracking-tight">DigiCoders</h2>
          <p className="text-xs font-bold text-orange-500 tracking-widest uppercase mb-4">
            Technologies Pvt. Ltd.
          </p>
          <p className="text-sm text-slate-500 leading-relaxed mb-5">
            DigiCoders Technologies is Lucknow's leading software training company, empowering
            students and professionals with industry-ready skills in vocational, summer, winter,
            industrial, internship & project training programs.
          </p>

          {/* Social Icons */}
          <div className="flex gap-2 mb-5">
            {socialLinks.map((s) => (
              <a
                key={s.title}
                href="#"
                title={s.title}
                className={`w-9 h-9 rounded-lg flex items-center justify-center text-white text-sm font-bold
                  ${s.bg} hover:-translate-y-1 hover:shadow-lg transition-all duration-200`}
              >
                {s.label}
              </a>
            ))}
          </div>

          {/* Contact Mini */}
          <div className="flex flex-col gap-2">
            {[
              { icon: "📞", text: "+91 9198483820" },
              { icon: "📍", text: "Lucknow, Uttar Pradesh, India" },
              { icon: "🌐", text: "thedigicoders.com" },
            ].map((item) => (
              <div key={item.text} className="flex items-center gap-2 text-sm text-slate-600 font-semibold">
                <span className="w-7 h-7 bg-blue-50 rounded-md flex items-center justify-center text-xs flex-shrink-0">
                  {item.icon}
                </span>
                {item.text}
              </div>
            ))}
          </div>
        </div>

        {/* ── Col 2: Training Programs ── */}
        <div>
          <FooterHeading title="Training Programs" />
          <ul className="flex flex-col gap-2">
            {trainingLinks.map((link) => (
              <FooterLink key={link} label={link} />
            ))}
          </ul>
        </div>

        {/* ── Col 3: Quick Links ── */}
        <div>
          <FooterHeading title="Quick Links" />
          <ul className="flex flex-col gap-2 mb-5">
            {quickLinks.map((link) => (
              <FooterLink key={link} label={link} />
            ))}
          </ul>
          {/* Badges */}
          <div className="flex flex-wrap gap-2">
            {["ISO Certified", "MOU Partner", "7+ Years"].map((badge) => (
              <span
                key={badge}
                className="bg-blue-50 text-blue-600 text-xs font-bold px-3 py-1 rounded-full"
              >
                {badge}
              </span>
            ))}
          </div>
        </div>

        {/* ── Col 4: Newsletter + Services ── */}
        <div>
          <FooterHeading title="Stay Updated" />
          <p className="text-sm text-slate-500 leading-relaxed mb-4 font-semibold">
            Subscribe to get latest training notifications, placement updates & tech blogs.
          </p>
          <div className="flex flex-col gap-3">
            <input
              type="text"
              placeholder="Your Name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="px-4 py-2.5 text-sm border border-slate-200 rounded-lg bg-slate-50
                text-slate-700 outline-none focus:border-blue-500 transition-colors"
            />
            <input
              type="email"
              placeholder="Your Email Address"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="px-4 py-2.5 text-sm border border-slate-200 rounded-lg bg-slate-50
                text-slate-700 outline-none focus:border-blue-500 transition-colors"
            />
            <button
              onClick={() => alert("Subscribed!")}
              className="py-2.5 bg-gradient-to-r from-blue-600 to-blue-800 text-white text-sm
                font-bold rounded-lg hover:opacity-90 hover:-translate-y-0.5 transition-all duration-200"
            >
              Subscribe Now →
            </button>
          </div>

          <div className="mt-6">
            <FooterHeading title="Our Services" />
            <ul className="flex flex-col gap-2">
              {services.map((s) => (
                <FooterLink key={s} label={s} />
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* ── Divider ── */}
      <hr className="border-slate-200 max-w-6xl mx-auto" />

      {/* ── Bottom Bar ── */}
      <div className="max-w-6xl mx-auto px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-3 flex-wrap">
        <p className="text-sm text-slate-400 font-semibold">
          © 2026{" "}
          <a href="#" className="text-blue-600 font-bold hover:underline">
            DigiCoders Technologies Pvt. Ltd.
          </a>{" "}
          — All Rights Reserved. Made with ❤️ in Lucknow.
        </p>
        <div className="flex gap-5">
          {["Privacy Policy", "Terms of Use", "Sitemap", "Register"].map((link) => (
            <a
              key={link}
              href="#"
              className="text-xs text-slate-400 font-semibold hover:text-blue-600 transition-colors"
            >
              {link}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

/* ── Reusable Sub-components ── */

const FooterHeading = ({ title }) => (
  <h4 className="text-sm font-bold text-slate-800 uppercase tracking-wide mb-4 relative pb-2.5
    after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-8 after:h-0.5
    after:bg-orange-500 after:rounded-full">
    {title}
  </h4>
);

const FooterLink = ({ label }) => (
  <li>
    <a
      href="#"
      className="flex items-center gap-1.5 text-sm text-slate-500 font-semibold
        hover:text-blue-600 hover:pl-1 transition-all duration-200 group"
    >
      <span className="text-blue-500 text-base font-bold group-hover:translate-x-0.5 transition-transform">›</span>
      {label}
    </a>
  </li>
);

export default Footer;
