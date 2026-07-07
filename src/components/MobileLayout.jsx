export default function MobileLayout({ children }) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-100 via-blue-100 to-cyan-100 flex justify-center items-center p-6">
      <div
        className="
          w-full
          max-w-md
          bg-white
          rounded-[36px]
          overflow-hidden
          border
          border-sky-100
          shadow-[0_20px_60px_rgba(37,99,235,0.20)]
          transition-all
          duration-300
        "
      >
        {children}
      </div>
    </div>
  );
}