import React, { useState, useEffect, useRef } from 'react'
import {
  Monitor, Code, Database, Cloud, Shield, Smartphone,
  BarChart2, Layers, ChevronRight, Clock, Users, Award,
  Star, CheckCircle, BookOpen, Zap, Play, Filter,
  GraduationCap, Briefcase, TrendingUp, Globe
} from 'lucide-react'

// ── Data ─────────────────────────────────────────────────────────────────────

const categories = ['All', 'Web', 'Programming', 'Data', 'Cloud & Security', 'Mobile', 'Special']

const courses = [
  {
    id: 1, cat: 'Web',
    icon: Monitor, color: '#ff8c00', bg: '#fff7ed',
    title: 'Full Stack Web Development',
    desc: 'Master HTML, CSS, JavaScript, React, Node.js and build complete production-ready web applications.',
    duration: '4–6 Months', level: 'Beginner to Advanced', seats: 20, filled: 14,
    tags: ['HTML/CSS', 'React', 'Node.js', 'MongoDB'],
    highlights: ['Live Projects', 'Certificate', 'Placement Support'],
    rating: 4.9, reviews: 120,
  },
  {
    id: 2, cat: 'Programming',
    icon: Code, color: '#2e7d32', bg: '#f0fdf4',
    title: 'Python Programming',
    desc: 'From basics to advanced Python — scripting, automation, OOP, and real-world project development.',
    duration: '2–3 Months', level: 'Beginner', seats: 18, filled: 10,
    tags: ['Core Python', 'OOP', 'File Handling', 'Libraries'],
    highlights: ['Hands-on Labs', 'Certificate', 'Interview Prep'],
    rating: 4.8, reviews: 95,
  },
  {
    id: 3, cat: 'Programming',
    icon: Code, color: '#ff8c00', bg: '#fff7ed',
    title: 'Java & Spring Boot',
    desc: 'Core Java, OOP, data structures, and Spring Boot for backend development and enterprise apps.',
    duration: '3–5 Months', level: 'Beginner to Intermediate', seats: 15, filled: 9,
    tags: ['Core Java', 'Spring Boot', 'REST API', 'MySQL'],
    highlights: ['Live Projects', 'Certificate', 'Mock Interviews'],
    rating: 4.7, reviews: 88,
  },
  {
    id: 4, cat: 'Data',
    icon: BarChart2, color: '#2e7d32', bg: '#f0fdf4',
    title: 'Data Science & Machine Learning',
    desc: 'Statistics, Python, data visualisation, ML algorithms and end-to-end data science pipelines.',
    duration: '4–6 Months', level: 'Intermediate', seats: 12, filled: 10,
    tags: ['Python', 'Pandas', 'ML', 'TensorFlow'],
    highlights: ['Real Datasets', 'Certificate', 'Portfolio Projects'],
    rating: 4.9, reviews: 74,
  },
  {
    id: 5, cat: 'Cloud & Security',
    icon: Cloud, color: '#ff8c00', bg: '#fff7ed',
    title: 'Cloud Computing (AWS)',
    desc: 'AWS core services, cloud architecture, deployment, and preparation for AWS certification exams.',
    duration: '2–3 Months', level: 'Intermediate', seats: 15, filled: 7,
    tags: ['EC2', 'S3', 'Lambda', 'DevOps'],
    highlights: ['AWS Labs', 'Cert Prep', 'Real Cloud Projects'],
    rating: 4.8, reviews: 61,
  },
  {
    id: 6, cat: 'Cloud & Security',
    icon: Shield, color: '#2e7d32', bg: '#f0fdf4',
    title: 'Cyber Security',
    desc: 'Ethical hacking, network security, penetration testing, and cybersecurity best practices.',
    duration: '3–4 Months', level: 'Intermediate', seats: 12, filled: 5,
    tags: ['Ethical Hacking', 'Network', 'Pen Testing', 'VAPT'],
    highlights: ['Labs & Tools', 'Certificate', 'Industry Projects'],
    rating: 4.7, reviews: 52,
  },
  {
    id: 7, cat: 'Mobile',
    icon: Smartphone, color: '#ff8c00', bg: '#fff7ed',
    title: 'Android Development',
    desc: 'Build native Android apps with Java/Kotlin, UI design, API integration, and Play Store deployment.',
    duration: '3–4 Months', level: 'Beginner to Intermediate', seats: 15, filled: 8,
    tags: ['Java/Kotlin', 'XML', 'Firebase', 'REST API'],
    highlights: ['App Projects', 'Certificate', 'Play Store Deploy'],
    rating: 4.6, reviews: 67,
  },
  {
    id: 8, cat: 'Data',
    icon: Database, color: '#2e7d32', bg: '#f0fdf4',
    title: 'SQL & Database Management',
    desc: 'Relational databases, advanced SQL queries, stored procedures, indexing and performance tuning.',
    duration: '1–2 Months', level: 'Beginner', seats: 20, filled: 11,
    tags: ['MySQL', 'PostgreSQL', 'Queries', 'Stored Procs'],
    highlights: ['Practical Labs', 'Certificate', 'Interview Q&A'],
    rating: 4.7, reviews: 83,
  },
  {
    id: 9, cat: 'Special',
    icon: GraduationCap, color: '#ff8c00', bg: '#fff7ed',
    title: 'Summer Training Program',
    desc: 'Intensive 4–6 week summer training with live industry projects and an internship letter.',
    duration: '4–6 Weeks', level: 'All Levels', seats: 25, filled: 18,
    tags: ['Any Tech Stack', 'Project', 'Certificate', 'Internship Letter'],
    highlights: ['Internship Letter', 'Industry Project', 'Certificate'],
    rating: 4.9, reviews: 210,
    badge: 'Popular',
  },
  {
    id: 10, cat: 'Web',
    icon: Layers, color: '#2e7d32', bg: '#f0fdf4',
    title: 'UI/UX & Frontend Design',
    desc: 'Figma, design thinking, responsive CSS, Tailwind, and component-based frontend development.',
    duration: '2–3 Months', level: 'Beginner', seats: 15, filled: 6,
    tags: ['Figma', 'CSS', 'Tailwind', 'React'],
    highlights: ['Design Projects', 'Certificate', 'Portfolio'],
    rating: 4.8, reviews: 59,
  },
]

