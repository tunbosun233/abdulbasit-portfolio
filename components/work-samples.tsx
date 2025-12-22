"use client"

import { useState } from "react"
import Image from "next/image"
import { Dialog, DialogContent } from "@/components/ui/dialog"
import { X, Search } from "lucide-react"

const samples = [
  {
    title: "Airbnb Specialist",
    // FIXED: Added leading slash
    image: "/p1.png.jpeg", 
    description: "Boosting revenue and managing guests for a 5-star property experience",
  },
  {
    title: "Airbnb Listing Architect",
    // FIXED: Added leading slash
    image: "/p2.png.jpeg",
    description: "Crafting high-converting Airbnb descriptions that captivate guests and boost search rankings",
  },
  {
    title: "Guest Journey Curator",
    // FIXED: Added leading slash
    image: "/p3.png.jpeg",
    description: "Digital guidebooks and seamless check-in advice",
  },
  {
    title: "Tech-Driven Management",
    image: "/booking-management-dashboard.jpg",
    description: "Utilizing industry-leading tools like PriceLabs, Airbnb, and Booking.com for maximum market reach",
  },
]

export function WorkSamples() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  return (
    <section className="py-24 bg-[#0F110C] text-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-center mb-4 animate-fade-in-up">
            Work <span className="text-[#556B2F]">Samples</span>
          </h2>
          <p className="text-center text-xl text-gray-400 mb-16 animate-fade-in-up animation-delay-100">
            Visual proof of professional management
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {samples.map((sample, index) => (
              <div
                key={index}
                className="group cursor-pointer animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
                onClick={() => setSelectedImage(index)}
              >
                <div className="relative overflow-hidden rounded-2xl border border-white/10 shadow-2xl transition-all">
                  <Image
                    src={sample.image || "/placeholder.svg"}
                    alt={sample.title}
                    width={800}
                    height={600}
                    className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-700 opacity-80 group-hover:opacity-100"
                  />
                  
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0F110C] via-[#0F110C]/20 to-transparent flex flex-col justify-end p-8 opacity-90 group-hover:opacity-100 transition-opacity">
                    <div className="flex justify-between items-end">
                      <div>
                        <h3 className="font-semibold text-2xl mb-1 group-hover:text-[#556B2F] transition-colors">
                          {sample.title}
                        </h3>
                        <p className="text-sm text-gray-400">{sample.description}</p>
                      </div>
                      <div className="bg-[#556B2F] p-3 rounded-full translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all">
                        <Search className="w-5 h-5 text-white" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Dialog open={selectedImage !== null} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="max-w-5xl p-2 bg-[#0F110C]/90 border-white/10 backdrop-blur-xl">
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute -top-12 right-0 text-white hover:text-[#556B2F] transition-colors"
          >
            <X className="w-10 h-10" />
          </button>
          
          {selectedImage !== null && (
            <div className="relative">
              <Image
                src={samples[selectedImage].image || "/placeholder.svg"}
                alt={samples[selectedImage].title}
                width={1200}
                height={900}
                className="w-full h-auto rounded-xl border border-white/5"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#0F110C] p-8 rounded-b-xl">
                <h3 className="font-bold text-3xl text-white mb-2">{samples[selectedImage].title}</h3>
                <p className="text-[#556B2F] font-medium text-lg">{samples[selectedImage].description}</p>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>  
  )
}