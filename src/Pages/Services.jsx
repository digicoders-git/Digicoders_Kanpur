import React, { useState, useEffect, useRef } from 'react'
import {
  GraduationCap, Briefcase, FileText, Users, Monitor,
  Award, Code, Layers, HeartHandshake, Cpu, BookOpen,
  ChevronRight, CheckCircle, Star, ArrowRight,
  Clock, Globe, Zap, Shield, TrendingUp, Phone, Mail
} from 'lucide-react'

// ── Data ─────────────────────────────────────────────────────────────────────

const services = [
  {
    id: 1,
    icon: GraduationCap,
    color: '#3b82f6', bg: '#eff6ff',
    title: 'Technical Training Programs',
    subtitle: 'Core Learning Service',
    desc: 'Comprehensive, industry-aligned training in the latest technologies — from web development to data science and cloud computing. Delivered by certified experts with 10+ years of industry experience.',
    features: [
      'Beginner to advanced level courses',
      'Live project-based learning',
      'Small batches — max 20 students',
      'Flexible morning, evening & weekend batches',
      'Industry-recognised course completion certificate',
    ],
    cta: 'Explore Courses',
    link: '/training',
    tag: 'Most Popular',
  },
  {
    id: 2,
    icon: Briefcase,
    color: '#3b82f6', bg: '#eff6ff',
    title: 'Placement Assistance',
    subtitle: 'Career Launch Service',
    desc: 'End-to-end placement support — from resume building to final offer letters. Our dedicated placement cell has strong ties with 50+ IT companies across India.',
    features: [
      'Professional resume building & review',
      'Mock technical & HR interview rounds',
      'Company-specific interview preparation',
      'Direct referrals to hiring partners',
      'Post-placement career guidance',
    ],
    cta: 'Get Placed',
    link: '/registration',
    tag: 'High Demand',
  },
  {
    id: 3,
    icon: Users,
    color: '#3b82f6', bg: '#eff6ff',
    title: 'Summer & Industrial Training',
    subtitle: 'Internship Programme',
    desc: 'Structured 4–6 week industrial training programmes for B.Tech, BCA, and MCA students — fulfilling university internship requirements with a recognised certificate and real project work.',
    features: [
      'Fulfils university internship requirement',
      'Live industry project development',
      'Official internship completion letter',
      'Certificate recognised by top universities',
      'Mentorship from industry professionals',
    ],
    cta: 'Register for Summer Training',
    link: '/registration',
    tag: 'For Students',
  },
  {
    id: 4,
    icon: FileText,
    color: '#3b82f6', bg: '#eff6ff',
    title: 'Project Development Support',
    subtitle: 'Final Year & Research Projects',
    desc: 'Complete end-to-end support for final year projects, mini projects, and research-based assignments. We help you build projects that stand out in your portfolio and impress evaluators.',
    features: [
      'Final year B.Tech / BCA / MCA projects',
      'Full documentation & presentation support',
      'Source code with detailed explanation',
      'Live demo & deployment assistance',
      'IEEE standard report preparation',
    ],
    cta: 'Start Your Project',
    link: '/contact',
  },
  {
    id: 5,
    icon: Monitor,
    color: '#3b82f6', bg: '#eff6ff',
    title: 'Corporate Training Solutions',
    subtitle: 'For Organisations & Teams',
    desc: 'Customised upskilling programmes for corporate teams and organisations. We design training modules aligned with your technology stack, delivered on-site or online.',
    features: [
      'Custom curriculum as per tech stack',
      'On-site and online delivery options',
      'Group & individual assessment',
      'Certification on course completion',
      'Post-training support & follow-up',
    ],
    cta: 'Get a Custom Quote',
    link: '/contact',
  },
  {
    id: 6,
    icon: HeartHandshake,
    color: '#3b82f6', bg: '#eff6ff',
    title: 'Career Counselling',
    subtitle: 'Free Guidance Session',
    desc: 'Not sure which tech path to choose? Our expert counsellors offer free one-on-one sessions to help you understand your strengths, map career goals, and pick the right course.',
    features: [
      'Free 30-minute one-on-one session',
      'Aptitude & interest-based guidance',
      'Tech career roadmap planning',
      'Salary & growth expectation insights',
      'Course recommendation tailored to you',
    ],
    cta: 'Book Free Session',
    link: '/contact',
    tag: 'Free',
  },
]

