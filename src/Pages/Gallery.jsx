import React, { useState, useEffect, useRef } from 'react'
import { X, ZoomIn, ChevronLeft, ChevronRight, Images, GraduationCap, Users, Award, Briefcase, Camera } from 'lucide-react'

// ── Brand Colors ──────────────────────────────────────────────────
// Orange  : #ff8c00  (primary CTA, active states)
// Green   : #2e7d32  (badges, secondary accent)
// Navy    : #0d1b2a  (dark backgrounds)

// ── Gallery Data ──────────────────────────────────────────────────
const categories = ['All', 'Campus Life', 'Training', 'Placements', 'Events', 'Batch Photos']

const galleryImages = [
  // ── Campus Life ──
  { id: 1,  cat: 'Campus Life',  src: 'https://placehold.co/600x400/0d1b2a/white?text=Campus+1',   alt: 'Our Main Campus',        span: 'col-span-2 row-span-2' },
  { id: 2,  cat: 'Campus Life',  src: 'https://placehold.co/400x300/ff8c00/white?text=Lab+Room',   alt: 'Computer Lab',           span: '' },
  { id: 3,  cat: 'Campus Life',  src: 'https://placehold.co/400x300/2e7d32/white?text=Library',    alt: 'Study Area',             span: '' },
  { id: 4,  cat: 'Campus Life',  src: 'https://placehold.co/600x300/1a2f1a/white?text=Classroom',  alt: 'Smart Classroom',        span: 'col-span-2' },
  { id: 5,  cat: 'Campus Life',  src: 'https://placehold.co/400x400/e65100/white?text=Reception',  alt: 'Reception Area',         span: 'row-span-2' },
  { id: 6,  cat: 'Campus Life',  src: 'https://placehold.co/400x300/0d1b2a/white?text=Canteen',    alt: 'Student Canteen',        span: '' },

  // ── Training ──
  { id: 7,  cat: 'Training',     src: 'https://placehold.co/600x400/0d1b2a/white?text=Web+Dev',    alt: 'Web Dev Batch',          span: 'col-span-2 row-span-2' },
  { id: 8,  cat: 'Training',     src: 'https://placehold.co/400x300/ff8c00/white?text=Python',     alt: 'Python Training',        span: '' },
  { id: 9,  cat: 'Training',     src: 'https://placehold.co/400x300/2e7d32/white?text=Java',       alt: 'Java Workshop',          span: '' },
  { id: 10, cat: 'Training',     src: 'https://placehold.co/400x300/1a2f1a/white?text=DataSci',    alt: 'Data Science Session',   span: '' },
  { id: 11, cat: 'Training',     src: 'https://placehold.co/400x500/e65100/white?text=AWS',        alt: 'AWS Cloud Training',     span: 'row-span-2' },
  { id: 12, cat: 'Training',     src: 'https://placehold.co/400x300/0d1b2a/white?text=Cyber+Sec',  alt: 'Cyber Security Lab',     span: '' },

  // ── Placements ──
  { id: 13, cat: 'Placements',   src: 'https://placehold.co/600x400/2e7d32/white?text=TCS+Drive',  alt: 'TCS Placement Drive',    span: 'col-span-2 row-span-2' },
  { id: 14, cat: 'Placements',   src: 'https://placehold.co/400x300/ff8c00/white?text=Infosys',    alt: 'Infosys Interview',      span: '' },
  { id: 15, cat: 'Placements',   src: 'https://placehold.co/400x300/0d1b2a/white?text=Wipro',      alt: 'Wipro Recruitment',      span: '' },
  { id: 16, cat: 'Placements',   src: 'https://placehold.co/400x400/1a2f1a/white?text=Offer+Ltr',  alt: 'Offer Letter Ceremony',  span: 'row-span-2' },
  { id: 17, cat: 'Placements',   src: 'https://placehold.co/600x300/e65100/white?text=HCL+Drive',  alt: 'HCL Campus Drive',       span: 'col-span-2' },
  { id: 18, cat: 'Placements',   src: 'https://placehold.co/400x300/2e7d32/white?text=Accenture',  alt: 'Accenture Selection',    span: '' },

  // ── Events ──
  { id: 19, cat: 'Events',       src: 'https://placehold.co/600x400/0d1b2a/white?text=Tech+Fest',  alt: 'Annual Tech Fest',       span: 'col-span-2 row-span-2' },
  { id: 20, cat: 'Events',       src: 'https://placehold.co/400x300/ff8c00/white?text=Seminar',    alt: 'Industry Seminar',       span: '' },
  { id: 21, cat: 'Events',       src: 'https://placehold.co/400x300/2e7d32/white?text=Workshop',   alt: 'Guest Lecture Workshop', span: '' },
  { id: 22, cat: 'Events',       src: 'https://placehold.co/400x500/1a2f1a/white?text=Hackathon',  alt: 'Hackathon Event',        span: 'row-span-2' },
  { id: 23, cat: 'Events',       src: 'https://placehold.co/400x300/e65100/white?text=Farewell',   alt: 'Farewell Ceremony',      span: '' },
  { id: 24, cat: 'Events',       src: 'https://placehold.co/600x300/0d1b2a/white?text=Convocation', alt: 'Convocation Day',       span: 'col-span-2' },

  // ── Batch Photos ──
  { id: 25, cat: 'Batch Photos', src: 'https://placehold.co/600x400/0d1b2a/white?text=Batch+2024', alt: 'Batch 2024',            span: 'col-span-2 row-span-2' },
  { id: 26, cat: 'Batch Photos', src: 'https://placehold.co/400x300/ff8c00/white?text=Web+Batch',  alt: 'Web Dev Batch 2024',    span: '' },
  { id: 27, cat: 'Batch Photos', src: 'https://placehold.co/400x300/2e7d32/white?text=Py+Batch',   alt: 'Python Batch 2023',     span: '' },
  { id: 28, cat: 'Batch Photos', src: 'https://placehold.co/400x400/1a2f1a/white?text=Batch+2023', alt: 'Batch 2023 Group',      span: 'row-span-2' },
  { id: 29, cat: 'Batch Photos', src: 'https://placehold.co/400x300/e65100/white?text=Java+Batch', alt: 'Java Batch 2024',       span: '' },
  { id: 30, cat: 'Batch Photos', src: 'https://placehold.co/600x300/0d1b2a/white?text=DS+Batch',   alt: 'Data Science Batch',    span: 'col-span-2' },
]

