import { useState, useEffect } from "react";
import { IoCall, IoLocationSharp, IoMail, IoTime } from "react-icons/io5";
import { FaWhatsapp, FaFacebook, FaLinkedin, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { MdSend } from "react-icons/md";

// ─── Animated Counter Hook ────────────────────────────────────────
const useCounter = (target, duration = 1800) => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    let start = 0;
    const step = target / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) { setCount(target); clearInterval(timer); }
      else setCount(Math.floor(start));
    }, 16);
    return () => clearInterval(timer);
  }, [target, duration]);
  return count;
};

const StatItem = ({ target, suffix, label }) => {
  const count = useCounter(target);
  return (
    <div className="text-center px-4">
      <div className="text-2xl md:text-3xl font-extrabold text-white tabular-nums">
        {count}{suffix}
      </div>
      <div className="text-blue-200 text-xs mt-1 font-medium tracking-wide">{label}</div>
    </div>
  );
};

// ─── Section 1: Hero Banner ───────────────────────────────────────
const ContactHero = () => (
  <div className="relative bg-[#0a1845] overflow-hidden">

    {/* Grid background */}
    <div className="absolute inset-0 opacity-[0.07]"
      style={{
        backgroundImage: `linear-gradient(rgba(147,197,253,1) 1px, transparent 1px),
          linear-gradient(90deg, rgba(147,197,253,1) 1px, transparent 1px)`,
        backgroundSize: "48px 48px",
      }}
    />

    {/* Glow blobs */}
    <div className="absolute -top-20 left-1/3 w-80 h-80 bg-blue-600/25 rounded-full blur-3xl pointer-events-none" />
    <div className="absolute bottom-0 right-1/4 w-96 h-64 bg-blue-400/15 rounded-full blur-3xl pointer-events-none" />
    <div className="absolute top-1/3 right-8 w-40 h-40 bg-yellow-400/10 rounded-full blur-2xl pointer-events-none" />

    {/* Floating dots */}
    <div className="absolute top-6 left-10 w-2.5 h-2.5 bg-yellow-400 rounded-full animate-pulse" />
    <div className="absolute top-14 right-20 w-1.5 h-1.5 bg-blue-300 rounded-full animate-ping" style={{ animationDuration: "2.5s" }} />
    <div className="absolute bottom-16 left-1/4 w-2 h-2 bg-white/30 rounded-full animate-pulse" style={{ animationDelay: "0.8s" }} />
    <div className="absolute top-1/2 left-6 w-1 h-1 bg-yellow-300/60 rounded-full animate-ping" style={{ animationDuration: "3s" }} />

    <div className="relative max-w-5xl mx-auto px-4 pt-14 pb-6 md:pt-20">

      {/* Badge */}
      <div className="flex justify-center mb-5" style={{ animation: "fadeUp 0.6s ease both" }}>
        <span className="inline-flex items-center gap-2 bg-white/10 border border-white/20 backdrop-blur text-blue-100 text-[11px] font-bold tracking-[0.15em] uppercase px-5 py-2 rounded-full">
          <span className="w-1.5 h-1.5 bg-yellow-400 rounded-full animate-pulse" />
          Contact DigiCoders Technologies
          <span className="w-1.5 h-1.5 bg-yellow-400 rounded-full animate-pulse" />
        </span>
      </div>

      {/* Heading */}
      <div className="text-center mb-4" style={{ animation: "fadeUp 0.65s ease 0.08s both" }}>
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem] font-extrabold text-white leading-[1.15] tracking-tight">
          Let's Start Your
          <br />
          <span className="relative inline-block mt-2">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-amber-200 to-yellow-400">
              Success Journey
            </span>
            {/* Underline accent */}
            <svg className="absolute -bottom-2 left-0 w-full" height="6" viewBox="0 0 300 6" fill="none">
              <path d="M0 3 Q75 0 150 3 Q225 6 300 3" stroke="#FCD34D" strokeWidth="2.5" strokeLinecap="round" fill="none" opacity="0.7" />
            </svg>
          </span>
        </h1>
      </div>

      {/* Subtitle */}
      <p className="text-center text-blue-200/90 text-sm sm:text-base max-w-xl mx-auto mb-10 leading-relaxed"
        style={{ animation: "fadeUp 0.65s ease 0.16s both" }}>
        Questions about training, placement, or IT services?
        Our team responds fast — just pick a way to reach us below.
      </p>

      {/* CTA Buttons */}
      <div className="flex flex-wrap justify-center gap-3 mb-12" style={{ animation: "fadeUp 0.65s ease 0.24s both" }}>
        <a href="tel:+919198483820"
          className="group flex items-center gap-2.5 bg-white text-blue-900 font-bold px-5 py-3 rounded-2xl text-sm shadow-lg hover:bg-yellow-300 hover:text-blue-900 transition-all duration-200 hover:-translate-y-1 hover:shadow-yellow-300/30">
          <span className="w-7 h-7 bg-blue-100 group-hover:bg-yellow-200 rounded-lg flex items-center justify-center transition-colors shrink-0">
            <IoCall className="text-blue-600 text-sm" />
          </span>
          +91 9198483820
        </a>

        <a href="https://wa.me/919198483820" target="_blank" rel="noreferrer"
          className="group flex items-center gap-2.5 bg-green-500 text-white font-bold px-5 py-3 rounded-2xl text-sm shadow-lg hover:bg-green-400 transition-all duration-200 hover:-translate-y-1 hover:shadow-green-500/30">
          <span className="w-7 h-7 bg-green-400 group-hover:bg-green-300 rounded-lg flex items-center justify-center transition-colors shrink-0">
            <FaWhatsapp className="text-white text-sm" />
          </span>
          Chat on WhatsApp
        </a>

        <a href="mailto:info@thedigicoders.com"
          className="group flex items-center gap-2.5 bg-white/10 border border-white/20 text-white font-bold px-5 py-3 rounded-2xl text-sm hover:bg-white/20 transition-all duration-200 hover:-translate-y-1">
          <span className="w-7 h-7 bg-white/10 group-hover:bg-white/20 rounded-lg flex items-center justify-center transition-colors shrink-0">
            <IoMail className="text-blue-200 text-sm" />
          </span>
          info@thedigicoders.com
        </a>
      </div>

      {/* Stats */}
      <div className="border-t border-white/10 pt-8 pb-4" style={{ animation: "fadeUp 0.65s ease 0.32s both" }}>
        <div className="flex flex-wrap justify-center divide-x divide-white/10 gap-y-4">
          <StatItem target={1000} suffix="+" label="Students Trained" />
          <StatItem target={7} suffix="+" label="Years Experience" />
          <StatItem target={2} suffix="" label="City Branches" />
          <StatItem target={500} suffix="+" label="Placements Done" />
        </div>
      </div>
    </div>

    {/* Wave bottom */}
    <div className="relative h-12 md:h-16 mt-2">
      <svg viewBox="0 0 1440 64" fill="none" xmlns="http://www.w3.org/2000/svg"
        className="absolute bottom-0 w-full" preserveAspectRatio="none" style={{ display: "block" }}>
        <path d="M0 64L1440 64L1440 24C1080 64 720 0 360 32C180 48 90 16 0 24Z" fill="white" />
      </svg>
    </div>

    <style>{`
      @keyframes fadeUp {
        from { opacity: 0; transform: translateY(24px); }
        to   { opacity: 1; transform: translateY(0); }
      }
    `}</style>
  </div>
);

