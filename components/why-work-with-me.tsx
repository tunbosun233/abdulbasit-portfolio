import { Clock, TrendingUp, Wrench, Shield } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const benefits = [
  {
    icon: Clock,
    title: "Sub-5 Minute Response",
    description: "I guarantee guest inquiries are answered immediately, securing bookings before competitors.",
  },
  {
    icon: TrendingUp,
    title: "Seasonal Optimization",
    description: "I use PriceLabs to ensure your nightly rates are always adjusted for maximum profit.",
  },
  {
    icon: Wrench,
    title: "Proactive Operations",
    description: 'I coordinate handymen and housekeepers so the property is always "Guest Ready."',
  },
  {
    icon: Shield,
    title: "Problem Solver",
    description: "I handle cancellations, guest issues, and technical listing errors so you don't have to.",
  },
]

export function WhyWorkWithMe() {
  return (
    // Changed to match the Hero's Charcoal Black (#0F110C)
    <section className="py-24 bg-[#0F110C] text-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-center mb-4 animate-fade-in-up">
            Why Work <span className="text-[#556B2F]">With Me</span>
          </h2>
          <p className="text-center text-xl text-gray-400 mb-16 animate-fade-in-up animation-delay-100">
            Result-driven management that maximizes your returns
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <Card
                key={index}
                // Changed from white background to a subtle "Glass" dark background
                className="bg-white/5 border border-white/10 hover:border-[#556B2F]/50 transition-all hover:scale-[1.02] animate-fade-in-up group shadow-2xl"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-8">
                  <div className="flex items-start gap-4">
                    {/* Icon box uses Olive Green (#556B2F) */}
                    <div className="bg-[#556B2F]/20 p-3 rounded-lg shrink-0 group-hover:bg-[#556B2F] transition-colors">
                      <benefit.icon className="w-6 h-6 text-[#556B2F] group-hover:text-white" />
                    </div>
                    <div className="space-y-2">
                      <h3 className="font-semibold text-xl text-white group-hover:text-[#556B2F] transition-colors">
                        {benefit.title}
                      </h3>
                      <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}