import React, { useEffect, useRef, useState } from 'react'
import { Award, Users, BookOpen, Target, Zap, Globe, ChevronRight, Star, TrendingUp, Shield, Clock, Heart } from 'lucide-react'

// ── Data ────────────────────────────────────────────────────────────────────
const stats = [
  { value: 1000, suffix: '+', label: 'Students Trained', icon: Users, color: '#3b82f6' },
  { value: 7, suffix: '+', label: 'Years of Excellence', icon: Clock, color: '#f59e0b' },
  { value: 500, suffix: '+', label: 'Placements Done', icon: TrendingUp, color: '#10b981' },
  { value: 50, suffix: '+', label: 'Industry Partners', icon: Globe, color: '#8b5cf6' },
]

const values = [
  {
    icon: Target,
    title: 'Mission-Driven',
    desc: 'Our commitment is to make every student truly industry-ready — not just theory, but real-world, job-ready skills.',
    accent: '#3b82f6',
    bg: '#eff6ff',
  },
  {
    icon: Shield,
    title: 'Trust & Integrity',
    desc: 'A proven track record of 7+ years. We deliver what we promise — backed by our placement guarantee.',
    accent: '#f59e0b',
    bg: '#fffbeb',
  },
  {
    icon: Zap,
    title: 'Innovation First',
    desc: 'Latest technologies, an updated curriculum, and hands-on live projects — we always stay one step ahead.',
    accent: '#10b981',
    bg: '#ecfdf5',
  },
  {
    icon: Heart,
    title: 'Student-Centric',
    desc: 'Every student is unique. We offer personalized attention, small batches, and dedicated one-on-one mentorship.',
    accent: '#ef4444',
    bg: '#fef2f2',
  },
]

const team = [
  { name: 'Rajesh Kumar', role: 'Founder & Director', exp: '15+ Years', tag: 'IIT Alumni', color: '#3b82f6' },
  { name: 'Priya Sharma', role: 'Head of Training', exp: '10+ Years', tag: 'Ex-TCS', color: '#8b5cf6' },
  { name: 'Amit Singh', role: 'Placement Head', exp: '8+ Years', tag: 'Ex-Infosys', color: '#f59e0b' },
  { name: 'Neha Gupta', role: 'Technical Lead', exp: '6+ Years', tag: 'Ex-Wipro', color: '#10b981' },
]

