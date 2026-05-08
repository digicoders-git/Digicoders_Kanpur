import React, { useState } from 'react'
import {
  User, Phone, Mail, BookOpen, MapPin, ChevronRight,
  CheckCircle, Star, Users, Award, Zap, Clock,
  GraduationCap, Briefcase, Monitor, Code
} from 'lucide-react'

// ── Data ─────────────────────────────────────────────────────────────────────

const courses = [
  { id: 'webdev',    label: 'Web Development',         icon: Monitor,      color: '#3b82f6' },
  { id: 'python',   label: 'Python Programming',       icon: Code,         color: '#f59e0b' },
  { id: 'java',     label: 'Java & Spring Boot',       icon: Code,         color: '#10b981' },
  { id: 'datascience', label: 'Data Science & ML',    icon: Zap,          color: '#8b5cf6' },
  { id: 'cloud',    label: 'Cloud Computing (AWS)',    icon: Monitor,      color: '#ef4444' },
  { id: 'cyber',    label: 'Cyber Security',           icon: Award,        color: '#06b6d4' },
  { id: 'android',  label: 'Android Development',      icon: Monitor,      color: '#f97316' },
  { id: 'summer',   label: 'Summer Training',          icon: GraduationCap,color: '#84cc16' },
]

const branches = [
  { id: 'kanpur',   label: 'Kanpur (Head Office)' },
  { id: 'lucknow',  label: 'Lucknow Branch' },
  { id: 'online',   label: 'Online / Remote' },
]

const qualifications = [
  '10th / High School',
  '12th / Intermediate',
  'Diploma',
  'B.Tech / B.E.',
  'BCA / B.Sc IT',
  'MCA / M.Tech',
  'Other',
]

const perks = [
  { icon: Award,          label: 'ISO Certified Institute',     color: '#3b82f6' },
  { icon: Users,          label: 'Small Batch — Personal Attention', color: '#f59e0b' },
  { icon: Briefcase,      label: 'Placement Assistance',        color: '#10b981' },
  { icon: GraduationCap,  label: 'Industry-Recognised Certificate', color: '#8b5cf6' },
  { icon: Clock,          label: 'Flexible Timings Available',  color: '#ef4444' },
  { icon: Star,           label: '7+ Years of Excellence',      color: '#f97316' },
]

const steps = [
  { num: '01', title: 'Fill the Form',       desc: 'Submit your basic details below.' },
  { num: '02', title: 'Counselling Call',    desc: 'Our team will call you within 24 hrs.' },
  { num: '03', title: 'Confirm & Enroll',   desc: 'Choose your batch and get started!' },
]

// ── Component ─────────────────────────────────────────────────────────────────

