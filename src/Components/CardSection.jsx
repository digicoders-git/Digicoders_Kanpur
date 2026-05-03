import React from 'react'
import BranchCard from './BranchCard'
import TrainingCard from './TrainingCard'
import lucknow from '/Images/hero1.jpg'
import kanpur from '/Images/hero2.jpg'


//for  hero section
  export const slides = [
    {
      title: "Training and Placement Programs",
      desc: "Empowering students with industry-relevant skills and providing placement opportunities to kickstart successful careers.",
      video: "/Videos/hero1.mp4",
    },
    {
      title: "Custom Web & App Development",
      desc: "Fast, secure, and user-friendly applications designed to grow your business.",
      video: "/Videos/hero1.mp4",
    },
    {
      title: "AI & Cloud-Driven Innovation",
      desc: "Leverage modern technologies to automate, scale, and stay ahead of the competition.",
      video: "/Videos/hero1.mp4",
    },
    {
      title: "Skill-Based Seminars & Workshops",
      desc: "Hands-on sessions and expert-led workshops focused on real-world skills to enhance learning and career readiness.",
      video: "/Videos/hero1.mp4",
    },
   ];

const CardSection = () => {

  // Our  branches
  const branches = [
    {
      city: "Lucknow",
      image: lucknow,
      location: "2nd Floor, B-36, Sector O, Near Ram Ram Bank Chauraha, Aliganj, Lucknow UP 226021",
      contact: "+91 9198483820",
      email: "info@thedigicoders.com",
      hours: "Mon-Sat: 10:00 AM - 7:00 PM",
    },
    {
      city: "Kanpur",
      image: kanpur,
      location: "128/3/98, Yashoda Nagar, Kanpur UP 208011, Opp. Shivaji Park",
      contact: "+91 6394 296 293",
      email: "info@thedigicoders.com",
      hours: "Mon-Sat: 10:00 AM - 7:00 PM",
    },
  ]

  //For Training
  const trainingData = [
  {
    id: 1,
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    title: "Vocational Training",
    audience: "For Polytechnic Diploma",
    description: "Practical skill development aligned with diploma curriculum.",
    featured: false,
    btnVariant: "blue",
  },
  {
    id: 2,
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M12 3v1m0 16v1m8.66-10h-1M4.34 12h-1m15.07-6.07-.71.71M6.34 17.66l-.71.71m12.02 0-.71-.71M6.34 6.34l-.71-.71M12 8a4 4 0 100 8 4 4 0 000-8z" />
      </svg>
    ),
    title: "Summer Training",
    audience: "For CS/IT/Electronics",
    description: "Intensive 4-6 weeks summer program on latest technologies.",
    featured: false,
    btnVariant: "blue",
  },
  {
    id: 3,
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9.663 17h4.673M12 3v1M6.5 5.5l.7.7M17.5 5.5l-.7.7M3 12h1m17 0h-1M5 19l1-1m12 0 1 1M12 8a4 4 0 014 4" />
      </svg>
    ),
    title: "Winter Training",
    audience: "Short-term Program",
    description: "Quick skill enhancement during winter break.",
    featured: false,
    btnVariant: "blue",
  },
  {
    id: 4,
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
    title: "Industrial Training",
    audience: "For B.Tech/MCA Final Year",
    description: "Comprehensive 6-month industry exposure program.",
    featured: true,
    btnVariant: "orange",
  },
  {
    id: 5,
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    ),
    title: "Apprenticeship Training",
    audience: "Govt. Approved",
    description: "Official apprenticeship programs with stipends.",
    featured: false,
    btnVariant: "blue",
  },
  {
    id: 6,
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    title: "Internship Training",
    audience: "Live Project Based",
    description: "Work on real client projects under senior developers.",
    featured: true,
    btnVariant: "orange",
  },
  {
    id: 7,
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
      </svg>
    ),
    title: "Project Training",
    audience: "Final Year Guidance",
    description: "End-to-end guidance for major academic projects.",
    featured: false,
    btnVariant: "blue",
  },
  {
    id: 8,
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
    title: "Syllabus Training",
    audience: "For B.Tech 1st-3rd Year",
    description: "Academic syllabus coverage with practical approach.",
    featured: false,
    btnVariant: "blue",
  },
  {
    id: 9,
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: "Faculty Training",
    audience: "For College Teachers",
    description: "FDPs on advanced tech stacks and industry trends.",
    featured: false,
    btnVariant: "blue",
  },
];

  

  return (
    <div>

      {/* ✅ Training Section — */}
      <div className="text-center p-8">
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-3">
          IT Training Programs
        </h2>
        <div className="mx-auto mt-3 h-[2px] w-40 bg-gradient-to-r from-blue-500 to-transparent rounded-full"></div>

        <p className="text-gray-500 text-base pt-3 md:text-lg">
          Specially designed for Engineering Students &amp; Professionals
        </p>
      </div>
      <section className="relative bg-gray-50 py-10 px-4 overflow-hidden" id="training">
        <div className="absolute inset-x-0 top-0 h-64 bg-blue-600/5 pointer-events-none" />
          <div className="relative max-w-6xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
              {trainingData.map((card) => (
                <TrainingCard
                  key={card.id}
                  icon={card.icon}
                  title={card.title}
                  audience={card.audience}
                  description={card.description}
                  featured={card.featured}
                  btnVariant={card.btnVariant}
                />
              ))}
            </div>
        </div>
      </section>

      {/* ✅ Branch Section — */}
      <div className='px-10 py-8 bg-gray-50'>
        <h1 className="text-center text-4xl font-bold pb-3">
          Our Branches
          <div className="mx-auto mt-3 h-[2px] w-40 bg-gradient-to-r from-blue-500 to-transparent rounded-full"></div>
        </h1>
        <div className="flex flex-wrap justify-center gap-8 px-10 py-16 bg-gray-50">
          {branches.map((branch, i) => (
            <BranchCard key={i} {...branch} />
          ))}
        </div>
      </div>

    </div>
  )
}

export default CardSection