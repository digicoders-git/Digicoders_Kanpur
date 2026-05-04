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

const statsData = [
  { value: 1000, suffix: '+', label: 'Students Trained',  icon: Users,         color: '#3b82f6' },
  { value: 7,    suffix: '+', label: 'Years Experience',  icon: Clock,         color: '#f59e0b' },
  { value: 500,  suffix: '+', label: 'Placements Done',   icon: TrendingUp,    color: '#10b981' },
  { value: 50,   suffix: '+', label: 'Hiring Partners',   icon: Building2,     color: '#8b5cf6' },
]

// ── Companies Marquee Data ────────────────────────────────────────
const companies = [
  { name: 'TCS',           color: '#3b82f6' },
  { name: 'Infosys',       color: '#8b5cf6' },
  { name: 'Wipro',         color: '#10b981' },
  { name: 'Accenture',     color: '#f59e0b' },
  { name: 'HCL',           color: '#ef4444' },
  { name: 'Cognizant',     color: '#06b6d4' },
  { name: 'Tech Mahindra', color: '#6366f1' },
  { name: 'Capgemini',     color: '#ec4899' },
  { name: 'Mphasis',       color: '#14b8a6' },
  { name: 'Persistent',    color: '#f97316' },
]

const Home = () => {
  const [current, setCurrent] = useState(0);
  const statsRef    = useRef(null)
  const whyRef      = useRef(null)
  const aboutRef    = useRef(null)
  const [statsInView,  setStatsInView]  = useState(false)
  const [whyInView,    setWhyInView]    = useState(false)
  const [aboutInView,  setAboutInView]  = useState(false)

  // Hero auto-slide
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // Scroll reveal observers
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
        @keyframes floatY {
          0%, 100% { transform: translateY(0px); }
          50%       { transform: translateY(-12px); }
        }
        @keyframes pulse-ring {
          0%   { transform: scale(1);   opacity: 0.6; }
          100% { transform: scale(1.6); opacity: 0; }
        }
        @keyframes shimmer {
          0%   { background-position: -200% center; }
          100% { background-position:  200% center; }
        }
        @keyframes marquee {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes slide-bg {
          0%   { transform: translateX(100%); opacity: 0; }
          10%  { transform: translateX(0); opacity: 1; }
          90%  { transform: translateX(0); opacity: 1; }
          100% { transform: translateX(-100%); opacity: 0; }
        }
        .shimmer-text {
          background: linear-gradient(90deg, #1e40af, #3b82f6, #60a5fa, #3b82f6, #1e40af);
          background-size: 200% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: shimmer 3s linear infinite;
        }
        .marquee-track {
          display: flex;
          width: max-content;
          animation: marquee 28s linear infinite;
        }
        .marquee-track:hover { animation-play-state: paused; }
        @keyframes animate-slide {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-slide {
          animation: animate-slide 20s linear infinite;
        }
      `}</style>

      {/* ══════════════════════════════════════════════════════
          HERO SECTION — Dark gradient + animated video slider
          ══════════════════════════════════════════════════════ */}
      <section className="relative overflow-hidden bg-gradient-to-br from-gray-950 via-blue-950 to-gray-900">

        {/* Grid texture */}
        <div className="absolute inset-0 opacity-[0.04]"
          style={{ backgroundImage: 'linear-gradient(#60a5fa 1px,transparent 1px),linear-gradient(90deg,#60a5fa 1px,transparent 1px)', backgroundSize: '48px 48px' }} />

        {/* Glow orbs */}
        <div className="absolute top-10 left-10 w-72 h-72 rounded-full blur-3xl opacity-20"
          style={{ background: 'radial-gradient(circle, #3b82f6, transparent)' }} />
        <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full blur-3xl opacity-15"
          style={{ background: 'radial-gradient(circle, #60a5fa, transparent)' }} />

        <div className="relative max-w-6xl mx-auto px-6 pt-16 pb-0 flex flex-col lg:flex-row items-center gap-12">

          {/* LEFT: Text content */}
          <div className="flex-1 text-center lg:text-left z-10" style={{ animation: 'slideRight 0.7s ease forwards' }}>

            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-400/20 rounded-full px-4 py-1.5 mb-6">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              <span className="text-blue-300 text-sm font-medium">Admissions Open — Batch 2025–26</span>
            </div>

            {/* Slide content with fade */}
            <div className="min-h-[180px] mb-6">
              {slides.map((slide, index) => (
                <div
                  key={index}
                  className={`transition-all duration-700 ${index === current ? 'opacity-100' : 'opacity-0 absolute'}`}
                  style={{ display: index === current ? 'block' : 'none' }}
                >
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight mb-4">
                    {slide.title.split(' ').slice(0, 3).join(' ')}{' '}
                    <span className="shimmer-text">
                      {slide.title.split(' ').slice(3).join(' ')}
                    </span>
                  </h1>
                  <p className="text-gray-300 text-lg leading-relaxed max-w-xl">
                    {slide.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* Slide dots */}
            <div className="flex gap-2 justify-center lg:justify-start mb-8">
              {slides.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`rounded-full transition-all duration-300 ${
                    i === current ? 'w-8 h-2 bg-blue-500' : 'w-2 h-2 bg-white/30 hover:bg-white/60'
                  }`}
                />
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              <a href="/services"
                className="group flex items-center gap-2 px-7 py-3.5 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/30 hover:-translate-y-0.5">
                Explore Services
                <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="/training"
                className="flex items-center gap-2 px-7 py-3.5 bg-white/10 hover:bg-white/20 text-white font-bold rounded-xl border border-white/20 transition-all duration-300 hover:-translate-y-0.5 backdrop-blur">
                Join Training
              </a>
            </div>

            {/* Trust badges */}
            <div className="flex flex-wrap gap-3 mt-8 justify-center lg:justify-start">
              {[
                { icon: Award, label: 'ISO Certified',    color: '#fbbf24' },
                { icon: BookOpen, label: '20+ Courses',   color: '#34d399' },
                { icon: Globe, label: '2 City Branches',  color: '#a78bfa' },
              ].map(({ icon: Icon, label, color }, i) => (
                <div key={i} className="flex items-center gap-2 bg-white/10 backdrop-blur rounded-xl px-4 py-2 border border-white/10">
                  <Icon size={14} style={{ color }} />
                  <span className="text-white text-sm font-medium">{label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT: Floating visual circle */}
          <div className="flex-shrink-0 relative w-72 h-72 hidden lg:block" style={{ animation: 'slideLeft 0.8s ease forwards' }}>
            <div className="absolute inset-0 rounded-full border-2 border-blue-400/30"
              style={{ animation: 'pulse-ring 2s ease-out infinite' }} />
            <div className="absolute inset-4 rounded-full bg-gradient-to-br from-blue-600 to-blue-800 flex items-center justify-center shadow-2xl"
              style={{ animation: 'floatY 4s ease-in-out infinite' }}>
              <div className="text-center">
                <GraduationCap size={40} className="text-white mx-auto mb-2" />
                <div className="text-2xl font-black text-white">1000+</div>
                <div className="text-blue-200 text-xs font-medium">Students</div>
                <div className="text-yellow-300 text-xs font-bold">Trained</div>
              </div>
            </div>
            {[
              { label: '95% Placement',  top: '0%',  left: '58%', color: '#fbbf24' },
              { label: '7+ Years',       top: '74%', left: '-5%', color: '#34d399' },
              { label: '50+ Companies',  top: '74%', left: '58%', color: '#a78bfa' },
            ].map((b, i) => (
              <div key={i}
                className="absolute bg-white rounded-xl shadow-lg px-3 py-2 flex items-center gap-2 text-xs font-bold"
                style={{ top: b.top, left: b.left, animation: `floatY ${3.5 + i * 0.5}s ease-in-out infinite ${i * 0.3}s` }}>
                <span className="w-2 h-2 rounded-full flex-shrink-0" style={{ backgroundColor: b.color }} />
                {b.label}
              </div>
            ))}
          </div>
        </div>

        {/* Side floating buttons */}
        <button className='hidden md:block fixed text-white px-2 py-1 bg-red-500 rotate-90 left-[-60px] top-1/2 -translate-y-1/2 z-30 text-xs font-semibold'>
          Assessment Portal
        </button>
        <button className='hidden md:block fixed text-white px-2 py-1 bg-green-600 rotate-90 right-[-70px] top-1/2 -translate-y-1/2 z-30 text-xs font-semibold'>
          Register For Training
        </button>

        {/* Call & WhatsApp FABs */}
        <div className="fixed bottom-5 left-5 flex flex-col gap-3 z-50">
          <a href="tel:+919198483820"
            className="bg-blue-600 hover:bg-blue-700 p-3 rounded-full text-white text-xl shadow-lg hover:-translate-y-0.5 transition-all">
            <IoCall />
          </a>
          <a href="https://wa.me/919198483820" target="_blank" rel="noreferrer"
            className="bg-green-600 hover:bg-green-700 p-3 rounded-full text-white text-xl shadow-lg hover:-translate-y-0.5 transition-all">
            <FaWhatsapp />
          </a>
        </div>

        {/* Wave bottom */}
        <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full block mt-8">
          <path d="M0,40 C360,0 1080,80 1440,20 L1440,60 L0,60 Z" fill="white" />
        </svg>
      </section>

      {/* ══════════════════════════════════════════════════════
          STATS SECTION
          ══════════════════════════════════════════════════════ */}
      <section className="py-16 px-6 bg-white" ref={statsRef}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <span className="inline-block bg-blue-100 text-blue-700 text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4">Our Track Record</span>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-3">
              Numbers That{' '}
              <span className="text-blue-600 relative">
                Speak
                <svg className="absolute -bottom-1 left-0 w-full" viewBox="0 0 100 8" preserveAspectRatio="none">
                  <path d="M0,6 Q50,0 100,6" stroke="#3b82f6" strokeWidth="2.5" fill="none" strokeLinecap="round" />
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

      {/* ══════════════════════════════════════════════════════
          RECENT PLACEMENTS — marquee slider
          ══════════════════════════════════════════════════════ */}
      <section className="py-14 bg-gray-50 overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 mb-10 text-center">
          <span className="inline-block bg-blue-100 text-blue-700 text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4">Placements</span>
          <h2 className="text-3xl md:text-4xl font-black text-gray-900">
            Recent{' '}
            <span className="text-blue-600">Placement</span>
            {' '}Highlights
          </h2>
          <div className="mx-auto mt-3 h-[2px] w-40 bg-gradient-to-r from-blue-500 to-transparent rounded-full" />
        </div>

        <div className="relative overflow-hidden">
          <div className="absolute left-0 top-0 bottom-0 w-20 z-10"
            style={{ background: 'linear-gradient(to right, #f8fafc, transparent)' }} />
          <div className="absolute right-0 top-0 bottom-0 w-20 z-10"
            style={{ background: 'linear-gradient(to left, #f8fafc, transparent)' }} />

          <div className="flex w-max animate-slide gap-6 px-4">
            {[about, hero2, hero3, about, hero2, hero3, about, hero2].map((src, i) => (
              <div key={i} className="flex-shrink-0 rounded-2xl overflow-hidden shadow-md border border-gray-100 bg-white">
                <img src={src} className="h-36 w-56 object-cover" alt={`placement ${i}`} />
              </div>
            ))}
          </div>
        </div>

        {/* Companies marquee */}
        <div className="relative overflow-hidden mt-10">
          <div className="absolute left-0 top-0 bottom-0 w-16 z-10"
            style={{ background: 'linear-gradient(to right, #f8fafc, transparent)' }} />
          <div className="absolute right-0 top-0 bottom-0 w-16 z-10"
            style={{ background: 'linear-gradient(to left, #f8fafc, transparent)' }} />

          <div className="marquee-track gap-4 py-3">
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

      {/* ══════════════════════════════════════════════════════
          EXPERT SECTION
          ══════════════════════════════════════════════════════ */}
      <div className='px-4 md:px-10 bg-white'>
        <ExpertSection />
      </div>

      {/* ══════════════════════════════════════════════════════
          TRAINING CARDS SECTION
          ══════════════════════════════════════════════════════ */}
      <div className='px-4 md:px-10 pt-10 bg-white'>
        <CardSection />
      </div>

      {/* ══════════════════════════════════════════════════════
          WHY CHOOSE US
          ══════════════════════════════════════════════════════ */}
      <section className="py-16 bg-gray-50" ref={whyRef}>
        <div className="max-w-7xl mx-auto px-6">

          {/* Header */}
          <div className="text-center mb-14">
            <span className="inline-block bg-blue-100 text-blue-700 text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4">Why DigiCoders</span>
            <h2 className="text-3xl md:text-5xl font-black text-gray-900 tracking-tight mb-4">
              Why Choose{' '}
              <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500 bg-clip-text text-transparent italic">Us</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Engineering tomorrow, today. We architect digital advantage for ambitious students and businesses.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group bg-white border border-gray-100 shadow-sm hover:border-blue-500/50 rounded-tl-3xl rounded-br-3xl rounded-tr-none rounded-bl-none hover:rounded-tl-none hover:rounded-br-none hover:rounded-tr-3xl hover:rounded-bl-3xl p-8 transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl hover:shadow-blue-500/10"
                style={whyInView ? { animation: `fadeUp 0.5s ease forwards ${index * 0.1}s`, opacity: 0 } : { opacity: 0 }}
              >
                <div className="text-5xl mb-6 transition-transform group-hover:scale-110 duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-4 text-black">{feature.title}</h3>
                <p className="text-gray-400 text-justify leading-relaxed">{feature.desc}</p>
                <div className="mt-8 h-1 w-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full group-hover:w-20 transition-all duration-300" />
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
              {/* Floating badge */}
              <div className="absolute bottom-5 left-5 bg-white rounded-2xl shadow-lg px-4 py-3 flex items-center gap-3">
                <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center">
                  <Zap size={20} className="text-blue-600" />
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
            <span className="inline-block bg-blue-100 text-blue-700 text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4">About Us</span>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-3">
              About DigiCoders{' '}
              <span className="text-blue-600">Technologies</span>
            </h2>
            <div className="mt-3 mb-5 h-[2px] w-32 bg-gradient-to-r from-blue-500 to-transparent rounded-full" />

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
                  <FaCircleArrowRight className="text-blue-500 shrink-0" />
                  {item}
                </p>
              ))}
            </div>

            <div className="flex flex-wrap gap-3 mb-8">
              {['ISO Certified', 'MOU Partner', '7+ Years', 'Govt. Approved'].map((badge) => (
                <span key={badge} className="bg-blue-50 text-blue-600 text-xs font-bold px-3 py-1.5 rounded-full border border-blue-100">
                  {badge}
                </span>
              ))}
            </div>

            <div className="flex flex-wrap gap-3">
              <a href="/services"
                className="group flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/30 hover:-translate-y-0.5">
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
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <span className="inline-block bg-blue-100 text-blue-700 text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4">Our Locations</span>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900">
              Our{' '}
              <span className="text-blue-600">Branches</span>
            </h2>
            <div className="mx-auto mt-3 h-[2px] w-40 bg-gradient-to-r from-blue-500 to-transparent rounded-full" />
            <p className="text-gray-500 mt-3">Serving students across Uttar Pradesh from two prime locations</p>
          </div>
          <div className="flex flex-wrap justify-center gap-8">
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
      <section className="relative overflow-hidden py-20 px-6"
        style={{ background: 'linear-gradient(135deg, #0f172a 0%, #1e3a8a 50%, #0f172a 100%)' }}>

        {/* Grid */}
        <div className="absolute inset-0 opacity-[0.05]"
          style={{ backgroundImage: 'linear-gradient(#60a5fa 1px,transparent 1px),linear-gradient(90deg,#60a5fa 1px,transparent 1px)', backgroundSize: '40px 40px' }} />

        {/* Orbs */}
        <div className="absolute top-0 left-1/4 w-64 h-64 rounded-full blur-3xl opacity-20"
          style={{ background: 'radial-gradient(circle, #3b82f6, transparent)' }} />
        <div className="absolute bottom-0 right-1/4 w-64 h-64 rounded-full blur-3xl opacity-15"
          style={{ background: 'radial-gradient(circle, #60a5fa, transparent)' }} />

        <div className="relative max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-yellow-400/10 border border-yellow-400/20 rounded-full px-4 py-1.5 mb-6">
            <span className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse" />
            <span className="text-yellow-300 text-sm font-medium">New Batch Starting Soon — Limited Seats</span>
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
            <a href="/registration"
              className="group relative px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/30 hover:-translate-y-0.5 flex items-center gap-2">
              Register Now
              <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="/contact"
              className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-bold rounded-xl border border-white/20 transition-all duration-300 hover:-translate-y-0.5 backdrop-blur">
              Contact Us
            </a>
          </div>

          {/* Contact strip */}
          <div className="flex flex-wrap gap-6 justify-center">
            <a href="tel:+919198483820"
              className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors text-sm">
              <IoCall className="text-blue-400" />
              +91 9198483820
            </a>
            <a href="https://wa.me/919198483820" target="_blank" rel="noreferrer"
              className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors text-sm">
              <FaWhatsapp className="text-green-400" />
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
