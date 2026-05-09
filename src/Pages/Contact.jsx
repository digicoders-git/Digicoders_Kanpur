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
  }, [target]);
  return count;
};

const StatItem = ({ target, suffix, label }) => {
  const count = useCounter(target);
  return (
    <div className="text-center px-4">
      <div className="text-2xl md:text-3xl font-extrabold text-white tabular-nums">
        {count}{suffix}
      </div>
      <div className="text-xs mt-1 font-medium tracking-wide" style={{ color: '#ffb347' }}>{label}</div>
    </div>
  );
};

// ─── Section 1: Hero Banner ───────────────────────────────────────
const ContactHero = () => (
  <div className="relative overflow-hidden flex items-center" style={{ background: '#0d1b2a' }}>
    {/* Background Image with Overlay */}
    <div
      className="absolute inset-0 z-0 opacity-30"
      style={{
        backgroundImage: 'url("https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80")',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    />

    {/* Decorative Glows */}
    <div className="absolute -top-20 left-1/4 w-80 h-80 rounded-full blur-3xl pointer-events-none opacity-20"
      style={{ background: 'radial-gradient(circle, #ff8c00, transparent)' }} />
    <div className="absolute bottom-0 right-1/4 w-96 h-64 rounded-full blur-3xl pointer-events-none opacity-10"
      style={{ background: 'radial-gradient(circle, #2e7d32, transparent)' }} />

    <div className="relative z-10 max-w-7xl mx-auto px-10 py-5 lg:py-5 w-full">
      <div className="flex flex-col lg:flex-row items-center gap-12">

        {/* LEFT SIDE: Content */}
        <div className="w-full lg:w-3/5 text-left" style={{ animation: "fadeUp 0.65s ease both" }}>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-[1.1] tracking-tight mb-6">
            Let's Start Your <br />
            <span className="relative inline-block mt-2 text-transparent bg-clip-text"
              style={{ backgroundImage: 'linear-gradient(to right, #ff8c00, #ffb347, #ff8c00)' }}>
              Success Journey
              <svg className="absolute -bottom-2 left-0 w-full" height="6" viewBox="0 0 300 6" fill="none">
                <path d="M0 3 Q75 0 150 3 Q225 6 300 3" stroke="#ff8c00" strokeWidth="3" strokeLinecap="round" fill="none" />
              </svg>
            </span>
          </h1>

          <p className="text-lg md:text-xl max-w-2xl mb-8 leading-relaxed opacity-90" style={{ color: '#d1d5db' }}>
            Questions about training, placement, or IT services?
            Our team responds fast — just pick a way to reach us.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 mb-5">
            <a href="tel:+919198483820"
              className="flex items-center gap-3 font-bold px-6 py-3.5 rounded-2xl transition-all hover:-translate-y-1"
              style={{ background: '#ff8c00', color: '#fff' }}
              onMouseEnter={e => e.currentTarget.style.background = '#e07800'}
              onMouseLeave={e => e.currentTarget.style.background = '#ff8c00'}
            >
              <IoCall className="text-xl" /> +91 9198483820
            </a>
            <a href="https://wa.me/919198483820"
              className="flex items-center gap-3 bg-green-500 text-white font-bold px-6 py-3.5 rounded-2xl hover:bg-green-400 transition-all hover:-translate-y-1">
              <FaWhatsapp className="text-xl" /> WhatsApp
            </a>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-3">
            {[
              { val: '1000+', label: 'Students Trained' },
              { val: '7+ Yrs', label: 'Experience' },
              { val: '500+', label: 'Placements' },
              { val: '2', label: 'Branches' },
            ].map(({ val, label }) => (
              <div key={label} className="text-white">
                <p className="text-2xl font-bold" style={{ color: '#ff8c00' }}>{val}</p>
                <p className="text-sm" style={{ color: '#9ca3af' }}>{label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT SIDE: Quick Inquiry Form */}
        <div className="w-full lg:w-2/5" style={{ animation: "fadeUp 0.65s ease 0.2s both" }}>
          <div className="backdrop-blur-md border border-white/20 p-8 rounded-3xl shadow-2xl"
            style={{ background: 'rgba(255,255,255,0.08)' }}>
            <h3 className="text-2xl font-bold text-white mb-6">Quick Inquiry</h3>
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full border rounded-xl px-4 py-3 text-white placeholder:text-gray-400 outline-none transition-colors"
                style={{ background: 'rgba(255,255,255,0.05)', borderColor: 'rgba(255,255,255,0.2)' }}
                onFocus={e => e.currentTarget.style.borderColor = '#ff8c00'}
                onBlur={e => e.currentTarget.style.borderColor = 'rgba(255,255,255,0.2)'}
              />
              <input
                type="email"
                placeholder="Email Address"
                className="w-full border rounded-xl px-4 py-3 text-white placeholder:text-gray-400 outline-none transition-colors"
                style={{ background: 'rgba(255,255,255,0.05)', borderColor: 'rgba(255,255,255,0.2)' }}
                onFocus={e => e.currentTarget.style.borderColor = '#ff8c00'}
                onBlur={e => e.currentTarget.style.borderColor = 'rgba(255,255,255,0.2)'}
              />
              <select
                className="w-full border rounded-xl px-4 py-3 outline-none transition-colors"
                style={{ background: 'rgba(255,255,255,0.08)', borderColor: 'rgba(255,255,255,0.2)', color: '#9ca3af' }}
                onFocus={e => e.currentTarget.style.borderColor = '#ff8c00'}
                onBlur={e => e.currentTarget.style.borderColor = 'rgba(255,255,255,0.2)'}
              >
                <option className="text-black">Select Interest</option>
                <option className="text-black">Training</option>
                <option className="text-black">Placement</option>
                <option className="text-black">IT Services</option>
              </select>
              <button
                className="w-full font-bold py-4 rounded-xl transition-all active:scale-95 text-white"
                style={{ background: 'linear-gradient(135deg, #ff8c00, #e07800)' }}
                onMouseEnter={e => e.currentTarget.style.opacity = '0.9'}
                onMouseLeave={e => e.currentTarget.style.opacity = '1'}
              >
                Send Message Now
              </button>
            </form>
          </div>
        </div>

      </div>
    </div>

    <style>{`
      @keyframes fadeUp {
        from { opacity: 0; transform: translateY(30px); }
        to { opacity: 1; transform: translateY(0); }
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
    accent: "#ff8c00",
    tag: "Instant",
    tagColor: "text-orange-600 bg-orange-50 border border-orange-100",
    hoverShadow: "hover:shadow-orange-100",
  },
  {
    icon: <IoMail />,
    title: "Email Us",
    lines: ["info@thedigicoders.com"],
    sub: "We reply within 24 hours",
    accent: "#2e7d32",
    tag: "24hr Reply",
    tagColor: "text-green-700 bg-green-50 border border-green-100",
    hoverShadow: "hover:shadow-green-100",
  },
  {
    icon: <IoLocationSharp />,
    title: "Lucknow Branch",
    lines: ["B-36, Sector O, Aliganj", "Lucknow UP 226021"],
    sub: "Near Ram Ram Bank Chauraha",
    accent: "#ff8c00",
    tag: "Head Office",
    tagColor: "text-orange-600 bg-orange-50 border border-orange-100",
    hoverShadow: "hover:shadow-orange-100",
  },
  {
    icon: <IoLocationSharp />,
    title: "Kanpur Branch",
    lines: ["128/3/98, Yashoda Nagar", "Kanpur UP 208011"],
    sub: "Opp. Shivaji Park",
    accent: "#2e7d32",
    tag: "Branch",
    tagColor: "text-green-700 bg-green-50 border border-green-100",
    hoverShadow: "hover:shadow-green-100",
  },
];

const InfoCards = () => (
  <div className="bg-white py-6 pb-14 px-4">
    <div className="max-w-6xl mx-auto">

      {/* Heading */}
      <div className="text-center mb-10">
        <span className="text-xs font-bold tracking-[0.15em] uppercase" style={{ color: '#ff8c00' }}>Our Offices</span>
        <h2 className="text-2xl md:text-4xl font-extrabold text-gray-900 mt-1">
          Multiple Ways to <span className="italic" style={{ color: '#ff8c00' }}>Connect</span>
        </h2>
        <div className="mx-auto mt-3 h-[2px] w-20 rounded-full"
          style={{ background: 'linear-gradient(to right, #ff8c00, transparent)' }} />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {infoCards.map((card) => (
          <div
            key={card.title}
            className={`group relative bg-white rounded-2xl border border-gray-100 overflow-hidden hover:shadow-xl ${card.hoverShadow} transition-all duration-300 hover:-translate-y-2`}
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
    <div className="bg-gray-50 py-5 px-4" id="registration">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
            Send Us a <span className="italic" style={{ color: '#ff8c00' }}>Message</span>
          </h2>
          <div className="mx-auto mt-3 h-[2px] w-42 rounded-full"
            style={{ background: 'linear-gradient(to right, #ff8c00, transparent)' }} />
          <p className="text-gray-500 mt-3 text-sm md:text-base">Fill the form below and we'll get back to you shortly.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Form card */}
          <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-7 md:p-9">
            {submitted ? (
              <div className="flex flex-col items-center justify-center h-full text-center py-10 gap-4">
                <div className="w-16 h-16 rounded-full flex items-center justify-center"
                  style={{ background: '#e8f5e9' }}>
                  <svg className="w-8 h-8" fill="none" stroke="#2e7d32" strokeWidth={2.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-800">Message Sent!</h3>
                <p className="text-gray-500 text-sm">Thank you! We'll contact you within 24 hours.</p>
                <button
                  onClick={() => { setSubmitted(false); setForm({ name: "", email: "", phone: "", subject: "", message: "" }); }}
                  className="mt-2 px-5 py-2 text-white rounded-lg text-sm font-semibold transition"
                  style={{ background: '#ff8c00' }}
                  onMouseEnter={e => e.currentTarget.style.background = '#e07800'}
                  onMouseLeave={e => e.currentTarget.style.background = '#ff8c00'}
                >
                  Send Another
                </button>
              </div>
            ) : (
              <div className="flex flex-col gap-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-bold text-gray-600 uppercase tracking-wide mb-1 block">Full Name *</label>
                    <input name="name" value={form.name} onChange={handleChange} placeholder="Rahul Sharma"
                      className="w-full px-4 py-2.5 border border-gray-200 rounded-xl text-sm text-gray-700 bg-gray-50 outline-none transition"
                      onFocus={e => e.currentTarget.style.borderColor = '#ff8c00'}
                      onBlur={e => e.currentTarget.style.borderColor = '#e5e7eb'}
                    />
                  </div>
                  <div>
                    <label className="text-xs font-bold text-gray-600 uppercase tracking-wide mb-1 block">Phone</label>
                    <input name="phone" value={form.phone} onChange={handleChange} placeholder="+91 9876543210"
                      className="w-full px-4 py-2.5 border border-gray-200 rounded-xl text-sm text-gray-700 bg-gray-50 outline-none transition"
                      onFocus={e => e.currentTarget.style.borderColor = '#ff8c00'}
                      onBlur={e => e.currentTarget.style.borderColor = '#e5e7eb'}
                    />
                  </div>
                </div>
                <div>
                  <label className="text-xs font-bold text-gray-600 uppercase tracking-wide mb-1 block">Email Address *</label>
                  <input name="email" value={form.email} onChange={handleChange} placeholder="rahul@email.com"
                    className="w-full px-4 py-2.5 border border-gray-200 rounded-xl text-sm text-gray-700 bg-gray-50 outline-none transition"
                    onFocus={e => e.currentTarget.style.borderColor = '#ff8c00'}
                    onBlur={e => e.currentTarget.style.borderColor = '#e5e7eb'}
                  />
                </div>
                <div>
                  <label className="text-xs font-bold text-gray-600 uppercase tracking-wide mb-1 block">Subject</label>
                  <select name="subject" value={form.subject} onChange={handleChange}
                    className="w-full px-4 py-2.5 border border-gray-200 rounded-xl text-sm text-gray-700 bg-gray-50 outline-none transition"
                    onFocus={e => e.currentTarget.style.borderColor = '#ff8c00'}
                    onBlur={e => e.currentTarget.style.borderColor = '#e5e7eb'}
                  >
                    <option value="">Select a subject...</option>
                    {subjects.map((s) => <option key={s} value={s}>{s}</option>)}
                  </select>
                </div>
                <div>
                  <label className="text-xs font-bold text-gray-600 uppercase tracking-wide mb-1 block">Message *</label>
                  <textarea name="message" value={form.message} onChange={handleChange} rows={4} placeholder="Tell us about your query..."
                    className="w-full px-4 py-2.5 border border-gray-200 rounded-xl text-sm text-gray-700 bg-gray-50 outline-none transition resize-none"
                    onFocus={e => e.currentTarget.style.borderColor = '#ff8c00'}
                    onBlur={e => e.currentTarget.style.borderColor = '#e5e7eb'}
                  />
                </div>
                <button onClick={handleSubmit}
                  className="flex items-center justify-center gap-2 w-full text-white font-bold py-3 rounded-xl transition-all duration-200 text-sm mt-1"
                  style={{ background: 'linear-gradient(135deg, #ff8c00, #e07800)' }}
                  onMouseEnter={e => e.currentTarget.style.opacity = '0.9'}
                  onMouseLeave={e => e.currentTarget.style.opacity = '1'}
                >
                  <MdSend className="text-lg" /> Send Message
                </button>
              </div>
            )}
          </div>

          {/* Map + Hours */}
          <div className="flex flex-col gap-5">
            <div className="rounded-3xl overflow-hidden border border-gray-200 shadow-sm h-72 lg:flex-1 min-h-[260px]">
              <iframe title="Lucknow Branch"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3559.123456789!2d80.9897!3d26.8869!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjbCsDUzJzEyLjkiTiA4MMKwNTknMjIuOSJF!5e0!3m2!1sen!2sin!4v1234567890"
                width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
            </div>
            <div className="bg-white rounded-2xl border border-gray-100 p-5 shadow-sm">
              <div className="flex items-center gap-2 mb-3">
                <IoTime className="text-xl" style={{ color: '#ff8c00' }} />
                <h3 className="font-bold text-gray-800">Working Hours</h3>
              </div>
              {[
                { day: "Monday – Saturday", time: "10:00 AM – 7:00 PM", open: true },
                { day: "Sunday", time: "Closed", open: false },
              ].map((item) => (
                <div key={item.day} className="flex justify-between items-center text-sm py-1.5 border-b border-gray-50 last:border-0">
                  <span className="text-gray-600 font-medium">{item.day}</span>
                  <span className={`font-bold text-xs px-2.5 py-0.5 rounded-full ${item.open
                    ? "text-green-700 bg-green-50"
                    : "text-red-500 bg-red-50"}`}>
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
  { icon: <FaFacebook />,  label: "Facebook",  color: "bg-blue-600",  href: "#" },
  { icon: <FaWhatsapp />,  label: "WhatsApp",  color: "bg-green-500", href: "https://wa.me/919198483820" },
  { icon: <FaYoutube />,   label: "YouTube",   color: "bg-red-600",   href: "#" },
  { icon: <FaLinkedin />,  label: "LinkedIn",  color: "bg-blue-700",  href: "#" },
  { icon: <FaXTwitter />,  label: "Twitter",   color: "bg-sky-500",   href: "#" },
];

const SocialCTA = () => (
  <div className="bg-white py-12 px-4 border-t border-gray-100">
    <div className="max-w-4xl mx-auto text-center">
      <h2 className="text-2xl md:text-4xl font-extrabold text-gray-900 mb-2">
        Connect on <span className="italic" style={{ color: '#ff8c00' }}>&nbsp;Social&nbsp;</span> Media
      </h2>
      <div className="mx-auto mt-3 mb-6 h-[2px] w-42 rounded-full"
        style={{ background: 'linear-gradient(to right, #ff8c00, transparent)' }} />
      <p className="text-gray-500 text-sm mb-8">Follow us for training updates, placement results & tech content.</p>

      <div className="flex flex-wrap justify-center gap-3 mb-12">
        {socialLinks.map((s) => (
          <a key={s.label} href={s.href} target="_blank" rel="noreferrer"
            className={`${s.color} text-white flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold hover:-translate-y-1 hover:shadow-lg transition-all duration-200`}>
            <span className="text-base">{s.icon}</span>{s.label}
          </a>
        ))}
      </div>

      {/* CTA Banner — Navy + Green gradient */}
      <div className="rounded-3xl p-8 md:p-10 text-white relative overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #0d1b2a 0%, #1a3a1a 60%, #0d1b2a 100%)' }}>

        {/* Decorative orbs */}
        <div className="absolute top-0 right-0 w-40 h-40 rounded-full -translate-y-1/2 translate-x-1/2 pointer-events-none"
          style={{ background: 'rgba(255,140,0,0.08)' }} />
        <div className="absolute bottom-0 left-0 w-28 h-28 rounded-full translate-y-1/2 -translate-x-1/2 pointer-events-none"
          style={{ background: 'rgba(46,125,50,0.15)' }} />

        {/* Top accent bar */}
        <div className="absolute top-0 left-0 right-0 h-1 rounded-t-3xl"
          style={{ background: 'linear-gradient(to right, #ff8c00, #2e7d32)' }} />

        <div className="relative">
          <h3 className="text-xl md:text-2xl font-extrabold mb-2">Ready to Start Your Training?</h3>
          <p className="text-sm mb-6 max-w-md mx-auto" style={{ color: '#9ca3af' }}>
            Join 1000+ students who have transformed their careers with DigiCoders Technologies.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            {/* Orange — Call */}
            <a href="tel:+919198483820"
              className="flex items-center justify-center gap-2 font-bold px-6 py-3 rounded-xl transition-all duration-200 text-sm shadow-lg"
              style={{ background: '#ff8c00', color: '#fff' }}
              onMouseEnter={e => e.currentTarget.style.background = '#e07800'}
              onMouseLeave={e => e.currentTarget.style.background = '#ff8c00'}
            >
              <IoCall /> Call Now
            </a>
            {/* Green — WhatsApp */}
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
