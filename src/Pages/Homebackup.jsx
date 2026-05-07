import React, { useEffect, useState } from 'react'
import CardSection from '../Components/CardSection';
import { slides, features, branches } from '../Components/CardSection'
import { IoCall } from "react-icons/io5";
import { FaWhatsapp } from "react-icons/fa";
import { FaCircleArrowRight } from "react-icons/fa6";

import about from '../../public/Images/hero1.jpg'
import hero2 from '../../public/Images/hero2.jpg'
import hero3 from '../../public/Images/hero3.jpg'
import ExpertSection from '../Components/ExpertSection';
import ServicesSection from '../Components/ServicesSection';
import BranchCard from '../Components/BranchCard';

const Home = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>

      {/* HERO SECTION */}
      <div className="relative w-full h-[60vh] md:h-[80vh] lg:h-[90vh] overflow-hidden">
        
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute w-full h-full transition-all duration-700 ${
              index === current ? "opacity-100" : "opacity-0"
            }`}
          >
            <video
              src={slide.video}
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/60 flex flex-col justify-center items-center text-center px-4 md:px-10 text-white">
              
              <h1 className="text-xl sm:text-2xl md:text-4xl lg:text-5xl font-bold mb-3 md:mb-4">
                {slide.title}
              </h1>

              <p className="text-sm md:text-lg lg:text-xl mb-4 md:mb-6 max-w-xl">
                {slide.desc}
              </p>

              <div className='flex flex-col sm:flex-row gap-3 md:gap-5'>
                <button className="bg-blue-600 hover:bg-blue-800 px-4 md:px-6 py-2 md:py-3 font-bold rounded-lg">
                  Explore Services
                </button>
                <button className="bg-blue-600 hover:bg-blue-800 px-4 md:px-6 py-2 md:py-3 font-bold rounded-lg">
                  Join Training
                </button>
              </div>

            </div>
          </div>
        ))}

        {/* SIDE BUTTONS (Desktop Only) */}
        <button className='hidden md:block fixed text-white px-2 py-1 bg-red-500 rotate-90 left-[-60px] top-1/2 -translate-y-1/2 z-30'>
          Assessment Portal
        </button>

        <button className='hidden md:block fixed text-white px-2 py-1 bg-green-500 rotate-90 right-[-70px] top-1/2 -translate-y-1/2 z-30'>
          Register For Training
        </button>

        {/* CALL & WHATSAPP */}
        <div className="fixed bottom-5 left-5 flex flex-col gap-3 z-50">
          <a
            href="tel:+919876543210"
            className="bg-blue-600 hover:bg-blue-700 p-3 rounded-full text-white text-xl"
          >
            <IoCall />
          </a>
          <a
            href="https://wa.me/919876543210"
            target="_blank"
            className="bg-green-600 hover:bg-green-700 p-3 rounded-full text-white text-xl"
          >
            <FaWhatsapp />
          </a>
        </div>
      </div>

      
        {/* ANOTHER HERO */}
      <section className="relative overflow-hidden bg-gradient-to-br from-gray-950 via-blue-950 to-gray-900">

        {/* Grid texture */}
        <div className="absolute inset-0 opacity-[0.04]"
          style={{ backgroundImage: 'linear-gradient(#60a5fa 1px,transparent 1px),linear-gradient(90deg,#60a5fa 1px,transparent 1px)', backgroundSize: '48px 48px' }} />

        {/* Glow orbs */}
        <div className="absolute top-10 left-10 w-72 h-72 rounded-full blur-3xl opacity-20"
          style={{ background: 'radial-gradient(circle, #3b82f6, transparent)' }} />
        <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full blur-3xl opacity-15"
          style={{ background: 'radial-gradient(circle, #60a5fa, transparent)' }} />

        <div className="relative max-w-6xl mx-auto px-6 pt-16 pb-0 flex flex-col lg:flex-row items-center gap-12">

          {/* LEFT: Text content */}
          <div className="flex-1 text-center lg:text-left z-10" style={{ animation: 'slideRight 0.7s ease forwards' }}>

            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-400/20 rounded-full px-4 py-1.5 mb-6">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              <span className="text-blue-300 text-sm font-medium">Admissions Open — Batch 2025–26</span>
            </div>

            {/* Slide content with fade */}
            <div className="min-h-[180px] mb-6">
              {slides.map((slide, index) => (
                <div
                  key={index}
                  className={`transition-all duration-700 ${index === current ? 'opacity-100' : 'opacity-0 absolute'}`}
                  style={{ display: index === current ? 'block' : 'none' }}
                >
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight mb-4">
                    {slide.title.split(' ').slice(0, 3).join(' ')}{' '}
                    <span className="shimmer-text">
                      {slide.title.split(' ').slice(3).join(' ')}
                    </span>
                  </h1>
                  <p className="text-gray-300 text-lg leading-relaxed max-w-xl">
                    {slide.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* Slide dots */}
            <div className="flex gap-2 justify-center lg:justify-start mb-8">
              {slides.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`rounded-full transition-all duration-300 ${
                    i === current ? 'w-8 h-2 bg-blue-500' : 'w-2 h-2 bg-white/30 hover:bg-white/60'
                  }`}
                />
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              <a href="/services"
                className="group flex items-center gap-2 px-7 py-3.5 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/30 hover:-translate-y-0.5">
                Explore Services
                <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="/training"
                className="flex items-center gap-2 px-7 py-3.5 bg-white/10 hover:bg-white/20 text-white font-bold rounded-xl border border-white/20 transition-all duration-300 hover:-translate-y-0.5 backdrop-blur">
                Join Training
              </a>
            </div>

            {/* Trust badges */}
            <div className="flex flex-wrap gap-3 mt-8 justify-center lg:justify-start">
              {[
                { icon: Award, label: 'ISO Certified',    color: '#fbbf24' },
                { icon: BookOpen, label: '20+ Courses',   color: '#34d399' },
                { icon: Globe, label: '2 City Branches',  color: '#a78bfa' },
              ].map(({ icon: Icon, label, color }, i) => (
                <div key={i} className="flex items-center gap-2 bg-white/10 backdrop-blur rounded-xl px-4 py-2 border border-white/10">
                  <Icon size={14} style={{ color }} />
                  <span className="text-white text-sm font-medium">{label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT: Floating visual circle */}
          <div className="flex-shrink-0 relative w-72 h-72 hidden lg:block" style={{ animation: 'slideLeft 0.8s ease forwards' }}>
            <div className="absolute inset-0 rounded-full border-2 border-blue-400/30"
              style={{ animation: 'pulse-ring 2s ease-out infinite' }} />
            <div className="absolute inset-4 rounded-full bg-gradient-to-br from-blue-600 to-blue-800 flex items-center justify-center shadow-2xl"
              style={{ animation: 'floatY 4s ease-in-out infinite' }}>
              <div className="text-center">
                <GraduationCap size={40} className="text-white mx-auto mb-2" />
                <div className="text-2xl font-black text-white">1000+</div>
                <div className="text-blue-200 text-xs font-medium">Students</div>
                <div className="text-yellow-300 text-xs font-bold">Trained</div>
              </div>
            </div>
            {[
              { label: '95% Placement',  top: '0%',  left: '58%', color: '#fbbf24' },
              { label: '7+ Years',       top: '74%', left: '-5%', color: '#34d399' },
              { label: '50+ Companies',  top: '74%', left: '58%', color: '#a78bfa' },
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

        {/* Wave bottom */}
        <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full block mt-8">
          <path d="M0,40 C360,0 1080,80 1440,20 L1440,60 L0,60 Z" fill="white" />
        </svg>
      </section>

      {/* RECENT PLACEMENT */}
      <div className="w-full px-4 md:px-10 py-6 bg-gray-100 overflow-hidden">

        <h1 className="text-center text-2xl md:text-5xl font-bold pt-4 pb-6 md:pb-10">
          Recent Placement
          <div className="mx-auto mt-3 h-[2px] w-32 md:w-40 bg-gradient-to-r from-blue-500 to-transparent rounded-full"></div>
        </h1>

        <div className="relative overflow-hidden">

          <div className="flex w-max gap-5 md:gap-10 animate-slide">

            {/* FIRST SET */}
            <div className="flex gap-5 md:gap-10">
              <img src={about} className="h-28 md:h-40 rounded-md shadow-md" />
              <img src={hero2} className="h-28 md:h-40 rounded-md shadow-md" />
              <img src={hero3} className="h-28 md:h-40 rounded-md shadow-md" />
              <img src={about} className="h-28 md:h-40 rounded-md shadow-md" />
            </div>

            {/* DUPLICATE (important for smooth loop) */}
            <div className="flex gap-5 md:gap-10">
              <img src={hero2} className="h-28 md:h-40 rounded-md shadow-md" />
              <img src={hero3} className="h-28 md:h-40 rounded-md shadow-md" />
              <img src={about} className="h-28 md:h-40 rounded-md shadow-md" />
              <img src={hero2} className="h-28 md:h-40 rounded-md shadow-md" />
            </div>

          </div>

        </div>


      </div>

      {/* EXPERT SECTION */}
      <div className='px-4 md:px-10'>
        <ExpertSection/>
      </div>

      {/* CARD SECTION */}
      <div className='px-4 md:px-10'>
        <CardSection/>
      </div>

      {/* WHY CHOOSE US START */}
      <section className="py-10 bg-white text-black">
        <div className="max-w-7xl mx-auto px-6">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
              Why Choose <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500 bg-clip-text text-transparent italic">Us</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Engineering tomorrow, today. We architect digital advantage for ambitious businesses.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group bg-gray-100/50 border shadow-2xl hover:border-blue-500/50 rounded-tl-3xl rounded-br-3xl rounded-tr-none rounded-bl-none hover:rounded-tl-none hover:rounded-br-none hover:rounded-tr-3xl hover:rounded-bl-3xl p-8 transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl hover:shadow-blue-500/10"
              >
                <div className="text-5xl mb-6 transition-transform group-hover:scale-110 duration-300">
                  {feature.icon}
                </div>
                
                <h3 className="text-xl font-bold mb-4 text-black">
                  {feature.title}
                </h3>
                
                <p className="text-gray-400 text-justify leading-relaxed">
                  {feature.desc}
                </p>

                {/* Decorative line */}
                <div className="mt-8 h-1 w-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full group-hover:w-20 transition-all duration-300" />
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* WHY CHOOSE US END */}

      {/* ABOUT SECTION START */}
      <div className='px-4 md:px-10 py-10 flex flex-col md:flex-row gap-8 md:gap-10'>
        
        <div className='w-full md:w-1/2'>
          <img src={about} alt="" className='rounded-xl w-full h-auto md:h-104 object-cover'/>
        </div>

        <div className='w-full md:w-1/2'>
          <h1 className='text-2xl md:text-4xl mt-3 font-bold'>
            About DigiCoders Technologies
          </h1>

          <div className="mt-3 h-[2px] w-32 md:w-40 bg-gradient-to-r from-blue-500 to-transparent rounded-full"></div>

          <p className='py-4 text-sm md:text-base text-justify'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit...
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt, ex temporibus? Eligendi fuga delectus optio cum ipsa laudantium est nam quibusdam voluptas aliquam sapiente ut consequatur iste, cumque blanditiis dicta.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia quos asperiores quas corporis blanditiis quod.
          </p>

          <div className='mt-4 flex flex-col sm:flex-row gap-6 md:gap-20'>
            
            <div className='flex flex-col gap-2'>
              <p className='flex items-center gap-2 font-semibold'>
                <FaCircleArrowRight className='text-blue-500'/> IT Solutions
              </p>
              <p className='flex items-center gap-2 font-semibold'>
                <FaCircleArrowRight className='text-blue-500'/> Global Solutions
              </p>
              <p className='flex items-center gap-2 font-semibold'>
                <FaCircleArrowRight className='text-blue-500'/> Lifetime Support
              </p>
            </div>

            <div className='flex flex-col gap-2'>
              <p className='flex items-center gap-2 font-semibold'>
                <FaCircleArrowRight className='text-blue-500'/> 8 years Experience
              </p>
              <p className='flex items-center gap-2 font-semibold'>
                <FaCircleArrowRight className='text-blue-500'/> Software Solutions
              </p>
              <p className='flex items-center gap-2 font-semibold'>
                <FaCircleArrowRight className='text-blue-500'/> Digital Services
              </p>
            </div>
          </div>
          <div className='py-5'>
            <button className='py-2 px-4 bg-blue-500 text-white font-semibold rounded-md'>
              Our Services
            </button>
          </div>
        </div>
      </div>
      {/* ABOUT SECTION END */}
      
      {/* ✅ Branch Section — */}
      <div className='px-10 py-8 bg-gray-50'>
        <h1 className="text-center text-4xl font-bold pb-3">
          Our Branches
          <div className="mx-auto mt-3 h-[2px] w-40 bg-gradient-to-r from-blue-500 to-transparent rounded-full"></div>
        </h1>
        <div className="flex flex-wrap justify-center gap-8 px-10 py-16 bg-gray-50">
          {branches.map((branch) => (
            <BranchCard key={branch.city} {...branch} />
          ))}
        </div>
      </div>
      <ServicesSection/>
    </>
  );
};

export default Home;