const timeline = [
  { year: '2017', title: 'The Beginning', desc: 'Started from a small classroom with just 12 students and one big dream — to transform careers.', side: 'left' },
  { year: '2018', title: 'First 100 Placements', desc: 'Within the first year, we successfully placed 100+ students in top companies across the country.', side: 'right' },
  { year: '2020', title: 'Online Expansion', desc: 'Even during the pandemic, we kept moving — launched a full online training program to keep learning alive.', side: 'left' },
  { year: '2022', title: 'Second Branch', desc: 'After Kanpur, we expanded to Lucknow — growing our family and reaching more aspiring students.', side: 'right' },
  { year: '2024', title: '1000+ Alumni', desc: 'Over a thousand alumni now making their mark across the industry — and the number keeps growing.', side: 'left' },
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

function StatCard({ stat, index, inView }) {
  const count = useCounter(stat.value, 1800, inView)
  const Icon = stat.icon
  return (
    <div
      className="relative bg-white rounded-2xl p-6 shadow-sm border border-gray-100 overflow-hidden group"
      style={{
        animation: inView ? `fadeUp 0.5s ease forwards ${index * 0.1}s` : 'none',
        opacity: 0,
      }}
    >
      {/* background blob */}
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
      {/* bottom accent */}
      <div className="absolute bottom-0 left-0 h-1 w-0 group-hover:w-full transition-all duration-500 rounded-b-2xl"
        style={{ backgroundColor: stat.color }} />
    </div>
  )
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
    <div className="bg-white min-h-screen font-sans">
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
        @keyframes pulse-ring {
          0%   { transform: scale(1); opacity: 0.6; }
          100% { transform: scale(1.6); opacity: 0; }
        }
        @keyframes floatY {
          0%, 100% { transform: translateY(0px); }
          50%       { transform: translateY(-12px); }
        }
        @keyframes shimmer {
          0%   { background-position: -200% center; }
          100% { background-position: 200% center; }
        }
        .shimmer-text {
          background: linear-gradient(90deg, #1e40af, #3b82f6, #60a5fa, #3b82f6, #1e40af);
          background-size: 200% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: shimmer 3s linear infinite;
        }
        .timeline-line::before {
          content: '';
          position: absolute;
          left: 50%;
          transform: translateX(-50%);
          top: 0; bottom: 0;
          width: 2px;
          background: linear-gradient(to bottom, #3b82f6, #93c5fd, #3b82f6);
        }
        @media (max-width: 768px) {
          .timeline-line::before { left: 20px; }
        }
      `}</style>

      {/* ── SECTION 1: HERO ─────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-gradient-to-br from-gray-950 via-blue-950 to-gray-900 pt-20 pb-0">

        {/* Grid texture */}
        <div className="absolute inset-0 opacity-[0.04]"
          style={{ backgroundImage: 'linear-gradient(#60a5fa 1px,transparent 1px),linear-gradient(90deg,#60a5fa 1px,transparent 1px)', backgroundSize: '48px 48px' }} />

        {/* Glowing orbs */}
        <div className="absolute top-10 left-10 w-72 h-72 rounded-full blur-3xl opacity-20"
          style={{ background: 'radial-gradient(circle, #3b82f6, transparent)' }} />
        <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full blur-3xl opacity-15"
          style={{ background: 'radial-gradient(circle, #60a5fa, transparent)' }} />

        <div className="relative max-w-6xl mx-auto px-6 py-16 flex flex-col md:flex-row items-center gap-12">

          {/* Left text */}
          <div className="flex-1 text-center md:text-left" style={{ animation: 'slideRight 0.7s ease forwards' }}>
            <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-400/20 rounded-full px-4 py-1.5 mb-6">
              <Star size={14} className="text-yellow-400 fill-yellow-400" />
              <span className="text-blue-300 text-sm font-medium">Trusted Since 2017</span>
            </div>

            <h1 className="text-5xl md:text-6xl font-black text-white leading-tight mb-6">
              Shaping{' '}
              <span className="shimmer-text">Tomorrow's</span>
              <br />Tech Leaders
            </h1>

            <p className="text-gray-300 text-lg leading-relaxed mb-8 max-w-lg">
              We are more than just a training institute — we are a career launchpad.
              For 7+ years, we have been turning students' ambitions into real success stories.
            </p>

            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur rounded-xl px-4 py-2 border border-white/10">
                <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                <span className="text-white text-sm font-medium">Admissions Open</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur rounded-xl px-4 py-2 border border-white/10">
                <BookOpen size={14} className="text-blue-300" />
                <span className="text-white text-sm font-medium">20+ Courses</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur rounded-xl px-4 py-2 border border-white/10">
                <Award size={14} className="text-yellow-300" />
                <span className="text-white text-sm font-medium">ISO Certified</span>
              </div>
            </div>
          </div>

          {/* Right visual — floating card stack */}
          <div className="flex-shrink-0 relative w-72 h-72" style={{ animation: 'slideLeft 0.8s ease forwards' }}>
            {/* Pulse ring */}
            <div className="absolute inset-0 rounded-full border-2 border-blue-400/30"
              style={{ animation: 'pulse-ring 2s ease-out infinite' }} />
            {/* Main circle */}
            <div className="absolute inset-4 rounded-full bg-gradient-to-br from-blue-600 to-blue-800 flex items-center justify-center shadow-2xl"
              style={{ animation: 'floatY 4s ease-in-out infinite' }}>
              <div className="text-center">
                <div className="text-5xl font-black text-white">7+</div>
                <div className="text-blue-200 text-sm font-medium mt-1">Years of</div>
                <div className="text-yellow-300 text-sm font-bold">Excellence</div>
              </div>
            </div>
            {/* Floating badges */}
            {[
              { label: '1000+ Students', top: '0%', left: '60%', color: '#fbbf24' },
              { label: '500+ Placed', top: '75%', left: '-5%', color: '#34d399' },
              { label: '2 Branches', top: '75%', left: '60%', color: '#a78bfa' },
            ].map((b, i) => (
              <div key={i} className="absolute bg-white rounded-xl shadow-lg px-3 py-2 flex items-center gap-2 text-xs font-bold"
                style={{ top: b.top, left: b.left, animation: `floatY ${3.5 + i * 0.5}s ease-in-out infinite ${i * 0.3}s` }}>
                <span className="w-2 h-2 rounded-full flex-shrink-0" style={{ backgroundColor: b.color }} />
                {b.label}
              </div>
            ))}
          </div>
        </div>

        {/* Wave bottom */}
        <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full block">
          <path d="M0,40 C360,0 1080,80 1440,20 L1440,60 L0,60 Z" fill="white" />
        </svg>
      </section>

      {/* ── SECTION 2: STATS ─────────────────────────────────────────────── */}
      <section className="py-16 px-6 bg-white" ref={statsRef}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
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
            <p className="text-gray-500 max-w-md mx-auto">Not just claims — this is our proven track record</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {stats.map((s, i) => <StatCard key={i} stat={s} index={i} inView={statsInView} />)}
          </div>
        </div>
      </section>

      {/* ── SECTION 3: STORY / TIMELINE ──────────────────────────────────── */}
      <section className="py-16 px-6 bg-gray-50" ref={timelineRef}>
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-14">
            <span className="inline-block bg-blue-100 text-blue-700 text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4">Our Journey</span>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900">
              Small Start,{' '}
              <span className="text-blue-600">Big Journey</span>
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
                  <div className="text-xs font-bold text-blue-500 mb-1">{item.year}</div>
                  <div className="font-bold text-gray-900 text-base mb-1">{item.title}</div>
                  <div className="text-gray-500 text-sm leading-relaxed">{item.desc}</div>
                </div>

                {/* Center dot */}
                <div className="flex-shrink-0 z-10 w-10 h-10 rounded-full bg-blue-600 border-4 border-white shadow-md flex items-center justify-center">
                  <div className="w-2 h-2 bg-white rounded-full" />
                </div>

                {/* Right / spacer for mobile visible */}
                <div className="flex-1 bg-white rounded-2xl p-5 shadow-sm border border-gray-100 md:hidden">
                  <div className="text-xs font-bold text-blue-500 mb-1">{item.year}</div>
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
      <section className="py-16 px-6 bg-white" ref={valuesRef}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <span className="inline-block bg-blue-100 text-blue-700 text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4">Our Values</span>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900">
              Why We Are{' '}
              <span className="text-blue-600">Different</span>
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
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <span className="inline-block bg-blue-100 text-blue-700 text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4">Meet the Team</span>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900">
              The People Who{' '}
              <span className="text-blue-600">Make It Happen</span>
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
        style={{ background: 'linear-gradient(135deg, #0f172a 0%, #1e3a8a 50%, #0f172a 100%)' }}>
        {/* background grid */}
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
            <span className="text-yellow-300 text-sm font-medium">Batch Starting Soon</span>
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
        </div>
      </section>
    </div>
  )
}

export default About;