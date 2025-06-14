import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Heart,
  Users,
  MapPin,
  Clock,
  Leaf,
  Star,
  ArrowRight,
  Sparkles,
  Phone,
  MessageCircle,
  Building,
} from "lucide-react"
import Link from "next/link"

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
            <Link
              href="#how-it-works"
              className="text-gray-600 hover:text-green-600 transition-all duration-300 hover:scale-105 relative group"
            >
              How it Works
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-green-600 transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link
              href="#access-methods"
              className="text-gray-600 hover:text-green-600 transition-all duration-300 hover:scale-105 relative group"
            >
              Get Help
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-green-600 transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link
              href="#impact"
              className="text-gray-600 hover:text-green-600 transition-all duration-300 hover:scale-105 relative group"
            >
              Impact
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-green-600 transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link
              href="/auth"
              className="text-gray-600 hover:text-green-600 transition-all duration-300 hover:scale-105 relative group"
            >
              Login
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-green-600 transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </nav>
          <Link href="/auth">
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
            <Link href="/auth?role=donor">
              <Button
                size="lg"
                className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 text-lg transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl group"
              >
                <Heart className="w-5 h-5 mr-2 group-hover:animate-pulse" />
                Donate Surplus Food
                <Sparkles className="w-4 h-4 ml-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </Button>
            </Link>
            <Link href="#access-methods">
              <Button
                size="lg"
                variant="outline"
                className="border-orange-500 text-orange-600 hover:bg-orange-50 px-8 py-4 text-lg transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl group"
              >
                <Users className="w-5 h-5 mr-2 group-hover:animate-bounce" />
                Get Food Help
                <ArrowRight className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
            </Link>
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

      {/* Access Methods Section */}
      <section id="access-methods" className="py-20 bg-white/80 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4 animate-fade-in-up">
              Multiple Ways to Access Food Help
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto animate-fade-in-up animation-delay-300">
              We understand that not everyone has internet access. That's why we offer multiple ways to connect people
              with food assistance.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {accessMethods.map((method, index) => (
              <Card
                key={index}
                className="text-center p-6 border-2 hover:border-green-200 transition-all duration-500 transform hover:scale-105 hover:shadow-xl group animate-fade-in-up"
                style={{ animationDelay: `${400 + index * 200}ms` }}
              >
                <CardContent className="pt-6">
                  <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-green-100 transition-colors duration-300">
                    <method.icon className="w-8 h-8 text-gray-600 group-hover:text-green-600 group-hover:scale-110 transition-all duration-300" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-gray-800 group-hover:text-green-600 transition-colors duration-300">
                    {method.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300 mb-4">
                    {method.description}
                  </p>
                  <Badge className={`${method.color} animate-pulse`}>
                    {method.title === "Partner Organizations" && "Register Organization"}
                    {method.title === "Phone Hotline" && "Call 1-800-FOOD-HELP"}
                    {method.title === "SMS Service" && "Text FOOD to 12345"}
                    {method.title === "Walk-in Centers" && "Find Nearest Center"}
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Detailed Access Information */}
          <div className="mt-16 grid md:grid-cols-2 gap-8">
            <Card className="p-8 bg-gradient-to-br from-blue-50 to-green-50 border-blue-200">
              <CardContent className="pt-0">
                <h3 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
                  <Phone className="w-6 h-6 mr-3 text-blue-600" />
                  Phone & SMS Access
                </h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-700">24/7 Food Assistance Hotline</h4>
                    <p className="text-gray-600">
                      Call <strong>1-800-FOOD-HELP</strong> to speak with a coordinator who will:
                    </p>
                    <ul className="list-disc list-inside text-sm text-gray-600 mt-2 space-y-1">
                      <li>Check available food in your area</li>
                      <li>Connect you with nearby pickup locations</li>
                      <li>Arrange delivery for mobility-limited individuals</li>
                      <li>Provide information in multiple languages</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-700">SMS Alerts</h4>
                    <p className="text-gray-600">
                      Text <strong>FOOD</strong> to <strong>12345</strong> to receive:
                    </p>
                    <ul className="list-disc list-inside text-sm text-gray-600 mt-2 space-y-1">
                      <li>Daily food availability updates</li>
                      <li>Pickup location notifications</li>
                      <li>Emergency food distribution alerts</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="p-8 bg-gradient-to-br from-orange-50 to-yellow-50 border-orange-200">
              <CardContent className="pt-0">
                <h3 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
                  <Building className="w-6 h-6 mr-3 text-orange-600" />
                  Community Partners
                </h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-700">Partner Organizations</h4>
                    <p className="text-gray-600">Local organizations that help distribute food:</p>
                    <ul className="list-disc list-inside text-sm text-gray-600 mt-2 space-y-1">
                      <li>Community centers and libraries</li>
                      <li>Religious organizations and temples</li>
                      <li>NGOs and social service agencies</li>
                      <li>Schools and healthcare centers</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-700">Walk-in Assistance</h4>
                    <p className="text-gray-600">Visit any partner location where staff will:</p>
                    <ul className="list-disc list-inside text-sm text-gray-600 mt-2 space-y-1">
                      <li>Help you access available food donations</li>
                      <li>Register you for regular food assistance</li>
                      <li>Provide information about other services</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-20 bg-gradient-to-r from-green-50 to-orange-50 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4 animate-fade-in-up">How Left2Right Works</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto animate-fade-in-up animation-delay-300">
              Simple steps to make a meaningful impact in your community
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="text-center p-8 border-2 hover:border-green-200 transition-all duration-500 transform hover:scale-105 hover:shadow-xl group animate-fade-in-up"
                style={{ animationDelay: `${600 + index * 200}ms` }}
              >
                <CardContent className="pt-6">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-green-200 transition-colors duration-300 group-hover:animate-pulse">
                    <feature.icon className="w-8 h-8 text-green-600 group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <h3 className="text-2xl font-semibold mb-4 text-gray-800 group-hover:text-green-600 transition-colors duration-300">
                    {index + 1}. {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white/80 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4 animate-fade-in-up">What Our Community Says</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto animate-fade-in-up animation-delay-300">
              Real stories from donors and community partners making a difference
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <Card
                key={index}
                className="p-6 hover:shadow-xl transition-all duration-500 transform hover:scale-105 group animate-fade-in-up"
                style={{ animationDelay: `${600 + index * 200}ms` }}
              >
                <CardContent className="pt-6">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-5 h-5 text-yellow-400 fill-current group-hover:animate-pulse"
                        style={{ animationDelay: `${i * 100}ms` }}
                      />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-6 italic leading-relaxed">"{testimonial.content}"</p>
                  <div>
                    <div className="font-semibold text-gray-800">{testimonial.name}</div>
                    <div className="text-sm text-gray-500">{testimonial.role}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-600 via-orange-500 to-green-600 text-white relative overflow-hidden animate-gradient-x">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl font-bold mb-6 animate-fade-in-up">Ready to Make a Difference?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90 animate-fade-in-up animation-delay-300">
            Join thousands of donors and community partners creating positive impact across Karnataka.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/auth">
              <Button
                size="lg"
                className="bg-white text-green-600 hover:bg-gray-100 px-8 py-4 text-lg transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl group animate-fade-in-up animation-delay-600"
              >
                Start Donating Food
                <ArrowRight className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
            </Link>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-white text-white hover:bg-white hover:text-green-600 px-8 py-4 text-lg transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl group animate-fade-in-up animation-delay-800"
            >
              <Phone className="w-5 h-5 mr-2 group-hover:animate-bounce" />
              Call 1-800-FOOD-HELP
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="animate-fade-in-up">
              <div className="flex items-center space-x-2 mb-4 group">
                <div className="w-8 h-8 bg-gradient-to-r from-green-600 to-orange-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Heart className="w-5 h-5 text-white" />
                </div>
                <span className="text-2xl font-bold">Left2Right</span>
              </div>
              <p className="text-gray-400 leading-relaxed">
                Turn leftover food (Left) into the right cause (Right) — smart, modern, memorable.
              </p>
            </div>

            {[
              {
                title: "Get Help",
                links: [
                  { name: "Call 1-800-FOOD-HELP", href: "tel:1-800-3663-4357" },
                  { name: "Text FOOD to 12345", href: "sms:12345?body=FOOD" },
                  { name: "Find Walk-in Centers", href: "/centers" },
                  { name: "Partner Organizations", href: "/partners" },
                ],
              },
              {
                title: "For Donors",
                links: [
                  { name: "Get Started", href: "/auth" },
                  { name: "How it Works", href: "#how-it-works" },
                  { name: "Impact", href: "#impact" },
                  { name: "Support", href: "/support" },
                ],
              },
              {
                title: "Legal",
                links: [
                  { name: "Privacy Policy", href: "/privacy" },
                  { name: "Terms of Service", href: "/terms" },
                  { name: "Cookie Policy", href: "/cookies" },
                  { name: "Accessibility", href: "/accessibility" },
                ],
              },
            ].map((section, index) => (
              <div key={index} className="animate-fade-in-up" style={{ animationDelay: `${200 + index * 100}ms` }}>
                <h4 className="font-semibold mb-4">{section.title}</h4>
                <ul className="space-y-2 text-gray-400">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <Link
                        href={link.href}
                        className="hover:text-white transition-colors duration-300 hover:translate-x-1 transform inline-block"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400 animate-fade-in-up animation-delay-800">
            <p>&copy; 2024 Left2Right. All rights reserved. Made with ❤️ for a better world.</p>
            <p className="mt-2 text-sm">
              Emergency Food Assistance: <strong>1-800-FOOD-HELP</strong> | SMS: <strong>Text FOOD to 12345</strong>
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
