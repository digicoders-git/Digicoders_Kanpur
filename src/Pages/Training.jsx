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
    icon: Monitor, color: '#3b82f6', bg: '#eff6ff',
    title: 'Full Stack Web Development',
    desc: 'Master HTML, CSS, JavaScript, React, Node.js and build complete production-ready web applications.',
    duration: '4–6 Months', level: 'Beginner to Advanced', seats: 20, filled: 14,
    tags: ['HTML/CSS', 'React', 'Node.js', 'MongoDB'],
    highlights: ['Live Projects', 'Certificate', 'Placement Support'],
    rating: 4.9, reviews: 120,
  },
  {
    id: 2, cat: 'Programming',
    icon: Code, color: '#f59e0b', bg: '#fffbeb',
    title: 'Python Programming',
    desc: 'From basics to advanced Python — scripting, automation, OOP, and real-world project development.',
    duration: '2–3 Months', level: 'Beginner', seats: 18, filled: 10,
    tags: ['Core Python', 'OOP', 'File Handling', 'Libraries'],
    highlights: ['Hands-on Labs', 'Certificate', 'Interview Prep'],
    rating: 4.8, reviews: 95,
  },
  {
    id: 3, cat: 'Programming',
    icon: Code, color: '#10b981', bg: '#ecfdf5',
    title: 'Java & Spring Boot',
    desc: 'Core Java, OOP, data structures, and Spring Boot for backend development and enterprise apps.',
    duration: '3–5 Months', level: 'Beginner to Intermediate', seats: 15, filled: 9,
    tags: ['Core Java', 'Spring Boot', 'REST API', 'MySQL'],
    highlights: ['Live Projects', 'Certificate', 'Mock Interviews'],
    rating: 4.7, reviews: 88,
  },
  {
    id: 4, cat: 'Data',
    icon: BarChart2, color: '#8b5cf6', bg: '#f5f3ff',
    title: 'Data Science & Machine Learning',
    desc: 'Statistics, Python, data visualisation, ML algorithms and end-to-end data science pipelines.',
    duration: '4–6 Months', level: 'Intermediate', seats: 12, filled: 10,
    tags: ['Python', 'Pandas', 'ML', 'TensorFlow'],
    highlights: ['Real Datasets', 'Certificate', 'Portfolio Projects'],
    rating: 4.9, reviews: 74,
  },
  {
    id: 5, cat: 'Cloud & Security',
    icon: Cloud, color: '#ef4444', bg: '#fef2f2',
    title: 'Cloud Computing (AWS)',
    desc: 'AWS core services, cloud architecture, deployment, and preparation for AWS certification exams.',
    duration: '2–3 Months', level: 'Intermediate', seats: 15, filled: 7,
    tags: ['EC2', 'S3', 'Lambda', 'DevOps'],
    highlights: ['AWS Labs', 'Cert Prep', 'Real Cloud Projects'],
    rating: 4.8, reviews: 61,
  },
  {
    id: 6, cat: 'Cloud & Security',
    icon: Shield, color: '#06b6d4', bg: '#ecfeff',
    title: 'Cyber Security',
    desc: 'Ethical hacking, network security, penetration testing, and cybersecurity best practices.',
    duration: '3–4 Months', level: 'Intermediate', seats: 12, filled: 5,
    tags: ['Ethical Hacking', 'Network', 'Pen Testing', 'VAPT'],
    highlights: ['Labs & Tools', 'Certificate', 'Industry Projects'],
    rating: 4.7, reviews: 52,
  },
  {
    id: 7, cat: 'Mobile',
    icon: Smartphone, color: '#f97316', bg: '#fff7ed',
    title: 'Android Development',
    desc: 'Build native Android apps with Java/Kotlin, UI design, API integration, and Play Store deployment.',
    duration: '3–4 Months', level: 'Beginner to Intermediate', seats: 15, filled: 8,
    tags: ['Java/Kotlin', 'XML', 'Firebase', 'REST API'],
    highlights: ['App Projects', 'Certificate', 'Play Store Deploy'],
    rating: 4.6, reviews: 67,
  },
  {
    id: 8, cat: 'Data',
    icon: Database, color: '#64748b', bg: '#f8fafc',
    title: 'SQL & Database Management',
    desc: 'Relational databases, advanced SQL queries, stored procedures, indexing and performance tuning.',
    duration: '1–2 Months', level: 'Beginner', seats: 20, filled: 11,
    tags: ['MySQL', 'PostgreSQL', 'Queries', 'Stored Procs'],
    highlights: ['Practical Labs', 'Certificate', 'Interview Q&A'],
    rating: 4.7, reviews: 83,
  },
  {
    id: 9, cat: 'Special',
    icon: GraduationCap, color: '#84cc16', bg: '#f7fee7',
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
    icon: Layers, color: '#ec4899', bg: '#fdf2f8',
    title: 'UI/UX & Frontend Design',
    desc: 'Figma, design thinking, responsive CSS, Tailwind, and component-based frontend development.',
    duration: '2–3 Months', level: 'Beginner', seats: 15, filled: 6,
    tags: ['Figma', 'CSS', 'Tailwind', 'React'],
    highlights: ['Design Projects', 'Certificate', 'Portfolio'],
    rating: 4.8, reviews: 59,
  },
]