const process = [
  { num: '01', icon: Phone,          title: 'Enquire or Register',   desc: 'Call us, fill the online form, or walk in to any branch — our team responds within 24 hours.' },
  { num: '02', icon: HeartHandshake, title: 'Free Counselling',      desc: 'Our counsellor understands your background, goals, and recommends the best-fit service or course.' },
  { num: '03', icon: BookOpen,       title: 'Enroll & Start',        desc: 'Complete a quick enrollment, choose your batch timing, and begin your learning journey.' },
  { num: '04', icon: TrendingUp,     title: 'Learn & Get Placed',    desc: 'Complete your training, build real projects, clear interviews, and land your dream job.' },
]

const techStack = [
  { name: 'Python',       color: '#3b82f6' },
  { name: 'Java',         color: '#f59e0b' },
  { name: 'React',        color: '#06b6d4' },
  { name: 'Node.js',      color: '#10b981' },
  { name: 'AWS',          color: '#ef4444' },
  { name: 'Data Science', color: '#8b5cf6' },
  { name: 'SQL',          color: '#f97316' },
  { name: 'Android',      color: '#84cc16' },
  { name: 'Cyber Security', color: '#06b6d4' },
  { name: 'Spring Boot',  color: '#10b981' },
  { name: 'Machine Learning', color: '#8b5cf6' },
  { name: 'UI/UX Design', color: '#ec4899' },
]

// ── Service Card ──────────────────────────────────────────────────────────────

function ServiceCard({ service, index, inView }) {
  const Icon = service.icon
  return (
    <div
      className="group bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 overflow-hidden flex flex-col"
      style={inView ? { animation: `fadeUp 0.55s ease both ${index * 0.09}s`, opacity: 0 } : { opacity: 0 }}
    >
      {/* Colored top bar */}
      <div className="h-1.5 w-full" style={{ backgroundColor: service.color }} />

      <div className="p-6 flex flex-col flex-1">
        {/* Header */}
        <div className="flex items-start justify-between mb-4">
          <div className="w-13 h-13 w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300"
            style={{ backgroundColor: service.bg }}>
            <Icon size={22} style={{ color: service.color }} />
          </div>
          {service.tag && (
            <span className="text-[10px] font-bold px-2.5 py-1 rounded-full border ml-2"
              style={{ backgroundColor: service.bg, color: service.color, borderColor: service.color + '40' }}>
              {service.tag}
            </span>
          )}
        </div>

        <p className="text-[10px] font-bold uppercase tracking-widest mb-1" style={{ color: service.color }}>
          {service.subtitle}
        </p>
        <h3 className="font-black text-gray-900 text-lg leading-snug mb-2">{service.title}</h3>
        <p className="text-gray-500 text-sm leading-relaxed mb-4">{service.desc}</p>

        {/* Features */}
        <ul className="space-y-2 mb-6 flex-1">
          {service.features.map((f, i) => (
            <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
              <CheckCircle size={13} style={{ color: service.color }} className="flex-shrink-0 mt-0.5" />
              {f}
            </li>
          ))}
        </ul>

        {/* CTA */}
        <a
          href={service.link}
          className="group/btn flex items-center justify-between w-full px-4 py-3 rounded-xl font-bold text-sm text-white transition-all duration-200 hover:opacity-90 hover:shadow-md mt-auto"
          style={{ backgroundColor: service.color }}
        >
          {service.cta}
          <ChevronRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
        </a>
      </div>
    </div>
  )
}

// ── Main Page ─────────────────────────────────────────────────────────────────