const stats = [
  { value: '20+',   label: 'Courses Available',   icon: BookOpen,  color: '#ff8c00' },
  { value: '1000+', label: 'Students Trained',     icon: Users,     color: '#2e7d32' },
  { value: '500+',  label: 'Placed Successfully',  icon: Briefcase, color: '#ff8c00' },
  { value: '4.8★',  label: 'Average Rating',       icon: Star,      color: '#2e7d32' },
]

const whyUs = [
  { icon: Zap,        title: 'Live Projects',          desc: 'Every course includes real industry projects — not just theory exercises.',        color: '#ff8c00' },
  { icon: Users,      title: 'Small Batches',          desc: 'Maximum 20 students per batch for personalised attention and better learning.',     color: '#2e7d32' },
  { icon: Award,      title: 'Recognised Certificate', desc: 'Industry-recognised certificates accepted by top IT companies and recruiters.',     color: '#ff8c00' },
  { icon: Briefcase,  title: 'Placement Support',      desc: 'Dedicated placement cell with resume building, mock interviews, and HR connects.', color: '#2e7d32' },
  { icon: TrendingUp, title: 'Updated Curriculum',     desc: 'Syllabus updated every 6 months to stay aligned with current industry demands.',   color: '#ff8c00' },
  { icon: Globe,      title: 'Flexible Timings',       desc: 'Morning, evening, and weekend batches available for working professionals.',        color: '#2e7d32' },
]

// ── Sub-components ────────────────────────────────────────────────────────────

