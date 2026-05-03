import { IoCall } from "react-icons/io5";
import { MdLocationOn, MdEmail, MdAccessTime } from "react-icons/md";

const BranchCard = ({ image, city, location, contact, email, hours }) => {
  return (
    <div className="bg-white rounded-2xl shadow-md overflow-hidden w-110">

        
      {/* Image */}
      <img src={image} alt={city} className="w-full h-48 object-cover" />

      {/* Content */}
      <div className="p-5">
        <h2 className="text-2xl font-bold text-gray-900 mb-1">{city} Branch</h2>
        <div className=" mt-3 h-[2px] w-32 bg-gradient-to-r mb-4 from-blue-500 to-transparent rounded-full" />


        {/* Info Items */}
        <div className="flex flex-col gap-3">
          <div className="flex items-start gap-3">
            <MdLocationOn className="text-blue-500 text-xl mt-0.5 shrink-0" />
            <div>
              <p className="font-semibold text-sm text-gray-800">Location</p>
              <p className="text-sm text-gray-500">{location}</p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <IoCall className="text-blue-500 text-xl mt-0.5 shrink-0" />
            <div>
              <p className="font-semibold text-sm text-gray-800">Contact</p>
              <p className="text-sm text-gray-500">{contact}</p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <MdEmail className="text-blue-500 text-xl mt-0.5 shrink-0" />
            <div>
              <p className="font-semibold text-sm text-gray-800">Email</p>
              <p className="text-sm text-gray-500">{email}</p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <MdAccessTime className="text-blue-500 text-xl mt-0.5 shrink-0" />
            <div>
              <p className="font-semibold text-sm text-gray-800">Working Hours</p>
              <p className="text-sm text-gray-500">{hours}</p>
            </div>
          </div>
        </div>

        {/* Button */}
        
        <a href={`tel:${contact}`}
          className="mt-5 flex items-center justify-center gap-2 w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2.5 rounded-lg transition"
        >
          <IoCall />
          Contact {city} Branch
        </a>
      </div>
    </div>
  );
};

export default BranchCard;