import { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  FaFacebook, FaInstagram, FaYoutube, FaLinkedin,
  FaWhatsapp, FaPhoneAlt, FaMapMarkerAlt, FaGlobe,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { ChevronRight } from "lucide-react";

const trainingLinks = [
  { label: "Vocational Training",     path: "/training" },
  { label: "Summer Training",         path: "/training" },
  { label: "Winter Training",         path: "/training" },
  { label: "Industrial Training",     path: "/training" },
  { label: "Apprenticeship Training", path: "/training" },
  { label: "Internship Training",     path: "/training" },
  { label: "Project Training",        path: "/training" },
  { label: "Faculty Training",        path: "/training" },
];

const quickLinks = [
  { label: "Home",         path: "/" },
  { label: "About Us",     path: "/about" },
  { label: "Registration", path: "/registration" },
  { label: "Training",     path: "/training" },
  { label: "Placement",    path: "/placement" },
  { label: "Gallery",      path: "/gallery" },
  { label: "Services",     path: "/services" },
  { label: "Contact Us",   path: "/contact" },
];

const services = [
  "Software Development",
  "Website Development",
  "Mobile App Development",
  "Digital Marketing",
];

const socialLinks = [
  { icon: FaFacebook,  title: "Facebook",  href: "#",                          hoverBg: "#1877f2" },
  { icon: FaInstagram, title: "Instagram", href: "#",                          hoverBg: "#e1306c" },
  { icon: FaYoutube,   title: "YouTube",   href: "#",                          hoverBg: "#ff0000" },
  { icon: FaLinkedin,  title: "LinkedIn",  href: "#",                          hoverBg: "#0077b5" },
  { icon: FaXTwitter,  title: "Twitter",   href: "#",                          hoverBg: "#000000" },
  { icon: FaWhatsapp,  title: "WhatsApp",  href: "https://wa.me/919198483820", hoverBg: "#25d366" },
];

const handleScrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

const FooterHeading = ({ title }) => (
  <h4 className="text-sm font-bold text-white uppercase tracking-widest mb-4 relative pb-3"
    style={{
      borderBottom: 'none',
    }}>
    {title}
    <span className="absolute bottom-0 left-0 w-8 h-0.5 rounded-full" style={{ background: '#ff8c00' }} />
  </h4>
);

const FooterNavLink = ({ label, path }) => (
  <li>
    <NavLink
      to={path}
      onClick={handleScrollTop}
      className="flex items-center gap-1.5 text-sm text-gray-400 font-medium py-0.5 transition-all duration-200 hover:pl-1 group"
      style={({ isActive }) => isActive ? { color: '#ff8c00' } : {}}
    >
      <ChevronRight size={13} className="flex-shrink-0 group-hover:translate-x-0.5 transition-transform"
        style={{ color: 'rgba(255,140,0,0.5)' }} />
      <span className="group-hover:text-orange-400 transition-colors">{label}</span>
    </NavLink>
  </li>
);

const FooterPlainLink = ({ label }) => (
  <li>
    <span className="flex items-center gap-1.5 text-sm text-gray-400 font-medium py-0.5">
      <ChevronRight size={13} className="flex-shrink-0" style={{ color: 'rgba(46,125,50,0.6)' }} />
      {label}
    </span>
  </li>
);

const Footer = () => {
  const [formData,   setFormData]   = useState({ name: "", email: "" });
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = () => {
    if (!formData.name || !formData.email) return;
    setSubscribed(true);
    setTimeout(() => { setSubscribed(false); setFormData({ name: "", email: "" }); }, 3000);
  };

  return (
    <footer className="font-sans" style={{ background: 'linear-gradient(180deg, #0d1b2a 0%, #0a1520 100%)' }}>

      {/* ── Top Announcement Bar ── */}
      <div className="py-3 text-center text-white text-sm font-semibold tracking-wide overflow-hidden"
        style={{ background: 'linear-gradient(90deg, #0d1b2a, #1a2f1a, #0d1b2a)' }}>
        {/* Orange + green gradient line on top */}
        <div className="absolute top-0 left-0 right-0 h-[3px]"
          style={{ background: 'linear-gradient(to right, #ff8c00, #2e7d32, #ff8c00)' }} />
        <div className="flex flex-wrap justify-center gap-x-4 gap-y-1 px-4">
          <span style={{ color: '#ffb74d' }}>🏆 UP's #1 Software Training Company</span>
          <span className="opacity-30 hidden sm:inline">|</span>
          <span className="text-gray-300">1000+ Students Trained</span>
          <span className="opacity-30 hidden sm:inline">|</span>
          <span style={{ color: '#81c784' }}>📞 +91 9198483820</span>
          <span className="opacity-30 hidden sm:inline">|</span>
          <span className="text-gray-300">Lucknow &amp; Kanpur</span>
        </div>
      </div>

      {/* ── Wave divider ── */}
      <div className="relative h-10 overflow-hidden"
        style={{ background: 'linear-gradient(90deg, #0d1b2a, #1a2f1a, #0d1b2a)' }}>
        <svg viewBox="0 0 1440 40" fill="none" xmlns="http://www.w3.org/2000/svg"
          className="absolute bottom-0 w-full" preserveAspectRatio="none">
          <path d="M0,40 C360,0 1080,40 1440,10 L1440,40 L0,40 Z" fill="#0d1b2a" />
        </svg>
      </div>

      {/* ── Main Grid ── */}
      <div className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

        {/* Col 1: Brand */}
        <div>
          <div className="mb-1">
            <span className="text-2xl font-extrabold text-white tracking-tight">
              Digi<span style={{ color: '#4caf50' }}>{`{`}</span>Coders<span style={{ color: '#4caf50' }}>{`}`}</span>
            </span>
          </div>
          <p className="text-xs font-bold uppercase mb-4 tracking-widest" style={{ color: '#ff8c00' }}>
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
                <a key={s.title} href={s.href}
                  target={s.href.startsWith("http") ? "_blank" : undefined}
                  rel="noreferrer" title={s.title}
                  className="w-9 h-9 rounded-xl flex items-center justify-center text-gray-400 border transition-all duration-200 hover:-translate-y-0.5 hover:text-white hover:border-transparent"
                  style={{ background: 'rgba(255,255,255,0.05)', borderColor: 'rgba(255,255,255,0.1)' }}
                  onMouseEnter={e => { e.currentTarget.style.background = s.hoverBg; }}
                  onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.05)'; }}
                >
                  <Icon size={15} />
                </a>
              );
            })}
          </div>

          {/* Contact Info */}
          <div className="flex flex-col gap-3">
            {[
              { icon: FaPhoneAlt, text: "+91 9198483820",         href: "tel:+919198483820",              iconColor: '#ff8c00' },
              { icon: FaPhoneAlt, text: "+91 6394 296 293",       href: "tel:+916394296293",              iconColor: '#ff8c00' },
              { icon: MdEmail,    text: "info@thedigicoders.com", href: "mailto:info@thedigicoders.com",  iconColor: '#4caf50' },
              { icon: FaGlobe,    text: "thedigicoders.com",      href: "https://thedigicoders.com",      iconColor: '#4caf50' },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <a key={item.text} href={item.href}
                  className="flex items-center gap-2.5 text-sm text-gray-400 hover:text-white transition-colors group">
                  <span className="w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0 transition-colors"
                    style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)' }}>
                    <Icon size={12} style={{ color: item.iconColor }} />
                  </span>
                  {item.text}
                </a>
              );
            })}
          </div>
        </div>

        {/* Col 2: Training Programs */}
        <div>
          <FooterHeading title="Training Programs" />
          <ul className="flex flex-col gap-1">
            {trainingLinks.map((link) => (
              <FooterNavLink key={link.label} label={link.label} path={link.path} />
            ))}
          </ul>
        </div>

        {/* Col 3: Quick Links + Badges */}
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
                className="text-xs font-bold px-3 py-1 rounded-full border"
                style={{ background: 'rgba(255,140,0,0.08)', color: '#ffb74d', borderColor: 'rgba(255,140,0,0.2)' }}>
                {badge}
              </span>
            ))}
          </div>
        </div>

        {/* Col 4: Newsletter + Services */}
        <div>
          <FooterHeading title="Stay Updated" />
          <p className="text-sm text-gray-400 leading-relaxed mb-4">
            Get latest training notifications, placement updates &amp; tech blogs.
          </p>

          {subscribed ? (
            <div className="rounded-xl p-4 text-center mb-6 border"
              style={{ background: 'rgba(76,175,80,0.1)', borderColor: 'rgba(76,175,80,0.2)' }}>
              <div className="font-bold text-sm mb-1" style={{ color: '#81c784' }}>Subscribed!</div>
              <div className="text-gray-400 text-xs">We'll keep you updated.</div>
            </div>
          ) : (
            <div className="flex flex-col gap-3 mb-6">
              <input type="text" placeholder="Your Name" value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="px-4 py-2.5 text-sm rounded-xl text-white placeholder-gray-500 outline-none transition-colors"
                style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)' }}
                onFocus={e => e.target.style.borderColor = 'rgba(255,140,0,0.4)'}
                onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,0.1)'}
              />
              <input type="email" placeholder="Your Email Address" value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="px-4 py-2.5 text-sm rounded-xl text-white placeholder-gray-500 outline-none transition-colors"
                style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)' }}
                onFocus={e => e.target.style.borderColor = 'rgba(255,140,0,0.4)'}
                onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,0.1)'}
              />
              <button onClick={handleSubscribe}
                className="py-2.5 text-white text-sm font-bold rounded-xl transition-all duration-200 hover:-translate-y-0.5"
                style={{ background: '#ff8c00' }}
                onMouseEnter={e => e.target.style.background = '#e65100'}
                onMouseLeave={e => e.target.style.background = '#ff8c00'}
              >
                Subscribe Now →
              </button>
            </div>
          )}

          <div>
            <FooterHeading title="Our Services" />
            <ul className="flex flex-col gap-1">
              {services.map((s) => <FooterPlainLink key={s} label={s} />)}
            </ul>
          </div>
        </div>
      </div>

      {/* ── Branches strip ── */}
      <div className="max-w-6xl mx-auto px-6 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            { city: "Lucknow", tag: "Head Office", address: "2nd Floor, B-36, Sector O, Aliganj, Lucknow UP 226021", near: "Near Ram Ram Bank Chauraha" },
            { city: "Kanpur",  tag: "Branch",      address: "128/3/98, Yashoda Nagar, Kanpur UP 208011",             near: "Opp. Shivaji Park" },
          ].map((b) => (
            <div key={b.city}
              className="flex items-start gap-3 rounded-xl p-4 transition-colors border"
              style={{ background: 'rgba(255,255,255,0.03)', borderColor: 'rgba(255,255,255,0.08)' }}
              onMouseEnter={e => e.currentTarget.style.borderColor = 'rgba(255,140,0,0.25)'}
              onMouseLeave={e => e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)'}
            >
              <span className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5 border"
                style={{ background: 'rgba(255,140,0,0.08)', borderColor: 'rgba(255,140,0,0.2)' }}>
                <FaMapMarkerAlt size={14} style={{ color: '#ff8c00' }} />
              </span>
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-sm font-bold text-white">{b.city}</span>
                  <span className="text-xs font-semibold px-2 py-0.5 rounded-full border"
                    style={{ background: 'rgba(76,175,80,0.1)', color: '#81c784', borderColor: 'rgba(76,175,80,0.2)' }}>
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
        <div className="h-px" style={{ background: 'rgba(255,255,255,0.08)' }} />
      </div>

      {/* ── Bottom Bar ── */}
      <div className="max-w-6xl mx-auto px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-3 flex-wrap">
        <p className="text-sm text-gray-500 font-medium">
          © 2026{" "}
          <NavLink to="/" className="font-bold transition-colors hover:text-orange-300" style={{ color: '#ff8c00' }}>
            DigiCoders Technologies Pvt. Ltd.
          </NavLink>
          {" "}— All Rights Reserved. Made with ❤️ in Lucknow &amp; Kanpur.
        </p>
        <div className="flex gap-5">
          {["Privacy Policy", "Terms of Use", "Sitemap", "Register"].map((link) => (
            <a key={link} href="#"
              className="text-xs text-gray-500 font-medium transition-colors hover:text-orange-400">
              {link}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
