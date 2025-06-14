"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Heart, Menu, Bell, User, LogOut, Sparkles } from "lucide-react"
import Link from "next/link"
import { useRouter } from "next/navigation"
// Import the UserProfile component at the top
import { UserProfile } from "@/components/user-profile"

export function DashboardLayout({ title, children, sidebarItems, activeTab, onTabChange }) {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const router = useRouter()

  const handleLogout = () => {
    // Simulate logout
    router.push("/")
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-green-50 to-orange-50 flex relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-green-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-orange-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute top-40 left-40 w-80 h-80 bg-yellow-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-4000"></div>
      </div>

      {/* Sidebar */}
      <div
        className={`
        fixed inset-y-0 left-0 z-50 w-64 bg-white/80 backdrop-blur-lg shadow-xl transform transition-all duration-500 ease-in-out border-r border-green-100
        ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}
        lg:translate-x-0 lg:static lg:inset-0
      `}
      >
        <div className="flex items-center justify-between h-16 px-6 border-b border-green-100">
          <Link href="/" className="flex items-center space-x-2 group">
            <div className="w-8 h-8 bg-gradient-to-r from-green-600 to-orange-500 rounded-lg flex items-center justify-center transform group-hover:scale-110 transition-all duration-300 group-hover:rotate-12">
              <Heart className="w-5 h-5 text-white animate-pulse" />
            </div>
            <span className="text-xl font-bold text-gray-800 bg-gradient-to-r from-green-600 to-orange-500 bg-clip-text text-transparent">
              Left2Right
            </span>
          </Link>
          <Button
            variant="ghost"
            size="sm"
            className="lg:hidden transform hover:scale-110 transition-all duration-300"
            onClick={() => setSidebarOpen(false)}
          >
            ×
          </Button>
        </div>

        <nav className="mt-8 px-4">
          <div className="space-y-2">
            {sidebarItems.map((item, index) => (
              <button
                key={item.id}
                onClick={() => onTabChange(item.id)}
                className={`
                  w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-left transition-all duration-300 transform hover:scale-105 group animate-fade-in-left
                  ${
                    activeTab === item.id
                      ? "bg-gradient-to-r from-green-100 to-orange-100 text-green-700 border-r-4 border-green-600 shadow-lg"
                      : "text-gray-600 hover:bg-gradient-to-r hover:from-green-50 hover:to-orange-50 hover:text-green-600"
                  }
                `}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <item.icon
                  className={`w-5 h-5 transition-all duration-300 ${activeTab === item.id ? "animate-bounce" : "group-hover:scale-110"}`}
                />
                <span className="font-medium">{item.label}</span>
                {activeTab === item.id && <Sparkles className="w-4 h-4 ml-auto animate-spin text-orange-500" />}
              </button>
            ))}
          </div>
        </nav>

        <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-green-100">
          <Button
            variant="ghost"
            className="w-full justify-start text-gray-600 hover:text-red-600 hover:bg-red-50 transform hover:scale-105 transition-all duration-300 group"
            onClick={handleLogout}
          >
            <LogOut className="w-5 h-5 mr-3 group-hover:animate-bounce" />
            Sign Out
          </Button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 lg:ml-0 relative z-10">
        {/* Top Navigation */}
        <header className="bg-white/80 backdrop-blur-lg shadow-sm border-b border-green-100 h-16 flex items-center justify-between px-6 sticky top-0 z-40">
          <div className="flex items-center space-x-4">
            <Button
              variant="ghost"
              size="sm"
              className="lg:hidden transform hover:scale-110 transition-all duration-300 hover:bg-green-100"
              onClick={() => setSidebarOpen(true)}
            >
              <Menu className="w-5 h-5" />
            </Button>
            <h1 className="text-2xl font-bold text-gray-800 bg-gradient-to-r from-green-600 to-orange-500 bg-clip-text text-transparent animate-fade-in-right">
              {title}
            </h1>
          </div>

          <div className="flex items-center space-x-4">
            <Button
              variant="ghost"
              size="sm"
              className="relative transform hover:scale-110 transition-all duration-300 hover:bg-orange-100 group"
            >
              <Bell className="w-5 h-5 group-hover:animate-swing" />
              <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full text-xs animate-pulse"></span>
            </Button>

            {/* Add UserProfile component */}
            <div className="hidden md:block">
              <UserProfile compact={true} />
            </div>

            <Button
              variant="ghost"
              size="sm"
              className="md:hidden transform hover:scale-110 transition-all duration-300 hover:bg-green-100 group"
            >
              <User className="w-5 h-5 group-hover:animate-bounce" />
            </Button>
          </div>
        </header>

        {/* Page Content */}
        <main className="p-6 relative z-10">{children}</main>
      </div>

      {/* Overlay for mobile */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden backdrop-blur-sm transition-all duration-300"
          onClick={() => setSidebarOpen(false)}
        />
      )}
    </div>
  )
}
