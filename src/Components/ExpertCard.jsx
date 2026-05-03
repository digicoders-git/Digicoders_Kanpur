const ExpertCard = ({ image, name, role, experience, expertise, linkedin }) => {
  return (
    <div className="flex-shrink-0 w-72 bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 group">
      
      {/* Image Area */}
      <div className="relative h-64 bg-gradient-to-br from-blue-50 to-slate-100 overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
        />
        {/* Overlay gradient at bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent" />
      </div>

      {/* Content Area */}
      <div className="px-6 pb-6 -mt-2">
        
        {/* Name & Role */}
        <h3 className="text-lg font-bold text-gray-900 leading-tight">{name}</h3>
        <p className="text-blue-600 text-sm font-semibold mt-0.5">{role}</p>

        {/* Divider */}
        <div className="w-10 h-0.5 bg-orange-400 rounded-full my-3" />

        {/* Experience */}
        <p className="text-xs text-gray-400 font-medium uppercase tracking-widest mb-2">Experience</p>
        <p className="text-sm text-gray-600 font-medium">{experience}</p>

        {/* Expertise Tags */}
        <div className="flex flex-wrap gap-1.5 mt-4">
          {expertise.map((tag, i) => (
            <span
              key={i}
              className="text-xs bg-blue-50 text-blue-700 px-2.5 py-1 rounded-full font-medium border border-blue-100"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* LinkedIn Button */}
        {linkedin && (
          <a
            href={linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex items-center gap-2 text-xs text-gray-500 hover:text-blue-600 transition-colors duration-200 font-medium"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
            View Profile
          </a>
        )}
      </div>
    </div>
  );
};

export default ExpertCard;