const Services = () => {
  const cardsRef = useRef(null)
  const [cardsInView, setCardsInView] = useState(false)
  const processRef = useRef(null)
  const [processInView, setProcessInView] = useState(false)

  useEffect(() => {
    const pairs = [
      { ref: cardsRef,   setter: setCardsInView },
      { ref: processRef, setter: setProcessInView },
    ]
    const obs = pairs.map(({ ref, setter }) => {
      const o = new IntersectionObserver(([e]) => { if (e.isIntersecting) setter(true) }, { threshold: 0.1 })
      if (ref.current) o.observe(ref.current)
      return o
    })
    return () => obs.forEach(o => o.disconnect())
  }, [])

  return (
    <div className="bg-white min-h-screen font-sans">
      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(24px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes shimmer {
          0%   { background-position: -200% center; }
          100% { background-position:  200% center; }
        }
        @keyframes floatY {
          0%, 100% { transform: translateY(0); }
          50%       { transform: translateY(-10px); }
        }
        @keyframes pulse-ring {
          0%   { transform: scale(1);   opacity: 0.5; }
          100% { transform: scale(1.6); opacity: 0; }
        }
        @keyframes marquee {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
        .shimmer-text {
          background: linear-gradient(90deg, #1e40af, #3b82f6, #60a5fa, #3b82f6, #1e40af);
          background-size: 200% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: shimmer 3s linear infinite;
        }
        .marquee-track { animation: marquee 22s linear infinite; }
      `}</style>

      {/* ── SECTION 1: HERO ──────────────────────────────────────────────────── */}
      <section
        className="relative overflow-hidden pb-0"
        style={{ background: 'linear-gradient(135deg, #0a0f1e 0%, #0f2a6b 55%, #0a0f1e 100%)' }}
      >
        <div className="absolute inset-0 opacity-[0.04]"
          style={{ backgroundImage: 'linear-gradient(#60a5fa 1px,transparent 1px),linear-gradient(90deg,#60a5fa 1px,transparent 1px)', backgroundSize: '48px 48px' }} />
        <div className="absolute top-10 left-16 w-80 h-80 rounded-full blur-3xl opacity-20"
          style={{ background: 'radial-gradient(circle, #3b82f6, transparent)' }} />
        <div className="absolute bottom-0 right-10 w-72 h-72 rounded-full blur-3xl opacity-15"
          style={{ background: 'radial-gradient(circle, #60a5fa, transparent)' }} />

        <div className="relative max-w-6xl mx-auto px-6 py-16 flex flex-col md:flex-row items-center gap-12">

          {/* Left */}
          <div className="flex-1 text-center md:text-left">
            <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-400/20 rounded-full px-4 py-1.5 mb-6"
              style={{ animation: 'fadeUp 0.6s ease both' }}>
              <Layers size={13} className="text-blue-300" />
              <span className="text-blue-300 text-sm font-medium">6 Core Services — One Destination</span>
            </div>

            <h1 className="text-5xl md:text-6xl font-black text-white leading-tight mb-5"
              style={{ animation: 'fadeUp 0.6s ease 0.1s both' }}>
              Everything You Need to{' '}
              <span className="shimmer-text">Succeed</span>
            </h1>

            <p className="text-gray-300 text-lg leading-relaxed mb-8 max-w-lg"
              style={{ animation: 'fadeUp 0.6s ease 0.2s both' }}>
              From technical training and placement assistance to project support and career
              counselling — we provide complete end-to-end career development services.
            </p>

            <div className="flex flex-wrap gap-3 justify-center md:justify-start"
              style={{ animation: 'fadeUp 0.6s ease 0.3s both' }}>
              {[
                { icon: Shield,   text: 'ISO Certified',        color: '#fbbf24' },
                { icon: Zap,      text: 'Industry-Led Training', color: '#34d399' },
                { icon: Award,    text: '7+ Years Trusted',      color: '#60a5fa' },
              ].map(({ icon: Icon, text, color }, i) => (
                <div key={i} className="flex items-center gap-2 bg-white/10 backdrop-blur rounded-xl px-4 py-2 border border-white/10">
                  <Icon size={14} style={{ color }} />
                  <span className="text-white text-sm font-medium">{text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right visual */}
          <div className="flex-shrink-0 relative w-64 h-64">
            <div className="absolute inset-0 rounded-full border-2 border-blue-400/25"
              style={{ animation: 'pulse-ring 2.2s ease-out infinite' }} />
            <div className="absolute inset-4 rounded-full bg-gradient-to-br from-blue-600 to-blue-900 flex items-center justify-center shadow-2xl"
              style={{ animation: 'floatY 4s ease-in-out infinite' }}>
              <div className="text-center">
                <Cpu size={36} className="text-white mx-auto mb-2" />
                <div className="text-3xl font-black text-white">6+</div>
                <div className="text-blue-200 text-xs font-medium mt-1">Services</div>
              </div>
            </div>
            {[
              { label: 'Free Counselling', top: '-4%',  left: '52%', color: '#fbbf24', delay: '0s'   },
              { label: '50+ Partners',     top: '78%',  left: '-8%', color: '#34d399', delay: '0.4s' },
              { label: '98% Satisfaction', top: '78%',  left: '55%', color: '#a78bfa', delay: '0.8s' },
            ].map((b, i) => (
              <div key={i}
                className="absolute bg-white rounded-xl shadow-lg px-3 py-1.5 flex items-center gap-2 text-xs font-bold whitespace-nowrap"
                style={{ top: b.top, left: b.left, animation: `floatY ${3.5 + i * 0.4}s ease-in-out infinite ${b.delay}` }}>
                <span className="w-2 h-2 rounded-full flex-shrink-0" style={{ backgroundColor: b.color }} />
                {b.label}
              </div>
            ))}
          </div>
        </div>

        {/* Wave */}
        <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full block">
          <path d="M0,40 C360,0 1080,80 1440,20 L1440,60 L0,60 Z" fill="white" />
        </svg>
      </section>

      {/* ── SECTION 3: SERVICE CARDS ─────────────────────────────────────────── */}
      <section className="py-8 px-6 bg-gray-50" ref={cardsRef}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <span className="inline-block bg-blue-100 text-blue-700 text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4">
              What We Offer
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-2">
              Our Core{' '}
              <span className="text-blue-600">Services</span>
            </h2>
            <p className="text-gray-500 text-sm max-w-md mx-auto">
              Every service is designed to take you from where you are to where you want to be.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, i) => (
              <ServiceCard key={service.id} service={service} index={i} inView={cardsInView} />
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 4: TECH MARQUEE ──────────────────────────────────────────── */}
      <section className="py-12 bg-white overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 mb-6 text-center">
          <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">Technologies We Train In</p>
        </div>
        <div className="relative overflow-hidden">
          {/* Fade edges */}
          <div className="absolute left-0 top-0 bottom-0 w-16 z-10 bg-gradient-to-r from-white to-transparent" />
          <div className="absolute right-0 top-0 bottom-0 w-16 z-10 bg-gradient-to-l from-white to-transparent" />
          <div className="flex whitespace-nowrap">
            <div className="marquee-track flex gap-3 pr-3">
              {[...techStack, ...techStack].map((t, i) => (
                <div key={i}
                  className="inline-flex items-center gap-2 px-4 py-2 bg-gray-50 border border-gray-200 rounded-xl text-sm font-bold text-gray-700 flex-shrink-0 hover:border-blue-300 hover:bg-blue-50 hover:text-blue-700 transition-all duration-200 cursor-default">
                  <span className="w-2 h-2 rounded-full flex-shrink-0" style={{ backgroundColor: t.color }} />
                  {t.name}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 5: HOW IT WORKS ──────────────────────────────────────────── */}
      <section className="py-16 px-6 bg-gray-50" ref={processRef}>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <span className="inline-block bg-blue-100 text-blue-700 text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4">
              Our Process
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-2">
              How We{' '}
              <span className="text-blue-600">Work</span>
            </h2>
            <p className="text-gray-500 text-sm">Simple, transparent, and student-first — every step of the way</p>
          </div>

          <div className="grid md:grid-cols-4 gap-6 relative">
            {/* Connector */}
            <div className="hidden md:block absolute top-8 left-[calc(12.5%+16px)] right-[calc(12.5%+16px)] h-[2px] bg-gradient-to-r from-blue-200 via-blue-400 to-blue-200 rounded-full" />

            {process.map((step, i) => {
              const Icon = step.icon
              return (
                <div key={i}
                  className="relative z-10 text-center group"
                  style={processInView ? { animation: `fadeUp 0.5s ease both ${i * 0.12}s`, opacity: 0 } : { opacity: 0 }}>
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-600 to-blue-400 flex flex-col items-center justify-center mx-auto mb-4 shadow-lg shadow-blue-200 group-hover:scale-110 transition-transform duration-300">
                    <Icon size={20} className="text-white" />
                  </div>
                  <div className="text-[10px] font-black text-blue-400 tracking-widest mb-1">{step.num}</div>
                  <h3 className="font-bold text-gray-900 text-sm mb-1.5">{step.title}</h3>
                  <p className="text-gray-500 text-xs leading-relaxed">{step.desc}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── SECTION 6: COMPARISON TABLE ──────────────────────────────────────── */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <span className="inline-block bg-blue-100 text-blue-700 text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4">
              Why Choose Us
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900">
              Us vs{' '}
              <span className="text-blue-600">Others</span>
            </h2>
          </div>

          <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm">
            {/* Header */}
            <div className="grid grid-cols-3 bg-gray-900 text-white">
              <div className="p-4 text-sm font-bold text-gray-400">Feature</div>
              <div className="p-4 text-sm font-bold text-center text-blue-400 border-x border-gray-700">
                <div className="flex items-center justify-center gap-1.5">
                  <Star size={13} className="fill-blue-400" /> Our Institute
                </div>
              </div>
              <div className="p-4 text-sm font-bold text-center text-gray-400">Others</div>
            </div>

            {[
              { feature: 'Batch Size',             us: 'Max 20 Students',       them: '50–100 Students' },
              { feature: 'Live Industry Projects',  us: 'Every Course',          them: 'Rarely Included' },
              { feature: 'Placement Support',       us: 'Dedicated Cell',        them: 'Limited / None' },
              { feature: 'Certificate Recognition', us: 'Industry Accepted',     them: 'Varies' },
              { feature: 'Career Counselling',      us: 'Free — Always',         them: 'Paid Add-on' },
              { feature: 'Batch Flexibility',       us: 'Morning / Eve / Weekend', them: 'Fixed Slots Only' },
              { feature: 'Curriculum Updates',      us: 'Every 6 Months',        them: 'Rarely Updated' },
            ].map((row, i) => (
              <div key={i} className={`grid grid-cols-3 border-t border-gray-100 ${i % 2 === 0 ? 'bg-white' : 'bg-gray-50'} hover:bg-blue-50/40 transition-colors duration-200`}>
                <div className="p-4 text-sm font-semibold text-gray-700">{row.feature}</div>
                <div className="p-4 text-sm text-center font-bold text-blue-600 border-x border-gray-100 flex items-center justify-center gap-1.5">
                  <CheckCircle size={13} className="text-green-500 flex-shrink-0" />
                  {row.us}
                </div>
                <div className="p-4 text-sm text-center text-gray-400">{row.them}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 7: CTA ───────────────────────────────────────────────────── */}
      <section
        className="relative overflow-hidden py-20 px-6"
        style={{ background: 'linear-gradient(135deg, #0f172a 0%, #1e3a8a 50%, #0f172a 100%)' }}
      >
        <div className="absolute inset-0 opacity-[0.05]"
          style={{ backgroundImage: 'linear-gradient(#60a5fa 1px,transparent 1px),linear-gradient(90deg,#60a5fa 1px,transparent 1px)', backgroundSize: '40px 40px' }} />
        <div className="absolute top-0 left-1/4 w-64 h-64 rounded-full blur-3xl opacity-20"
          style={{ background: 'radial-gradient(circle, #3b82f6, transparent)' }} />
        <div className="absolute bottom-0 right-1/4 w-64 h-64 rounded-full blur-3xl opacity-15"
          style={{ background: 'radial-gradient(circle, #60a5fa, transparent)' }} />

        <div className="relative max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-yellow-400/10 border border-yellow-400/20 rounded-full px-4 py-1.5 mb-6">
            <span className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse" />
            <span className="text-yellow-300 text-sm font-medium">Free Counselling Available — Book Today</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-black text-white mb-5 leading-tight">
            Not Sure Where{' '}
            <span className="shimmer-text">to Start?</span>
          </h2>

          <p className="text-gray-300 text-lg mb-10 max-w-xl mx-auto">
            Our expert counsellors are here to help you choose the right service and
            chart the fastest path to your career goals — completely free of charge.
          </p>

          <div className="flex flex-wrap gap-4 justify-center mb-8">
            <a href="/registration"
              className="group px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/30 hover:-translate-y-0.5 flex items-center gap-2">
              Get Started Now
              <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="/contact"
              className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-bold rounded-xl border border-white/20 transition-all duration-300 hover:-translate-y-0.5 backdrop-blur">
              Book Free Counselling
            </a>
          </div>

          {/* Quick contact */}
          <div className="flex flex-wrap gap-4 justify-center">
            <a href="tel:+911234567890" className="flex items-center gap-2 text-sm text-blue-300 hover:text-blue-200 transition-colors font-medium">
              <Phone size={14} /> +91 12345 67890
            </a>
            <span className="text-gray-600 hidden sm:block">·</span>
            <a href="mailto:info@institute.com" className="flex items-center gap-2 text-sm text-blue-300 hover:text-blue-200 transition-colors font-medium">
              <Mail size={14} /> info@institute.com
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Services