const catIcons = {
  'All':          Images,
  'Campus Life':  Camera,
  'Training':     GraduationCap,
  'Placements':   Briefcase,
  'Events':       Award,
  'Batch Photos': Users,
}

// ── category accent colors cycling through brand palette ──────────
const catColors = {
  'All':          '#ff8c00',
  'Campus Life':  '#0d1b2a',
  'Training':     '#2e7d32',
  'Placements':   '#ff8c00',
  'Events':       '#e65100',
  'Batch Photos': '#2e7d32',
}

// ── Main Component ────────────────────────────────────────────────
const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState('All')
  const [lightboxIndex,  setLightboxIndex]  = useState(null)
  const [heroVisible,    setHeroVisible]    = useState(false)
  const [gridVisible,    setGridVisible]    = useState(false)
  const gridRef = useRef(null)

  const filtered = activeCategory === 'All'
    ? galleryImages
    : galleryImages.filter(img => img.cat === activeCategory)

  useEffect(() => {
    const t = setTimeout(() => setHeroVisible(true), 80)
    return () => clearTimeout(t)
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setGridVisible(true) },
      { threshold: 0.05 }
    )
    if (gridRef.current) observer.observe(gridRef.current)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    setGridVisible(false)
    const t = setTimeout(() => setGridVisible(true), 80)
    return () => clearTimeout(t)
  }, [activeCategory])

  const openLightbox  = (index) => setLightboxIndex(index)
  const closeLightbox = () => setLightboxIndex(null)
  const prevImage     = () => setLightboxIndex(i => (i - 1 + filtered.length) % filtered.length)
  const nextImage     = () => setLightboxIndex(i => (i + 1) % filtered.length)

  useEffect(() => {
    const handler = (e) => {
      if (lightboxIndex === null) return
      if (e.key === 'ArrowLeft')  prevImage()
      if (e.key === 'ArrowRight') nextImage()
      if (e.key === 'Escape')     closeLightbox()
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [lightboxIndex, filtered.length])

  const countFor = (cat) =>
    cat === 'All' ? galleryImages.length : galleryImages.filter(img => img.cat === cat).length

  return (
    <div className="bg-white min-h-screen font-sans">
      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(24px); }
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
          0%   { transform: scale(1);   opacity: 0.5; }
          100% { transform: scale(1.6); opacity: 0; }
        }
        @keyframes floatY {
          0%, 100% { transform: translateY(0px); }
          50%       { transform: translateY(-10px); }
        }
        @keyframes shimmer {
          0%   { background-position: -200% center; }
          100% { background-position:  200% center; }
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: scale(0.96); }
          to   { opacity: 1; transform: scale(1); }
        }
        .shimmer-text {
          background: linear-gradient(90deg, #e65100, #ff8c00, #ffb74d, #ff8c00, #e65100);
          background-size: 200% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: shimmer 3s linear infinite;
        }
        .gallery-item img {
          transition: transform 0.5s cubic-bezier(0.25,0.46,0.45,0.94);
        }
        .gallery-item:hover img { transform: scale(1.07); }
        .gallery-item .overlay {
          opacity: 0;
          transition: opacity 0.3s ease;
        }
        .gallery-item:hover .overlay { opacity: 1; }
        .lightbox-backdrop { animation: fadeIn 0.2s ease forwards; }
      `}</style>

      {/* ══════════════════════════════════════════════════════
          HERO SECTION
          ══════════════════════════════════════════════════════ */}
      <section className="relative overflow-hidden pt-2 pb-0"
        style={{ background: 'linear-gradient(135deg, #0d1b2a 0%, #1a2f1a 50%, #0d1b2a 100%)' }}>

        {/* Dot grid */}
        <div className="absolute inset-0 opacity-[0.04]"
          style={{ backgroundImage: 'radial-gradient(circle, #ff8c00 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

        {/* Brand orbs */}
        <div className="absolute top-10 left-10 w-72 h-72 rounded-full blur-3xl opacity-20"
          style={{ background: 'radial-gradient(circle, #ff8c00, transparent)' }} />
        <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full blur-3xl opacity-15"
          style={{ background: 'radial-gradient(circle, #4caf50, transparent)' }} />

        <div className="relative max-w-6xl mx-auto px-6 py-16 flex flex-col md:flex-row items-center gap-12">

          {/* ── Left text ── */}
          <div className="flex-1 text-center md:text-left"
            style={{ animation: heroVisible ? 'slideRight 0.7s ease forwards' : 'none', opacity: heroVisible ? undefined : 0 }}>

            <div className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 mb-6 border"
              style={{ background: 'rgba(255,140,0,0.1)', borderColor: 'rgba(255,140,0,0.25)' }}>
              <Camera size={14} style={{ color: '#ffb74d' }} />
              <span className="text-sm font-medium" style={{ color: '#ffb74d' }}>Our Memories in Frames</span>
            </div>

            <h1 className="text-5xl md:text-6xl font-black text-white leading-tight mb-6">
              Life at{' '}
              <span className="shimmer-text">DigiCoders</span>
            </h1>

            <p className="text-gray-300 text-lg leading-relaxed mb-8 max-w-lg">
              From classrooms to career milestones — explore the moments that define
              our journey, our students, and our community.
            </p>

            <div className="flex flex-wrap gap-3 justify-center md:justify-start">
              {[
                { icon: Images,     label: `${galleryImages.length}+ Photos`, color: '#ff8c00' },
                { icon: Award,      label: 'Events & Drives',                  color: '#ffb74d' },
                { icon: Users,      label: '1000+ Students',                   color: '#81c784' },
              ].map(({ icon: Icon, label, color }) => (
                <div key={label}
                  className="flex items-center gap-2 rounded-xl px-4 py-2 border"
                  style={{ background: 'rgba(255,255,255,0.07)', borderColor: 'rgba(255,255,255,0.12)' }}>
                  <Icon size={14} style={{ color }} />
                  <span className="text-white text-sm font-medium">{label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* ── Right visual orb ── */}
          <div className="flex-shrink-0 relative w-72 h-72"
            style={{ animation: heroVisible ? 'slideLeft 0.8s ease forwards' : 'none', opacity: heroVisible ? undefined : 0 }}>

            {/* Pulse rings — orange + green */}
            <div className="absolute inset-0 rounded-full border-2"
              style={{ borderColor: 'rgba(255,140,0,0.35)', animation: 'pulse-ring 2s ease-out infinite' }} />
            <div className="absolute inset-0 rounded-full border"
              style={{ borderColor: 'rgba(76,175,80,0.25)', animation: 'pulse-ring 2s ease-out infinite 0.6s' }} />

            {/* Center orb — navy with orange glow */}
            <div className="absolute inset-4 rounded-full flex items-center justify-center shadow-2xl"
              style={{
                background: 'linear-gradient(135deg, #0d1b2a 0%, #1a2f1a 100%)',
                border: '2px solid rgba(255,140,0,0.3)',
                animation: 'floatY 4s ease-in-out infinite',
              }}>
              <div className="text-center">
                <Camera size={40} className="mx-auto mb-2" style={{ color: '#ff8c00' }} />
                <div className="text-2xl font-black text-white">{galleryImages.length}+</div>
                <div className="text-xs font-medium" style={{ color: '#ffb74d' }}>Memories</div>
              </div>
            </div>

            {/* Floating label chips */}
            {[
              { label: 'Campus Life',  top: '0%',  left: '58%', color: '#ff8c00' },
              { label: 'Placements',   top: '74%', left: '-5%', color: '#4caf50' },
              { label: 'Batch Photos', top: '74%', left: '58%', color: '#ffb74d' },
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
      </section>

      {/* ══════════════════════════════════════════════════════
          FILTER + GRID
          ══════════════════════════════════════════════════════ */}
      <section className="py-16 px-4 md:px-6 bg-white">
        <div className="max-w-7xl mx-auto">

          {/* Section label */}
          <div className="text-center mb-10">
            <span className="inline-block text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-3"
              style={{ background: '#fff3e0', color: '#e65100' }}>
              Browse Gallery
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900">
              Explore Our{' '}
              <span style={{ color: '#ff8c00' }}>Moments</span>
            </h2>
            <div className="mx-auto mt-3 h-[2px] w-36 rounded-full"
              style={{ background: 'linear-gradient(to right, #ff8c00, #2e7d32)' }} />
          </div>

          {/* Filter pills */}
          <div className="flex flex-wrap gap-3 justify-center mb-12">
            {categories.map((cat) => {
              const Icon    = catIcons[cat]
              const active  = activeCategory === cat
              const accent  = catColors[cat]
              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className="flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-sm transition-all duration-300 border"
                  style={active
                    ? { background: accent, color: 'white', borderColor: accent, transform: 'translateY(-2px)', boxShadow: `0 4px 14px ${accent}40` }
                    : { background: 'white', color: '#374151', borderColor: '#e5e7eb' }
                  }
                  onMouseEnter={e => { if (!active) { e.currentTarget.style.borderColor = accent; e.currentTarget.style.color = accent; e.currentTarget.style.transform = 'translateY(-2px)'; } }}
                  onMouseLeave={e => { if (!active) { e.currentTarget.style.borderColor = '#e5e7eb'; e.currentTarget.style.color = '#374151'; e.currentTarget.style.transform = 'translateY(0)'; } }}
                >
                  <Icon size={15} />
                  {cat}
                  <span
                    className="text-xs px-1.5 py-0.5 rounded-md font-bold"
                    style={active
                      ? { background: 'rgba(255,255,255,0.25)', color: 'white' }
                      : { background: '#f3f4f6', color: '#6b7280' }
                    }
                  >
                    {countFor(cat)}
                  </span>
                </button>
              )
            })}
          </div>

          {/* Masonry Grid */}
          <div
            ref={gridRef}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 auto-rows-[200px] gap-3"
          >
            {filtered.map((img, i) => (
              <div
                key={img.id}
                onClick={() => openLightbox(i)}
                className={`gallery-item relative overflow-hidden rounded-2xl cursor-pointer bg-gray-100 ${img.span}`}
                style={gridVisible
                  ? { animation: `fadeUp 0.45s ease forwards ${Math.min(i * 0.05, 0.8)}s`, opacity: 0 }
                  : { opacity: 0 }}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />

                {/* Hover overlay */}
                <div className="overlay absolute inset-0 flex flex-col justify-end p-4"
                  style={{ background: 'linear-gradient(to top, rgba(13,27,42,0.85) 0%, rgba(13,27,42,0.2) 60%, transparent 100%)' }}>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-white font-bold text-sm leading-tight">{img.alt}</p>
                      <p className="text-xs mt-0.5" style={{ color: '#ffb74d' }}>{img.cat}</p>
                    </div>
                    <div className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0"
                      style={{ background: 'rgba(255,140,0,0.3)', backdropFilter: 'blur(4px)' }}>
                      <ZoomIn size={16} className="text-white" />
                    </div>
                  </div>
                </div>

                {/* Category dot badge top-left */}
                <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full text-[10px] font-bold text-white"
                  style={{ background: catColors[img.cat] + 'cc', backdropFilter: 'blur(4px)' }}>
                  {img.cat}
                </div>
              </div>
            ))}
          </div>

          {/* Count line */}
          <div className="text-center mt-10">
            <p className="text-gray-400 text-sm">
              Showing{' '}
              <span className="font-bold" style={{ color: '#ff8c00' }}>{filtered.length}</span>
              {' '}photos
              {activeCategory !== 'All' && (
                <> in <span className="font-bold text-gray-700">{activeCategory}</span></>
              )}
            </p>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          LIGHTBOX
          ══════════════════════════════════════════════════════ */}
      {lightboxIndex !== null && (
        <div
          className="lightbox-backdrop fixed inset-0 z-50 flex items-center justify-center p-4"
          style={{ background: 'rgba(13,27,42,0.97)' }}
          onClick={closeLightbox}
        >
          {/* Close */}
          <button
            onClick={closeLightbox}
            className="absolute top-5 right-5 w-11 h-11 rounded-full flex items-center justify-center text-white transition-all duration-200 hover:scale-110 z-10 border"
            style={{ background: 'rgba(255,255,255,0.08)', borderColor: 'rgba(255,255,255,0.15)' }}
          >
            <X size={20} />
          </button>

          {/* Prev */}
          <button
            onClick={(e) => { e.stopPropagation(); prevImage() }}
            className="absolute left-4 md:left-8 w-12 h-12 rounded-full flex items-center justify-center text-white transition-all duration-200 hover:scale-110 z-10 border"
            style={{ background: 'rgba(255,140,0,0.12)', borderColor: 'rgba(255,140,0,0.3)' }}
            onMouseEnter={e => e.currentTarget.style.background = '#ff8c00'}
            onMouseLeave={e => e.currentTarget.style.background = 'rgba(255,140,0,0.12)'}
          >
            <ChevronLeft size={24} />
          </button>

          {/* Image */}
          <div
            className="relative max-w-5xl w-full max-h-[85vh] flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              key={lightboxIndex}
              src={filtered[lightboxIndex].src}
              alt={filtered[lightboxIndex].alt}
              className="max-h-[72vh] max-w-full rounded-2xl object-contain shadow-2xl"
              style={{ animation: 'fadeIn 0.2s ease forwards', border: '2px solid rgba(255,140,0,0.2)' }}
            />

            {/* Caption */}
            <div className="mt-4 text-center">
              <p className="text-white font-bold text-lg">{filtered[lightboxIndex].alt}</p>
              <p className="text-sm mt-1" style={{ color: '#ffb74d' }}>{filtered[lightboxIndex].cat}</p>
              <p className="text-xs mt-2 text-gray-500">{lightboxIndex + 1} / {filtered.length}</p>
            </div>
          </div>

          {/* Next */}
          <button
            onClick={(e) => { e.stopPropagation(); nextImage() }}
            className="absolute right-4 md:right-8 w-12 h-12 rounded-full flex items-center justify-center text-white transition-all duration-200 hover:scale-110 z-10 border"
            style={{ background: 'rgba(255,140,0,0.12)', borderColor: 'rgba(255,140,0,0.3)' }}
            onMouseEnter={e => e.currentTarget.style.background = '#ff8c00'}
            onMouseLeave={e => e.currentTarget.style.background = 'rgba(255,140,0,0.12)'}
          >
            <ChevronRight size={24} />
          </button>

          {/* Thumbnail strip */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 overflow-x-auto max-w-xs md:max-w-2xl px-2 pb-1"
            style={{ scrollbarWidth: 'none' }}>
            {filtered.map((img, i) => (
              <img
                key={img.id}
                src={img.src}
                alt={img.alt}
                onClick={(e) => { e.stopPropagation(); setLightboxIndex(i) }}
                className="h-12 w-16 object-cover rounded-lg flex-shrink-0 cursor-pointer transition-all duration-200"
                style={i === lightboxIndex
                  ? { outline: '2px solid #ff8c00', outlineOffset: '2px', opacity: 1, transform: 'scale(1.1)' }
                  : { opacity: 0.45 }}
              />
            ))}
          </div>
        </div>
      )}

      {/* ══════════════════════════════════════════════════════
          CTA SECTION
          ══════════════════════════════════════════════════════ */}
      <section className="relative overflow-hidden py-20 px-6"
        style={{ background: 'linear-gradient(135deg, #0d1b2a 0%, #1a2f1a 50%, #0d1b2a 100%)' }}>

        {/* Dot grid */}
        <div className="absolute inset-0 opacity-[0.04]"
          style={{ backgroundImage: 'radial-gradient(circle, #ff8c00 1px, transparent 1px)', backgroundSize: '32px 32px' }} />

        {/* Brand orbs */}
        <div className="absolute top-0 left-1/4 w-64 h-64 rounded-full opacity-15 pointer-events-none"
          style={{ background: 'radial-gradient(circle, #ff8c00, transparent)', filter: 'blur(60px)' }} />
        <div className="absolute bottom-0 right-1/4 w-64 h-64 rounded-full opacity-15 pointer-events-none"
          style={{ background: 'radial-gradient(circle, #4caf50, transparent)', filter: 'blur(60px)' }} />

        <div className="relative max-w-3xl mx-auto text-center">

          <div className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 mb-6 border"
            style={{ background: 'rgba(255,140,0,0.1)', borderColor: 'rgba(255,140,0,0.25)' }}>
            <span className="w-2 h-2 rounded-full animate-pulse" style={{ background: '#ff8c00' }} />
            <span className="text-sm font-medium" style={{ color: '#ffb74d' }}>Your Story Starts Here</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-black text-white mb-5 leading-tight">
            Be Part of Our{' '}
            <span className="shimmer-text">Next Chapter</span>
          </h2>

          <p className="text-gray-300 text-lg mb-10 max-w-xl mx-auto">
            These moments could be yours. Join DigiCoders and become part of a
            community that grows, learns, and succeeds together.
          </p>

          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href="/registration"
              className="group relative px-8 py-4 font-bold rounded-xl text-white transition-all duration-300 hover:-translate-y-0.5 flex items-center gap-2"
              style={{ background: '#ff8c00' }}
              onMouseEnter={e => e.currentTarget.style.background = '#e65100'}
              onMouseLeave={e => e.currentTarget.style.background = '#ff8c00'}
            >
              Register Now
              <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="/contact"
              className="px-8 py-4 font-bold rounded-xl text-white border transition-all duration-300 hover:-translate-y-0.5"
              style={{ background: 'rgba(76,175,80,0.12)', borderColor: 'rgba(76,175,80,0.35)', color: '#81c784' }}
              onMouseEnter={e => { e.currentTarget.style.background = '#4caf50'; e.currentTarget.style.color = 'white'; }}
              onMouseLeave={e => { e.currentTarget.style.background = 'rgba(76,175,80,0.12)'; e.currentTarget.style.color = '#81c784'; }}
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Gallery
