import { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  FaFacebook, FaInstagram, FaYoutube, FaLinkedin,
  FaWhatsapp, FaPhoneAlt, FaMapMarkerAlt, FaGlobe,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { ChevronRight } from "lucide-react";

// ── Data ──────────────────────────────────────────────────────────
const trainingLinks = [
  { label: "Vocational Training",    path: "/training" },
  { label: "Summer Training",        path: "/training" },
  { label: "Winter Training",        path: "/training" },
  { label: "Industrial Training",    path: "/training" },
  { label: "Apprenticeship Training",path: "/training" },
  { label: "Internship Training",    path: "/training" },
  { label: "Project Training",       path: "/training" },
  { label: "Faculty Training",       path: "/training" },
];

const quickLinks = [
  { label: "Home",        path: "/" },
  { label: "About Us",    path: "/about" },
  { label: "Registration",path: "/registration" },
  { label: "Training",    path: "/training" },
  { label: "Placement",   path: "/placement" },
  { label: "Gallery",     path: "/gallery" },
  { label: "Services",    path: "/services" },
  { label: "Contact Us",  path: "/contact" },
];

const services = [
  "Software Development",
  "Website Development",
  "Mobile App Development",
  "Digital Marketing",
];

const socialLinks = [
  { icon: FaFacebook,  title: "Facebook",  href: "#",                             color: "hover:bg-blue-600" },
  { icon: FaInstagram, title: "Instagram", href: "#",                             color: "hover:bg-pink-600" },
  { icon: FaYoutube,   title: "YouTube",   href: "#",                             color: "hover:bg-red-600" },
  { icon: FaLinkedin,  title: "LinkedIn",  href: "#",                             color: "hover:bg-blue-700" },
  { icon: FaXTwitter,  title: "Twitter",   href: "#",                             color: "hover:bg-sky-500" },
  { icon: FaWhatsapp,  title: "WhatsApp",  href: "https://wa.me/919198483820",    color: "hover:bg-green-600" },
];

// ── Sub-components ────────────────────────────────────────────────
const FooterHeading = ({ title }) => (
  <h4 className="text-sm font-bold text-white uppercase tracking-widest mb-4 relative pb-3
    after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-8 after:h-0.5
    after:bg-blue-500 after:rounded-full">
    {title}
  </h4>
);

const FooterNavLink = ({ label, path }) => (
  <li>
    <NavLink
      to={path}
      className="flex items-center gap-1.5 text-sm text-gray-400 font-medium
        hover:text-blue-400 hover:pl-1 transition-all duration-200 group py-0.5"
    >
      <ChevronRight size={13} className="text-blue-500/60 group-hover:text-blue-400 group-hover:translate-x-0.5 transition-transform flex-shrink-0" />
      {label}
    </NavLink>
  </li>
);

const FooterPlainLink = ({ label }) => (
  <li>
    <span className="flex items-center gap-1.5 text-sm text-gray-400 font-medium py-0.5">
      <ChevronRight size={13} className="text-blue-500/60 flex-shrink-0" />
      {label}
    </span>
  </li>
);

// ── Main Footer ───────────────────────────────────────────────────
const Footer = () => {
  const [formData, setFormData]   = useState({ name: "", email: "" });
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = () => {
    if (!formData.name || !formData.email) return;
    setSubscribed(true);
    setTimeout(() => {
      setSubscribed(false);
      setFormData({ name: "", email: "" });
    }, 3000);
  };

  return (
    <footer className="font-sans" style={{ background: 'linear-gradient(180deg, #0f172a 0%, #0a1128 100%)' }}>

      {/* ── Top Announcement Bar ── */}
      <div
        className="py-3 text-center text-white text-sm font-semibold tracking-wide overflow-hidden"
        style={{ background: 'linear-gradient(90deg, #1e3a8a, #2563eb, #1e3a8a)' }}
      >
        <div className="flex flex-wrap justify-center gap-x-4 gap-y-1 px-4">
          <span>🏆 UP's #1 Software Training Company</span>
          <span className="opacity-40 hidden sm:inline">|</span>
          <span>1000+ Students Trained</span>
          <span className="opacity-40 hidden sm:inline">|</span>
          <span>📞 +91 9198483820</span>
          <span className="opacity-40 hidden sm:inline">|</span>
          <span>Lucknow &amp; Kanpur</span>
        </div>
      </div>

      {/* ── Wave divider (top) ── */}
      <div className="relative h-10 overflow-hidden" style={{ background: 'linear-gradient(90deg, #1e3a8a, #2563eb, #1e3a8a)' }}>
        <svg viewBox="0 0 1440 40" fill="none" xmlns="http://www.w3.org/2000/svg"
          className="absolute bottom-0 w-full" preserveAspectRatio="none">
          <path d="M0,40 C360,0 1080,40 1440,10 L1440,40 L0,40 Z" fill="#0f172a" />
        </svg>
      </div>

      {/* ── Main Grid ── */}
      <div className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

        {/* ── Col 1: Brand ── */}
        <div>
          {/* Logo / Brand name */}
          <div className="mb-1">
            <span className="text-2xl font-extrabold text-white tracking-tight">DigiCoders</span>
          </div>
          <p className="text-xs font-bold text-blue-400 tracking-widest uppercase mb-4">
            Technologies Pvt. Ltd.
          </p>

          <p className="text-sm text-gray-400 leading-relaxed mb-5">
            Uttar Pradesh's leading IT training company — empowering students with industry-ready
            skills in Lucknow and Kanpur since 2017. 7+ years, 1000+ lives changed.
          </p>

          {/* Social Icons */}
          <div className="flex flex-wrap gap-2 mb-6">
            {socialLinks.map((s) => {
              const Icon = s.icon;
              return (
                <a
                  key={s.title}
                  href={s.href}
                  target={s.href.startsWith("http") ? "_blank" : undefined}
                  rel="noreferrer"
                  title={s.title}
                  className={`w-9 h-9 rounded-xl flex items-center justify-center text-gray-400
                    bg-white/5 border border-white/10 ${s.color} hover:text-white hover:border-transparent
                    transition-all duration-200 hover:-translate-y-0.5`}
                >
                  <Icon size={15} />
                </a>
              );
            })}
          </div>

          {/* Contact Info */}
          <div className="flex flex-col gap-3">
            {[
              { icon: FaPhoneAlt,     text: "+91 9198483820",          href: "tel:+919198483820" },
              { icon: FaPhoneAlt,     text: "+91 6394 296 293",        href: "tel:+916394296293" },
              { icon: MdEmail,        text: "info@thedigicoders.com",   href: "mailto:info@thedigicoders.com" },
              { icon: FaGlobe,        text: "thedigicoders.com",        href: "https://thedigicoders.com" },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <a key={item.text} href={item.href}
                  className="flex items-center gap-2.5 text-sm text-gray-400 hover:text-blue-400 transition-colors group">
                  <span className="w-7 h-7 bg-white/5 border border-white/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:border-blue-500/30 transition-colors">
                    <Icon size={12} className="text-blue-400" />
                  </span>
                  {item.text}
                </a>
              );
            })}
          </div>
        </div>

        {/* ── Col 2: Training Programs ── */}
        <div>
          <FooterHeading title="Training Programs" />
          <ul className="flex flex-col gap-1">
            {trainingLinks.map((link) => (
              <FooterNavLink key={link.label} label={link.label} path={link.path} />
            ))}
          </ul>
        </div>

        {/* ── Col 3: Quick Links + Badges ── */}
        <div>
          <FooterHeading title="Quick Links" />
          <ul className="flex flex-col gap-1 mb-6">
            {quickLinks.map((link) => (
              <FooterNavLink key={link.label} label={link.label} path={link.path} />
            ))}
          </ul>

          {/* Trust Badges */}
          <div className="flex flex-wrap gap-2">
            {["ISO Certified", "MOU Partner", "7+ Years", "Govt. Approved"].map((badge) => (
              <span key={badge}
                className="bg-blue-500/10 text-blue-400 text-xs font-bold px-3 py-1 rounded-full border border-blue-500/20">
                {badge}
              </span>
            ))}
          </div>
        </div>

        {/* ── Col 4: Newsletter + Services ── */}
        <div>
          <FooterHeading title="Stay Updated" />
          <p className="text-sm text-gray-400 leading-relaxed mb-4">
            Get latest training notifications, placement updates &amp; tech blogs.
          </p>

          {subscribed ? (
            <div className="bg-green-500/10 border border-green-500/20 rounded-xl p-4 text-center mb-6">
              <div className="text-green-400 font-bold text-sm mb-1">Subscribed!</div>
              <div className="text-gray-400 text-xs">We'll keep you updated.</div>
            </div>
          ) : (
            <div className="flex flex-col gap-3 mb-6">
              <input
                type="text"
                placeholder="Your Name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="px-4 py-2.5 text-sm rounded-xl bg-white/5 border border-white/10
                  text-white placeholder-gray-500 outline-none focus:border-blue-500/50
                  transition-colors"
              />
              <input
                type="email"
                placeholder="Your Email Address"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="px-4 py-2.5 text-sm rounded-xl bg-white/5 border border-white/10
                  text-white placeholder-gray-500 outline-none focus:border-blue-500/50
                  transition-colors"
              />
              <button
                onClick={handleSubscribe}
                className="py-2.5 bg-blue-600 hover:bg-blue-500 text-white text-sm
                  font-bold rounded-xl transition-all duration-200 hover:-translate-y-0.5
                  hover:shadow-lg hover:shadow-blue-500/25"
              >
                Subscribe Now →
              </button>
            </div>
          )}

          <div>
            <FooterHeading title="Our Services" />
            <ul className="flex flex-col gap-1">
              {services.map((s) => (
                <FooterPlainLink key={s} label={s} />
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* ── Branches strip ── */}
      <div className="max-w-6xl mx-auto px-6 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            {
              city: "Lucknow",
              tag: "Head Office",
              address: "2nd Floor, B-36, Sector O, Aliganj, Lucknow UP 226021",
              near: "Near Ram Ram Bank Chauraha",
            },
            {
              city: "Kanpur",
              tag: "Branch",
              address: "128/3/98, Yashoda Nagar, Kanpur UP 208011",
              near: "Opp. Shivaji Park",
            },
          ].map((b) => (
            <div key={b.city}
              className="flex items-start gap-3 bg-white/5 border border-white/10 rounded-xl p-4 hover:border-blue-500/30 transition-colors">
              <span className="w-9 h-9 bg-blue-500/10 border border-blue-500/20 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5">
                <FaMapMarkerAlt size={14} className="text-blue-400" />
              </span>
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-sm font-bold text-white">{b.city}</span>
                  <span className="text-xs bg-blue-500/10 text-blue-400 border border-blue-500/20 px-2 py-0.5 rounded-full font-semibold">
                    {b.tag}
                  </span>
                </div>
                <p className="text-xs text-gray-400 leading-relaxed">{b.address}</p>
                <p className="text-xs text-gray-500 mt-0.5">{b.near}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── Divider ── */}
      <div className="max-w-6xl mx-auto px-6">
        <div className="h-px bg-white/10" />
      </div>

      {/* ── Bottom Bar ── */}
      <div className="max-w-6xl mx-auto px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-3 flex-wrap">
        <p className="text-sm text-gray-500 font-medium">
          © 2026{" "}
          <NavLink to="/" className="text-blue-400 font-bold hover:text-blue-300 transition-colors">
            DigiCoders Technologies Pvt. Ltd.
          </NavLink>
          {" "}— All Rights Reserved. Made with ❤️ in Lucknow &amp; Kanpur.
        </p>
        <div className="flex gap-5">
          {["Privacy Policy", "Terms of Use", "Sitemap", "Register"].map((link) => (
            <a key={link} href="#"
              className="text-xs text-gray-500 font-medium hover:text-blue-400 transition-colors">
              {link}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
