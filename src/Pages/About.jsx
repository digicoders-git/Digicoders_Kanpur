import React, { useEffect, useRef, useState } from 'react'
import { Award, Users, BookOpen, Target, Zap, Globe, ChevronRight, Star, TrendingUp, Shield, Clock, Heart } from 'lucide-react'
import { NavLink } from 'react-router-dom';

// ── Data ────────────────────────────────────────────────────────────────────
const stats = [
  { num: "1000", sup: "+", label: "Students Trained", desc: "Across both campuses", icon: "👥", bg: "bg-orange-500/20", text: "text-orange-300" },
  { num: "500", sup: "+", label: "Placements Done", desc: "In top MNCs & startups", icon: "💼", bg: "bg-amber-400/20", text: "text-amber-300" },
  { num: "7", sup: "+", label: "Years of Excellence", desc: "Trusted since 2017", icon: "🏆", bg: "bg-green-500/20", text: "text-green-300" },
  { num: "50", sup: "+", label: "Industry Partners", desc: "Pan-India hiring network", icon: "🏢", bg: "bg-orange-400/20", text: "text-orange-200" },
];

const images = [
  "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?w=400&q=85",
  "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&q=85",
  "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&q=85",
  "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=400&q=85",
  "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&q=85",
  "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=400&q=85",
];

const values = [
  {
    icon: Target,
    title: 'Mission-Driven',
    desc: 'Our commitment is to make every student truly industry-ready — not just theory, but real-world, job-ready skills.',
    accent: '#ff8c00',
    bg: '#fff7ed',
  },
  {
    icon: Shield,
    title: 'Trust & Integrity',
    desc: 'A proven track record of 7+ years. We deliver what we promise — backed by our placement guarantee.',
    accent: '#2e7d32',
    bg: '#f0fdf4',
  },
  {
    icon: Zap,
    title: 'Innovation First',
    desc: 'Latest technologies, an updated curriculum, and hands-on live projects — we always stay one step ahead.',
    accent: '#ff8c00',
    bg: '#fff7ed',
  },
  {
    icon: Heart,
    title: 'Student-Centric',
    desc: 'Every student is unique. We offer personalized attention, small batches, and dedicated one-on-one mentorship.',
    accent: '#2e7d32',
    bg: '#f0fdf4',
  },
]

const team = [
  { name: 'Rajesh Kumar', role: 'Founder & Director', exp: '15+ Years', tag: 'IIT Alumni', color: '#ff8c00' },
  { name: 'Priya Sharma', role: 'Head of Training', exp: '10+ Years', tag: 'Ex-TCS', color: '#2e7d32' },
  { name: 'Amit Singh', role: 'Placement Head', exp: '8+ Years', tag: 'Ex-Infosys', color: '#ff8c00' },
  { name: 'Neha Gupta', role: 'Technical Lead', exp: '6+ Years', tag: 'Ex-Wipro', color: '#2e7d32' },
]

const timeline = [
  { 
    year: '2017', 
    title: 'The Beginning', 
    desc: 'Started from a small classroom with just 12 students and one big dream — to transform careers.', 
    side: 'left' 
  },
  { 
    year: '2018', 
    title: 'First 100 Placements', 
    desc: 'Within the first year, we successfully placed 100+ students in top companies across the country.', 
    side: 'right' 
  },
  { year: '2020', 
    title: 'Online Expansion', 
    desc: 'Even during the pandemic, we kept moving — launched a full online training program to keep learning alive.', 
    side: 'left' 
  },
  { 
    year: '2022', 
    title: 'Second Branch', 
    desc: 'After Kanpur, we expanded to Lucknow — growing our family and reaching more aspiring students.', 
    side: 'right' 
  },
  { 
    year: '2024', 
    title: '1000+ Alumni', 
    desc: 'Over a thousand alumni now making their mark across the industry — and the number keeps growing.', 
    side: 'left' 
  },
]

// ── Animated Counter ────────────────────────────────────────────────────────
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