function CourseCard({ course, delay = 0 }) {
  const Icon = course.icon
  const pct = Math.round((course.filled / course.seats) * 100)
  const almostFull = pct >= 75

  return (
    <div
      className="group bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 overflow-hidden flex flex-col"
      style={{ animation: `fadeUp 0.5s ease both ${delay}s` }}
    >
      {/* Top color bar */}
      <div className="h-1 w-full" style={{ backgroundColor: course.color }} />

      <div className="p-5 flex flex-col flex-1">
        {/* Header */}
        <div className="flex items-start justify-between mb-3">
          <div className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
            style={{ backgroundColor: course.bg }}>
            <Icon size={20} style={{ color: course.color }} />
          </div>
          <div className="flex items-center gap-1.5 flex-shrink-0 ml-2">
            {course.badge && (
              <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-yellow-100 text-yellow-700 border border-yellow-200">
                {course.badge}
              </span>
            )}
            <span className="text-[10px] font-bold px-2 py-0.5 rounded-full border"
              style={{ backgroundColor: course.bg, color: course.color, borderColor: course.color + '40' }}>
              {course.level.split(' ')[0]}
            </span>
          </div>
        </div>

        <h3 className="font-black text-gray-900 text-base leading-snug mb-1.5">{course.title}</h3>
        <p className="text-gray-500 text-xs leading-relaxed mb-3 flex-1">{course.desc}</p>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 mb-3">
          {course.tags.map(t => (
            <span key={t} className="text-[10px] font-semibold px-2 py-0.5 rounded-lg bg-gray-100 text-gray-600">
              {t}
            </span>
          ))}
        </div>

        {/* Highlights */}
        <div className="space-y-1 mb-4">
          {course.highlights.map(h => (
            <div key={h} className="flex items-center gap-1.5 text-xs text-gray-600">
              <CheckCircle size={11} style={{ color: course.color }} className="flex-shrink-0" />
              {h}
            </div>
          ))}
        </div>

        {/* Seats progress */}
        <div className="mb-4">
          <div className="flex justify-between text-[10px] font-semibold text-gray-500 mb-1">
            <span>Seats Filled</span>
            <span style={{ color: almostFull ? '#ef4444' : course.color }}>{course.filled}/{course.seats}</span>
          </div>
          <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden">
            <div className="h-full rounded-full transition-all duration-700"
              style={{ width: `${pct}%`, backgroundColor: almostFull ? '#ef4444' : course.color }} />
          </div>
          {almostFull && (
            <p className="text-[10px] text-red-500 font-semibold mt-0.5">Almost Full — Register Now!</p>
          )}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between pt-3 border-t border-gray-100">
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1 text-xs text-gray-500">
              <Clock size={11} />{course.duration}
            </div>
            <div className="flex items-center gap-1 text-xs text-gray-500">
              <Star size={11} className="fill-yellow-400 text-yellow-400" />
              {course.rating} ({course.reviews})
            </div>
          </div>
          <a href="/registration"
            className="flex items-center gap-1 text-xs font-bold px-3 py-1.5 rounded-lg text-white transition-all duration-200 hover:opacity-90 hover:scale-105"
            style={{ backgroundColor: course.color }}>
            Enroll <ChevronRight size={12} />
          </a>
        </div>
      </div>
    </div>
  )
}

// ── Main Page ─────────────────────────────────────────────────────────────────