const Registration = () => {
  const [form, setForm] = useState({
    name: '', phone: '', email: '',
    course: '', branch: '', qualification: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [focused, setFocused] = useState('')
  const [selectedCourse, setSelectedCourse] = useState('')

  const handle = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  const inputBase =
    'w-full bg-gray-50 border rounded-xl px-4 py-3 text-sm text-gray-800 outline-none transition-all duration-200 placeholder-gray-400'
  const inputStyle = (name) =>
    focused === name
      ? `${inputBase} border-blue-500 bg-white ring-2 ring-blue-100`
      : `${inputBase} border-gray-200 hover:border-gray-300`

  return (
    <div className="bg-white min-h-screen font-sans">

      {/* ── SECTION 1: HERO ──────────────────────────────────────────────────── */}
       
      <section className="relative overflow-hidden pt-0 pb-0">

        {/* === Background Image === */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1400&q=80')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center 30%',
            filter: 'brightness(0.32) saturate(1.1)',
          }}
        />

        {/* Dark gradient overlay — top & bottom */}
        {/* <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(180deg, rgba(3,8,26,.75) 0%, rgba(3,8,26,.42) 45%, rgba(3,8,26,.85) 100%)',
          }}
        /> */}

        {/* ── CONTENT ── */}
        <div className="relative max-w-4xl mx-auto px-6 py-5 flex flex-col items-center text-center gap-7" style={{ zIndex: 2 }}>

          {/* Live badge */}
          <div
            className="hero-anim flex items-center gap-2 rounded-full px-5 py-2"
            style={{
              background: 'rgba(255,255,255,0.08)',
              border: '0.5px solid rgba(99,102,241,0.45)',
              backdropFilter: 'blur(8px)',
            }}
          >
            <span
              className="w-2 h-2 rounded-full bg-green-400"
              style={{ animation: 'pulse 1.8s ease-in-out infinite' }}
            />
            <span className="text-green-300 text-xs font-semibold tracking-widest uppercase">
              Admissions Open · Next Batch Starting Soon
            </span>
          </div>

          {/* Eyebrow */}
          <div className="hero-anim-1 flex items-center gap-3">
            <div
              className="w-8 h-px"
              style={{ background: 'linear-gradient(90deg, transparent, #6366f1)' }}
            />
            <span className="text-indigo-300 text-xs font-semibold tracking-widest uppercase">
              Professional IT Training Institute
            </span>
            <div
              className="w-8 h-px"
              style={{ background: 'linear-gradient(90deg, #6366f1, transparent)' }}
            />
          </div>

          {/* Headline */}
          <div className="hero-anim-1">
            <h1
              className="font-black text-white leading-tight mb-4"
              style={{
                fontSize: 'clamp(32px, 5vw, 54px)',
                letterSpacing: '-0.02em',
                textShadow: '0 2px 24px rgba(0,0,0,0.6)',
              }}
            >
              Launch Your<br />
              <span className="shimmer-text">Tech Career</span> with Experts
            </h1>
            <p
              className="text-slate-300 leading-relaxed mx-auto"
              style={{
                fontSize: '15px',
                maxWidth: '500px',
                textShadow: '0 1px 10px rgba(0,0,0,0.7)',
              }}
            >
              Industry-led training in Web Dev, Python, Cloud &amp; Data Science.
              <br />Live projects · Expert mentors · Placement guaranteed.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="hero-anim-2 flex flex-wrap gap-3 justify-center">
            
            <a  href="#register"
              className="group flex items-center gap-2 font-bold text-white rounded-xl transition-all duration-300 hover:-translate-y-0.5"
              style={{
                padding: '13px 32px',
                background: 'linear-gradient(135deg, #2563eb, #4f46e5)',
                fontSize: '14px',
                boxShadow: '0 4px 24px rgba(79,70,229,0.5)',
              }}
            >
              Register Now — Free
              <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </a>
            
            <a  href="#demo"
              className="flex items-center gap-2 font-medium text-slate-200 rounded-xl transition-all duration-300 hover:-translate-y-0.5"
              style={{
                padding: '13px 28px',
                background: 'rgba(255,255,255,0.1)',
                fontSize: '14px',
                border: '0.5px solid rgba(255,255,255,0.25)',
                backdropFilter: 'blur(6px)',
              }}
            >
              Book Free Demo
            </a>
          </div>

          {/* Trust Badges */}
          {/* <div className="hero-anim-3 flex flex-wrap gap-2 justify-center">
            {[
              { icon: Award,     text: 'ISO Certified' },
              { icon: Users,     text: '1000+ Students Trained' },
              { icon: Briefcase, text: '500+ Placed' },
              { icon: Star,      text: '7+ Years Excellence' },
            ].map(({ icon: Icon, text }, i) => (
              <div
                key={i}
                className="flex items-center gap-2 rounded-xl px-3.5 py-2"
                style={{
                  background: 'rgba(0,0,0,0.38)',
                  border: '0.5px solid rgba(255,255,255,0.15)',
                  backdropFilter: 'blur(6px)',
                }}
              >
                <Icon size={13} className="text-slate-400" />
                <span className="text-slate-300 text-xs font-medium">{text}</span>
              </div>
            ))}
          </div> */}

          {/* Stat Cards */}
          {/* <div
            className="hero-anim-3 grid grid-cols-3 gap-3 w-full"
            style={{ maxWidth: '480px' }}
          >
            {[
              { num: '20+',  label: 'Courses',            color: '#38bdf8' },
              { num: '2',    label: 'Branches',            color: '#a78bfa' },
              { num: '100%', label: 'Placement Support',   color: '#34d399' },
            ].map((s, i) => (
              <div
                key={i}
                className="rounded-2xl py-5 text-center"
                style={{
                  background: 'rgba(0,0,0,0.42)',
                  border: '0.5px solid rgba(255,255,255,0.12)',
                  backdropFilter: 'blur(8px)',
                }}
              >
                <div
                  className="font-black leading-none"
                  style={{ fontSize: '26px', color: s.color }}
                >
                  {s.num}
                </div>
                <div className="text-xs text-slate-400 font-medium mt-1.5">{s.label}</div>
              </div>
            ))}
          </div> */}
        </div>

        {/* Wave bottom */}
        {/* <svg
          viewBox="0 0 1440 52"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full block"
          style={{ position: 'relative', zIndex: 2 }}
        >
          <path d="M0,28 C360,4 1080,56 1440,20 L1440,52 L0,52 Z" fill="rgba(255,255,255,0.05)" />
          <path d="M0,36 C400,8 1040,60 1440,28 L1440,52 L0,52 Z" fill="white" />
        </svg> */}
      </section>


      {/* ── SECTION 2: HOW IT WORKS ──────────────────────────────────────────── */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-block bg-blue-100 text-blue-700 text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4">
            How It Works
          </span>
          <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-12">
            3 Simple Steps to{' '}
            <span className="text-blue-600">Get Started</span>
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {steps.map((step, i) => (
              <div key={i} className="relative group">
                {/* connector line between steps */}
                {i < steps.length - 1 && (
                  <div className="hidden md:block absolute top-5 left-[calc(50%+32px)] right-0 h-[2px] bg-gradient-to-r from-blue-400 to-blue-100 rounded-full z-0" />
                )}
                <div className="relative z-10 bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                  style={{ animation: `fadeUp 0.5s ease both ${i * 0.12}s` }}>
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-600 to-blue-400 flex items-center justify-center mx-auto mb-4 shadow-md shadow-blue-200">
                    <span className="text-white font-black text-sm">{step.num}</span>
                  </div>
                  <h3 className="font-bold text-gray-900 text-base mb-2">{step.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 3: MAIN FORM + PERKS ─────────────────────────────────────── */}
      <section className="py-5 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <span className="inline-block bg-blue-100 text-blue-700 text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4">
              Registration Form
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900">
              Fill in Your{' '}
              <span className="text-blue-600">Details</span>
            </h2>
            <p className="text-gray-500 mt-2 text-sm">Our counsellor will contact you within 24 hours</p>
          </div>

          <div className="grid lg:grid-cols-5 gap-8 items-start">

            {/* ── FORM (3/5) ── */}
            <div className="lg:col-span-3">
              {submitted ? (
                <div className="bg-white rounded-3xl border border-gray-100 shadow-sm p-12 text-center"
                  style={{ animation: 'scaleIn 0.4s ease both' }}>
                  <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle size={40} className="text-green-500" />
                  </div>
                  <h3 className="text-2xl font-black text-gray-900 mb-3">Registration Successful!</h3>
                  <p className="text-gray-500 leading-relaxed mb-6">
                    Thank you, <strong>{form.name || 'Student'}</strong>! Our counselling team will
                    reach out to you on <strong>{form.phone || 'your number'}</strong> within 24 hours.
                  </p>
                  <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 rounded-xl px-5 py-3 text-sm text-blue-700 font-medium">
                    <Star size={14} className="fill-yellow-400 text-yellow-400" />
                    Welcome to the family — your journey starts here!
                  </div>
                  <button
                    onClick={() => { setSubmitted(false); setForm({ name:'',phone:'',email:'',course:'',branch:'',qualification:'',message:'' }); setSelectedCourse('') }}
                    className="mt-6 block w-full text-center text-sm text-gray-400 hover:text-blue-600 transition-colors"
                  >
                    ← Submit another registration
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="bg-white rounded-3xl border border-gray-100 shadow-sm p-8 space-y-5">

                  {/* Name + Phone */}
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-gray-600 mb-1.5 uppercase tracking-wide">Full Name *</label>
                      <div className="relative">
                        <User size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" />
                        <input
                          name="name" required placeholder="Your full name"
                          value={form.name} onChange={handle}
                          onFocus={() => setFocused('name')} onBlur={() => setFocused('')}
                          className={`${inputStyle('name')} pl-10`}
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-gray-600 mb-1.5 uppercase tracking-wide">Phone Number *</label>
                      <div className="relative">
                        <Phone size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" />
                        <input
                          name="phone" required placeholder="+91 XXXXX XXXXX" type="tel"
                          value={form.phone} onChange={handle}
                          onFocus={() => setFocused('phone')} onBlur={() => setFocused('')}
                          className={`${inputStyle('phone')} pl-10`}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-xs font-semibold text-gray-600 mb-1.5 uppercase tracking-wide">Email Address</label>
                    <div className="relative">
                      <Mail size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" />
                      <input
                        name="email" type="email" placeholder="you@email.com"
                        value={form.email} onChange={handle}
                        onFocus={() => setFocused('email')} onBlur={() => setFocused('')}
                        className={`${inputStyle('email')} pl-10`}
                      />
                    </div>
                  </div>

                  {/* Course picker */}
                  <div>
                    <label className="block text-xs font-semibold text-gray-600 mb-2 uppercase tracking-wide">Select Course *</label>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                      {courses.map((c) => {
                        const Icon = c.icon
                        const active = selectedCourse === c.id
                        return (
                          <button
                            type="button" key={c.id}
                            onClick={() => { setSelectedCourse(c.id); setForm({ ...form, course: c.label }) }}
                            className={`flex flex-col items-center gap-1.5 p-3 rounded-xl border text-xs font-semibold transition-all duration-200 ${
                              active
                                ? 'border-blue-500 bg-blue-50 text-blue-700 shadow-sm shadow-blue-100'
                                : 'border-gray-200 bg-white text-gray-600 hover:border-gray-300 hover:bg-gray-50'
                            }`}
                          >
                            <div className="w-8 h-8 rounded-lg flex items-center justify-center"
                              style={{ backgroundColor: active ? c.color + '22' : '#f3f4f6' }}>
                              <Icon size={15} style={{ color: active ? c.color : '#9ca3af' }} />
                            </div>
                            <span className="text-center leading-tight">{c.label}</span>
                          </button>
                        )
                      })}
                    </div>
                    {!selectedCourse && form.course === '' && (
                      <input type="text" required value={selectedCourse} onChange={() => {}} className="sr-only" tabIndex={-1} aria-hidden />
                    )}
                  </div>

                  {/* Qualification + Branch */}
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-gray-600 mb-1.5 uppercase tracking-wide">Qualification *</label>
                      <div className="relative">
                        <GraduationCap size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" />
                        <select
                          name="qualification" required
                          value={form.qualification} onChange={handle}
                          onFocus={() => setFocused('qualification')} onBlur={() => setFocused('')}
                          className={`${inputStyle('qualification')} pl-10 appearance-none`}
                        >
                          <option value="">Select qualification</option>
                          {qualifications.map(q => <option key={q} value={q}>{q}</option>)}
                        </select>
                      </div>
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-gray-600 mb-1.5 uppercase tracking-wide">Preferred Branch *</label>
                      <div className="relative">
                        <MapPin size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" />
                        <select
                          name="branch" required
                          value={form.branch} onChange={handle}
                          onFocus={() => setFocused('branch')} onBlur={() => setFocused('')}
                          className={`${inputStyle('branch')} pl-10 appearance-none`}
                        >
                          <option value="">Select branch</option>
                          {branches.map(b => <option key={b.id} value={b.label}>{b.label}</option>)}
                        </select>
                      </div>
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-xs font-semibold text-gray-600 mb-1.5 uppercase tracking-wide">Any Message (Optional)</label>
                    <textarea
                      name="message" rows={3} placeholder="Tell us about your goals or any queries..."
                      value={form.message} onChange={handle}
                      onFocus={() => setFocused('message')} onBlur={() => setFocused('')}
                      className={`${inputStyle('message')} resize-none`}
                    />
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    className="group w-full py-4 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-blue-200 hover:-translate-y-0.5 flex items-center justify-center gap-2 text-base"
                  >
                    Register Now — It's Free
                    <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
                  </button>

                  <p className="text-center text-xs text-gray-400">
                    No spam. No fees for registration. Our team will call you shortly.
                  </p>
                </form>
              )}
            </div>

            {/* ── PERKS SIDEBAR (2/5) ── */}
            <div className="lg:col-span-2 space-y-4">
              <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
                <h3 className="font-black text-gray-900 text-base mb-4">Why Choose Us?</h3>
                <div className="space-y-3">
                  {perks.map(({ icon: Icon, label, color }, i) => (
                    <div key={i} className="flex items-center gap-3 group">
                      <div className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0 transition-transform duration-200 group-hover:scale-110"
                        style={{ backgroundColor: color + '18' }}>
                        <Icon size={16} style={{ color }} />
                      </div>
                      <span className="text-sm text-gray-700 font-medium">{label}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Testimonial mini card */}
              <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl p-6 text-white relative overflow-hidden">
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-white/10 rounded-full" />
                <div className="absolute -bottom-6 -left-4 w-20 h-20 bg-white/5 rounded-full" />
                <div className="relative">
                  <div className="flex gap-0.5 mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={13} className="fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-sm text-blue-100 leading-relaxed mb-4 italic">
                    "I joined the Web Development course and got placed at a top MNC within 3 months
                    of completing the training. The faculty support was exceptional."
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl bg-white/20 flex items-center justify-center font-black text-sm">
                      AK
                    </div>
                    <div>
                      <div className="font-bold text-sm">Aryan Kapoor</div>
                      <div className="text-blue-200 text-xs">B.Tech Graduate, Placed at Infosys</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact nudge */}
              <div className="bg-gray-900 rounded-2xl p-5 text-white">
                <p className="text-xs text-gray-400 mb-1 font-medium uppercase tracking-wider">Need Help?</p>
                <p className="font-bold text-base mb-3">Talk to Our Counsellor</p>
                <a href="tel:+911234567890"
                  className="flex items-center gap-2 text-sm font-semibold text-blue-400 hover:text-blue-300 transition-colors">
                  <Phone size={14} /> +91 12345 67890
                </a>
                <a href="mailto:info@institute.com"
                  className="flex items-center gap-2 text-sm font-semibold text-blue-400 hover:text-blue-300 transition-colors mt-2">
                  <Mail size={14} /> info@institute.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 4: TRUST STRIP ───────────────────────────────────────────── */}
      <section className="py-14 px-6 bg-white">
        <div className="max-w-5xl mx-auto text-center">
          <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-6">Our Students Work At</p>
          <div className="flex flex-wrap justify-center gap-4">
            {['TCS', 'Infosys', 'Wipro', 'Accenture', 'HCL', 'Tech Mahindra', 'Cognizant', 'Capgemini'].map((co) => (
              <div key={co}
                className="px-5 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-sm font-bold text-gray-600 hover:border-blue-300 hover:text-blue-600 hover:bg-blue-50 transition-all duration-200 cursor-default">
                {co}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 5: BOTTOM CTA ────────────────────────────────────────────── */}
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
            <span className="text-yellow-300 text-sm font-medium">Limited Seats — Register Before They Fill Up</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-5 leading-tight">
            Don't Wait —{' '}
            <span className="shimmer-text">Start Today</span>
          </h2>
          <p className="text-gray-300 text-lg mb-10 max-w-xl mx-auto">
            Every day you wait is a day your career could have started. Join 1000+ students
            who chose to act — and never looked back.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a href="#top"
              className="group px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/30 hover:-translate-y-0.5 flex items-center gap-2">
              Register Now
              <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="/contact"
              className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-bold rounded-xl border border-white/20 transition-all duration-300 hover:-translate-y-0.5 backdrop-blur">
              Contact Us First
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Registration
