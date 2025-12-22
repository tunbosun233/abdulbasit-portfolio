import { Button } from "@/components/ui/button"
import { MessageCircle } from "lucide-react"
import Image from "next/image"

export function Hero() {
  return (
    // Updated background to match your Charcoal Black
    <section className="relative min-h-screen flex items-center bg-[#0F110C] text-white overflow-hidden">
      {/* Subtle Olive Glow in the corner */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0F110C] via-[#0F110C] to-[#556B2F]/10" />

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-8 animate-fade-in-up">
            <div className="space-y-4">
              <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold text-balance">
                I'm <span className="text-[#556B2F]">Abdulbasit Abidogun</span>
              </h1>
              <p className="text-2xl md:text-3xl text-balance text-white/90">
                Maximizing Property Yield Through 5-Star Guest Experiences.
              </p>
            </div>

            <p className="text-lg md:text-xl text-white/80 text-pretty max-w-2xl leading-relaxed">
              Helping landlords and real estate investors manage apartments for 5-star guest satisfaction and revenue
              growth.
            </p>

            <Button
              size="lg"
              className="bg-[#556B2F] hover:bg-[#6b863a] text-white font-semibold text-lg px-8 py-6 rounded-lg transition-all hover:scale-105"
              asChild
            >
              <a
                href="https://wa.me/qr/J67V2WUGDRPDL1"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <MessageCircle className="w-5 h-5" />
                Optimize My Property
              </a>
            </Button>
          </div>

          {/* Headshot Image */}
          <div className="relative animate-fade-in-up animation-delay-200">
            <div className="relative w-full aspect-square max-w-lg mx-auto">
              
              {/* This was the "thing" showing outside - now it matches the Olive Theme */}
              <div className="absolute inset-0 bg-[#556B2F] rounded-3xl transform rotate-3 opacity-20 blur-sm" />
              
              {/* Changed bg-white to bg-[#0F110C] to remove the white border/background */}
              <div className="relative bg-[#0F110C] rounded-3xl overflow-hidden shadow-2xl border border-white/10">
                <Image
                  src="/egbon.png.jpeg" // Added leading slash for Next.js convention
                  alt="Abdulbasit Abidogun"
                  width={600}
                  height={600}
                  /* The mix-blend-mode helps remove the original background of the photo */
                  className="w-full h-full object-cover opacity-90 mix-blend-screen"
                  priority
                />
                
                {/* Subtle Inner Vignette to blend edges */}
                <div className="absolute inset-0 shadow-[inset_0_0_80px_rgba(15,17,12,1)] pointer-events-none" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}