export default function LastSection() {
  return (
    <div className="w-full flex justify-center items-center min-h-[50vh] md:min-h-screen bg-gray-50 px-4 py-8 md:px-6 md:py-0 lg:px-8">
      <div className="relative max-w-7xl w-full overflow-hidden shadow-xl">
        {/* Dimmed photo */}
        <img
          src="/valen-club.png"
          alt="Valen Club"
          className="w-full h-1/3 object-cover brightness-50"
        />
        
        {/* Text overlay */}
        <div className="absolute inset-0 flex items-center justify-center px-4">
          <h2 className="text-3xl md:text-6xl lg:text-7xl font-bold text-white tracking-wider text-center">
            Join the <span className="text-red-800">Valen Club</span>
          </h2>
        </div>
      </div>
    </div>
  );
}