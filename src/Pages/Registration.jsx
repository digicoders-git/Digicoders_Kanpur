import React, { useState } from 'react'
import {
  User, Phone, Mail, BookOpen, MapPin, ChevronRight,
  CheckCircle, Star, Users, Award, Zap, Clock,
  GraduationCap, Briefcase, Monitor, Code
} from 'lucide-react'

// ── Data ─────────────────────────────────────────────────────────────────────

const courses = [
  { id: 'webdev',      label: 'Web Development',      icon: Monitor,       color: '#ff8c00' },
  { id: 'python',      label: 'Python Programming',    icon: Code,          color: '#2e7d32' },
  { id: 'java',        label: 'Java & Spring Boot',    icon: Code,          color: '#ff8c00' },
  { id: 'datascience', label: 'Data Science & ML',     icon: Zap,           color: '#2e7d32' },
  { id: 'cloud',       label: 'Cloud Computing (AWS)', icon: Monitor,       color: '#ff8c00' },
  { id: 'cyber',       label: 'Cyber Security',        icon: Award,         color: '#2e7d32' },
  { id: 'android',     label: 'Android Development',   icon: Monitor,       color: '#ff8c00' },
  { id: 'summer',      label: 'Summer Training',       icon: GraduationCap, color: '#2e7d32' },
]

const branches = [
  { id: 'kanpur',  label: 'Kanpur (Head Office)' },
  { id: 'lucknow', label: 'Lucknow Branch' },
  { id: 'online',  label: 'Online / Remote' },
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
  { icon: Award,         label: 'ISO Certified Institute',        color: '#ff8c00' },
  { icon: Users,         label: 'Small Batch — Personal Attention', color: '#2e7d32' },
  { icon: Briefcase,     label: 'Placement Assistance',           color: '#ff8c00' },
  { icon: GraduationCap, label: 'Industry-Recognised Certificate', color: '#2e7d32' },
  { icon: Clock,         label: 'Flexible Timings Available',     color: '#ff8c00' },
  { icon: Star,          label: '7+ Years of Excellence',         color: '#2e7d32' },
]

