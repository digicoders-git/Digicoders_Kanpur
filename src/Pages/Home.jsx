import React, { useEffect, useRef, useState } from 'react'
import CardSection from '../Components/CardSection';
import { slides, features, branches } from '../Components/CardSection'
import { IoCall } from "react-icons/io5";
import { FaWhatsapp } from "react-icons/fa";
import { FaCircleArrowRight } from "react-icons/fa6";
import { ChevronRight, Star, Users, Clock, TrendingUp, Globe, GraduationCap, Building2, Award, BookOpen, Zap } from 'lucide-react';

import about from '../../public/Images/hero1.jpg'
import hero2 from '../../public/Images/hero2.jpg'
import hero3 from '../../public/Images/hero3.jpg'
import ExpertSection from '../Components/ExpertSection';
import ServicesSection from '../Components/ServicesSection';
import BranchCard from '../Components/BranchCard';

// ── Animated Counter ──────────────────────────────────────────────
function useCounter(target, duration = 2000, start = false) {
  const [count, setCount] = useState(0)
  useEffect(() => {
    if (!start) return
    let startTime = null
    const step = (timestamp) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / duration, 1)
      setCount(Math.floor(progress * target))
      if (progress < 1) requestAnimationFrame(step)
    }
    requestAnimationFrame(step)
  }, [start, target, duration])
  return count
}

function StatCard({ stat, index, inView }) {
  const count = useCounter(stat.value, 1800, inView)
  const Icon = stat.icon
  return (
    <div
      className="relative bg-white rounded-2xl p-6 shadow-sm border border-gray-100 overflow-hidden group"
      style={{ animation: inView ? `fadeUp 0.5s ease forwards ${index * 0.1}s` : 'none', opacity: 0 }}
    >
      <div className="absolute -right-4 -bottom-4 w-24 h-24 rounded-full opacity-10 transition-all duration-500 group-hover:opacity-20 group-hover:scale-110"
        style={{ backgroundColor: stat.color }} />
      <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
        style={{ backgroundColor: stat.color + '18' }}>
        <Icon size={22} style={{ color: stat.color }} />
      </div>
      <div className="text-4xl font-black text-gray-900 tracking-tight">
        {count}{stat.suffix}
      </div>
      <div className="text-sm text-gray-500 font-medium mt-1">{stat.label}</div>
      <div className="absolute bottom-0 left-0 h-1 w-0 group-hover:w-full transition-all duration-500 rounded-b-2xl"
        style={{ backgroundColor: stat.color }} />
    </div>
  )
}

// ── Stats: Orange = primary CTA, Green = success/placement, Navy = trust
const statsData = [
  { value: 1000, suffix: '+', label: 'Students Trained',  icon: Users,      color: '#ff8c00' },
  { value: 7,    suffix: '+', label: 'Years Experience',  icon: Clock,      color: '#0d1b2a' },
  { value: 500,  suffix: '+', label: 'Placements Done',   icon: TrendingUp, color: '#2e7d32' },
  { value: 50,   suffix: '+', label: 'Hiring Partners',   icon: Building2,  color: '#e65100' },
]

// ── Companies Marquee Data ────────────────────────────────────────
const companies = [
  { name: 'TCS',           color: '#ff8c00' },
  { name: 'Infosys',       color: '#2e7d32' },
  { name: 'Wipro',         color: '#e65100' },
  { name: 'Accenture',     color: '#0d1b2a' },
  { name: 'HCL',           color: '#ff8c00' },
  { name: 'Cognizant',     color: '#2e7d32' },
  { name: 'Tech Mahindra', color: '#e65100' },
  { name: 'Capgemini',     color: '#0d1b2a' },
  { name: 'Mphasis',       color: '#ff8c00' },
  { name: 'Persistent',    color: '#2e7d32' },
]

