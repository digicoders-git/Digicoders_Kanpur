import React, { useState, useEffect, useRef } from 'react'
import { X, ZoomIn, ChevronLeft, ChevronRight, Images, GraduationCap, Users, Award, Briefcase, Camera } from 'lucide-react'

// ── Gallery Data ──────────────────────────────────────────────────────────────
// Replace these placeholder URLs with your actual image imports or paths
// e.g. import img1 from '../../public/Images/gallery1.jpg'
// then use: src: img1

const categories = ['All', 'Campus Life', 'Training', 'Placements', 'Events', 'Batch Photos']

const galleryImages = [
  // ── Campus Life ──
  { id: 1,  cat: 'Campus Life',  src: 'https://placehold.co/600x400/1e3a5f/white?text=Campus+1',  alt: 'Our Main Campus',           span: 'col-span-2 row-span-2' },
  { id: 2,  cat: 'Campus Life',  src: 'https://placehold.co/400x300/3b82f6/white?text=Lab+Room',   alt: 'Computer Lab',              span: '' },
  { id: 3,  cat: 'Campus Life',  src: 'https://placehold.co/400x300/0f172a/white?text=Library',    alt: 'Study Area',                span: '' },
  { id: 4,  cat: 'Campus Life',  src: 'https://placehold.co/600x300/1e40af/white?text=Classroom',  alt: 'Smart Classroom',           span: 'col-span-2' },
  { id: 5,  cat: 'Campus Life',  src: 'https://placehold.co/400x400/164e63/white?text=Reception',  alt: 'Reception Area',            span: 'row-span-2' },
  { id: 6,  cat: 'Campus Life',  src: 'https://placehold.co/400x300/1e3a5f/white?text=Canteen',    alt: 'Student Canteen',           span: '' },

  // ── Training ──
  { id: 7,  cat: 'Training',     src: 'https://placehold.co/600x400/7c3aed/white?text=Web+Dev',    alt: 'Web Dev Batch',             span: 'col-span-2 row-span-2' },
  { id: 8,  cat: 'Training',     src: 'https://placehold.co/400x300/4f46e5/white?text=Python',     alt: 'Python Training',           span: '' },
  { id: 9,  cat: 'Training',     src: 'https://placehold.co/400x300/0e7490/white?text=Java',       alt: 'Java Workshop',             span: '' },
  { id: 10, cat: 'Training',     src: 'https://placehold.co/400x300/065f46/white?text=DataSci',    alt: 'Data Science Session',      span: '' },
  { id: 11, cat: 'Training',     src: 'https://placehold.co/400x500/92400e/white?text=AWS',        alt: 'AWS Cloud Training',        span: 'row-span-2' },
  { id: 12, cat: 'Training',     src: 'https://placehold.co/400x300/1e3a5f/white?text=Cyber+Sec',  alt: 'Cyber Security Lab',        span: '' },

  // ── Placements ──
  { id: 13, cat: 'Placements',   src: 'https://placehold.co/600x400/059669/white?text=TCS+Drive',  alt: 'TCS Placement Drive',       span: 'col-span-2 row-span-2' },
  { id: 14, cat: 'Placements',   src: 'https://placehold.co/400x300/1d4ed8/white?text=Infosys',    alt: 'Infosys Interview',         span: '' },
  { id: 15, cat: 'Placements',   src: 'https://placehold.co/400x300/7c3aed/white?text=Wipro',      alt: 'Wipro Recruitment',         span: '' },
  { id: 16, cat: 'Placements',   src: 'https://placehold.co/400x400/0f766e/white?text=Offer+Letter', alt: 'Offer Letter Ceremony',   span: 'row-span-2' },
  { id: 17, cat: 'Placements',   src: 'https://placehold.co/600x300/7e22ce/white?text=HCL+Drive',  alt: 'HCL Campus Drive',          span: 'col-span-2' },
  { id: 18, cat: 'Placements',   src: 'https://placehold.co/400x300/166534/white?text=Accenture',  alt: 'Accenture Selection',       span: '' },

  // ── Events ──
  { id: 19, cat: 'Events',       src: 'https://placehold.co/600x400/9f1239/white?text=Tech+Fest',  alt: 'Annual Tech Fest',          span: 'col-span-2 row-span-2' },
  { id: 20, cat: 'Events',       src: 'https://placehold.co/400x300/7c2d12/white?text=Seminar',    alt: 'Industry Seminar',          span: '' },
  { id: 21, cat: 'Events',       src: 'https://placehold.co/400x300/1e3a5f/white?text=Workshop',   alt: 'Guest Lecture Workshop',    span: '' },
  { id: 22, cat: 'Events',       src: 'https://placehold.co/400x500/065f46/white?text=Hackathon',  alt: 'Hackathon Event',           span: 'row-span-2' },
  { id: 23, cat: 'Events',       src: 'https://placehold.co/400x300/4338ca/white?text=Farewell',   alt: 'Farewell Ceremony',         span: '' },
  { id: 24, cat: 'Events',       src: 'https://placehold.co/600x300/0e7490/white?text=Convocation', alt: 'Convocation Day',          span: 'col-span-2' },

  // ── Batch Photos ──
  { id: 25, cat: 'Batch Photos', src: 'https://placehold.co/600x400/1e3a5f/white?text=Batch+2024', alt: 'Batch 2024',               span: 'col-span-2 row-span-2' },
  { id: 26, cat: 'Batch Photos', src: 'https://placehold.co/400x300/3b82f6/white?text=Web+Batch',  alt: 'Web Dev Batch 2024',       span: '' },
  { id: 27, cat: 'Batch Photos', src: 'https://placehold.co/400x300/7c3aed/white?text=Python+Batch', alt: 'Python Batch 2023',     span: '' },
  { id: 28, cat: 'Batch Photos', src: 'https://placehold.co/400x400/059669/white?text=Batch+2023', alt: 'Batch 2023 Group',         span: 'row-span-2' },
  { id: 29, cat: 'Batch Photos', src: 'https://placehold.co/400x300/0f172a/white?text=Java+Batch',  alt: 'Java Batch 2024',         span: '' },
  { id: 30, cat: 'Batch Photos', src: 'https://placehold.co/600x300/1d4ed8/white?text=DataSci+Batch', alt: 'Data Science Batch',   span: 'col-span-2' },
]