// ── Main Component ──────────────────────────────────────────────────────────
const About = () => {
  const statsRef = useRef(null)
  const [statsInView, setStatsInView] = useState(false)
  const valuesRef = useRef(null)
  const [valuesInView, setValuesInView] = useState(false)
  const timelineRef = useRef(null)
  const [timelineInView, setTimelineInView] = useState(false)

  useEffect(() => {
    const observers = [
      { ref: statsRef, setter: setStatsInView },
      { ref: valuesRef, setter: setValuesInView },
      { ref: timelineRef, setter: setTimelineInView },
    ]
    const obs = observers.map(({ ref, setter }) => {
      const o = new IntersectionObserver(([e]) => { if (e.isIntersecting) setter(true) }, { threshold: 0.15 })
      if (ref.current) o.observe(ref.current)
      return o
    })
    return () => obs.forEach(o => o.disconnect())
  }, [])

  return (
    <div className="bg-white min-h-screen">
      {/* ── SECTION 1: HERO ─────────────────────────────────────────────── */}
      <style>{`
        .text-shadow-strong { text-shadow: 0 2px 12px rgba(0,0,0,0.5); }
        .text-shadow-soft { text-shadow: 0 1px 6px rgba(0,0,0,0.5); }
        .backdrop-blur-card { backdrop-filter: blur(6px); -webkit-backdrop-filter: blur(6px); }
        @keyframes slideRight { from { opacity:0; transform:translateX(-30px); } to { opacity:1; transform:translateX(0); } }
        @keyframes slideLeft  { from { opacity:0; transform:translateX( 30px); } to { opacity:1; transform:translateX(0); } }
        @keyframes fadeUp     { from { opacity:0; transform:translateY(20px); } to { opacity:1; transform:translateY(0); } }
        .timeline-line::before {
          content:''; position:absolute; left:50%; top:0; bottom:0;
          width:2px; background:linear-gradient(to bottom,#ff8c00,#2e7d32);
          transform:translateX(-50%);
        }
        @media(max-width:767px){ .timeline-line::before { left:20px; } }
        .shimmer-text {
          background: linear-gradient(90deg, #ff8c00, #fbbf24, #ff8c00);
          background-size: 200% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: shimmer 3s linear infinite;
        }
        @keyframes shimmer { to { background-position: 200% center; } }
      `}</style>

      <section className="relative overflow-hidden grid grid-cols-1 lg:grid-cols-2">

        {/* ── Background collage ── */}
        <div className="absolute inset-0 grid grid-cols-2 grid-rows-3 sm:grid-cols-3 sm:grid-rows-2 z-0">
          {images.map((src, i) => (
            <div key={i} className="overflow-hidden">
              <img src={src} alt="" className="w-full h-full object-cover block" />
            </div>
          ))}
        </div>

        {/* Dark overlay with navy tint */}
        <div className="absolute inset-0 z-10" style={{ background: 'linear-gradient(135deg, rgba(13,27,42,0.88) 0%, rgba(13,27,42,0.75) 50%, rgba(13,27,42,0.88) 100%)' }} />

        {/* ── Center divider (desktop only) ── */}
        <div className="hidden lg:block absolute left-1/2 top-[8%] h-[84%] w-px bg-white/15 z-20" />

        {/* ── Ghost year ── */}
        <div className="font-playfair absolute bottom-2 left-8 text-[40px] sm:text-[56px] lg:text-[80px] font-black text-white/[0.06] tracking-[-4px] pointer-events-none select-none z-20 leading-none">
          2017
        </div>

        {/* ══ LEFT PANEL ══ */}
        <div className="relative z-20 flex flex-col justify-center px-5 pt-10 pb-7 sm:px-8 sm:pt-12 sm:pb-8 lg:px-10 lg:py-7">

          {/* Badges */}
          <div className="flex flex-wrap gap-2 mb-5">
            <span className="text-[10px] font-semibold tracking-widest uppercase px-3 py-1 rounded bg-orange-400/25 border border-orange-400/60 text-orange-200">
              ISO Certified
            </span>
            <span className="text-[10px] font-semibold tracking-widest uppercase px-3 py-1 rounded bg-amber-300/20 border border-amber-300/55 text-amber-300">
              Since 2017
            </span>
          </div>

          {/* Accent bar */}
          <div className="w-9 h-[3px] rounded-full mb-5" style={{ background: 'linear-gradient(90deg, #ff8c00, #2e7d32)' }} />

          {/* Title */}
          <h1 className="font-playfair text-[26px] sm:text-[32px] lg:text-[40px] font-black leading-[1.12] text-white mb-4 text-shadow-strong">
            We Build Real<br />
            <em className="italic text-amber-300">Careers,</em> Not<br />
            Just Resumes.
          </h1>

          {/* Subtitle */}
          <p className="text-md text-white/85 leading-[1.75] max-w-[340px] mb-7 text-shadow-soft">
            7+ years. 1000+ students. One relentless belief — every learner deserves a genuine shot at the industry.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-2 items-center">
            <NavLink to="/registration"
              className="px-5 py-2.5 text-xs font-semibold rounded-md text-white cursor-pointer transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
              style={{ background: 'linear-gradient(135deg, #ff8c00, #e67e00)' }}>
              Register Now →
            </NavLink>
            <NavLink to="/training"
              className="px-4 py-2 text-[11px] font-medium rounded-md bg-white/15 text-white border border-white/35 cursor-pointer hover:bg-white/25 transition-colors">
              20+ Courses
            </NavLink>
            <NavLink to="/placement"
              className="px-4 py-2 text-[11px] font-medium rounded-md text-white border cursor-pointer hover:bg-green-700/20 transition-colors"
              style={{ borderColor: '#2e7d3280', backgroundColor: '#2e7d3220' }}>
              Placement Guarantee
            </NavLink>
          </div>

          {/* Est line */}
          <div className="flex items-center gap-2 mt-6">
            <div className="w-[5px] h-[5px] rounded-full bg-orange-400 flex-shrink-0" />
            <span className="text-[10px] text-white/50 tracking-[1.4px] uppercase">
              Established 2017 · DigiCoders
            </span>
          </div>
        </div>

        {/* ══ RIGHT PANEL ══ */}
        <div className="relative z-20 flex flex-col justify-center gap-2.5 px-5 pb-10 sm:px-8 sm:pb-12 lg:pl-5 lg:pr-10 lg:py-11">
          {stats.map((s, i) => (
            <div
              key={i}
              className="flex items-center gap-10 px-4 py-3 rounded-xl border border-white/20 bg-black/[0.28] backdrop-blur-card hover:bg-black/[0.42] transition-colors"
            >
              {/* Icon */}
              <div className={`w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 text-lg ${s.bg} ${s.text}`}>
                {s.icon}
              </div>

              {/* Info */}
              <div className="flex-1">
                <div className="font-playfair text-2xl lg:text-[28px] font-bold text-white leading-none">
                  {s.num}
                  <sup className="text-[13px] text-amber-300 align-super">{s.sup}</sup>
                </div>
                <div className="text-[12px] font-medium text-white/90 mt-0.5">{s.label}</div>
                <div className="text-[10px] text-white/45 mt-0.5">{s.desc}</div>
              </div>
            </div>
          ))}
        </div>

      </section>


      {/* ── SECTION 3: STORY / TIMELINE ──────────────────────────────────── */}
      <section className="py-8 px-6 bg-gray-50" ref={timelineRef}>
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-14">
            <span className="inline-block text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4"
              style={{ backgroundColor: '#fff7ed', color: '#ff8c00' }}>Our Journey</span>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900">
              Small Start,{' '}
              <span style={{ color: '#ff8c00' }}>Big Journey</span>
            </h2>
          </div>

          <div className="relative timeline-line">
            {timeline.map((item, i) => (
              <div key={i} className={`relative flex items-center mb-10 ${item.side === 'right' ? 'flex-row-reverse' : ''} md:gap-8 gap-6`}
                style={timelineInView ? {
                  animation: `${item.side === 'left' ? 'slideRight' : 'slideLeft'} 0.6s ease forwards ${i * 0.12}s`,
                  opacity: 0,
                } : { opacity: 0 }}>

                {/* Card */}
                <div className={`flex-1 bg-white rounded-2xl p-5 shadow-sm border border-gray-100 hover:shadow-md hover:-translate-y-1 transition-all duration-300 ${item.side === 'right' ? 'text-right' : ''} md:block hidden`}>
                  <div className="text-xs font-bold mb-1" style={{ color: '#ff8c00' }}>{item.year}</div>
                  <div className="font-bold text-gray-900 text-base mb-1">{item.title}</div>
                  <div className="text-gray-500 text-sm leading-relaxed">{item.desc}</div>
                </div>

                {/* Center dot */}
                <div className="flex-shrink-0 z-10 w-10 h-10 rounded-full border-4 border-white shadow-md flex items-center justify-center"
                  style={{ background: 'linear-gradient(135deg, #ff8c00, #2e7d32)' }}>
                  <div className="w-2 h-2 bg-white rounded-full" />
                </div>

                {/* Mobile card */}
                <div className="flex-1 bg-white rounded-2xl p-5 shadow-sm border border-gray-100 md:hidden">
                  <div className="text-xs font-bold mb-1" style={{ color: '#ff8c00' }}>{item.year}</div>
                  <div className="font-bold text-gray-900 text-base mb-1">{item.title}</div>
                  <div className="text-gray-500 text-sm leading-relaxed">{item.desc}</div>
                </div>
                <div className="flex-1 hidden md:block" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 4: VALUES ────────────────────────────────────────────── */}
      <section className="py-8 px-6 bg-white" ref={valuesRef}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <span className="inline-block text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4"
              style={{ backgroundColor: '#f0fdf4', color: '#2e7d32' }}>Our Values</span>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900">
              Why We Are{' '}
              <span style={{ color: '#2e7d32' }}>Different</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {values.map((v, i) => {
              const Icon = v.icon
              return (
                <div key={i} className="group relative rounded-2xl p-6 border border-gray-100 bg-white hover:shadow-xl transition-all duration-400 cursor-default overflow-hidden"
                  style={valuesInView ? { animation: `fadeUp 0.5s ease forwards ${i * 0.1}s`, opacity: 0 } : { opacity: 0 }}>
                  {/* bg fill on hover */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-400 rounded-2xl"
                    style={{ backgroundColor: v.bg }} />
                  <div className="relative z-10">
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110"
                      style={{ backgroundColor: v.accent + '18' }}>
                      <Icon size={22} style={{ color: v.accent }} />
                    </div>
                    <h3 className="font-bold text-gray-900 text-base mb-2">{v.title}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed">{v.desc}</p>
                    <div className="mt-4 flex items-center gap-1 text-xs font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      style={{ color: v.accent }}>
                      Learn more <ChevronRight size={12} />
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── SECTION 5: TEAM ──────────────────────────────────────────────── */}
      <section className="py-5 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <span className="inline-block text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4"
              style={{ backgroundColor: '#fff7ed', color: '#ff8c00' }}>Meet the Team</span>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900">
              The People Who{' '}
              <span style={{ color: '#ff8c00' }}>Make It Happen</span>
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member, i) => (
              <div key={i} className="group bg-white rounded-2xl p-6 border border-gray-100 hover:shadow-xl transition-all duration-400 hover:-translate-y-2 text-center overflow-hidden relative">
                {/* Top accent bar */}
                <div className="absolute top-0 left-0 right-0 h-1 rounded-t-2xl" style={{ backgroundColor: member.color }} />
                {/* Avatar */}
                <div className="w-20 h-20 rounded-2xl mx-auto mb-4 flex items-center justify-center text-2xl font-black text-white"
                  style={{ background: `linear-gradient(135deg, ${member.color}, ${member.color}99)` }}>
                  {member.name.split(' ').map(n => n[0]).join('')}
                </div>
                <div className="font-bold text-gray-900 text-base">{member.name}</div>
                <div className="text-gray-500 text-sm mt-0.5">{member.role}</div>
                <div className="flex items-center justify-center gap-2 mt-3">
                  <span className="text-xs px-2 py-1 rounded-lg font-semibold" style={{ backgroundColor: member.color + '18', color: member.color }}>{member.tag}</span>
                  <span className="text-xs text-gray-400 font-medium">{member.exp}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 6: CTA ───────────────────────────────────────────────── */}
      <section className="relative overflow-hidden py-20 px-6"
        style={{ background: 'linear-gradient(135deg, #0d1b2a 0%, #1a3a2a 50%, #0d1b2a 100%)' }}>
        {/* background grid */}
        <div className="absolute inset-0 opacity-[0.05]"
          style={{ backgroundImage: 'linear-gradient(#ff8c00 1px,transparent 1px),linear-gradient(90deg,#ff8c00 1px,transparent 1px)', backgroundSize: '40px 40px' }} />

        {/* Orbs */}
        <div className="absolute top-0 left-1/4 w-64 h-64 rounded-full blur-3xl opacity-20"
          style={{ background: 'radial-gradient(circle, #ff8c00, transparent)' }} />
        <div className="absolute bottom-0 right-1/4 w-64 h-64 rounded-full blur-3xl opacity-15"
          style={{ background: 'radial-gradient(circle, #2e7d32, transparent)' }} />

        <div className="relative max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 mb-6"
            style={{ backgroundColor: '#ff8c0015', border: '1px solid #ff8c0030' }}>
            <span className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: '#ff8c00' }} />
            <span className="text-sm font-medium" style={{ color: '#ffb347' }}>Batch Starting Soon</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-black text-white mb-5 leading-tight">
            Ready to Start Your{' '}
            <span className="shimmer-text">Success Story?</span>
          </h2>

          <p className="text-gray-300 text-lg mb-10 max-w-xl mx-auto">
            Just like our 1000+ alumni, you too can transform your career.
            All it takes is one step — and we will guide you every step of the way.
          </p>

          <div className="flex flex-wrap gap-4 justify-center">
            <NavLink to="/registration"
              className="group relative px-8 py-4 text-white font-bold rounded-xl transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 flex items-center gap-2"
              style={{ background: 'linear-gradient(135deg, #ff8c00, #e67e00)', boxShadow: '0 4px 15px rgba(255,140,0,0.3)' }}>
              Register Now
              <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </NavLink>
            <NavLink to="/contact"
              className="px-8 py-4 font-bold rounded-xl border transition-all duration-300 hover:-translate-y-0.5 text-white"
              style={{ backgroundColor: '#2e7d3220', borderColor: '#2e7d3260' }}
              onMouseEnter={e => e.currentTarget.style.backgroundColor = '#2e7d3240'}
              onMouseLeave={e => e.currentTarget.style.backgroundColor = '#2e7d3220'}>
              Contact Us
            </NavLink>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About;
