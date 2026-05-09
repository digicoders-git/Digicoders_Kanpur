// ── Badge ─────────────────────────────────────────────────────────
const Badge = () => (
  <span className="absolute top-4 right-4 text-white text-xs font-semibold px-3 py-1 rounded-full tracking-wide"
    style={{ background: '#ff8c00' }}>
    Featured
  </span>
);

// ── Icon Wrapper ──────────────────────────────────────────────────
const IconBox = ({ children }) => (
  <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5 transition-all duration-300 group-hover:bg-white/20 group-hover:text-white"
    style={{ background: '#fff3e0', color: '#ff8c00' }}>
    {children}
  </div>
);

// ── Register Button ───────────────────────────────────────────────
const RegisterBtn = ({ variant }) => {
  const base = "mt-5 w-full py-2.5 rounded-lg text-sm font-semibold tracking-wide transition-all duration-200 focus:outline-none";

  if (variant === "orange") {
    return (
      <button
        className={base}
        style={{ background: '#ff8c00', color: 'white' }}
        onMouseEnter={e => { e.target.style.background = 'white'; e.target.style.color = '#ff8c00'; }}
        onMouseLeave={e => { e.target.style.background = '#ff8c00'; e.target.style.color = 'white'; }}
      >
        Register
      </button>
    );
  }

  // default / blue variant → use green as secondary brand color
  return (
    <button
      className={`${base} group-hover:bg-white`}
      style={{ background: '#2e7d32', color: 'white' }}
      onMouseEnter={e => { e.target.style.background = 'white'; e.target.style.color = '#2e7d32'; }}
      onMouseLeave={e => { e.target.style.background = '#2e7d32'; e.target.style.color = 'white'; }}
    >
      Register
    </button>
  );
};

// ── Main TrainingCard ─────────────────────────────────────────────
const TrainingCard = ({ icon, title, audience, description, featured, btnVariant }) => (
  <div
    className="group relative bg-white text-black p-7 flex flex-col border border-gray-100 shadow-xl cursor-pointer transition-all duration-300 hover:-translate-y-1.5"
    style={{ borderRadius: '24px 4px 24px 4px' }}
    onMouseEnter={e => {
      e.currentTarget.style.background = '#0d1b2a';
      e.currentTarget.style.borderRadius = '4px 24px 4px 24px';
      e.currentTarget.style.borderColor = '#ff8c00';
    }}
    onMouseLeave={e => {
      e.currentTarget.style.background = 'white';
      e.currentTarget.style.borderRadius = '24px 4px 24px 4px';
      e.currentTarget.style.borderColor = '#f3f4f6';
    }}
  >
    {featured && <Badge />}
    <IconBox>{icon}</IconBox>

    <h3 className="text-lg font-bold mb-2 text-[#1a1a1a] transition-colors duration-300 group-hover:text-white">  
      {title}
    </h3>

    <span className="inline-block text-xs font-medium px-3 py-1 rounded-md mb-3 w-fit transition-all duration-300 group-hover:bg-white/10 group-hover:text-orange-200"
      style={{ background: '#f3f4f6', color: '#6b7280' }}>
      {audience}
    </span>

    <p className="text-sm leading-relaxed flex-1 transition-colors duration-300 group-hover:text-gray-300"
      style={{ color: '#6b7280' }}>
      {description}
    </p>

    <RegisterBtn variant={btnVariant} />
  </div>
);

export default TrainingCard;
