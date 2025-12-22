import Image from "next/image"

const tools = [
  { name: "PriceLabs", logo: "/pricelabs-logo.jpg" },
  { name: "Hospitable", logo: "/hospitable-logo.jpg" },
  { name: "Airbnb", logo: "/generic-travel-logo.png" },
  { name: "Booking.com", logo: "/booking-dot-com-logo.jpg" },
  { name: "Google Workspace", logo: "/google-workspace-logo.png" },
]

export function TechStack() {
  return (
    // Swapped bg-muted/30 for our Deep Charcoal #0F110C
    <section className="py-24 bg-[#0F110C] text-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto text-center">
          
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4 animate-fade-in-up">
            Enterprise <span className="text-[#556B2F]">Tools I Use</span>
          </h2>
          <p className="text-xl text-gray-400 mb-16 animate-fade-in-up animation-delay-100">
            To Manage Your Investment
          </p>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 items-center">
            {tools.map((tool, index) => (
              <div
                key={index}
                // Changed to a subtle dark glass card with a faint border
                className="bg-white/5 backdrop-blur-sm p-6 rounded-2xl border border-white/10 hover:border-[#556B2F]/50 transition-all hover:scale-105 animate-fade-in-up group shadow-xl"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative h-16 w-full grayscale group-hover:grayscale-0 transition-all duration-500">
                  <Image
                    src={tool.logo || "/placeholder.svg"}
                    alt={tool.name}
                    fill
                    className="object-contain"
                  />
                </div>
                {/* Subtle text label for the tool */}
                <p className="mt-4 text-xs font-bold uppercase tracking-widest text-gray-500 group-hover:text-[#556B2F] transition-colors">
                  {tool.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}