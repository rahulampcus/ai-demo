import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ImageIcon, MessageSquare, ArrowRight, Users, Clock, Star } from "lucide-react"

const services = [
  {
    id: 1,
    title: "Image to Text",
    description: "Extract text from images using advanced OCR technology. Support for multiple languages and formats.",
    icon: ImageIcon,
    status: "Active",
    users: "2.4k",
    lastUsed: "2 hours ago",
    rating: 4.8,
    features: ["OCR Technology", "Multi-language", "Batch Processing"],
    color: "bg-gradient-to-br from-theme-orange-500 to-theme-orange-600",
  },
  {
    id: 2,
    title: "AI Interview",
    description: "Conduct automated interviews with AI-powered questions and real-time analysis of responses.",
    icon: MessageSquare,
    status: "Active",
    users: "1.8k",
    lastUsed: "1 hour ago",
    rating: 4.9,
    features: ["Real-time Analysis", "Custom Questions", "Performance Metrics"],
    color: "bg-gradient-to-br from-theme-yellow-500 to-theme-yellow-600",
  },
  {
    id: 3,
    title: "Document Analysis",
    description: "Analyze and extract insights from documents using natural language processing.",
    icon: ImageIcon,
    status: "Beta",
    users: "892",
    lastUsed: "5 hours ago",
    rating: 4.6,
    features: ["NLP Processing", "Insight Extraction", "Document Parsing"],
    color: "bg-gradient-to-br from-theme-orange-400 to-theme-yellow-500",
  },
  {
    id: 4,
    title: "Voice Assistant",
    description: "Interactive voice-based AI assistant for hands-free operations and queries.",
    icon: MessageSquare,
    status: "Coming Soon",
    users: "0",
    lastUsed: "Never",
    rating: 0,
    features: ["Voice Recognition", "Natural Speech", "Multi-platform"],
    color: "bg-gradient-to-br from-theme-yellow-400 to-theme-orange-500",
  },
]

export function ServiceCards() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight bg-gradient-to-r from-theme-orange-600 to-theme-yellow-600 bg-clip-text text-transparent">
            AI Services Dashboard
          </h1>
          <p className="text-muted-foreground">Manage and monitor your AI-powered services</p>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2">
        {services.map((service) => (
          <Card
            key={service.id}
            className="relative overflow-hidden border-theme-orange-100 hover:border-theme-orange-200 transition-all duration-200 hover:shadow-lg hover:shadow-theme-orange-100/50"
          >
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className={`p-2 rounded-lg ${service.color} text-white`}>
                    <service.icon className="h-6 w-6" />
                  </div>
                  <div>
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                    <div className="flex items-center space-x-2 mt-1">
                      <Badge
                        variant={
                          service.status === "Active" ? "default" : service.status === "Beta" ? "secondary" : "outline"
                        }
                      >
                        {service.status}
                      </Badge>
                      {service.rating > 0 && (
                        <div className="flex items-center space-x-1">
                          <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                          <span className="text-sm text-muted-foreground">{service.rating}</span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </CardHeader>

            <CardContent className="space-y-4">
              <CardDescription className="text-sm leading-relaxed">{service.description}</CardDescription>

              <div className="grid grid-cols-2 gap-4 text-sm">
                <div className="flex items-center space-x-2">
                  <Users className="h-4 w-4 text-muted-foreground" />
                  <span className="text-muted-foreground">Users:</span>
                  <span className="font-medium">{service.users}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="h-4 w-4 text-muted-foreground" />
                  <span className="text-muted-foreground">Last used:</span>
                  <span className="font-medium">{service.lastUsed}</span>
                </div>
              </div>

              <div className="space-y-2">
                <p className="text-sm font-medium text-muted-foreground">Features:</p>
                <div className="flex flex-wrap gap-1">
                  {service.features.map((feature, index) => (
                    <Badge key={index} variant="outline" className="text-xs">
                      {feature}
                    </Badge>
                  ))}
                </div>
              </div>
            </CardContent>

            <CardFooter className="pt-0">
              <Button
                className="w-full bg-gradient-to-r from-theme-orange-500 to-theme-yellow-500 hover:from-theme-orange-600 hover:to-theme-yellow-600 text-white shadow-lg"
                disabled={service.status === "Coming Soon"}
              >
                {service.status === "Coming Soon" ? "Coming Soon" : "Launch Service"}
                {service.status !== "Coming Soon" && <ArrowRight className="ml-2 h-4 w-4" />}
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        <Card className="border-theme-orange-100 bg-gradient-to-br from-theme-orange-50 to-theme-yellow-50">
          <CardHeader className="pb-2">
            <CardTitle className="text-base text-theme-orange-800">Total Services</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-theme-orange-900">4</div>
            <p className="text-xs text-theme-orange-600">2 active, 1 beta, 1 coming soon</p>
          </CardContent>
        </Card>

        <Card className="border-theme-yellow-100 bg-gradient-to-br from-theme-yellow-50 to-theme-orange-50">
          <CardHeader className="pb-2">
            <CardTitle className="text-base text-theme-yellow-800">Total Users</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-theme-yellow-900">5.1k</div>
            <p className="text-xs text-theme-yellow-600">+12% from last month</p>
          </CardContent>
        </Card>

        <Card className="border-theme-orange-100 bg-gradient-to-br from-theme-orange-50 to-theme-yellow-50">
          <CardHeader className="pb-2">
            <CardTitle className="text-base text-theme-orange-800">Average Rating</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-theme-orange-900">4.8</div>
            <p className="text-xs text-theme-orange-600">Based on user feedback</p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