const steps = [
  { num: '01', title: 'Fill the Form',     desc: 'Submit your basic details below.' },
  { num: '02', title: 'Counselling Call',  desc: 'Our team will call you within 24 hrs.' },
  { num: '03', title: 'Confirm & Enroll', desc: 'Choose your batch and get started!' },
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
      ? `${inputBase} bg-white ring-2`
      : `${inputBase} border-gray-200 hover:border-gray-300`

  const inputInlineStyle = (name) =>
    focused === name
      ? { borderColor: '#ff8c00', boxShadow: '0 0 0 3px rgba(255,140,0,0.12)' }
      : {}

  return (
    <div className="bg-white min-h-screen font-sans">

      <style>{`
        @keyframes fadeUp   { from { opacity:0; transform:translateY(20px); } to { opacity:1; transform:translateY(0); } }
        @keyframes scaleIn  { from { opacity:0; transform:scale(0.95); } to { opacity:1; transform:scale(1); } }
        @keyframes pulse    { 0%,100% { opacity:1; } 50% { opacity:0.4; } }
        .shimmer-text {
          background: linear-gradient(90deg, #ff8c00, #fbbf24, #ff8c00);
          background-size: 200% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: shimmerAnim 3s linear infinite;
        }
        @keyframes shimmerAnim { to { background-position: 200% center; } }
        .hero-anim   { animation: fadeUp 0.5s ease both 0.1s; opacity:0; }
        .hero-anim-1 { animation: fadeUp 0.5s ease both 0.2s; opacity:0; }
        .hero-anim-2 { animation: fadeUp 0.5s ease both 0.35s; opacity:0; }
      `}</style>

      {/* ── SECTION 1: HERO ──────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden pt-0 pb-0">

        {/* Background Image */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1400&q=80')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center 30%',
            filter: 'brightness(0.28) saturate(1.1)',
          }}
        />

        {/* Navy overlay */}
        <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, rgba(13,27,42,0.7) 0%, rgba(13,27,42,0.5) 50%, rgba(13,27,42,0.7) 100%)' }} />

        {/* CONTENT */}
        <div className="relative max-w-4xl mx-auto px-6 py-5 flex flex-col items-center text-center gap-7" style={{ zIndex: 2 }}>

          {/* Live badge */}
          <div
            className="hero-anim flex items-center gap-2 rounded-full px-5 py-2"
            style={{
              background: 'rgba(255,255,255,0.08)',
              border: '0.5px solid rgba(255,140,0,0.45)',
              backdropFilter: 'blur(8px)',
            }}
          >
            <span className="w-2 h-2 rounded-full bg-green-400" style={{ animation: 'pulse 1.8s ease-in-out infinite' }} />
            <span className="text-green-300 text-xs font-semibold tracking-widest uppercase">
              Admissions Open · Next Batch Starting Soon
            </span>
          </div>

          {/* Eyebrow */}
          <div className="hero-anim-1 flex items-center gap-3">
            <div className="w-8 h-px" style={{ background: 'linear-gradient(90deg, transparent, #ff8c00)' }} />
            <span className="text-xs font-semibold tracking-widest uppercase" style={{ color: '#ffb347' }}>
              Professional IT Training Institute
            </span>
            <div className="w-8 h-px" style={{ background: 'linear-gradient(90deg, #ff8c00, transparent)' }} />
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
              style={{ fontSize: '15px', maxWidth: '500px', textShadow: '0 1px 10px rgba(0,0,0,0.7)' }}
            >
              Industry-led training in Web Dev, Python, Cloud &amp; Data Science.
              <br />Live projects · Expert mentors · Placement guaranteed.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="hero-anim-2 flex flex-wrap gap-3 justify-center">
            <a href="#register"
              className="group flex items-center gap-2 font-bold text-white rounded-xl transition-all duration-300 hover:-translate-y-0.5"
              style={{
                padding: '13px 32px',
                background: 'linear-gradient(135deg, #ff8c00, #e67e00)',
                fontSize: '14px',
                boxShadow: '0 4px 24px rgba(255,140,0,0.5)',
              }}
            >
              Register Now — Free
              <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="#demo"
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
        </div>
      </section>


      {/* ── SECTION 2: HOW IT WORKS ──────────────────────────────────────────── */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-block text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4"
            style={{ backgroundColor: '#fff7ed', color: '#ff8c00' }}>
            How It Works
          </span>
          <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-12">
            3 Simple Steps to{' '}
            <span style={{ color: '#ff8c00' }}>Get Started</span>
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {steps.map((step, i) => (
              <div key={i} className="relative group">
                {i < steps.length - 1 && (
                  <div className="hidden md:block absolute top-5 left-[calc(50%+32px)] right-0 h-[2px] rounded-full z-0"
                    style={{ background: 'linear-gradient(90deg, #ff8c00, #ff8c0030)' }} />
                )}
                <div className="relative z-10 bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                  style={{ animation: `fadeUp 0.5s ease both ${i * 0.12}s` }}>
                  <div className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 shadow-md"
                    style={{ background: 'linear-gradient(135deg, #ff8c00, #2e7d32)', boxShadow: '0 4px 12px rgba(255,140,0,0.3)' }}>
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
      <section className="py-5 px-6 bg-gray-50" id="register">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <span className="inline-block text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4"
              style={{ backgroundColor: '#f0fdf4', color: '#2e7d32' }}>
              Registration Form
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900">
              Fill in Your{' '}
              <span style={{ color: '#2e7d32' }}>Details</span>
            </h2>
            <p className="text-gray-500 mt-2 text-sm">Our counsellor will contact you within 24 hours</p>
          </div>

          <div className="grid lg:grid-cols-5 gap-8 items-start">

            {/* ── FORM (3/5) ── */}
            <div className="lg:col-span-3">
              {submitted ? (
                <div className="bg-white rounded-3xl border border-gray-100 shadow-sm p-12 text-center"
                  style={{ animation: 'scaleIn 0.4s ease both' }}>
                  <div className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6"
                    style={{ backgroundColor: '#f0fdf4' }}>
                    <CheckCircle size={40} style={{ color: '#2e7d32' }} />
                  </div>
                  <h3 className="text-2xl font-black text-gray-900 mb-3">Registration Successful!</h3>
                  <p className="text-gray-500 leading-relaxed mb-6">
                    Thank you, <strong>{form.name || 'Student'}</strong>! Our counselling team will
                    reach out to you on <strong>{form.phone || 'your number'}</strong> within 24 hours.
                  </p>
                  <div className="inline-flex items-center gap-2 rounded-xl px-5 py-3 text-sm font-medium"
                    style={{ backgroundColor: '#fff7ed', border: '1px solid #ff8c0030', color: '#ff8c00' }}>
                    <Star size={14} className="fill-yellow-400 text-yellow-400" />
                    Welcome to the family — your journey starts here!
                  </div>
                  <button
                    onClick={() => { setSubmitted(false); setForm({ name:'',phone:'',email:'',course:'',branch:'',qualification:'',message:'' }); setSelectedCourse('') }}
                    className="mt-6 block w-full text-center text-sm text-gray-400 transition-colors"
                    style={{}}
                    onMouseEnter={e => e.currentTarget.style.color = '#ff8c00'}
                    onMouseLeave={e => e.currentTarget.style.color = '#9ca3af'}
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
                          style={inputInlineStyle('name')}
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
                          style={inputInlineStyle('phone')}
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
                        style={inputInlineStyle('email')}
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
                              active ? 'shadow-sm' : 'border-gray-200 bg-white text-gray-600 hover:border-gray-300 hover:bg-gray-50'
                            }`}
                            style={active ? {
                              borderColor: c.color,
                              backgroundColor: c.color + '10',
                              color: c.color,
                            } : {}}
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
                          style={inputInlineStyle('qualification')}
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
                          style={inputInlineStyle('branch')}
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
                      style={inputInlineStyle('message')}
                    />
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    className="group w-full py-4 text-white font-bold rounded-xl transition-all duration-300 hover:-translate-y-0.5 flex items-center justify-center gap-2 text-base"
                    style={{
                      background: 'linear-gradient(135deg, #ff8c00, #e67e00)',
                      boxShadow: '0 4px 15px rgba(255,140,0,0.35)',
                    }}
                    onMouseEnter={e => e.currentTarget.style.boxShadow = '0 6px 20px rgba(255,140,0,0.5)'}
                    onMouseLeave={e => e.currentTarget.style.boxShadow = '0 4px 15px rgba(255,140,0,0.35)'}
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
              <div className="rounded-2xl p-6 text-white relative overflow-hidden"
                style={{ background: 'linear-gradient(135deg, #0d1b2a, #1a3a2a)' }}>
                <div className="absolute -top-4 -right-4 w-24 h-24 rounded-full" style={{ backgroundColor: 'rgba(255,140,0,0.1)' }} />
                <div className="absolute -bottom-6 -left-4 w-20 h-20 rounded-full" style={{ backgroundColor: 'rgba(46,125,50,0.08)' }} />
                {/* Orange top accent */}
                <div className="absolute top-0 left-0 right-0 h-1 rounded-t-2xl"
                  style={{ background: 'linear-gradient(90deg, #ff8c00, #2e7d32)' }} />
                <div className="relative">
                  <div className="flex gap-0.5 mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={13} className="fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-sm leading-relaxed mb-4 italic" style={{ color: 'rgba(255,255,255,0.75)' }}>
                    "I joined the Web Development course and got placed at a top MNC within 3 months
                    of completing the training. The faculty support was exceptional."
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl flex items-center justify-center font-black text-sm text-white"
                      style={{ background: 'linear-gradient(135deg, #ff8c00, #e67e00)' }}>
                      AK
                    </div>
                    <div>
                      <div className="font-bold text-sm text-white">Aryan Kapoor</div>
                      <div className="text-xs" style={{ color: 'rgba(255,255,255,0.5)' }}>B.Tech Graduate, Placed at Infosys</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact nudge */}
              <div className="rounded-2xl p-5 text-white" style={{ backgroundColor: '#0d1b2a' }}>
                <p className="text-xs text-gray-400 mb-1 font-medium uppercase tracking-wider">Need Help?</p>
                <p className="font-bold text-base mb-3">Talk to Our Counsellor</p>
                <a href="tel:+911234567890"
                  className="flex items-center gap-2 text-sm font-semibold transition-colors"
                  style={{ color: '#ff8c00' }}
                  onMouseEnter={e => e.currentTarget.style.color = '#ffb347'}
                  onMouseLeave={e => e.currentTarget.style.color = '#ff8c00'}>
                  <Phone size={14} /> +91 12345 67890
                </a>
                <a href="mailto:info@institute.com"
                  className="flex items-center gap-2 text-sm font-semibold transition-colors mt-2"
                  style={{ color: '#2e7d32' }}
                  onMouseEnter={e => e.currentTarget.style.color = '#4ade80'}
                  onMouseLeave={e => e.currentTarget.style.color = '#2e7d32'}>
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
                className="px-5 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-sm font-bold text-gray-600 transition-all duration-200 cursor-default"
                onMouseEnter={e => {
                  e.currentTarget.style.borderColor = '#ff8c00'
                  e.currentTarget.style.color = '#ff8c00'
                  e.currentTarget.style.backgroundColor = '#fff7ed'
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderColor = '#e5e7eb'
                  e.currentTarget.style.color = '#4b5563'
                  e.currentTarget.style.backgroundColor = '#f9fafb'
                }}>
                {co}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 5: BOTTOM CTA ────────────────────────────────────────────── */}
      <section
        className="relative overflow-hidden py-20 px-6"
        style={{ background: 'linear-gradient(135deg, #0d1b2a 0%, #1a3a2a 50%, #0d1b2a 100%)' }}
      >
        <div className="absolute inset-0 opacity-[0.05]"
          style={{ backgroundImage: 'linear-gradient(#ff8c00 1px,transparent 1px),linear-gradient(90deg,#ff8c00 1px,transparent 1px)', backgroundSize: '40px 40px' }} />
        <div className="absolute top-0 left-1/4 w-64 h-64 rounded-full blur-3xl opacity-20"
          style={{ background: 'radial-gradient(circle, #ff8c00, transparent)' }} />
        <div className="absolute bottom-0 right-1/4 w-64 h-64 rounded-full blur-3xl opacity-15"
          style={{ background: 'radial-gradient(circle, #2e7d32, transparent)' }} />

        <div className="relative max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 mb-6"
            style={{ backgroundColor: 'rgba(255,140,0,0.1)', border: '1px solid rgba(255,140,0,0.2)' }}>
            <span className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: '#ff8c00' }} />
            <span className="text-sm font-medium" style={{ color: '#ffb347' }}>Limited Seats — Register Before They Fill Up</span>
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
            <a href="#register"
              className="group px-8 py-4 text-white font-bold rounded-xl transition-all duration-300 hover:-translate-y-0.5 flex items-center gap-2"
              style={{ background: 'linear-gradient(135deg, #ff8c00, #e67e00)', boxShadow: '0 4px 15px rgba(255,140,0,0.4)' }}>
              Register Now
              <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="/contact"
              className="px-8 py-4 font-bold rounded-xl border transition-all duration-300 hover:-translate-y-0.5 text-white"
              style={{ backgroundColor: 'rgba(46,125,50,0.2)', borderColor: 'rgba(46,125,50,0.4)' }}
              onMouseEnter={e => e.currentTarget.style.backgroundColor = 'rgba(46,125,50,0.35)'}
              onMouseLeave={e => e.currentTarget.style.backgroundColor = 'rgba(46,125,50,0.2)'}>
              Contact Us First
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Registration