const Home = () => {
  const [current, setCurrent] = useState(0);
  const statsRef    = useRef(null)
  const whyRef      = useRef(null)
  const aboutRef    = useRef(null)
  const [statsInView,  setStatsInView]  = useState(false)
  const [whyInView,    setWhyInView]    = useState(false)
  const [aboutInView,  setAboutInView]  = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const pairs = [
      { ref: statsRef,  setter: setStatsInView },
      { ref: whyRef,    setter: setWhyInView },
      { ref: aboutRef,  setter: setAboutInView },
    ]
    const observers = pairs.map(({ ref, setter }) => {
      const o = new IntersectionObserver(([e]) => { if (e.isIntersecting) setter(true) }, { threshold: 0.15 })
      if (ref.current) o.observe(ref.current)
      return o
    })
    return () => observers.forEach(o => o.disconnect())
  }, [])

  return (
    <>
      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(28px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes slideRight {
          from { opacity: 0; transform: translateX(-30px); }
          to   { opacity: 1; transform: translateX(0); }
        }
        @keyframes slideLeft {
          from { opacity: 0; transform: translateX(30px); }
          to   { opacity: 1; transform: translateX(0); }
        }
        @keyframes marquee {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes animate-slide {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-slide {
          animation: animate-slide 20s linear infinite;
        }
        .marquee-track {
          display: flex;
          width: max-content;
          animation: marquee 28s linear infinite;
        }
        .marquee-track:hover { animation-play-state: paused; }

        /* Shimmer using brand orange */
        @keyframes shimmer {
          0%   { background-position: -200% center; }
          100% { background-position:  200% center; }
        }
        .shimmer-text {
          background: linear-gradient(90deg, #e65100, #ff8c00, #ffb74d, #ff8c00, #e65100);
          background-size: 200% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: shimmer 3s linear infinite;
        }

        /* Why choose us card hover bar */
        .why-card:hover .why-bar {
          width: 80px;
        }
        .why-bar {
          transition: width 0.3s ease;
        }
      `}</style>

      {/* HERO SECTION */}
      <div className="relative w-full h-[60vh] md:h-[80vh] lg:h-[90vh] overflow-hidden">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute w-full h-full transition-all duration-700 ${
              index === current ? "opacity-100" : "opacity-0"
            }`}
          >
            <video
              src={slide.video}
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
            />

            {/* Dark overlay with subtle navy tint */}
            <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4 md:px-10 text-white"
              style={{ background: 'linear-gradient(135deg, rgba(13,27,42,0.82) 0%, rgba(13,27,42,0.65) 100%)' }}>

              {/* Badge */}
              <div className="inline-flex items-center gap-2 mb-4 px-4 py-1.5 rounded-full border text-xs font-bold uppercase tracking-widest"
                style={{ background: 'rgba(255,140,0,0.15)', borderColor: 'rgba(255,140,0,0.4)', color: '#ffb74d' }}>
                <span className="w-1.5 h-1.5 rounded-full bg-orange-400 animate-pulse" />
                UP's #1 IT Training Company
              </div>

              <h1 className="text-xl sm:text-2xl md:text-4xl lg:text-5xl font-bold mb-3 md:mb-4 leading-tight">
                {slide.title}
              </h1>

              <p className="text-sm md:text-lg lg:text-xl mb-6 max-w-xl text-gray-200">
                {slide.desc}
              </p>

              <div className='flex flex-col sm:flex-row gap-3 md:gap-4'>
                <button
                  className="px-6 py-3 font-bold rounded-xl text-white transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
                  style={{ background: '#ff8c00', boxShadow: '0 0 0 0 transparent' }}
                  onMouseEnter={e => e.target.style.background = '#e65100'}
                  onMouseLeave={e => e.target.style.background = '#ff8c00'}
                >
                  Explore Services
                </button>
                <button
                  className="px-6 py-3 font-bold rounded-xl text-white transition-all duration-300 hover:-translate-y-0.5 border-2"
                  style={{ background: 'transparent', borderColor: '#4caf50', color: '#81c784' }}
                  onMouseEnter={e => { e.target.style.background = '#4caf50'; e.target.style.color = 'white'; }}
                  onMouseLeave={e => { e.target.style.background = 'transparent'; e.target.style.color = '#81c784'; }}
                >
                  Join Training
                </button>
              </div>

              {/* Slide dots */}
              <div className="absolute bottom-6 flex gap-2">
                {slides.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrent(i)}
                    className="h-1.5 rounded-full transition-all duration-300"
                    style={{
                      width: i === current ? '24px' : '8px',
                      background: i === current ? '#ff8c00' : 'rgba(255,255,255,0.4)'
                    }}
                  />
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* STATS SECTION */}
      <section className="py-14 px-6 bg-white" ref={statsRef}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <span className="inline-block text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4"
              style={{ background: '#fff3e0', color: '#e65100' }}>
              Our Track Record
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-3">
              Numbers That{' '}
              <span className="relative" style={{ color: '#ff8c00' }}>
                Speak
                <svg className="absolute -bottom-1 left-0 w-full" viewBox="0 0 100 8" preserveAspectRatio="none">
                  <path d="M0,6 Q50,0 100,6" stroke="#ff8c00" strokeWidth="2.5" fill="none" strokeLinecap="round" />
                </svg>
              </span>
              {' '}for Themselves
            </h2>
            <p className="text-gray-500 max-w-md mx-auto">7+ years of real impact, real students, real results</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {statsData.map((s, i) => <StatCard key={i} stat={s} index={i} inView={statsInView} />)}
          </div>
        </div>
      </section>

      {/* RECENT PLACEMENTS — marquee slider */}
      <section className="py-14 overflow-hidden" style={{ background: '#f9f5f0' }}>
        <div className="max-w-6xl mx-auto px-6 mb-10 text-center">
          <span className="inline-block text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4"
            style={{ background: '#e8f5e9', color: '#2e7d32' }}>
            Placements
          </span>
          <h2 className="text-3xl md:text-4xl font-black text-gray-900">
            Recent{' '}
            <span style={{ color: '#2e7d32' }}>Placement</span>
            {' '}Highlights
          </h2>
          <div className="mx-auto mt-3 h-[2px] w-40 rounded-full"
            style={{ background: 'linear-gradient(to right, #2e7d32, transparent)' }} />
        </div>

        <div className="relative overflow-hidden">
          <div className="absolute left-0 top-0 bottom-0 w-20 z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-20 z-10"/>
          <div className="flex w-max animate-slide gap-6 px-4">
            {[about, hero2, hero3, about, hero2, hero3, about, hero2].map((src, i) => (
              <div key={i} className="flex-shrink-0 rounded-2xl overflow-hidden shadow-md border border-orange-100 bg-white">
                <img src={src} className="h-36 w-56 object-cover" alt={`placement ${i}`} />
              </div>
            ))}
          </div>
        </div>

        {/* Companies marquee */}
        <div className="relative overflow-hidden mt-10 ">
          <div className="absolute left-0 top-0 bottom-0 w-16 z-10"/>
          <div className="absolute right-0 top-0 bottom-0 w-16 z-10"/>
          <div className="marquee-track gap-4 py-3 ">
            {[...companies, ...companies].map((c, i) => (
              <div key={i}
                className="flex-shrink-0 flex items-center gap-2 bg-white rounded-xl border px-5 py-3 shadow-sm font-bold text-sm mx-2 transition-all duration-300 hover:shadow-md hover:-translate-y-0.5"
                style={{ borderColor: c.color + '30', color: c.color }}>
                <span className="w-2 h-2 rounded-full" style={{ backgroundColor: c.color }} />
                {c.name}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EXPERT SECTION */}
      
      <div className='px-4 md:px-10 bg-white'>
        <ExpertSection />
      </div>

      {/* TRAINING CARDS SECTION */}
      <div className='px-4 md:px-10 pt-10 bg-white'>
        <CardSection />
      </div>

      {/* ══════════════════════════════════════════════════════
          WHY CHOOSE US
          ══════════════════════════════════════════════════════ */}
      <section className="py-14" ref={whyRef} style={{ background: '#f9f5f0' }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <span className="inline-block text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4"
              style={{ background: '#fff3e0', color: '#e65100' }}>
              Why DigiCoders
            </span>
            <h2 className="text-3xl md:text-5xl font-black text-gray-900 tracking-tight mb-4">
              Why Choose{' '}
              <span style={{ color: '#ff8c00', fontStyle: 'italic' }}>Us</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Engineering tomorrow, today. We architect digital advantage for ambitious students and businesses.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="why-card group bg-white border border-gray-100 shadow-sm p-8 transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl cursor-pointer"
                style={whyInView ? { animation: `fadeUp 0.5s ease forwards ${index * 0.1}s`, opacity: 0, borderRadius: '24px 4px 24px 4px' } : { opacity: 0, borderRadius: '24px 4px 24px 4px' }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(255,140,0,0.4)'; e.currentTarget.style.borderRadius = '4px 24px 4px 24px'; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = '#f3f4f6'; e.currentTarget.style.borderRadius = '24px 4px 24px 4px'; }}
              >
                <div className="text-5xl mb-6 transition-transform group-hover:scale-110 duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-4 text-gray-900">{feature.title}</h3>
                <p className="text-gray-400 text-justify leading-relaxed">{feature.desc}</p>
                <div className="why-bar mt-8 h-1 w-12 rounded-full"
                  style={{ background: 'linear-gradient(to right, #ff8c00, #2e7d32)' }} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          ABOUT SECTION
          ══════════════════════════════════════════════════════ */}
      <section className="py-16 bg-white" ref={aboutRef}>
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row gap-12 items-center">

          {/* Image */}
          <div
            className="w-full md:w-1/2"
            style={aboutInView ? { animation: 'slideRight 0.7s ease forwards', opacity: 0 } : { opacity: 0 }}
          >
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <img src={about} alt="About DigiCoders" className="w-full h-auto md:h-[420px] object-cover" />
              {/* Floating badge — navy bg with orange accent */}
              <div className="absolute bottom-5 left-5 bg-white rounded-2xl shadow-lg px-4 py-3 flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center"
                  style={{ background: '#fff3e0' }}>
                  <Zap size={20} style={{ color: '#ff8c00' }} />
                </div>
                <div>
                  <div className="text-xs text-gray-500 font-medium">Trusted Since</div>
                  <div className="text-sm font-black text-gray-900">2017 — 7+ Years</div>
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div
            className="w-full md:w-1/2"
            style={aboutInView ? { animation: 'slideLeft 0.7s ease forwards 0.1s', opacity: 0 } : { opacity: 0 }}
          >
            <span className="inline-block text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4"
              style={{ background: '#fff3e0', color: '#e65100' }}>
              About Us
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-3">
              About DigiCoders{' '}
              <span style={{ color: '#2e7d32' }}>Technologies</span>
            </h2>
            <div className="mt-3 mb-5 h-[2px] w-32 rounded-full"
              style={{ background: 'linear-gradient(to right, #ff8c00, transparent)' }} />

            <p className="text-gray-500 leading-relaxed mb-6 text-justify">
              DigiCoders Technologies is Uttar Pradesh's leading software training company, empowering
              students and professionals with industry-ready skills. With branches in Lucknow and Kanpur,
              we have trained 1000+ students and placed 500+ in top IT companies over 7+ years of excellence.
            </p>

            <div className="grid grid-cols-2 gap-4 mb-8">
              {[
                'IT Solutions',
                'Global Solutions',
                'Lifetime Support',
                '8 Years Experience',
                'Software Solutions',
                'Digital Services',
              ].map((item) => (
                <p key={item} className="flex items-center gap-2 font-semibold text-gray-700">
                  <FaCircleArrowRight style={{ color: '#ff8c00' }} className="shrink-0" />
                  {item}
                </p>
              ))}
            </div>

            <div className="flex flex-wrap gap-3 mb-8">
              {['ISO Certified', 'MOU Partner', '7+ Years', 'Govt. Approved'].map((badge) => (
                <span key={badge} className="text-xs font-bold px-3 py-1.5 rounded-full border"
                  style={{ background: '#e8f5e9', color: '#2e7d32', borderColor: '#c8e6c9' }}>
                  {badge}
                </span>
              ))}
            </div>

            <div className="flex flex-wrap gap-3">
              <a href="/services"
                className="group flex items-center gap-2 px-6 py-3 font-bold rounded-xl text-white transition-all duration-300 hover:-translate-y-0.5"
                style={{ background: '#ff8c00' }}
                onMouseEnter={e => e.currentTarget.style.background = '#e65100'}
                onMouseLeave={e => e.currentTarget.style.background = '#ff8c00'}
              >
                Our Services
                <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="/about"
                className="px-6 py-3 bg-gray-100 hover:bg-gray-200 text-gray-800 font-bold rounded-xl transition-all duration-300 hover:-translate-y-0.5">
                Know More
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          BRANCHES SECTION
          ══════════════════════════════════════════════════════ */}
      <section className="py-14" style={{ background: '#f9f5f0' }}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <span className="inline-block text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4"
              style={{ background: '#e8f5e9', color: '#2e7d32' }}>
              Our Locations
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900">
              Our{' '}
              <span style={{ color: '#ff8c00' }}>Branches</span>
            </h2>
            <div className="mx-auto mt-3 h-[2px] w-40 rounded-full"
              style={{ background: 'linear-gradient(to right, #ff8c00, transparent)' }} />
            <p className="text-gray-500 mt-3">Serving students across Uttar Pradesh from two prime locations</p>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            {branches.map((branch) => (
              <BranchCard key={branch.city} {...branch} />
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          SERVICES SECTION
          ══════════════════════════════════════════════════════ */}
      <ServicesSection />

      {/* ══════════════════════════════════════════════════════
          FINAL CTA SECTION
          ══════════════════════════════════════════════════════ */}
      <section className="relative overflow-hidden py-14 px-6"
        style={{ background: 'linear-gradient(135deg, #0d1b2a 0%, #1a2f1a 50%, #0d1b2a 100%)' }}>

        {/* Subtle dot grid */}
        <div className="absolute inset-0 opacity-[0.04]"
          style={{ backgroundImage: 'radial-gradient(circle, #ff8c00 1px, transparent 1px)', backgroundSize: '32px 32px' }} />

        {/* Glow orbs using brand colors */}
        <div className="absolute top-0 left-1/4 w-64 h-64 rounded-full opacity-15 pointer-events-none"
          style={{ background: 'radial-gradient(circle, #ff8c00, transparent)', filter: 'blur(60px)' }} />
        <div className="absolute bottom-0 right-1/4 w-64 h-64 rounded-full opacity-15 pointer-events-none"
          style={{ background: 'radial-gradient(circle, #4caf50, transparent)', filter: 'blur(60px)' }} />

        <div className="relative max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 mb-6 border"
            style={{ background: 'rgba(255,140,0,0.1)', borderColor: 'rgba(255,140,0,0.25)' }}>
            <span className="w-2 h-2 rounded-full animate-pulse" style={{ background: '#ff8c00' }} />
            <span className="text-sm font-medium" style={{ color: '#ffb74d' }}>New Batch Starting Soon — Limited Seats</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-black text-white mb-5 leading-tight">
            Ready to Start Your{' '}
            <span className="shimmer-text">Success Story?</span>
          </h2>

          <p className="text-gray-300 text-lg mb-10 max-w-xl mx-auto">
            Join 1000+ students who have transformed their careers with DigiCoders Technologies.
            One step is all it takes — we will guide you the rest of the way.
          </p>

          <div className="flex flex-wrap gap-4 justify-center mb-8">
            <a href="/contact#registration"
              className="group relative px-8 py-4 font-bold rounded-xl text-white transition-all duration-300 hover:-translate-y-0.5 flex items-center gap-2"
              style={{ background: '#ff8c00' }}
              onMouseEnter={e => e.currentTarget.style.background = '#e65100'}
              onMouseLeave={e => e.currentTarget.style.background = '#ff8c00'}
            >
              Register Now
              <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="/contact"
              className="px-8 py-4 font-bold rounded-xl border text-white transition-all duration-300 hover:-translate-y-0.5"
              style={{ background: 'rgba(76,175,80,0.12)', borderColor: 'rgba(76,175,80,0.35)', color: '#81c784' }}
              onMouseEnter={e => { e.currentTarget.style.background = '#4caf50'; e.currentTarget.style.color = 'white'; }}
              onMouseLeave={e => { e.currentTarget.style.background = 'rgba(76,175,80,0.12)'; e.currentTarget.style.color = '#81c784'; }}
            >
              Contact Us
            </a>
          </div>

          <div className="flex flex-wrap gap-6 justify-center">
            <a href="tel:+919198483820"
              className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors text-sm">
              <IoCall style={{ color: '#ff8c00' }} />
              +91 9198483820
            </a>
            <a href="https://wa.me/919198483820" target="_blank" rel="noreferrer"
              className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors text-sm">
              <FaWhatsapp style={{ color: '#4caf50' }} />
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
