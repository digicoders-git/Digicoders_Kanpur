import React, { useEffect, useRef, useState } from 'react'
import {
  TrendingUp, Users, Award, Briefcase, CheckCircle, ChevronRight,
  Star, Globe, Building2, Phone, Mail, ArrowRight, Target,
  Zap, Shield, Clock, BookOpen, GraduationCap, BadgeCheck
} from 'lucide-react'

// ── Data ─────────────────────────────────────────────────────────────────────

const stats = [
  { value: 500, suffix: '+', label: 'Students Placed',    icon: GraduationCap, color: '#3b82f6' },
  { value: 50,  suffix: '+', label: 'Hiring Partners',    icon: Building2,     color: '#f59e0b' },
  { value: 95,  suffix: '%', label: 'Placement Rate',     icon: TrendingUp,    color: '#10b981' },
  { value: 8,   suffix: 'L+',label: 'Highest Package',   icon: Award,         color: '#8b5cf6' },
]

const companies = [
  { name: 'TCS',          color: '#3b82f6' },
  { name: 'Infosys',      color: '#8b5cf6' },
  { name: 'Wipro',        color: '#10b981' },
  { name: 'Accenture',    color: '#f59e0b' },
  { name: 'HCL',          color: '#ef4444' },
  { name: 'Cognizant',    color: '#06b6d4' },
  { name: 'Tech Mahindra',color: '#6366f1' },
  { name: 'Capgemini',    color: '#ec4899' },
  { name: 'Mphasis',      color: '#14b8a6' },
  { name: 'Persistent',   color: '#f97316' },
  { name: 'Hexaware',     color: '#a855f7' },
  { name: 'LTIMindtree',  color: '#22c55e' },
]

const placementProcess = [
  {
    step: '01', icon: BookOpen, color: '#3b82f6', bg: '#eff6ff',
    title: 'Course Completion',
    desc: 'Successfully complete your chosen technical training program with hands-on live projects and assignments.',
  },
  {
    step: '02', icon: BadgeCheck, color: '#f59e0b', bg: '#fffbeb',
    title: 'Resume Building',
    desc: 'Our HR experts craft an ATS-optimized, professional resume that highlights your skills and projects.',
  },
  {
    step: '03', icon: Target, color: '#10b981', bg: '#ecfdf5',
    title: 'Mock Interviews',
    desc: 'Face real interview scenarios — technical rounds, HR rounds, and aptitude tests with detailed feedback.',
  },
  {
    step: '04', icon: Globe, color: '#8b5cf6', bg: '#f5f3ff',
    title: 'Company Connect',
    desc: 'We directly refer you to our 50+ hiring partners based on your profile, skills, and preferences.',
  },
  {
    step: '05', icon: Award, color: '#ef4444', bg: '#fef2f2',
    title: 'Get Placed',
    desc: 'Receive your offer letter and launch your professional IT career with complete confidence.',
  },
]

const placementServices = [
  {
    icon: BadgeCheck, color: '#3b82f6', bg: '#eff6ff',
    title: 'Resume Building',
    desc: 'ATS-optimized resumes crafted by HR professionals tailored precisely to your target role and company.',
  },
  {
    icon: Globe, color: '#8b5cf6', bg: '#f5f3ff',
    title: 'LinkedIn Optimization',
    desc: 'Complete LinkedIn profile overhaul to attract recruiter attention and maximize visibility in searches.',
  },
  {
    icon: Target, color: '#10b981', bg: '#ecfdf5',
    title: 'Mock Interviews',
    desc: 'Technical + HR mock interviews with real-time feedback after every session to sharpen your performance.',
  },
  {
    icon: Zap, color: '#f59e0b', bg: '#fffbeb',
    title: 'Aptitude Training',
    desc: 'Quantitative, verbal and logical reasoning coaching specifically for company selection test rounds.',
  },
  {
    icon: Building2, color: '#ef4444', bg: '#fef2f2',
    title: 'Company Referrals',
    desc: 'Direct personal referrals to 50+ hiring partners — we introduce you, not just forward your CV.',
  },
  {
    icon: Users, color: '#06b6d4', bg: '#ecfeff',
    title: 'Career Counselling',
    desc: '1-on-1 personalised guidance on choosing the right career path based on your unique skills and goals.',
  },
]

