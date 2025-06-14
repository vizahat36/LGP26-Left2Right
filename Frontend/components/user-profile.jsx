"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { User, Crown, Heart, Shield, Edit, Camera, Sparkles, Star, LogOut } from "lucide-react"

export function UserProfile({ compact = false }) {
  const [userData, setUserData] = useState(null)
  const [isHovered, setIsHovered] = useState(false)
  const router = useRouter()

  useEffect(() => {
    // Get user data from localStorage (in real app, this would come from auth context)
    const storedData = localStorage.getItem("userData")
    if (storedData) {
      setUserData(JSON.parse(storedData))
    } else {
      // Fallback data
      setUserData({
        firstName: "John",
        lastName: "Doe",
        email: "john@example.com",
        role: "donor",
        businessName: "Downtown Cafe",
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=john&backgroundColor=b6e3f4",
      })
    }
  }, [])

  if (!userData) return null

  const getRoleIcon = (role) => {
    switch (role) {
      case "admin":
        return <Crown className="w-4 h-4 text-purple-600" />
      case "donor":
        return <Heart className="w-4 h-4 text-green-600" />
      case "receiver":
        return <Shield className="w-4 h-4 text-orange-600" />
      default:
        return <User className="w-4 h-4 text-gray-600" />
    }
  }

  const getRoleColor = (role) => {
    switch (role) {
      case "admin":
        return "bg-purple-100 text-purple-800 border-purple-200"
      case "donor":
        return "bg-green-100 text-green-800 border-green-200"
      case "receiver":
        return "bg-orange-100 text-orange-800 border-orange-200"
      default:
        return "bg-gray-100 text-gray-800 border-gray-200"
    }
  }

  const getRoleLabel = (role) => {
    switch (role) {
      case "admin":
        return "Administrator"
      case "donor":
        return "Food Donor"
      case "receiver":
        return "Food Receiver"
      default:
        return "User"
    }
  }

  const handleLogout = () => {
    // Clear user data
    localStorage.removeItem("userData")
    // Redirect to home page
    router.push("/")
  }

  if (compact) {
    return (
      <div
        className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gradient-to-r hover:from-green-50 hover:to-orange-50 transition-all duration-300 cursor-pointer group"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="relative">
          <div className="w-10 h-10 rounded-full overflow-hidden ring-2 ring-white shadow-lg transform group-hover:scale-110 transition-all duration-300">
            <img
              src={userData.avatar || "/placeholder.svg"}
              alt={`${userData.firstName} ${userData.lastName}`}
              className="w-full h-full object-cover animate-pulse"
            />
          </div>
          <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-gradient-to-r from-green-400 to-orange-400 rounded-full flex items-center justify-center transform group-hover:rotate-12 transition-all duration-300">
            {getRoleIcon(userData.role)}
          </div>
          {isHovered && (
            <div className="absolute -top-1 -right-1 w-3 h-3 bg-yellow-400 rounded-full animate-ping">
              <Star className="w-3 h-3 text-white" />
            </div>
          )}
        </div>
        <div className="flex-1 min-w-0">
          <p className="font-semibold text-gray-800 truncate group-hover:text-green-600 transition-colors duration-300">
            {userData.firstName} {userData.lastName}
          </p>
          <p className="text-sm text-gray-500 truncate group-hover:text-orange-600 transition-colors duration-300">
            {userData.businessName}
          </p>
        </div>
        <Badge className={`${getRoleColor(userData.role)} transform group-hover:scale-105 transition-all duration-300`}>
          {getRoleLabel(userData.role)}
        </Badge>
      </div>
    )
  }

  return (
    <Card className="overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:scale-[1.02] group">
      <CardContent className="p-0">
        {/* Background Pattern */}
        <div className="h-24 bg-gradient-to-r from-green-400 via-orange-400 to-green-400 relative overflow-hidden">
          <div className="absolute inset-0 bg-black/10"></div>
          <div className="absolute top-2 right-2">
            <Button
              size="sm"
              variant="ghost"
              className="text-white hover:bg-white/20 transform hover:scale-110 transition-all duration-300"
            >
              <Edit className="w-4 h-4" />
            </Button>
          </div>
          {/* Animated particles */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-4 left-4 w-2 h-2 bg-white/30 rounded-full animate-bounce"></div>
            <div className="absolute top-8 right-8 w-1 h-1 bg-white/40 rounded-full animate-pulse"></div>
            <div className="absolute bottom-4 left-1/2 w-1.5 h-1.5 bg-white/20 rounded-full animate-ping"></div>
          </div>
        </div>

        <div className="relative px-6 pb-6">
          {/* Profile Picture */}
          <div className="relative -mt-12 mb-4">
            <div className="w-24 h-24 rounded-full overflow-hidden ring-4 ring-white shadow-xl mx-auto transform group-hover:scale-110 transition-all duration-500 group-hover:rotate-3">
              <img
                src={userData.avatar || "/placeholder.svg"}
                alt={`${userData.firstName} ${userData.lastName}`}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Role Badge on Avatar */}
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2">
              <Badge
                className={`${getRoleColor(userData.role)} shadow-lg transform group-hover:scale-110 transition-all duration-300 animate-pulse`}
              >
                <div className="flex items-center space-x-1">
                  {getRoleIcon(userData.role)}
                  <span className="text-xs font-semibold">{getRoleLabel(userData.role)}</span>
                </div>
              </Badge>
            </div>

            {/* Camera Icon for Photo Change */}
            <Button
              size="sm"
              className="absolute -bottom-1 -right-1 w-8 h-8 rounded-full bg-gradient-to-r from-green-500 to-orange-500 hover:from-green-600 hover:to-orange-600 shadow-lg transform hover:scale-110 transition-all duration-300 group-hover:animate-bounce"
            >
              <Camera className="w-4 h-4 text-white" />
            </Button>
          </div>

          {/* User Info */}
          <div className="text-center space-y-3">
            <div>
              <h3 className="text-xl font-bold text-gray-800 group-hover:text-green-600 transition-colors duration-300">
                {userData.firstName} {userData.lastName}
              </h3>
              <p className="text-gray-600 group-hover:text-orange-600 transition-colors duration-300">
                {userData.businessName}
              </p>
              <p className="text-sm text-gray-500">{userData.email}</p>
            </div>

            {/* Animated Stats */}
            <div className="grid grid-cols-3 gap-4 pt-4 border-t border-gray-100">
              <div className="text-center transform hover:scale-110 transition-all duration-300">
                <div className="text-lg font-bold text-green-600 animate-count-up">127</div>
                <div className="text-xs text-gray-500">Donations</div>
              </div>
              <div className="text-center transform hover:scale-110 transition-all duration-300">
                <div className="text-lg font-bold text-orange-600 animate-count-up">1.2K</div>
                <div className="text-xs text-gray-500">Impact</div>
              </div>
              <div className="text-center transform hover:scale-110 transition-all duration-300">
                <div className="text-lg font-bold text-blue-600 animate-count-up">98%</div>
                <div className="text-xs text-gray-500">Rating</div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex space-x-2 pt-4">
              <Button
                size="sm"
                className="flex-1 bg-gradient-to-r from-green-500 to-orange-500 hover:from-green-600 hover:to-orange-600 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl group/btn"
              >
                <Sparkles className="w-4 h-4 mr-2 group-hover/btn:animate-spin" />
                View Profile
              </Button>
              <Button
                size="sm"
                variant="outline"
                className="transform hover:scale-105 transition-all duration-300 hover:border-green-400 hover:text-green-600"
              >
                <Edit className="w-4 h-4" />
              </Button>
              <Button
                size="sm"
                variant="outline"
                onClick={handleLogout}
                className="transform hover:scale-105 transition-all duration-300 hover:border-red-400 hover:text-red-600 hover:bg-red-50 group/logout"
              >
                <LogOut className="w-4 h-4 group-hover/logout:animate-bounce" />
              </Button>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