const catIcons = {
  'All':          Images,
  'Campus Life':  Camera,
  'Training':     GraduationCap,
  'Placements':   Briefcase,
  'Events':       Award,
  'Batch Photos': Users,
}

// ── Main Component ────────────────────────────────────────────────────────────
const Gallery = () => {
  const [activeCategory, setActiveCategory]   = useState('All')
  const [lightboxIndex,  setLightboxIndex]    = useState(null)
  const [heroVisible,    setHeroVisible]      = useState(false)
  const [gridVisible,    setGridVisible]      = useState(false)
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

  // Reset grid animation on category change
  useEffect(() => {
    setGridVisible(false)
    const t = setTimeout(() => setGridVisible(true), 80)
    return () => clearTimeout(t)
  }, [activeCategory])

  // Lightbox navigation
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

  // Count per category
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
          0%   { transform: scale(1);   opacity: 0.6; }
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
          background: linear-gradient(90deg, #1e40af, #3b82f6, #60a5fa, #3b82f6, #1e40af);
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
        .lightbox-backdrop {
          animation: fadeIn 0.2s ease forwards;
        }
      `}</style>

      {/* ── SECTION 1: HERO ───────────────────────────────────────────────── */}
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

          {/* Left */}
          <div className="flex-1 text-center md:text-left"
            style={{ animation: heroVisible ? 'slideRight 0.7s ease forwards' : 'none', opacity: heroVisible ? undefined : 0 }}>

            <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-400/20 rounded-full px-4 py-1.5 mb-6">
              <Camera size={14} className="text-blue-300" />
              <span className="text-blue-300 text-sm font-medium">Our Memories in Frames</span>
            </div>

            <h1 className="text-5xl md:text-6xl font-black text-white leading-tight mb-6">
              Life at{' '}
              <span className="shimmer-text">DigiCoders</span>
            </h1>

            <p className="text-gray-300 text-lg leading-relaxed mb-8 max-w-lg">
              From classrooms to career milestones — explore the moments that define
              our journey, our students, and our community.
            </p>

            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur rounded-xl px-4 py-2 border border-white/10">
                <Images size={14} className="text-blue-300" />
                <span className="text-white text-sm font-medium">{galleryImages.length}+ Photos</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur rounded-xl px-4 py-2 border border-white/10">
                <Award size={14} className="text-yellow-300" />
                <span className="text-white text-sm font-medium">Events & Drives</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur rounded-xl px-4 py-2 border border-white/10">
                <Users size={14} className="text-green-300" />
                <span className="text-white text-sm font-medium">1000+ Students</span>
              </div>
            </div>
          </div>

          {/* Right visual */}
          <div className="flex-shrink-0 relative w-72 h-72"
            style={{ animation: heroVisible ? 'slideLeft 0.8s ease forwards' : 'none', opacity: heroVisible ? undefined : 0 }}>
            <div className="absolute inset-0 rounded-full border-2 border-blue-400/30"
              style={{ animation: 'pulse-ring 2s ease-out infinite' }} />
            <div className="absolute inset-4 rounded-full bg-gradient-to-br from-blue-600 to-blue-800 flex items-center justify-center shadow-2xl"
              style={{ animation: 'floatY 4s ease-in-out infinite' }}>
              <div className="text-center">
                <Camera size={40} className="text-white mx-auto mb-2" />
                <div className="text-2xl font-black text-white">{galleryImages.length}+</div>
                <div className="text-blue-200 text-xs font-medium">Memories</div>
              </div>
            </div>
            {[
              { label: 'Campus Life',  top: '0%',  left: '58%', color: '#fbbf24' },
              { label: 'Placements',   top: '74%', left: '-5%', color: '#34d399' },
              { label: 'Batch Photos', top: '74%', left: '58%', color: '#a78bfa' },
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

        {/* Wave */}
        <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full block">
          <path d="M0,40 C360,0 1080,80 1440,20 L1440,60 L0,60 Z" fill="white" />
        </svg>
      </section>

      {/* ── SECTION 2: CATEGORY FILTER + GRID ────────────────────────────── */}
      <section className="py-16 px-4 md:px-6 bg-white">
        <div className="max-w-7xl mx-auto">

          {/* Filter pills */}
          <div className="flex flex-wrap gap-3 justify-center mb-12">
            {categories.map((cat) => {
              const Icon = catIcons[cat]
              const active = activeCategory === cat
              return (
                <button key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-sm transition-all duration-300 border ${
                    active
                      ? 'bg-blue-600 text-white border-blue-600 shadow-lg shadow-blue-500/25 -translate-y-0.5'
                      : 'bg-white text-gray-600 border-gray-200 hover:border-blue-300 hover:text-blue-600 hover:-translate-y-0.5'
                  }`}>
                  <Icon size={15} />
                  {cat}
                  <span className={`text-xs px-1.5 py-0.5 rounded-md font-bold ${
                    active ? 'bg-blue-500 text-white' : 'bg-gray-100 text-gray-500'
                  }`}>
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
                style={gridVisible ? { animation: `fadeUp 0.45s ease forwards ${Math.min(i * 0.05, 0.8)}s`, opacity: 0 } : { opacity: 0 }}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />

                {/* Hover overlay */}
                <div className="overlay absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex flex-col justify-end p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-white font-bold text-sm leading-tight">{img.alt}</p>
                      <p className="text-blue-300 text-xs mt-0.5">{img.cat}</p>
                    </div>
                    <div className="w-9 h-9 rounded-full bg-white/20 backdrop-blur flex items-center justify-center flex-shrink-0">
                      <ZoomIn size={16} className="text-white" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Image count */}
          <div className="text-center mt-10">
            <p className="text-gray-400 text-sm">
              Showing <span className="font-bold text-blue-600">{filtered.length}</span> photos
              {activeCategory !== 'All' && <> in <span className="font-bold text-gray-700">{activeCategory}</span></>}
            </p>
          </div>
        </div>
      </section>

      {/* ── LIGHTBOX ──────────────────────────────────────────────────────── */}
      {lightboxIndex !== null && (
        <div
          className="lightbox-backdrop fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          {/* Close */}
          <button
            onClick={closeLightbox}
            className="absolute top-5 right-5 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-all duration-200 hover:scale-110 z-10"
          >
            <X size={20} />
          </button>

          {/* Prev */}
          <button
            onClick={(e) => { e.stopPropagation(); prevImage() }}
            className="absolute left-4 md:left-8 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-all duration-200 hover:scale-110 z-10"
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
              className="max-h-[75vh] max-w-full rounded-2xl object-contain shadow-2xl"
              style={{ animation: 'fadeIn 0.2s ease forwards' }}
            />
            {/* Caption */}
            <div className="mt-4 text-center">
              <p className="text-white font-bold text-lg">{filtered[lightboxIndex].alt}</p>
              <p className="text-blue-400 text-sm mt-1">{filtered[lightboxIndex].cat}</p>
              <p className="text-gray-500 text-xs mt-2">{lightboxIndex + 1} / {filtered.length}</p>
            </div>
          </div>

          {/* Next */}
          <button
            onClick={(e) => { e.stopPropagation(); nextImage() }}
            className="absolute right-4 md:right-8 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-all duration-200 hover:scale-110 z-10"
          >
            <ChevronRight size={24} />
          </button>

          {/* Thumbnail strip */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 overflow-x-auto max-w-xs md:max-w-2xl px-2 pb-1">
            {filtered.map((img, i) => (
              <img
                key={img.id}
                src={img.src}
                alt={img.alt}
                onClick={(e) => { e.stopPropagation(); setLightboxIndex(i) }}
                className={`h-12 w-16 object-cover rounded-lg flex-shrink-0 cursor-pointer transition-all duration-200 ${
                  i === lightboxIndex
                    ? 'ring-2 ring-blue-400 opacity-100 scale-110'
                    : 'opacity-50 hover:opacity-80'
                }`}
              />
            ))}
          </div>
        </div>
      )}

      {/* ── SECTION 3: CTA ────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden py-20 px-6"
        style={{ background: 'linear-gradient(135deg, #0f172a 0%, #1e3a8a 50%, #0f172a 100%)' }}>

        <div className="absolute inset-0 opacity-[0.05]"
          style={{ backgroundImage: 'linear-gradient(#60a5fa 1px,transparent 1px),linear-gradient(90deg,#60a5fa 1px,transparent 1px)', backgroundSize: '40px 40px' }} />
        <div className="absolute top-0 left-1/4 w-64 h-64 rounded-full blur-3xl opacity-20"
          style={{ background: 'radial-gradient(circle, #3b82f6, transparent)' }} />
        <div className="absolute bottom-0 right-1/4 w-64 h-64 rounded-full blur-3xl opacity-15"
          style={{ background: 'radial-gradient(circle, #60a5fa, transparent)' }} />

        <div className="relative max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-yellow-400/10 border border-yellow-400/20 rounded-full px-4 py-1.5 mb-6">
            <span className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse" />
            <span className="text-yellow-300 text-sm font-medium">Your Story Starts Here</span>
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

export default Gallery
