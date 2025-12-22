export function About() {
  return (
    <section className="py-24 bg-[#0F110C] text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto animate-fade-in-up">
          
          {/* Section Heading - Matches the Hero Title Style */}
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-center mb-16">
            About <span className="text-[#556B2F]">Me</span>
          </h2>

          {/* The Content Card - Dark Glass Style */}
          <div className="relative bg-[#141710] border-l-4 border-[#556B2F] p-8 md:p-12 rounded-r-2xl shadow-2xl transition-all hover:bg-[#1a1e15]">
            
            <p className="text-xl md:text-2xl leading-relaxed text-gray-300 font-light mb-10">
              I am an <span className="text-white font-semibold">STR Manager & Guest Experience Specialist</span> dedicated to making travelers feel at home. 
              I bridge the gap between empty apartments and consistent 
              <span className="text-[#556B2F] font-bold"> 5-star revenue</span> by handling the full management lifecycle.
            </p>

            {/* Stats Divider Line */}
            <div className="h-[1px] w-full bg-white/10 mb-8" />

            {/* Performance Stats - From your latest screenshot */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
               <div className="flex flex-col">
                  <span className="text-[#556B2F] font-bold text-3xl">100%</span>
                  <span className="text-[10px] uppercase tracking-[0.2em] text-gray-500 font-bold">Guest Focused</span>
               </div>
               <div className="flex flex-col">
                  <span className="text-[#556B2F] font-bold text-3xl">24/7</span>
                  <span className="text-[10px] uppercase tracking-[0.2em] text-gray-500 font-bold">Availability</span>
               </div>
               <div className="flex flex-col">
                  <span className="text-[#556B2F] font-bold text-3xl">Proven</span>
                  <span className="text-[10px] uppercase tracking-[0.2em] text-gray-500 font-bold">Results</span>
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}