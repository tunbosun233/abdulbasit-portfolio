"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { MapPin, MessageCircle, Mail, Facebook, Twitter, Send } from "lucide-react"

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus("loading")

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: "1f56ade3-0805-485a-aa47-40c118ec6c4b",
          ...formData,
        }),
      })

      if (response.ok) {
        setStatus("success")
        setFormData({ name: "", email: "", message: "" })
      } else {
        setStatus("error")
      }
    } catch (error) {
      setStatus("error")
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  return (
    <section className="py-24 bg-[#0F110C] text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4">
              Let's Work <span className="text-[#556B2F]">Together</span>
            </h2>
            <p className="text-xl text-gray-400">Ready to maximize your property's potential?</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Form Side */}
            <Card className="bg-white/5 border-white/10 shadow-2xl">
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid gap-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-400">Name</label>
                      <Input
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="bg-white/5 border-white/10 text-white focus:border-[#556B2F]"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-400">Email</label>
                      <Input
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="bg-white/5 border-white/10 text-white focus:border-[#556B2F]"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-400">Message</label>
                      <Textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={4}
                        className="bg-white/5 border-white/10 text-white focus:border-[#556B2F]"
                      />
                    </div>
                  </div>
                  <Button type="submit" disabled={status === "loading"} className="w-full bg-[#556B2F] hover:bg-[#6b863a] py-6 text-lg">
                    {status === "loading" ? "Sending..." : "Send Message"}
                    <Send className="ml-2 w-4 h-4" />
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Info Side */}
            <div className="space-y-8">
              {/* FIXED GOOGLE MAPS LINK */}
              <a 
                href="https://www.google.com/maps/search/?api=1&query=Ilorin+Kwara+State+Nigeria" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block group"
              >
                <Card className="bg-[#141710] border-white/5 hover:border-[#556B2F]/40 transition-all cursor-pointer">
                  <CardContent className="p-6 flex items-start gap-4">
                    <div className="p-3 bg-[#556B2F]/20 rounded-lg group-hover:bg-[#556B2F] transition-colors">
                      <MapPin className="w-6 h-6 text-[#556B2F] group-hover:text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg text-white">Location</h3>
                      <p className="text-gray-400">Ilorin, Kwara State, Nigeria</p>
                      <span className="text-xs text-[#556B2F] underline underline-offset-4">View on Google Maps</span>
                    </div>
                  </CardContent>
                </Card>
              </a>

              {/* SOCIAL LINKS */}
              <div>
                <h3 className="text-sm font-bold uppercase tracking-widest text-gray-500 mb-6">Connect With Me</h3>
                <div className="flex flex-wrap gap-4">
                  <SocialLink href="https://wa.me/qr/J67V2WUGDRPDL1" icon={MessageCircle} />
                  <SocialLink href="https://x.com/__Abdulbasit_" icon={Twitter} />
                  <SocialLink href="https://www.facebook.com/profile.php?id=61575898179098" icon={Facebook} />
                  {/* FIXED EMAIL LINK */}
                  <SocialLink href="mailto:abidogunabdulbasit14@gmail.com" icon={Mail} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* FOOTER */}
      <footer className="container mx-auto px-4 mt-24 pt-8 border-t border-white/10 text-center">
         <p className="text-gray-500 text-sm">© {new Date().getFullYear()} Abdulbasit Abidogun. All rights reserved.</p>
      </footer>
    </section>
  )
}

// Helper component for cleaner social buttons
function SocialLink({ href, icon: Icon }: { href: string; icon: any }) {
  return (
    <a 
      href={href} 
      target="_blank" 
      rel="noopener noreferrer"
      className="w-14 h-14 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-[#556B2F] hover:border-[#556B2F] transition-all group"
    >
      <Icon className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
    </a>
  )
}