const stats = [
  { value: '20+', label: 'Courses Available',  icon: BookOpen,     color: '#3b82f6' },
  { value: '1000+', label: 'Students Trained', icon: Users,        color: '#f59e0b' },
  { value: '500+', label: 'Placed Successfully',icon: Briefcase,   color: '#10b981' },
  { value: '4.8★', label: 'Average Rating',    icon: Star,         color: '#8b5cf6' },
]

const whyUs = [
  { icon: Zap,         title: 'Live Projects',          desc: 'Every course includes real industry projects — not just theory exercises.',        color: '#3b82f6' },
  { icon: Users,       title: 'Small Batches',          desc: 'Maximum 20 students per batch for personalised attention and better learning.',     color: '#f59e0b' },
  { icon: Award,       title: 'Recognised Certificate', desc: 'Industry-recognised certificates accepted by top IT companies and recruiters.',     color: '#10b981' },
  { icon: Briefcase,   title: 'Placement Support',      desc: 'Dedicated placement cell with resume building, mock interviews, and HR connects.', color: '#8b5cf6' },
  { icon: TrendingUp,  title: 'Updated Curriculum',     desc: 'Syllabus updated every 6 months to stay aligned with current industry demands.',   color: '#ef4444' },
  { icon: Globe,       title: 'Flexible Timings',       desc: 'Morning, evening, and weekend batches available for working professionals.',        color: '#06b6d4' },
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
        .shimmer-text {
          background: linear-gradient(90deg, #1e40af, #3b82f6, #60a5fa, #3b82f6, #1e40af);
          background-size: 200% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: shimmer 3s linear infinite;
        }
      `}</style>

      {/* ── SECTION 1: HERO ──────────────────────────────────────────────────── */}
      <section
        className="relative overflow-hidden pt-20 pb-0"
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
              <BookOpen size={13} className="text-blue-300" />
              <span className="text-blue-300 text-sm font-medium">20+ Industry-Ready Courses</span>
            </div>

            <h1 className="text-5xl md:text-6xl font-black text-white leading-tight mb-5"
              style={{ animation: 'fadeUp 0.6s ease 0.1s both' }}>
              Learn. Build.{' '}
              <span className="shimmer-text">Get Placed.</span>
            </h1>

            <p className="text-gray-300 text-lg leading-relaxed mb-8 max-w-lg"
              style={{ animation: 'fadeUp 0.6s ease 0.2s both' }}>
              Hands-on training programs designed with industry experts — from beginner to job-ready
              in weeks, not years. Real projects, real skills, real results.
            </p>

            <div className="flex flex-wrap gap-3 justify-center md:justify-start"
              style={{ animation: 'fadeUp 0.6s ease 0.3s both' }}>
              {[
                { icon: Award,      text: 'Certified Trainers',  color: '#fbbf24' },
                { icon: Play,       text: 'Live Project Training',color: '#34d399' },
                { icon: Briefcase,  text: 'Placement Guarantee', color: '#60a5fa' },
              ].map(({ icon: Icon, text, color }, i) => (
                <div key={i} className="flex items-center gap-2 bg-white/10 backdrop-blur rounded-xl px-4 py-2 border border-white/10">
                  <Icon size={14} style={{ color }} />
                  <span className="text-white text-sm font-medium">{text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right — floating stat cards */}
          <div className="flex-shrink-0 relative w-64 h-64">
            <div className="absolute inset-0 rounded-full border-2 border-blue-400/25"
              style={{ animation: 'pulse-ring 2.2s ease-out infinite' }} />
            <div className="absolute inset-4 rounded-full bg-gradient-to-br from-blue-600 to-blue-900 flex items-center justify-center shadow-2xl"
              style={{ animation: 'floatY 4s ease-in-out infinite' }}>
              <div className="text-center">
                <Code size={36} className="text-white mx-auto mb-2" />
                <div className="text-3xl font-black text-white">20+</div>
                <div className="text-blue-200 text-xs font-medium mt-1">Courses</div>
              </div>
            </div>
            {[
              { label: '4.8★ Rating',   top: '-4%',  left: '55%', color: '#fbbf24', delay: '0s' },
              { label: '500+ Placed',   top: '78%',  left: '-8%', color: '#34d399', delay: '0.4s' },
              { label: 'Live Projects', top: '78%',  left: '58%', color: '#a78bfa', delay: '0.8s' },
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

      {/* ── SECTION 2: STATS BAR ─────────────────────────────────────────────── */}
      <section className="py-12 px-6 bg-white">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((s, i) => {
            const Icon = s.icon
            return (
              <div key={i} className="flex items-center gap-3 bg-gray-50 border border-gray-100 rounded-2xl p-4 hover:shadow-md transition-all duration-300 group"
                style={{ animation: `fadeUp 0.5s ease both ${i * 0.08}s` }}>
                <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform"
                  style={{ backgroundColor: s.color + '18' }}>
                  <Icon size={18} style={{ color: s.color }} />
                </div>
                <div>
                  <div className="font-black text-gray-900 text-lg leading-none">{s.value}</div>
                  <div className="text-xs text-gray-500 font-medium mt-0.5">{s.label}</div>
                </div>
              </div>
            )
          })}
        </div>
      </section>

      {/* ── SECTION 3: COURSE GRID ───────────────────────────────────────────── */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <span className="inline-block bg-blue-100 text-blue-700 text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4">
              Our Programs
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-2">
              Find Your{' '}
              <span className="text-blue-600">Perfect Course</span>
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
                className="w-full bg-white border border-gray-200 rounded-xl pl-10 pr-4 py-2.5 text-sm text-gray-700 outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-100 transition-all"
              />
            </div>

            {/* Category pills */}
            <div className="flex flex-wrap gap-2 justify-center">
              {categories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-2 rounded-xl text-xs font-bold transition-all duration-200 border ${
                    activeCategory === cat
                      ? 'bg-blue-600 text-white border-blue-600 shadow-md shadow-blue-200'
                      : 'bg-white text-gray-600 border-gray-200 hover:border-blue-300 hover:text-blue-600'
                  }`}
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
      <section className="py-16 px-6 bg-white" ref={whyRef}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <span className="inline-block bg-blue-100 text-blue-700 text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4">
              Why Train With Us
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900">
              Training That Actually{' '}
              <span className="text-blue-600">Works</span>
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
      <section className="py-14 px-6 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <span className="inline-block bg-blue-100 text-blue-700 text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4">
              Student Reviews
            </span>
            <h2 className="text-3xl font-black text-gray-900">
              What Our{' '}
              <span className="text-blue-600">Students Say</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-5">
            {[
              { name: 'Riya Sharma',  role: 'Placed at TCS',      course: 'Full Stack Web Dev', review: 'The live project experience was game-changing. I went from zero to full-stack developer in 5 months. The faculty is incredibly supportive.', rating: 5, initials: 'RS', color: '#3b82f6' },
              { name: 'Mohit Verma',  role: 'Placed at Infosys',  course: 'Python Programming', review: 'Best decision of my life. The course content was very practical and up-to-date. Got placed within 2 months of completing the course.', rating: 5, initials: 'MV', color: '#f59e0b' },
              { name: 'Priya Singh',  role: 'Placed at Wipro',    course: 'Data Science & ML',  review: 'Amazing mentors who know the industry inside out. The projects I built here made my resume stand out in every interview.', rating: 5, initials: 'PS', color: '#10b981' },
            ].map((t, i) => (
              <div key={i} className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 hover:shadow-md transition-all duration-300"
                style={{ animation: `fadeUp 0.5s ease both ${i * 0.1}s` }}>
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
            <span className="text-yellow-300 text-sm font-medium">New Batch Starting Soon — Limited Seats</span>
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
              className="group px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/30 hover:-translate-y-0.5 flex items-center gap-2">
              Enroll Now
              <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="/contact"
              className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-bold rounded-xl border border-white/20 transition-all duration-300 hover:-translate-y-0.5 backdrop-blur">
              Talk to Counsellor
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Training