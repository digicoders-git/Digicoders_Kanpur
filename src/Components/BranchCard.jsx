import { IoCall } from "react-icons/io5";
import { MdLocationOn, MdEmail, MdAccessTime } from "react-icons/md";

const BranchCard = ({ image, city, location, contact, email, hours }) => {
  return (
    <div className="bg-white rounded-2xl shadow-md overflow-hidden w-full max-w-sm mx-auto">

      {/* Image */}
      <img
        src={image}
        alt={city}
        className="w-full h-40 sm:h-44 md:h-48 object-cover"
      />

      {/* Content */}
      <div className="p-4 sm:p-5">
        <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mb-1">
          {city} Branch
        </h2>

        <div className="mt-2 h-[2px] w-24 sm:w-28 md:w-32 bg-gradient-to-r from-blue-500 to-transparent rounded-full mb-4" />

        {/* Info */}
        <div className="flex flex-col gap-3">

          <div className="flex items-start gap-3">
            <MdLocationOn className="text-blue-500 text-lg sm:text-xl mt-0.5 shrink-0" />
            <div>
              <p className="font-semibold text-xs sm:text-sm text-gray-800">Location</p>
              <p className="text-xs sm:text-sm text-gray-500">{location}</p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <IoCall className="text-blue-500 text-lg sm:text-xl mt-0.5 shrink-0" />
            <div>
              <p className="font-semibold text-xs sm:text-sm text-gray-800">Contact</p>
              <p className="text-xs sm:text-sm text-gray-500">{contact}</p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <MdEmail className="text-blue-500 text-lg sm:text-xl mt-0.5 shrink-0" />
            <div>
              <p className="font-semibold text-xs sm:text-sm text-gray-800">Email</p>
              <p className="text-xs sm:text-sm text-gray-500 break-words">{email}</p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <MdAccessTime className="text-blue-500 text-lg sm:text-xl mt-0.5 shrink-0" />
            <div>
              <p className="font-semibold text-xs sm:text-sm text-gray-800">Working Hours</p>
              <p className="text-xs sm:text-sm text-gray-500">{hours}</p>
            </div>
          </div>

        </div>

        {/* Button */}
        <a
          href={`tel:${contact}`}
          className="mt-5 flex items-center justify-center gap-2 w-full bg-blue-500 hover:bg-blue-600 text-white text-sm sm:text-base font-semibold py-2.5 rounded-lg transition"
        >
          <IoCall />
          Contact {city}
        </a>
      </div>
    </div>
  );
};

export default BranchCard;