const testimonials = [
  {
    name: 'Rahul Sharma',   initials: 'RS', color: '#3b82f6',
    course: 'Full Stack Web Development', company: 'TCS', package: '5.2 LPA',
    quote: 'The placement support was incredible. Mock interviews prepared me for every single question they asked.',
    stars: 5,
  },
  {
    name: 'Priya Singh',    initials: 'PS', color: '#8b5cf6',
    course: 'Data Science & ML', company: 'Infosys', package: '6.8 LPA',
    quote: 'From zero coding knowledge to a Data Science role in 6 months — this institute truly made it possible.',
    stars: 5,
  },
  {
    name: 'Amit Kumar',     initials: 'AK', color: '#10b981',
    course: 'Java Full Stack', company: 'Wipro', package: '4.5 LPA',
    quote: 'Resume building sessions and LinkedIn optimization helped me stand out from hundreds of applicants.',
    stars: 5,
  },
  {
    name: 'Sneha Gupta',    initials: 'SG', color: '#f59e0b',
    course: 'Cloud & AWS', company: 'HCL', package: '7.2 LPA',
    quote: 'Got placed before even completing the course. That is how powerful the hiring network here really is.',
    stars: 5,
  },
  {
    name: 'Rohit Verma',    initials: 'RV', color: '#ef4444',
    course: 'Cyber Security', company: 'Accenture', package: '8.0 LPA',
    quote: 'Highest package in my batch! The advanced modules and interview prep gave me a clear edge.',
    stars: 5,
  },
  {
    name: 'Anjali Patel',   initials: 'AP', color: '#06b6d4',
    course: 'Python & Django', company: 'Cognizant', package: '5.5 LPA',
    quote: 'Career counselling helped me pick the right technology stack aligned with my long-term career goals.',
    stars: 5,
  },
]

// ── Animated Counter ──────────────────────────────────────────────────────────
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

