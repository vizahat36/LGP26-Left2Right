"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Heart, Shield, ArrowLeft, Mail, Lock, User, Phone, Building, AlertCircle } from "lucide-react"
import { Link, useNavigate } from "react-router-dom"

export default function AuthPage() {
  const [isLogin, setIsLogin] = useState(true)
  const [selectedRole, setSelectedRole] = useState("donor")
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()

    // Get form data
    const formData = new FormData(e.target)
    const userData = {
      firstName: formData.get("firstName") || "John",
      lastName: formData.get("lastName") || "Doe",
      email: formData.get("email") || formData.get("signupEmail") || "user@example.com",
      role: selectedRole,
      businessName:
        selectedRole === "donor" ? "My Business" : selectedRole === "receiver" ? "My Organization" : "Admin",
      avatar: `https://api.dicebear.com/7.x/avataaars/svg?seed=${formData.get("firstName") || "user"}&backgroundColor=b6e3f4,c0aede,d1d4f9,ffd5dc,ffdfbf`,
    }

    // Store user data in localStorage
    localStorage.setItem("userData", JSON.stringify(userData))

    // Navigate to appropriate dashboard
    if (selectedRole === "donor") {
      navigate("/donor-dashboard")
    } else if (selectedRole === "receiver") {
      navigate("/receiver-dashboard")
    } else if (selectedRole === "admin") {
      navigate("/admin-dashboard")
    }
  }

  const roleOptions = [
    {
      value: "donor",
      label: "Food Donor",
      description: "Restaurant, caterer, or individual with surplus food",
      icon: Heart,
      color: "text-green-600",
    },
    {
      value: "receiver",
      label: "Partner Organization",
      description: "NGO, shelter, community center, or verified organization",
      icon: Building,
      color: "text-orange-600",
    },
    {
      value: "admin",
      label: "Administrator",
      description: "Platform administrator",
      icon: Shield,
      color: "text-blue-600",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-orange-50 to-green-50 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Header */}
        <div className="text-center mb-8">
          <Link to="/" className="inline-flex items-center text-gray-600 hover:text-green-600 mb-6">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Link>
          <div className="flex items-center justify-center space-x-2 mb-4">
            <div className="w-10 h-10 bg-gradient-to-r from-green-600 to-orange-500 rounded-lg flex items-center justify-center">
              <Heart className="w-6 h-6 text-white" />
            </div>
            <span className="text-3xl font-bold text-gray-800">Left2Right</span>
          </div>
          <p className="text-gray-600">Join our mission to reduce food waste</p>
        </div>

        <Card className="shadow-xl border-0">
          <CardHeader className="text-center pb-2">
            <CardTitle className="text-2xl">{isLogin ? "Welcome Back" : "Create Account"}</CardTitle>
            <CardDescription>
              {isLogin ? "Sign in to your Left2Right account" : "Join the Left2Right community"}
            </CardDescription>
          </CardHeader>

          <CardContent className="space-y-6">
            {/* Important Notice for Receivers */}
            {selectedRole === "receiver" && (
              <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
                <div className="flex items-start space-x-3">
                  <AlertCircle className="w-5 h-5 text-blue-600 mt-0.5" />
                  <div>
                    <h4 className="font-medium text-blue-800">For Organizations Only</h4>
                    <p className="text-sm text-blue-700 mt-1">
                      This registration is for verified organizations (NGOs, shelters, community centers) that
                      distribute food to people in need.
                    </p>
                    <p className="text-sm text-blue-700 mt-2">
                      <strong>Need food help?</strong> Call <strong>1-800-FOOD-HELP</strong> or visit a community center
                      near you.
                    </p>
                  </div>
                </div>
              </div>
            )}

            <Tabs value={isLogin ? "login" : "signup"} className="w-full">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger
                  value="login"
                  onClick={() => setIsLogin(true)}
                  className="data-[state=active]:bg-green-600 data-[state=active]:text-white"
                >
                  Login
                </TabsTrigger>
                <TabsTrigger
                  value="signup"
                  onClick={() => setIsLogin(false)}
                  className="data-[state=active]:bg-green-600 data-[state=active]:text-white"
                >
                  Sign Up
                </TabsTrigger>
              </TabsList>

              <TabsContent value="login" className="space-y-4 mt-6">
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="your@email.com"
                        className="pl-10"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="password">Password</Label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                      <Input
                        id="password"
                        name="password"
                        type="password"
                        placeholder="••••••••"
                        className="pl-10"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="role">I am a...</Label>
                    <Select value={selectedRole} onValueChange={setSelectedRole} required>
                      <SelectTrigger>
                        <SelectValue placeholder="Select your role" />
                      </SelectTrigger>
                      <SelectContent>
                        {roleOptions.map((role) => (
                          <SelectItem key={role.value} value={role.value}>
                            <div className="flex items-center space-x-2">
                              <role.icon className={`w-4 h-4 ${role.color}`} />
                              <span>{role.label}</span>
                            </div>
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="flex items-center space-x-2">
                    <Checkbox id="remember" />
                    <Label htmlFor="remember" className="text-sm">
                      Remember me
                    </Label>
                  </div>

                  <Button type="submit" className="w-full bg-green-600 hover:bg-green-700" disabled={!selectedRole}>
                    Sign In
                  </Button>
                </form>

                <div className="text-center">
                  <a href="/forgot-password" className="text-sm text-green-600 hover:underline">
                    Forgot your password?
                  </a>
                </div>
              </TabsContent>

              <TabsContent value="signup" className="space-y-4 mt-6">
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name</Label>
                      <div className="relative">
                        <User className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                        <Input id="firstName" name="firstName" placeholder="John" className="pl-10" required />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input id="lastName" name="lastName" placeholder="Doe" required />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="signupEmail">Email</Label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                      <Input
                        id="signupEmail"
                        name="signupEmail"
                        type="email"
                        placeholder="your@email.com"
                        className="pl-10"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                      <Input id="phone" type="tel" placeholder="+1 (555) 123-4567" className="pl-10" required />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="signupRole">I am a...</Label>
                    <Select value={selectedRole} onValueChange={setSelectedRole} required>
                      <SelectTrigger>
                        <SelectValue placeholder="Select your role" />
                      </SelectTrigger>
                      <SelectContent>
                        {roleOptions.map((role) => (
                          <SelectItem key={role.value} value={role.value}>
                            <div className="flex flex-col items-start">
                              <div className="flex items-center space-x-2">
                                <role.icon className={`w-4 h-4 ${role.color}`} />
                                <span className="font-medium">{role.label}</span>
                              </div>
                              <span className="text-xs text-gray-500 mt-1">{role.description}</span>
                            </div>
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="signupPassword">Password</Label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                      <Input id="signupPassword" type="password" placeholder="••••••••" className="pl-10" required />
                    </div>
                  </div>

                  <div className="flex items-center space-x-2">
                    <Checkbox id="terms" required />
                    <Label htmlFor="terms" className="text-sm">
                      I agree to the{" "}
                      <a href="/terms" className="text-green-600 hover:underline">
                        Terms of Service
                      </a>{" "}
                      and{" "}
                      <a href="/privacy" className="text-green-600 hover:underline">
                        Privacy Policy
                      </a>
                    </Label>
                  </div>

                  <Button type="submit" className="w-full bg-green-600 hover:bg-green-700" disabled={!selectedRole}>
                    Create Account
                  </Button>
                </form>
              </TabsContent>
            </Tabs>

            {/* Role Information */}
            {selectedRole && (
              <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                {roleOptions.map((role) => {
                  if (role.value === selectedRole) {
                    return (
                      <div key={role.value} className="flex items-start space-x-3">
                        <role.icon className={`w-5 h-5 mt-0.5 ${role.color}`} />
                        <div>
                          <h4 className="font-medium text-gray-800">{role.label}</h4>
                          <p className="text-sm text-gray-600">{role.description}</p>
                          {role.value === "receiver" && (
                            <p className="text-xs text-blue-600 mt-2">
                              Organizations must be verified before accessing the platform.
                            </p>
                          )}
                        </div>
                      </div>
                    )
                  }
                  return null
                })}
              </div>
            )}
          </CardContent>
        </Card>

        {/* Alternative Access Methods */}
        <div className="mt-8 p-6 bg-blue-50 rounded-lg border border-blue-200">
          <h3 className="font-semibold text-blue-800 mb-3">Need Food Help? No Internet Required!</h3>
          <div className="space-y-2 text-sm text-blue-700">
            <p>
              <strong>📞 Call:</strong> 1-800-FOOD-HELP (24/7 hotline)
            </p>
            <p>
              <strong>📱 Text:</strong> Send "FOOD" to 12345
            </p>
            <p>
              <strong>🏢 Visit:</strong> Any community center or partner location
            </p>
          </div>
        </div>

        <div className="text-center mt-6 text-sm text-gray-600">
          Need help?{" "}
          <a href="/contact" className="text-green-600 hover:underline">
            Contact Support
          </a>
        </div>
      </div>
    </div>
  )
}