const Training = () => {
  const [activeCategory, setActiveCategory] = useState('All')
  const [search, setSearch] = useState('')
  const whyRef = useRef(null)
  const [whyInView, setWhyInView] = useState(false)

  useEffect(() => {
    const o = new IntersectionObserver(([e]) => { if (e.isIntersecting) setWhyInView(true) }, { threshold: 0.1 })
    if (whyRef.current) o.observe(whyRef.current)
    return () => o.disconnect()
  }, [])

  const filtered = courses.filter(c => {
    const matchCat = activeCategory === 'All' || c.cat === activeCategory
    const matchSearch = c.title.toLowerCase().includes(search.toLowerCase()) ||
      c.tags.some(t => t.toLowerCase().includes(search.toLowerCase()))
    return matchCat && matchSearch
  })

  return (
    <div className="bg-white min-h-screen font-sans">

      <style>{`
        @keyframes fadeUp  { from { opacity:0; transform:translateY(20px); } to { opacity:1; transform:translateY(0); } }
        @keyframes ticker  { from { transform:translateX(0); } to { transform:translateX(-50%); } }
        .shimmer-text {
          background: linear-gradient(90deg, #ff8c00, #fbbf24, #ff8c00);
          background-size: 200% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: shimmerAnim 3s linear infinite;
        }
        @keyframes shimmerAnim { to { background-position: 200% center; } }
      `}</style>

      {/* ── SECTION 1: HERO ──────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden" style={{ background: '#0d1b2a' }}>

        {/* BG Image */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1400&q=80')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center 25%',
            filter: 'brightness(0.18) saturate(1.2)',
          }}
        />

        {/* Gradient overlay — navy tint */}
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(135deg, rgba(13,27,42,.97) 0%, rgba(13,50,30,.70) 70%, rgba(13,27,42,.92) 100%)' }}
        />

        {/* Left vertical glow line */}
        <div
          className="absolute left-0 top-0 w-[3px] h-full hidden md:block"
          style={{ background: 'linear-gradient(180deg, transparent, #ff8c00, #2e7d32, transparent)' }}
        />

        {/* MAIN CONTENT */}
        <div className="relative max-w-[1100px] mx-auto px-4 sm:px-6 lg:px-8" style={{ zIndex: 2 }}>
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] xl:grid-cols-[1fr_320px] gap-0">

            {/* ── LEFT: Content ── */}
            <div className="flex flex-col justify-center gap-4 sm:gap-5 py-12 sm:py-14 lg:py-8 lg:pr-10">

              {/* Eyebrow */}
              <div className="flex items-center gap-3" style={{ animation: 'fadeUp 0.5s ease 0.08s both' }}>
                <div className="w-[3px] h-6 sm:h-7 rounded-sm flex-shrink-0"
                  style={{ background: 'linear-gradient(180deg, #ff8c00, #2e7d32)' }} />
                <span className="text-[10px] sm:text-[11px] font-bold tracking-[.12em] sm:tracking-[.15em] uppercase"
                  style={{ color: '#ffb347' }}>
                  Professional IT Training Institute
                </span>
              </div>

              {/* Headline */}
              <div style={{ animation: 'fadeUp 0.5s ease 0.18s both' }}>
                <h1
                  className="font-black text-slate-100 leading-[1.1] m-0"
                  style={{ fontSize: 'clamp(30px, 5vw, 46px)', letterSpacing: '-0.02em' }}
                >
                  Learn. Build.<br />
                  <span className="shimmer-text">Get Placed.</span>
                </h1>
              </div>

              {/* Description */}
              <p
                className="text-slate-400 text-sm leading-[1.75] m-0 max-w-full sm:max-w-[480px] lg:max-w-[420px]"
                style={{ animation: 'fadeUp 0.5s ease 0.18s both' }}
              >
                Hands-on training programs designed with industry experts — from beginner
                to job-ready in weeks, not years. Real projects, real skills, real results.
              </p>

              {/* Feature pills */}
              <div className="flex flex-wrap gap-2" style={{ animation: 'fadeUp 0.5s ease 0.28s both' }}>
                {[
                  { dot: '#fbbf24', text: 'Certified Trainers' },
                  { dot: '#2e7d32', text: 'Live Project Training' },
                  { dot: '#ff8c00', text: 'Placement Guarantee' },
                ].map(({ dot, text }, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-2 rounded-full px-3 sm:px-3.5 py-1.5"
                    style={{ background: 'rgba(255,255,255,0.07)', border: '0.5px solid rgba(255,255,255,0.12)' }}
                  >
                    <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: dot }} />
                    <span className="text-slate-200 text-[11px] sm:text-xs font-medium">{text}</span>
                  </div>
                ))}
              </div>

              {/* CTAs */}
              <div className="flex gap-3" style={{ animation: 'fadeUp 0.5s ease 0.28s both' }}>
                <a href="#courses"
                  className="group flex items-center justify-center gap-2 font-bold text-white rounded-xl transition-all duration-300 hover:-translate-y-0.5 text-center"
                  style={{
                    padding: '12px 28px',
                    background: 'linear-gradient(135deg, #ff8c00, #e67e00)',
                    fontSize: '13px',
                    boxShadow: '0 4px 20px rgba(255,140,0,.4)',
                  }}
                >
                  Explore Courses
                  <ChevronRight size={15} className="group-hover:translate-x-1 transition-transform" />
                </a>
                <a href="#demo"
                  className="flex items-center justify-center font-medium text-slate-200 rounded-xl transition-all duration-300 hover:-translate-y-0.5 text-center"
                  style={{
                    padding: '12px 22px',
                    background: 'rgba(255,255,255,0.08)',
                    fontSize: '13px',
                    border: '0.5px solid rgba(255,255,255,0.2)',
                  }}
                >
                  Free Demo Class
                </a>
              </div>
            </div>

            {/* ── RIGHT: Course Preview Panel — desktop only ── */}
            <div className="hidden lg:flex items-center py-8 pl-5 relative">
              <div className="w-full flex flex-col gap-2.5">

                {/* Panel header */}
                <div className="flex items-center justify-between mb-1">
                  <span className="text-slate-400 text-[10px] font-bold tracking-widest uppercase">Top Courses</span>
                  <span className="text-[10px] font-semibold" style={{ color: '#ff8c00' }}>20+ Available →</span>
                </div>

                {/* Course mini cards */}
                {[
                  { title: 'Full Stack Web Dev',    dur: '4–6 Months', color: '#ff8c00', fill: 70 },
                  { title: 'Data Science & ML',     dur: '4–6 Months', color: '#2e7d32', fill: 83, badge: 'Hot' },
                  { title: 'Cloud Computing (AWS)', dur: '2–3 Months', color: '#ff8c00', fill: 47 },
                ].map((c, i) => (
                  <div
                    key={i}
                    className="rounded-xl p-2.5"
                    style={{
                      background: 'rgba(255,255,255,0.05)',
                      border: '0.5px solid rgba(255,255,255,0.1)',
                      animation: `fadeUp 0.4s ease both ${0.1 + i * 0.07}s`,
                    }}
                  >
                    <div className="flex items-center justify-between mb-1.5">
                      <div>
                        <div className="text-slate-100 text-[11px] font-bold leading-tight">{c.title}</div>
                        <div className="text-slate-500 text-[10px] mt-0.5">{c.dur}</div>
                      </div>
                      {c.badge && (
                        <span
                          className="text-[9px] font-bold rounded-full px-2 py-0.5 flex-shrink-0"
                          style={{
                            background: 'rgba(255,140,0,.15)',
                            color: '#ffb347',
                            border: '0.5px solid rgba(255,140,0,.3)',
                          }}
                        >
                          {c.badge}
                        </span>
                      )}
                    </div>
                    <div className="h-[2px] rounded-full overflow-hidden" style={{ background: 'rgba(255,255,255,0.08)' }}>
                      <div className="h-full rounded-full" style={{ width: `${c.fill}%`, backgroundColor: c.color }} />
                    </div>
                    <div className="flex justify-between mt-1">
                      <span className="text-slate-500 text-[9px]">Seats filled</span>
                      <span className="text-[9px] font-bold" style={{ color: c.color }}>{c.fill}%</span>
                    </div>
                  </div>
                ))}

                {/* View all */}
                <a href="#courses"
                  className="rounded-xl p-2.5 text-center block transition-all hover:opacity-80"
                  style={{
                    background: 'linear-gradient(135deg, rgba(255,140,0,.2), rgba(46,125,50,.2))',
                    border: '0.5px solid rgba(255,140,0,.35)',
                  }}
                >
                  <span className="text-[11px] font-bold" style={{ color: '#ffb347' }}>
                    View All 20+ Courses →
                  </span>
                </a>
              </div>
            </div>

            {/* ── MOBILE: Horizontal course scroll strip ── */}
            <div className="lg:hidden pb-8 -mx-4 px-4" style={{ animation: 'fadeUp 0.5s ease 0.45s both' }}>
              <div className="flex items-center justify-between mb-3">
                <span className="text-slate-400 text-[10px] font-bold tracking-widest uppercase">Popular Courses</span>
                <a href="#courses" className="text-[10px] font-semibold" style={{ color: '#ff8c00' }}>View All →</a>
              </div>
              <div className="flex gap-3 overflow-x-auto pb-2" style={{ scrollbarWidth: 'none' }}>
                {[
                  { title: 'Full Stack Web Dev', color: '#ff8c00', fill: 70,  dur: '4–6 Mo' },
                  { title: 'Data Science & ML',  color: '#2e7d32', fill: 83,  dur: '4–6 Mo', badge: 'Hot' },
                  { title: 'AWS Cloud',          color: '#ff8c00', fill: 47,  dur: '2–3 Mo' },
                  { title: 'Python',             color: '#2e7d32', fill: 56,  dur: '2–3 Mo' },
                  { title: 'Cyber Security',     color: '#ff8c00', fill: 42,  dur: '3–4 Mo' },
                ].map((c, i) => (
                  <div
                    key={i}
                    className="flex-shrink-0 rounded-xl p-3"
                    style={{ width: '140px', background: 'rgba(255,255,255,0.06)', border: '0.5px solid rgba(255,255,255,0.12)' }}
                  >
                    <div className="flex items-start justify-between mb-2">
                      <div className="w-[3px] rounded-full mr-2 mt-1 flex-shrink-0" style={{ minHeight: '28px', backgroundColor: c.color }} />
                      <div className="flex-1">
                        <div className="text-slate-100 text-[11px] font-bold leading-tight">{c.title}</div>
                        <div className="text-slate-500 text-[10px] mt-0.5">{c.dur}</div>
                      </div>
                      {c.badge && (
                        <span
                          className="text-[8px] font-bold rounded-full px-1.5 py-0.5 ml-1 flex-shrink-0"
                          style={{ background: 'rgba(255,140,0,.15)', color: '#ffb347', border: '0.5px solid rgba(255,140,0,.3)' }}
                        >
                          {c.badge}
                        </span>
                      )}
                    </div>
                    <div className="h-[2px] rounded-full overflow-hidden mt-2" style={{ background: 'rgba(255,255,255,0.08)' }}>
                      <div className="h-full rounded-full" style={{ width: `${c.fill}%`, backgroundColor: c.color }} />
                    </div>
                    <div className="text-right mt-1">
                      <span className="text-[9px] font-bold" style={{ color: c.color }}>{c.fill}% full</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>

        {/* Scrolling Tech Ticker */}
        <div
          className="relative overflow-hidden py-2"
          style={{
            zIndex: 2,
            borderTop: '0.5px solid rgba(255,255,255,0.07)',
            borderBottom: '0.5px solid rgba(255,255,255,0.07)',
            background: 'rgba(0,0,0,0.2)',
          }}
        >
          <div className="flex w-max" style={{ animation: 'ticker 18s linear infinite' }}>
            {[...Array(2)].map((_, repeat) =>
              ['React', 'Node.js', 'Python', 'Java', 'AWS', 'Data Science', 'Machine Learning',
                'Cyber Security', 'Android Dev', 'SQL', 'Spring Boot', 'TensorFlow', 'Docker', 'Figma',
              ].map((tech, i) => (
                <span
                  key={`${repeat}-${i}`}
                  className="text-slate-500 text-[11px] font-semibold whitespace-nowrap px-4 sm:px-5"
                  style={{ letterSpacing: '.05em' }}
                >
                  <span className="mr-4 sm:mr-5" style={{ color: '#ff8c0050' }}>◆</span>{tech}
                </span>
              ))
            )}
          </div>
        </div>
      </section>


      {/* ── SECTION 3: COURSE GRID ───────────────────────────────────────────── */}
      <section className="py-10 px-6 bg-gray-50" id="courses">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <span className="inline-block text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4"
              style={{ backgroundColor: '#fff7ed', color: '#ff8c00' }}>
              Our Programs
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-2">
              Find Your{' '}
              <span style={{ color: '#ff8c00' }}>Perfect Course</span>
            </h2>
            <p className="text-gray-500 text-sm">Filter by category or search by technology</p>
          </div>

          {/* Filter + Search bar */}
          <div className="flex flex-col sm:flex-row gap-3 mb-8 items-center">
            {/* Search */}
            <div className="relative flex-1 max-w-xs">
              <Filter size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search courses or tech..."
                value={search}
                onChange={e => setSearch(e.target.value)}
                className="w-full bg-white border border-gray-200 rounded-xl pl-10 pr-4 py-2.5 text-sm text-gray-700 outline-none transition-all"
                style={{}}
                onFocus={e => { e.target.style.borderColor = '#ff8c00'; e.target.style.boxShadow = '0 0 0 3px rgba(255,140,0,0.12)' }}
                onBlur={e => { e.target.style.borderColor = '#e5e7eb'; e.target.style.boxShadow = 'none' }}
              />
            </div>

            {/* Category pills */}
            <div className="flex flex-wrap gap-2 justify-center">
              {categories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-2 rounded-xl text-xs font-bold transition-all duration-200 border`}
                  style={activeCategory === cat ? {
                    background: 'linear-gradient(135deg, #ff8c00, #e67e00)',
                    color: 'white',
                    borderColor: '#ff8c00',
                    boxShadow: '0 4px 12px rgba(255,140,0,0.3)',
                  } : {
                    backgroundColor: 'white',
                    color: '#4b5563',
                    borderColor: '#e5e7eb',
                  }}
                  onMouseEnter={e => { if (activeCategory !== cat) { e.currentTarget.style.borderColor = '#ff8c00'; e.currentTarget.style.color = '#ff8c00' } }}
                  onMouseLeave={e => { if (activeCategory !== cat) { e.currentTarget.style.borderColor = '#e5e7eb'; e.currentTarget.style.color = '#4b5563' } }}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Grid */}
          {filtered.length === 0 ? (
            <div className="text-center py-16 text-gray-400">
              <BookOpen size={40} className="mx-auto mb-3 opacity-30" />
              <p className="font-semibold">No courses match your search.</p>
            </div>
          ) : (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {filtered.map((course, i) => (
                <CourseCard key={course.id} course={course} delay={i * 0.07} />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* ── SECTION 4: WHY US ────────────────────────────────────────────────── */}
      <section className="py-5 px-6 bg-white" ref={whyRef}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <span className="inline-block text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4"
              style={{ backgroundColor: '#f0fdf4', color: '#2e7d32' }}>
              Why Train With Us
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900">
              Training That Actually{' '}
              <span style={{ color: '#2e7d32' }}>Works</span>
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {whyUs.map((w, i) => {
              const Icon = w.icon
              return (
                <div key={i}
                  className="group border border-gray-100 rounded-2xl p-6 bg-white hover:shadow-xl hover:-translate-y-1 transition-all duration-300 relative overflow-hidden"
                  style={whyInView ? { animation: `fadeUp 0.5s ease both ${i * 0.08}s`, opacity: 0 } : { opacity: 0 }}>
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-400 rounded-2xl"
                    style={{ backgroundColor: w.color + '08' }} />
                  <div className="relative">
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300"
                      style={{ backgroundColor: w.color + '18' }}>
                      <Icon size={22} style={{ color: w.color }} />
                    </div>
                    <h3 className="font-bold text-gray-900 text-base mb-2">{w.title}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed">{w.desc}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── SECTION 5: TESTIMONIAL STRIP ─────────────────────────────────────── */}
      <section className="py-8 px-6 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <span className="inline-block text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4"
              style={{ backgroundColor: '#fff7ed', color: '#ff8c00' }}>
              Student Reviews
            </span>
            <h2 className="text-3xl font-black text-gray-900">
              What Our{' '}
              <span style={{ color: '#ff8c00' }}>Students Say</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-5">
            {[
              { name: 'Riya Sharma', role: 'Placed at TCS',     course: 'Full Stack Web Dev', review: 'The live project experience was game-changing. I went from zero to full-stack developer in 5 months. The faculty is incredibly supportive.', rating: 5, initials: 'RS', color: '#ff8c00' },
              { name: 'Mohit Verma', role: 'Placed at Infosys', course: 'Python Programming', review: 'Best decision of my life. The course content was very practical and up-to-date. Got placed within 2 months of completing the course.', rating: 5, initials: 'MV', color: '#2e7d32' },
              { name: 'Priya Singh', role: 'Placed at Wipro',   course: 'Data Science & ML',  review: 'Amazing mentors who know the industry inside out. The projects I built here made my resume stand out in every interview.', rating: 5, initials: 'PS', color: '#ff8c00' },
            ].map((t, i) => (
              <div key={i} className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 hover:shadow-md transition-all duration-300 relative overflow-hidden"
                style={{ animation: `fadeUp 0.5s ease both ${i * 0.1}s` }}>
                {/* top accent */}
                <div className="absolute top-0 left-0 right-0 h-0.5" style={{ backgroundColor: t.color }} />
                <div className="flex gap-0.5 mb-3">
                  {[...Array(t.rating)].map((_, j) => (
                    <Star key={j} size={13} className="fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-600 text-sm leading-relaxed mb-4 italic">"{t.review}"</p>
                <div className="flex items-center gap-3 pt-3 border-t border-gray-100">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center font-black text-sm text-white flex-shrink-0"
                    style={{ backgroundColor: t.color }}>
                    {t.initials}
                  </div>
                  <div>
                    <div className="font-bold text-gray-900 text-sm">{t.name}</div>
                    <div className="text-xs text-gray-400">{t.role} · {t.course}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 6: CTA ───────────────────────────────────────────────────── */}
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
            <span className="text-sm font-medium" style={{ color: '#ffb347' }}>New Batch Starting Soon — Limited Seats</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-5 leading-tight">
            Ready to{' '}
            <span className="shimmer-text">Begin Your Journey?</span>
          </h2>
          <p className="text-gray-300 text-lg mb-10 max-w-xl mx-auto">
            Pick a course, enroll today, and let our expert trainers guide you to
            your dream tech career — with placement support every step of the way.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a href="/registration"
              className="group px-8 py-4 text-white font-bold rounded-xl transition-all duration-300 hover:-translate-y-0.5 flex items-center gap-2"
              style={{ background: 'linear-gradient(135deg, #ff8c00, #e67e00)', boxShadow: '0 4px 15px rgba(255,140,0,0.4)' }}>
              Enroll Now
              <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="/contact"
              className="px-8 py-4 font-bold rounded-xl border transition-all duration-300 hover:-translate-y-0.5 text-white"
              style={{ backgroundColor: 'rgba(46,125,50,0.2)', borderColor: 'rgba(46,125,50,0.4)' }}
              onMouseEnter={e => e.currentTarget.style.backgroundColor = 'rgba(46,125,50,0.35)'}
              onMouseLeave={e => e.currentTarget.style.backgroundColor = 'rgba(46,125,50,0.2)'}>
              Talk to Counsellor
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Training