// ─── Section 2: Info Cards ────────────────────────────────────────
const infoCards = [
  {
    icon: <IoCall />,
    title: "Call Us",
    lines: ["+91 9198483820", "+91 6394 296 293"],
    sub: "Mon–Sat  •  10 AM – 7 PM",
    accent: "#2563eb",
    tag: "Instant",
    tagColor: "text-blue-600 bg-blue-50 border border-blue-100",
    hoverShadow: "hover:shadow-blue-100",
  },
  {
    icon: <IoMail />,
    title: "Email Us",
    lines: ["info@thedigicoders.com"],
    sub: "We reply within 24 hours",
    accent: "#ea580c",
    tag: "24hr Reply",
    tagColor: "text-orange-600 bg-orange-50 border border-orange-100",
    hoverShadow: "hover:shadow-orange-100",
  },
  {
    icon: <IoLocationSharp />,
    title: "Lucknow Branch",
    lines: ["B-36, Sector O, Aliganj", "Lucknow UP 226021"],
    sub: "Near Ram Ram Bank Chauraha",
    accent: "#16a34a",
    tag: "Head Office",
    tagColor: "text-green-700 bg-green-50 border border-green-100",
    hoverShadow: "hover:shadow-green-100",
  },
  {
    icon: <IoLocationSharp />,
    title: "Kanpur Branch",
    lines: ["128/3/98, Yashoda Nagar", "Kanpur UP 208011"],
    sub: "Opp. Shivaji Park",
    accent: "#7c3aed",
    tag: "Branch",
    tagColor: "text-purple-700 bg-purple-50 border border-purple-100",
    hoverShadow: "hover:shadow-purple-100",
  },
];

