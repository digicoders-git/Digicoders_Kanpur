import { IoCall } from "react-icons/io5";
import { MdLocationOn, MdEmail, MdAccessTime } from "react-icons/md";

const BranchCard = ({ image, city, location, contact, email, hours }) => {
  return (
    <div className="bg-white rounded-2xl shadow-md overflow-hidden w-full max-w-lg mx-auto border border-orange-100 hover:shadow-lg transition-shadow duration-300">

      {/* Image */}
      <div className="relative">
        <img
          src={image}
          alt={city}
          className="w-full h-40 sm:h-44 md:h-62 object-cover"
        />
        {/* City label overlay */}
        <div className="absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-bold text-white"
          style={{ background: '#0d1b2a' }}>
          {city}
        </div>
      </div>

      {/* Content */}
      <div className="p-4 sm:p-5">
        <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mb-1">
          {city} Branch
        </h2>

        {/* Orange accent bar */}
        <div className="mt-2 h-[2px] w-24 sm:w-28 md:w-36 rounded-full mb-4"
          style={{ background: 'linear-gradient(to right, #ff8c00, transparent)' }} />

        {/* Info rows */}
        <div className="flex flex-col gap-3">

          <div className="flex items-start gap-3">
            <MdLocationOn className="text-lg sm:text-xl mt-0.5 shrink-0" style={{ color: '#ff8c00' }} />
            <div>
              <p className="font-semibold text-xs sm:text-sm text-gray-800">Location</p>
              <p className="text-xs sm:text-sm text-gray-500">{location}</p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <IoCall className="text-lg sm:text-xl mt-0.5 shrink-0" style={{ color: '#ff8c00' }} />
            <div>
              <p className="font-semibold text-xs sm:text-sm text-gray-800">Contact</p>
              <p className="text-xs sm:text-sm text-gray-500">{contact}</p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <MdEmail className="text-lg sm:text-xl mt-0.5 shrink-0" style={{ color: '#2e7d32' }} />
            <div>
              <p className="font-semibold text-xs sm:text-sm text-gray-800">Email</p>
              <p className="text-xs sm:text-sm text-gray-500 break-words">{email}</p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <MdAccessTime className="text-lg sm:text-xl mt-0.5 shrink-0" style={{ color: '#2e7d32' }} />
            <div>
              <p className="font-semibold text-xs sm:text-sm text-gray-800">Working Hours</p>
              <p className="text-xs sm:text-sm text-gray-500">{hours}</p>
            </div>
          </div>

        </div>

        {/* CTA Button */}
        <a
          href={`tel:${contact}`}
          className="mt-5 flex items-center justify-center gap-2 w-full text-white text-sm sm:text-base font-semibold py-2.5 rounded-lg transition-all duration-200 hover:-translate-y-0.5"
          style={{ background: '#ff8c00' }}
          onMouseEnter={e => e.currentTarget.style.background = '#e65100'}
          onMouseLeave={e => e.currentTarget.style.background = '#ff8c00'}
        >
          <IoCall />
          Contact {city}
        </a>
      </div>
    </div>
  );
};

export default BranchCard;
