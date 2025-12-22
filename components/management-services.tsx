import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Home, FileText, Calendar, Package } from "lucide-react"

const services = [
  {
    icon: Home,
    title: "Airbnb Setup",
    description:
      "Complete listing creation with professional photography, compelling descriptions, and optimal pricing strategies.",
  },
  {
    icon: FileText,
    title: "Listing Optimization",
    description:
      "Continuous improvement of your listing to maximize visibility, bookings, and guest satisfaction ratings.",
  },
  {
    icon: Calendar,
    title: "Calendar Management",
    description:
      "Synchronized multi-platform calendar management to prevent double bookings and maximize occupancy rates.",
  },
  {
    icon: Package,
    title: "Inventory Control",
    description: "Comprehensive tracking and management of property amenities, supplies, and maintenance requirements.",
  },
]

export function ManagementServices() {
  return (
    // Changed bg-background to our Deep Charcoal #0F110C
    <section className="py-24 bg-[#0F110C] text-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-center mb-16 animate-fade-in-up">
            Management <span className="text-[#556B2F]">Services</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {services.map((service, index) => (
              <Card
                key={index}
                // Changed from white cards to a subtle Dark Glass effect
                className="bg-white/5 border-white/10 hover:border-[#556B2F]/50 transition-all hover:shadow-2xl animate-fade-in-up group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardHeader>
                  {/* Icon box uses Olive Green (#556B2F) */}
                  <div className="bg-[#556B2F]/20 w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:bg-[#556B2F] transition-colors">
                    <service.icon className="w-6 h-6 text-[#556B2F] group-hover:text-white" />
                  </div>
                  <CardTitle className="text-2xl font-semibold text-white group-hover:text-[#556B2F] transition-colors">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-400 leading-relaxed group-hover:text-gray-200 transition-colors">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}