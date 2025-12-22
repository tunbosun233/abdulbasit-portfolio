"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Quote, Star } from "lucide-react"

const testimonials = [
  {
    name: "Dray",
    role: "Project Partner",
    content:
      "I’ve never seen you get angry in all these years. You are always so calm and gentle. You just get how to communicate, whether it's business or emotions. Whenever we are in a team meeting, I always want to hear your suggestion first.",
  },
  {
    name: "Abdulqoyyum",
    role: "Mentee",
    content:
      "Your sales and persuasion lessons helped me close my first 6-figure deal by myself this year. The way you broke things down for me changed everything and contributed to the growth I’m experiencing today.",
  },
  {
    name: "Team Lead",
    role: "Operations Manager",
    content:
      "The Nigeria blood in you is unique. You don't get demotivated even when appointments don't show up. Your resilience is on another level. You’re outstanding and very proactive in helping people in the community.",
  },
]

export function Testimonials() {
  return (
    <section className="py-24 bg-[#0F110C] text-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4">
              Real <span className="text-[#556B2F]">Feedback</span>
            </h2>
            <p className="text-gray-400 text-lg">Proof of professional character and results</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card
                key={index}
                className="bg-white/5 border border-white/10 hover:border-[#556B2F]/50 transition-all duration-500 group relative"
              >
                <Quote className="absolute top-4 right-4 w-12 h-12 text-white/5 group-hover:text-[#556B2F]/10 transition-colors" />
                
                <CardContent className="p-8 space-y-6 relative z-10 flex flex-col h-full">
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#556B2F] text-[#556B2F]" />
                    ))}
                  </div>

                  <p className="text-gray-300 leading-relaxed italic text-base flex-grow">
                    "{testimonial.content}"
                  </p>

                  <div className="pt-6 border-t border-white/10 flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#556B2F] to-[#0F110C] border border-white/10 flex items-center justify-center font-bold text-[#556B2F]">
                      {testimonial.name[0]}
                    </div>
                    <div>
                      <p className="font-bold text-white group-hover:text-[#556B2F] transition-colors">
                        {testimonial.name}
                      </p>
                      <p className="text-xs uppercase tracking-widest text-gray-500">
                        {testimonial.role}
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