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