const InfoCards = () => (
  <div className="bg-white py-6 pb-14 px-4">
    <div className="max-w-6xl mx-auto">

      {/* Heading */}
      <div className="text-center mb-10">
        <span className="text-xs font-bold tracking-[0.15em] uppercase text-blue-500">Our Offices</span>
        <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mt-1">
          Multiple Ways to <span className="text-blue-600">Connect</span>
        </h2>
        <div className="mx-auto mt-3 h-[2px] w-20 bg-gradient-to-r from-blue-500 to-transparent rounded-full" />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {infoCards.map((card) => (
          <div
            key={card.title}
            className={`group relative bg-white rounded-2xl border border-gray-100 overflow-hidden
              hover:shadow-xl ${card.hoverShadow} transition-all duration-300 hover:-translate-y-2`}
          >
            {/* Left accent bar */}
            <div className="absolute left-0 top-0 bottom-0 w-1 rounded-l-2xl transition-all duration-300 group-hover:w-1.5"
              style={{ background: card.accent }} />

            <div className="p-5 pl-6">
              {/* Tag */}
              <span className={`inline-block text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full mb-4 ${card.tagColor}`}>
                {card.tag}
              </span>

              {/* Icon circle */}
              <div
                className="w-11 h-11 rounded-xl flex items-center justify-center text-white text-lg mb-4 group-hover:scale-110 transition-transform duration-300 shadow-sm"
                style={{ background: card.accent }}
              >
                {card.icon}
              </div>

              {/* Title */}
              <h3 className="font-extrabold text-gray-900 text-sm mb-2 tracking-tight">{card.title}</h3>

              {/* Lines */}
              <div className="flex flex-col gap-0.5 mb-3">
                {card.lines.map((line) => (
                  <p key={line} className="text-gray-700 text-sm font-semibold leading-snug">{line}</p>
                ))}
              </div>

              {/* Divider + sub */}
              <div className="border-t border-gray-100 pt-2.5 mt-1">
                <p className="text-gray-400 text-xs">{card.sub}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

// ─── Section 3: Form + Map ────────────────────────────────────────
const subjects = [
  "Industrial Training Enquiry",
  "Summer / Winter Training",
  "Internship / Apprenticeship",
  "Website / App Development",
  "Placement Assistance",
  "Other",
];

const ContactForm = () => {
  const [form, setForm] = useState({ name: "", email: "", phone: "", subject: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const handleSubmit = () => {
    if (!form.name || !form.email || !form.message) return alert("Please fill required fields.");
    setSubmitted(true);
  };

  return (
    <div className="bg-gray-50 py-14 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
            Send Us a <span className="text-blue-600">Message</span>
          </h2>
          <div className="mx-auto mt-3 h-[2px] w-32 bg-gradient-to-r from-blue-500 to-transparent rounded-full" />
          <p className="text-gray-500 mt-3 text-sm md:text-base">Fill the form below and we'll get back to you shortly.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-7 md:p-9">
            {submitted ? (
              <div className="flex flex-col items-center justify-center h-full text-center py-10 gap-4">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-800">Message Sent!</h3>
                <p className="text-gray-500 text-sm">Thank you! We'll contact you within 24 hours.</p>
                <button onClick={() => { setSubmitted(false); setForm({ name: "", email: "", phone: "", subject: "", message: "" }); }}
                  className="mt-2 px-5 py-2 bg-blue-600 text-white rounded-lg text-sm font-semibold hover:bg-blue-700 transition">
                  Send Another
                </button>
              </div>
            ) : (
              <div className="flex flex-col gap-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-bold text-gray-600 uppercase tracking-wide mb-1 block">Full Name *</label>
                    <input name="name" value={form.name} onChange={handleChange} placeholder="Rahul Sharma"
                      className="w-full px-4 py-2.5 border border-gray-200 rounded-xl text-sm text-gray-700 bg-gray-50 focus:outline-none focus:border-blue-500 transition" />
                  </div>
                  <div>
                    <label className="text-xs font-bold text-gray-600 uppercase tracking-wide mb-1 block">Phone</label>
                    <input name="phone" value={form.phone} onChange={handleChange} placeholder="+91 9876543210"
                      className="w-full px-4 py-2.5 border border-gray-200 rounded-xl text-sm text-gray-700 bg-gray-50 focus:outline-none focus:border-blue-500 transition" />
                  </div>
                </div>
                <div>
                  <label className="text-xs font-bold text-gray-600 uppercase tracking-wide mb-1 block">Email Address *</label>
                  <input name="email" value={form.email} onChange={handleChange} placeholder="rahul@email.com"
                    className="w-full px-4 py-2.5 border border-gray-200 rounded-xl text-sm text-gray-700 bg-gray-50 focus:outline-none focus:border-blue-500 transition" />
                </div>
                <div>
                  <label className="text-xs font-bold text-gray-600 uppercase tracking-wide mb-1 block">Subject</label>
                  <select name="subject" value={form.subject} onChange={handleChange}
                    className="w-full px-4 py-2.5 border border-gray-200 rounded-xl text-sm text-gray-700 bg-gray-50 focus:outline-none focus:border-blue-500 transition">
                    <option value="">Select a subject...</option>
                    {subjects.map((s) => <option key={s} value={s}>{s}</option>)}
                  </select>
                </div>
                <div>
                  <label className="text-xs font-bold text-gray-600 uppercase tracking-wide mb-1 block">Message *</label>
                  <textarea name="message" value={form.message} onChange={handleChange} rows={4} placeholder="Tell us about your query..."
                    className="w-full px-4 py-2.5 border border-gray-200 rounded-xl text-sm text-gray-700 bg-gray-50 focus:outline-none focus:border-blue-500 transition resize-none" />
                </div>
                <button onClick={handleSubmit}
                  className="flex items-center justify-center gap-2 w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-bold py-3 rounded-xl transition-all duration-200 text-sm mt-1">
                  <MdSend className="text-lg" /> Send Message
                </button>
              </div>
            )}
          </div>

          <div className="flex flex-col gap-5">
            <div className="rounded-3xl overflow-hidden border border-gray-200 shadow-sm h-72 lg:flex-1 min-h-[260px]">
              <iframe title="Lucknow Branch"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3559.123456789!2d80.9897!3d26.8869!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjbCsDUzJzEyLjkiTiA4MMKwNTknMjIuOSJF!5e0!3m2!1sen!2sin!4v1234567890"
                width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
            </div>
            <div className="bg-white rounded-2xl border border-gray-100 p-5 shadow-sm">
              <div className="flex items-center gap-2 mb-3">
                <IoTime className="text-blue-600 text-xl" />
                <h3 className="font-bold text-gray-800">Working Hours</h3>
              </div>
              {[
                { day: "Monday – Saturday", time: "10:00 AM – 7:00 PM", open: true },
                { day: "Sunday", time: "Closed", open: false },
              ].map((item) => (
                <div key={item.day} className="flex justify-between items-center text-sm py-1.5 border-b border-gray-50 last:border-0">
                  <span className="text-gray-600 font-medium">{item.day}</span>
                  <span className={`font-bold text-xs px-2.5 py-0.5 rounded-full ${item.open ? "text-green-700 bg-green-50" : "text-red-500 bg-red-50"}`}>
                    {item.time}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// ─── Section 4: Social + CTA ──────────────────────────────────────
const socialLinks = [
  { icon: <FaFacebook />, label: "Facebook", color: "bg-blue-600", href: "#" },
  { icon: <FaWhatsapp />, label: "WhatsApp", color: "bg-green-500", href: "https://wa.me/919198483820" },
  { icon: <FaYoutube />, label: "YouTube", color: "bg-red-600", href: "#" },
  { icon: <FaLinkedin />, label: "LinkedIn", color: "bg-blue-700", href: "#" },
  { icon: <FaXTwitter />, label: "Twitter", color: "bg-sky-500", href: "#" },
];

const SocialCTA = () => (
  <div className="bg-white py-12 px-4 border-t border-gray-100">
    <div className="max-w-4xl mx-auto text-center">
      <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-2">Connect on Social Media</h2>
      <div className="mx-auto mt-3 mb-6 h-[2px] w-28 bg-gradient-to-r from-blue-500 to-transparent rounded-full" />
      <p className="text-gray-500 text-sm mb-8">Follow us for training updates, placement results & tech content.</p>
      <div className="flex flex-wrap justify-center gap-3 mb-12">
        {socialLinks.map((s) => (
          <a key={s.label} href={s.href} target="_blank" rel="noreferrer"
            className={`${s.color} text-white flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold hover:-translate-y-1 hover:shadow-lg transition-all duration-200`}>
            <span className="text-base">{s.icon}</span>{s.label}
          </a>
        ))}
      </div>
      <div className="bg-gradient-to-br from-[#0a1845] via-[#0f2166] to-blue-700 rounded-3xl p-8 md:p-10 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-40 h-40 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-28 h-28 bg-yellow-400/10 rounded-full translate-y-1/2 -translate-x-1/2" />
        <div className="relative">
          <h3 className="text-xl md:text-2xl font-extrabold mb-2">Ready to Start Your Training?</h3>
          <p className="text-blue-200 text-sm mb-6 max-w-md mx-auto">Join 1000+ students who have transformed their careers with DigiCoders Technologies.</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a href="tel:+919198483820"
              className="flex items-center justify-center gap-2 bg-white text-blue-900 font-bold px-6 py-3 rounded-xl hover:bg-yellow-300 hover:text-blue-900 transition-all duration-200 text-sm shadow-lg">
              <IoCall /> Call Now
            </a>
            <a href="https://wa.me/919198483820" target="_blank" rel="noreferrer"
              className="flex items-center justify-center gap-2 bg-green-500 hover:bg-green-400 text-white font-bold px-6 py-3 rounded-xl transition-all duration-200 text-sm shadow-lg">
              <FaWhatsapp /> WhatsApp Us
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
);

// ─── Main Page ────────────────────────────────────────────────────
const Contact = () => (
  <>
    <ContactHero />
    <InfoCards />
    <ContactForm />
    <SocialCTA />
  </>
);

export default Contact;
