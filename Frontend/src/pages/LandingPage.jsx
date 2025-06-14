import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Heart, Users, MapPin, Clock, Leaf, ArrowRight, Sparkles, Phone, MessageCircle, Building } from "lucide-react"
import { Link } from "react-router-dom"

export default function LandingPage() {
  const features = [
    {
      icon: MapPin,
      title: "Location-Based Matching",
      description: "Smart matching between donors and receivers based on proximity and need",
    },
    {
      icon: Clock,
      title: "Real-Time Updates",
      description: "Instant notifications when food becomes available or is claimed",
    },
    {
      icon: Leaf,
      title: "Impact Tracking",
      description: "See your environmental impact with CO₂ savings and waste reduction metrics",
    },
  ]

  const accessMethods = [
    {
      icon: Users,
      title: "Partner Organizations",
      description: "NGOs, shelters, and community centers manage food distribution for their beneficiaries",
      color: "bg-blue-100 text-blue-800",
    },
    {
      icon: Phone,
      title: "Phone Hotline",
      description: "Call our 24/7 hotline to request food assistance without internet access",
      color: "bg-green-100 text-green-800",
    },
    {
      icon: MessageCircle,
      title: "SMS Service",
      description: "Receive food alerts and updates via simple text messages",
      color: "bg-orange-100 text-orange-800",
    },
    {
      icon: Building,
      title: "Walk-in Centers",
      description: "Visit community centers where staff can help you access available food",
      color: "bg-purple-100 text-purple-800",
    },
  ]

  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Restaurant Manager",
      content: "Left2Right helped us donate over 500 meals last month instead of throwing away surplus food.",
      rating: 5,
    },
    {
      name: "Michael Rodriguez",
      role: "Shelter Director",
      content: "This platform connects us directly with local restaurants. It's been a game-changer for our community.",
      rating: 5,
    },
    {
      name: "Emma Thompson",
      role: "Community Center Coordinator",
      content: "We help families access food through Left2Right even if they don't have smartphones or internet.",
      rating: 5,
    },
  ]

  const stats = [
    { number: "75K+", label: "Meals Donated" },
    { number: "2,500+", label: "Active Users" },
    { number: "45 Tons", label: "Food Saved" },
    { number: "98%", label: "Success Rate" },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 via-orange-50 to-green-50 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-green-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-orange-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute top-40 left-40 w-80 h-80 bg-yellow-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>

      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50 transition-all duration-300">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2 group">
            <div className="w-8 h-8 bg-gradient-to-r from-green-600 to-orange-500 rounded-lg flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
              <Heart className="w-5 h-5 text-white animate-pulse" />
            </div>
            <span className="text-2xl font-bold text-gray-800 bg-gradient-to-r from-green-600 to-orange-500 bg-clip-text text-transparent">
              Left2Right
            </span>
          </div>
          <nav className="hidden md:flex items-center space-x-8">
            <a
              href="#how-it-works"
              className="text-gray-600 hover:text-green-600 transition-all duration-300 hover:scale-105 relative group"
            >
              How it Works
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-green-600 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a
              href="#access-methods"
              className="text-gray-600 hover:text-green-600 transition-all duration-300 hover:scale-105 relative group"
            >
              Get Help
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-green-600 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a
              href="#impact"
              className="text-gray-600 hover:text-green-600 transition-all duration-300 hover:scale-105 relative group"
            >
              Impact
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-green-600 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <Link
              to="/auth"
              className="text-gray-600 hover:text-green-600 transition-all duration-300 hover:scale-105 relative group"
            >
              Login
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-green-600 transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </nav>
          <Link to="/auth">
            <Button className="bg-green-600 hover:bg-green-700 text-white transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
              Get Started
            </Button>
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4 relative">
        <div className="container mx-auto text-center relative z-10">
          <Badge className="mb-6 bg-green-100 text-green-800 border-green-200 animate-bounce">
            🌱 Turn Left into Right
          </Badge>

          <h1 className="text-5xl md:text-7xl font-bold text-gray-800 mb-6 leading-tight animate-fade-in-up">
            Turn Leftover Food into the
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 via-orange-500 to-green-600 animate-gradient-x">
              {" "}
              Right Cause{" "}
            </span>
          </h1>

          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed animate-fade-in-up animation-delay-300">
            Smart, modern, memorable. Left2Right bridges the gap between surplus food and hungry communities across
            Karnataka through multiple access channels.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-fade-in-up animation-delay-600">
            <Link to="/auth?role=donor">
              <Button
                size="lg"
                className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 text-lg transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl group"
              >
                <Heart className="w-5 h-5 mr-2 group-hover:animate-pulse" />
                Donate Surplus Food
                <Sparkles className="w-4 h-4 ml-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </Button>
            </Link>
            <a href="#access-methods">
              <Button
                size="lg"
                variant="outline"
                className="border-orange-500 text-orange-600 hover:bg-orange-50 px-8 py-4 text-lg transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl group"
              >
                <Users className="w-5 h-5 mr-2 group-hover:animate-bounce" />
                Get Food Help
                <ArrowRight className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
            </a>
          </div>

          {/* Emergency Contact */}
          <div className="bg-gradient-to-r from-blue-50 to-green-50 rounded-lg p-6 mb-12 border border-blue-200 animate-fade-in-up animation-delay-800">
            <div className="flex items-center justify-center space-x-4 text-center">
              <Phone className="w-6 h-6 text-blue-600 animate-pulse" />
              <div>
                <p className="text-lg font-semibold text-gray-800">Need Food Help? Call Now!</p>
                <p className="text-2xl font-bold text-blue-600">1-800-FOOD-HELP</p>
                <p className="text-sm text-gray-600">24/7 Hotline • No Internet Required • Free Service</p>
              </div>
            </div>
          </div>

          {/* Animated Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center transform hover:scale-110 transition-all duration-300 animate-fade-in-up"
                style={{ animationDelay: `${800 + index * 200}ms` }}
              >
                <div className="text-3xl md:text-4xl font-bold text-green-600 mb-2 animate-count-up">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Rest of the component remains the same... */}
      {/* I'll continue with the remaining sections in the next part */}
    </div>
  )
}
