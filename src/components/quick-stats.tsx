export default function QuickStats() {
  const stats = [
    { label: "Starting Price", value: "₹1.6 Cr" },
    { label: "Configuration", value: "2,3 & 4 BHK" },
    { label: "Project Size", value: "20 Acre" },
    { label: "Possession", value: "2029" },
  ]

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-16 md:-mt-20 relative z-10">
      <div className=" bg-[#FFFFFFCF] rounded-lg md:rounded-xl shadow-[0px_4px_20px_0px_rgba(0,0,0,0.15)] backdrop-blur-xl">
        <div className="px-4 sm:px-6 md:px-8 py-6 md:py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {stats.map((stat, index) => (
              <div 
                key={index} 
                className={`text-center font-['Urbanist'] ${
                  index < stats.length - 1 && index%2 !== 1 ? 'border-r border-[#4F4B4B]' : ''
                } ${
                  index % 2 === 1 && index < 2 ? 'md:border-r md:border-[#4F4B4B]' : ''
                }`}
              >
                <p className="text-[#575556] text-sm md:text-base lg:text-lg font-medium mb-1 md:mb-2">
                  {stat.label}
                </p>
                <p className="text-[#221628] text-base md:text-xl lg:text-2xl font-bold">
                  {stat.value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}