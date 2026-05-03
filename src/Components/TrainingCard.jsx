// ── Badge Component ──────────────────────────────────────────────
const Badge = () => (
  <span className="absolute top-4 right-4 bg-orange-500 text-white text-xs font-semibold px-3 py-1 rounded-full tracking-wide">
    Featured
  </span>
);

// ── Icon Wrapper ─────────────────────────────────────────────────
const IconBox = ({ children }) => (
  <div className="w-14 h-14 rounded-2xl bg-blue-50 flex items-center justify-center text-blue-600 mb-5 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
    {children}
  </div>
);

// ── Register Button ──────────────────────────────────────────────
const RegisterBtn = ({ variant }) => {
  const base =
    "mt-5 w-full py-2.5 rounded-lg text-sm font-semibold tracking-wide transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2";
  const styles =
    variant === "orange"
      ? "bg-orange-500 hover:bg-orange-600 text-white focus:ring-orange-400"
      : "bg-blue-600 hover:bg-blue-700 text-white focus:ring-blue-400";

  return (
    <button className={`${base} ${styles}`}>
      Register
    </button>
  );
};

// ── Main TrainingCard Component ──────────────────────────────────
const TrainingCard = ({ icon, title, audience, description, featured, btnVariant }) => (
  <div className="group relative bg-white rounded-2xl p-7 shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col">
    {featured && <Badge />}
    <IconBox>{icon}</IconBox>
    <h3 className="text-lg font-bold text-gray-800 mb-2">{title}</h3>
    <span className="inline-block bg-gray-100 text-gray-500 text-xs font-medium px-3 py-1 rounded-md mb-3 w-fit">
      {audience}
    </span>
    <p className="text-gray-500 text-sm leading-relaxed flex-1">{description}</p>
    <RegisterBtn variant={btnVariant} />
  </div>
);

export default TrainingCard;