// ── Main Component ────────────────────────────────────────────────────────────
const Placement = () => {
  const statsRef      = useRef(null)
  const processRef    = useRef(null)
  const servicesRef   = useRef(null)
  const testimonialsRef = useRef(null)

  const [statsInView,        setStatsInView]        = useState(false)
  const [processInView,      setProcessInView]      = useState(false)
  const [servicesInView,     setServicesInView]     = useState(false)
  const [testimonialsInView, setTestimonialsInView] = useState(false)

  useEffect(() => {
    const pairs = [
      { ref: statsRef,        setter: setStatsInView },
      { ref: processRef,      setter: setProcessInView },
      { ref: servicesRef,     setter: setServicesInView },
      { ref: testimonialsRef, setter: setTestimonialsInView },
    ]
    const observers = pairs.map(({ ref, setter }) => {
      const o = new IntersectionObserver(([e]) => { if (e.isIntersecting) setter(true) }, { threshold: 0.1 })
      if (ref.current) o.observe(ref.current)
      return o
    })
    return () => observers.forEach(o => o.disconnect())
  }, [])

  return (
    <div className="bg-white">
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
          0%   { transform: scale(1);   opacity: 0.6; }
          100% { transform: scale(1.6); opacity: 0; }
        }
        @keyframes floatY {
          0%, 100% { transform: translateY(0px); }
          50%       { transform: translateY(-12px); }
        }
        @keyframes shimmer {
          0%   { background-position: -200% center; }
          100% { background-position:  200% center; }
        }
        @keyframes marquee {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
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
      `}</style>

      {/* ── SECTION 1: HERO ───────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-gradient-to-br from-gray-950 via-blue-950 to-gray-900 py-8 md:py-5 lg:py-2 px-6">
      
      {/* Background Image with Dark Overlay */}
      <div 
        className="absolute inset-0 opacity-20 bg-cover bg-center bg-no-repeat mix-blend-luminosity pointer-events-none"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80')" }}
      />

      <div className="relative max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-16">

        {/* Left Text Section */}
        <div className="flex-1 text-center px-7 lg:text-left z-10 animate-slide-right">
          <div className="inline-flex items-center gap-2 bg-green-500/10 border border-green-400/20 rounded-full px-4 py-1.5 mb-6">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            <span className="text-green-300 text-xs md:text-sm font-medium uppercase tracking-wider">
              95% Placement Rate — Batch Ongoing
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white leading-[1.1] mb-6">
            Your Dream Job{' '}
            <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
              Starts Here
            </span>
          </h1>

          <p className="text-gray-400 text-base md:text-lg leading-relaxed mb-10 max-w-lg mx-auto lg:mx-0">
            We don't just train you — we place you. Our dedicated placement cell connects
            skilled graduates directly with 50+ top IT companies across India.
          </p>

          {/* Stats Badges */}
          <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
            {[
              { icon: <TrendingUp size={16} />, label: "500+ Placements", color: "text-green-400" },
              { icon: <Building2 size={16} />, label: "50+ Companies", color: "text-blue-300" },
              { icon: <Award size={16} />, label: "8 LPA Highest", color: "text-yellow-300" }
            ].map((stat, i) => (
              <div key={i} className="flex items-center gap-2 bg-white/5 backdrop-blur-md rounded-xl px-4 py-2.5 border border-white/10 shadow-lg">
                <span className={stat.color}>{stat.icon}</span>
                <span className="text-white text-sm font-semibold whitespace-nowrap">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right visual — Responsive 3D Stack */}
        <div className="flex-1 relative w-full max-w-[500px] aspect-square lg:aspect-auto lg:h-[500px] mt-12 lg:mt-0 animate-slide-left">
          <div className="relative w-full h-full transform-gpu lg:rotate-y-[-15deg] lg:rotate-x-[10deg] perspective-1000">
            
            {/* Image 1 - Top Left */}
            <div className="absolute top-[5%] left-[5%] w-1/3 aspect-[4/5] rounded-lg overflow-hidden border border-white/20 shadow-xl z-10 -rotate-6">
              <img src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80" className="w-full h-full object-cover" alt="Team Session" />
            </div>

            {/* Image 2 - Center Main */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1/2 aspect-video rounded-xl overflow-hidden border-2 border-white/30 shadow-2xl z-40 hover:scale-105 transition-transform duration-500">
              <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80" className="w-full h-full object-cover" alt="Students Working" />
            </div>

            {/* Image 3 - Top Right */}
            <div className="absolute top-[10%] right-[5%] w-1/3 aspect-square rounded-lg overflow-hidden border border-white/20 shadow-xl z-20 rotate-3">
              <img src="https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80" className="w-full h-full object-cover" alt="Coding" />
            </div>

            {/* Image 4 - Bottom Left */}
            <div className="absolute bottom-[10%] left-[10%] w-1/3 aspect-video rounded-lg overflow-hidden border border-white/20 shadow-xl z-30 -rotate-3">
              <img src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80" className="w-full h-full object-cover" alt="Mentor" />
            </div>

            {/* Image 5 - Bottom Right */}
            <div className="absolute bottom-[5%] right-[10%] w-2/5 aspect-square rounded-lg overflow-hidden border border-white/20 shadow-xl z-20 rotate-6">
              <img src="https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&q=80" className="w-full h-full object-cover" alt="Workshop" />
            </div>

            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2/3 h-2/3 bg-blue-500/20 blur-[100px] -z-10 rounded-full" />
          </div>
        </div>

      </div>

      <style jsx>{`
        .perspective-1000 {
          perspective: 1200px;
        }
        @keyframes slideRight {
          from { opacity: 0; transform: translateX(-40px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes slideLeft {
          from { opacity: 0; transform: translateX(40px); }
          to { opacity: 1; transform: translateX(0); }
        }
        .animate-slide-right {
          animation: slideRight 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        .animate-slide-left {
          animation: slideLeft 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
      `}</style>
    </section>

      {/* ── SECTION 2: STATS ──────────────────────────────────────────────── */}
      <section className="py-10 px-6 bg-white" ref={statsRef}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-3">
              Numbers That{' '}
              <span className="text-blue-600 relative">
                Prove
                <svg className="absolute -bottom-1 left-0 w-full" viewBox="0 0 100 8" preserveAspectRatio="none">
                  <path d="M0,6 Q50,0 100,6" stroke="#3b82f6" strokeWidth="2.5" fill="none" strokeLinecap="round" />
                </svg>
              </span>
              {' '}Our Promise
            </h2>
            <p className="text-gray-500 max-w-md mx-auto">Not just words — this is our verified track record of real student success</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {stats.map((s, i) => <StatCard key={i} stat={s} index={i} inView={statsInView} />)}
          </div>
        </div>
      </section>

      {/* ── SECTION 3: HIRING COMPANIES MARQUEE ──────────────────────────── */}
      <section className="py-2 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <span className="inline-block bg-blue-100 text-blue-700 text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4">Our Network</span>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900">
              Companies That{' '}
              <span className="text-blue-600">Hire Our Students</span>
            </h2>
            <p className="text-gray-500 mt-3 max-w-lg mx-auto">50+ top IT companies actively recruit from our institute every year</p>
          </div>

          {/* Marquee */}
          <div className="overflow-hidden relative">
            {/* Fade edges */}
            <div className="absolute left-0 top-0 bottom-0 w-16 z-10"
              style={{ background: 'linear-gradient(to right, #f8fafc, transparent)' }} />
            <div className="absolute right-0 top-0 bottom-0 w-16 z-10"
              style={{ background: 'linear-gradient(to left, #f8fafc, transparent)' }} />

            <div className="marquee-track gap-4 py-3">
              {/* Double for seamless loop */}
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
        </div>
      </section>

      {/* ── SECTION 4: PLACEMENT PROCESS ─────────────────────────────────── */}
      <section className="py-8 px-6 bg-white" ref={processRef}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <span className="inline-block bg-blue-100 text-blue-700 text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4">How It Works</span>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900">
              Our{' '}
              <span className="text-blue-600">Placement Process</span>
            </h2>
            <p className="text-gray-500 mt-3 max-w-md mx-auto">A proven 5-step journey from course enrollment to offer letter</p>
          </div>

          {/* Steps */}
          <div className="relative">
            {/* Connector line (desktop) */}
            <div className="hidden lg:block absolute top-10 left-[10%] right-[10%] h-0.5 bg-gradient-to-r from-blue-200 via-blue-400 to-blue-200" />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
              {placementProcess.map((step, i) => {
                const Icon = step.icon
                return (
                  <div key={i}
                    className="relative flex flex-col items-center text-center group"
                    style={processInView ? { animation: `fadeUp 0.5s ease forwards ${i * 0.12}s`, opacity: 0 } : { opacity: 0 }}>

                    {/* Circle icon */}
                    <div className="relative z-10 w-20 h-20 rounded-full flex items-center justify-center mb-4 shadow-md transition-all duration-300 group-hover:scale-110 group-hover:shadow-xl"
                      style={{ backgroundColor: step.bg, border: `2px solid ${step.color}30` }}>
                      <Icon size={28} style={{ color: step.color }} />
                      {/* Step number badge */}
                      <div className="absolute -top-1 -right-1 w-6 h-6 rounded-full flex items-center justify-center text-white text-xs font-black"
                        style={{ backgroundColor: step.color }}>
                        {step.step}
                      </div>
                    </div>

                    <h3 className="font-bold text-gray-900 text-base mb-2">{step.title}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed">{step.desc}</p>

                    {/* Arrow between (desktop) */}
                    {i < placementProcess.length - 1 && (
                      <div className="hidden lg:block absolute top-9 -right-3 z-20">
                        <ArrowRight size={16} className="text-blue-400" />
                      </div>
                    )}
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 5: PLACEMENT SERVICES ────────────────────────────────── */}
      <section className="py-8 px-6 bg-gray-50" ref={servicesRef}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <span className="inline-block bg-blue-100 text-blue-700 text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4">What We Offer</span>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900">
              Complete{' '}
              <span className="text-blue-600">Placement Support</span>
            </h2>
            <p className="text-gray-500 mt-3 max-w-md mx-auto">End-to-end assistance — from building your profile to landing your first offer</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {placementServices.map((svc, i) => {
              const Icon = svc.icon
              return (
                <div key={i}
                  className="group bg-white rounded-2xl p-6 border border-gray-100 hover:shadow-xl transition-all duration-400 hover:-translate-y-1 overflow-hidden relative"
                  style={servicesInView ? { animation: `fadeUp 0.5s ease forwards ${i * 0.1}s`, opacity: 0 } : { opacity: 0 }}>

                  {/* bg fill on hover */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-400 rounded-2xl"
                    style={{ backgroundColor: svc.bg }} />

                  <div className="relative z-10 flex gap-4 items-start">
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:scale-110"
                      style={{ backgroundColor: svc.color + '18' }}>
                      <Icon size={22} style={{ color: svc.color }} />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 text-base mb-1">{svc.title}</h3>
                      <p className="text-gray-500 text-sm leading-relaxed">{svc.desc}</p>
                      <div className="mt-3 flex items-center gap-1 text-xs font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        style={{ color: svc.color }}>
                        Learn more <ChevronRight size={12} />
                      </div>
                    </div>
                  </div>

                  {/* Bottom accent */}
                  <div className="absolute bottom-0 left-0 h-0.5 w-0 group-hover:w-full transition-all duration-500 rounded-b-2xl"
                    style={{ backgroundColor: svc.color }} />
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── SECTION 6: STUDENT SUCCESS STORIES ───────────────────────────── */}
      <section className="py-5 px-6 bg-white" ref={testimonialsRef}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <span className="inline-block bg-blue-100 text-blue-700 text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4">Success Stories</span>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900">
              Real Students,{' '}
              <span className="text-blue-600">Real Results</span>
            </h2>
            <p className="text-gray-500 mt-3 max-w-md mx-auto">Hear directly from students who turned their training into a full-time career</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {testimonials.map((t, i) => (
              <div key={i}
                className="group bg-white rounded-2xl p-6 border border-gray-100 hover:shadow-xl transition-all duration-400 hover:-translate-y-1 relative overflow-hidden"
                style={testimonialsInView ? { animation: `fadeUp 0.5s ease forwards ${i * 0.1}s`, opacity: 0 } : { opacity: 0 }}>

                {/* Top accent bar */}
                <div className="absolute top-0 left-0 right-0 h-1 rounded-t-2xl" style={{ backgroundColor: t.color }} />

                {/* Stars */}
                <div className="flex gap-0.5 mb-4">
                  {Array.from({ length: t.stars }).map((_, s) => (
                    <Star key={s} size={14} className="fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                <p className="text-gray-600 text-sm leading-relaxed mb-5 italic">"{t.quote}"</p>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    {/* Avatar */}
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center text-sm font-black text-white"
                      style={{ background: `linear-gradient(135deg, ${t.color}, ${t.color}99)` }}>
                      {t.initials}
                    </div>
                    <div>
                      <div className="font-bold text-gray-900 text-sm">{t.name}</div>
                      <div className="text-gray-400 text-xs">{t.course}</div>
                    </div>
                  </div>

                  <div className="text-right flex flex-col gap-1">
                    <span className="text-xs px-2 py-1 rounded-lg font-bold"
                      style={{ backgroundColor: t.color + '18', color: t.color }}>
                      {t.company}
                    </span>
                    <span className="text-xs font-bold text-green-600 bg-green-50 px-2 py-1 rounded-lg">
                      {t.package}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 7: CTA ────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden py-20 px-6"
        style={{ background: 'linear-gradient(135deg, #0f172a 0%, #1e3a8a 50%, #0f172a 100%)' }}>

        {/* Grid texture */}
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
            <span className="text-yellow-300 text-sm font-medium">Placement Drive — Registrations Open</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-black text-white mb-5 leading-tight">
            Ready to Land Your{' '}
            <span className="shimmer-text">Dream Job?</span>
          </h2>

          <p className="text-gray-300 text-lg mb-10 max-w-xl mx-auto">
            Join 500+ alumni who transformed their careers through our placement program.
            One step is all it takes — we will handle the rest.
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
            <a href="tel:+919876543210"
              className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors text-sm">
              <Phone size={15} className="text-blue-400" />
              +91 98765 43210
            </a>
            <a href="mailto:info@institute.com"
              className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors text-sm">
              <Mail size={15} className="text-blue-400" />
              info@institute.com
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Placement
