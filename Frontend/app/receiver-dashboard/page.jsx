"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import {
  MapPin,
  Clock,
  Filter,
  Bell,
  Users,
  Heart,
  Search,
  Navigation,
  Phone,
  CheckCircle,
  AlertCircle,
  Sparkles,
  TrendingUp,
  LogOut,
} from "lucide-react"
import { DashboardLayout } from "@/components/dashboard-layout"
import { UserProfile } from "@/components/user-profile"
import { LeafletMap } from "@/components/leaflet-map"

export default function ReceiverDashboard() {
  const [activeTab, setActiveTab] = useState("available-food")
  const [selectedLocation, setSelectedLocation] = useState("all")
  const [selectedFoodType, setSelectedFoodType] = useState("all")
  const [selectedTimeframe, setSelectedTimeframe] = useState("all")

  // Mock data for available food with coordinates
  const availableFood = [
    {
      id: 1,
      title: "Fresh Sandwiches & Salads",
      donor: "Downtown Cafe",
      quantity: "50 servings",
      location: "123 Main St, Downtown",
      distance: "0.8 miles",
      expiry: "2 hours",
      foodType: "Prepared Meals",
      posted: "1 hour ago",
      status: "Available",
      lat: 12.9716,
      lng: 77.5946,
      phone: "+91 80 1234 5678",
    },
    {
      id: 2,
      title: "Surplus Bread & Pastries",
      donor: "Sweet Bakery",
      quantity: "30 items",
      location: "789 Pine St, Midtown",
      distance: "1.2 miles",
      expiry: "6 hours",
      foodType: "Baked Goods",
      posted: "3 hours ago",
      status: "Available",
      lat: 12.982,
      lng: 77.604,
      phone: "+91 80 2345 6789",
    },
    {
      id: 3,
      title: "Fresh Produce Mix",
      donor: "Green Grocers",
      quantity: "40 lbs",
      location: "456 Oak Ave, Uptown",
      distance: "2.1 miles",
      expiry: "12 hours",
      foodType: "Fresh Produce",
      posted: "5 hours ago",
      status: "Available",
      lat: 12.965,
      lng: 77.585,
      phone: "+91 80 3456 7890",
    },
  ]

  // Mock data for community centers
  const communityCenters = [
    {
      id: "center1",
      title: "Downtown Community Center",
      description: "Walk-in food assistance available",
      lat: 12.975,
      lng: 77.59,
      phone: "+91 80 4567 8901",
      type: "center",
      color: "#3b82f6",
    },
    {
      id: "center2",
      title: "Midtown Help Center",
      description: "Food distribution & support services",
      lat: 12.98,
      lng: 77.61,
      phone: "+91 80 5678 9012",
      type: "center",
      color: "#3b82f6",
    },
    {
      id: "center3",
      title: "Uptown Community Hub",
      description: "Daily meal programs available",
      lat: 12.96,
      lng: 77.58,
      phone: "+91 80 6789 0123",
      type: "center",
      color: "#3b82f6",
    },
  ]

  // Combine food and center markers for map
  const mapMarkers = [
    ...availableFood.map((food) => ({
      ...food,
      type: "food",
      color: "#059669",
      description: `${food.donor} • ${food.quantity}`,
    })),
    ...communityCenters,
  ]

  const claimedItems = [
    {
      id: 1,
      title: "Leftover Pizza",
      donor: "Tony's Pizzeria",
      quantity: "20 slices",
      location: "456 Oak Ave",
      claimedAt: "2 hours ago",
      pickupBy: "4:00 PM today",
      status: "Confirmed",
      contact: "+1 (555) 123-4567",
    },
    {
      id: 2,
      title: "Catered Lunch Surplus",
      donor: "Elite Catering",
      quantity: "25 meals",
      location: "321 Business Blvd",
      claimedAt: "Yesterday",
      pickupBy: "Completed",
      status: "Completed",
      contact: "+1 (555) 987-6543",
    },
  ]

  const notifications = [
    {
      id: 1,
      type: "new-food",
      message: "New food available: Fresh Sandwiches & Salads (0.8 miles away)",
      time: "5 minutes ago",
      read: false,
    },
    {
      id: 2,
      type: "pickup-reminder",
      message: "Reminder: Pickup pizza from Tony's Pizzeria by 4:00 PM",
      time: "1 hour ago",
      read: false,
    },
    {
      id: 3,
      type: "claim-confirmed",
      message: "Your claim for catered lunch has been confirmed",
      time: "Yesterday",
      read: true,
    },
  ]

  const getStatusColor = (status) => {
    switch (status) {
      case "Available":
        return "bg-green-100 text-green-800 animate-pulse"
      case "Confirmed":
        return "bg-blue-100 text-blue-800"
      case "Completed":
        return "bg-gray-100 text-gray-800"
      case "Expired":
        return "bg-red-100 text-red-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  const sidebarItems = [
    { id: "available-food", label: "Available Food", icon: Search },
    { id: "claimed-items", label: "Claimed Items", icon: CheckCircle },
    { id: "notifications", label: "Notifications", icon: Bell },
    { id: "profile", label: "Profile", icon: Users },
  ]

  const handleMarkerClick = (marker) => {
    console.log("Marker clicked:", marker)
    // You can implement custom behavior here
  }

  return (
    <DashboardLayout
      title="Receiver Dashboard"
      sidebarItems={sidebarItems}
      activeTab={activeTab}
      onTabChange={setActiveTab}
    >
      <div className="space-y-6">
        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="transform hover:scale-105 transition-all duration-300 hover:shadow-xl group animate-fade-in-up">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600 group-hover:text-green-600 transition-colors duration-300">
                    Available Now
                  </p>
                  <p className="text-3xl font-bold text-green-600 animate-count-up">{availableFood.length}</p>
                </div>
                <Search className="w-8 h-8 text-green-600 group-hover:animate-bounce" />
              </div>
            </CardContent>
          </Card>

          <Card className="transform hover:scale-105 transition-all duration-300 hover:shadow-xl group animate-fade-in-up animation-delay-200">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600 group-hover:text-blue-600 transition-colors duration-300">
                    Claimed Items
                  </p>
                  <p className="text-3xl font-bold text-blue-600 animate-count-up">{claimedItems.length}</p>
                </div>
                <CheckCircle className="w-8 h-8 text-blue-600 group-hover:animate-spin" />
              </div>
            </CardContent>
          </Card>

          <Card className="transform hover:scale-105 transition-all duration-300 hover:shadow-xl group animate-fade-in-up animation-delay-400">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600 group-hover:text-orange-600 transition-colors duration-300">
                    This Month
                  </p>
                  <p className="text-3xl font-bold text-orange-600 animate-count-up">47</p>
                </div>
                <Heart className="w-8 h-8 text-orange-600 group-hover:animate-pulse" />
              </div>
            </CardContent>
          </Card>

          <Card className="transform hover:scale-105 transition-all duration-300 hover:shadow-xl group animate-fade-in-up animation-delay-600">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600 group-hover:text-red-600 transition-colors duration-300">
                    Notifications
                  </p>
                  <p className="text-3xl font-bold text-red-600 animate-count-up">
                    {notifications.filter((n) => !n.read).length}
                  </p>
                </div>
                <Bell className="w-8 h-8 text-red-600 group-hover:animate-swing" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main Content */}
        {activeTab === "available-food" && (
          <div className="space-y-6">
            {/* Filters */}
            <Card className="animate-fade-in-up">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Filter className="w-5 h-5 animate-pulse" />
                  <span className="bg-gradient-to-r from-green-600 to-orange-500 bg-clip-text text-transparent">
                    Filter Available Food
                  </span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="location">Location</Label>
                    <Select value={selectedLocation} onValueChange={setSelectedLocation}>
                      <SelectTrigger className="hover:border-green-400 transition-colors duration-300">
                        <SelectValue placeholder="All locations" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All locations</SelectItem>
                        <SelectItem value="downtown">Downtown</SelectItem>
                        <SelectItem value="midtown">Midtown</SelectItem>
                        <SelectItem value="uptown">Uptown</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="foodType">Food Type</Label>
                    <Select value={selectedFoodType} onValueChange={setSelectedFoodType}>
                      <SelectTrigger className="hover:border-orange-400 transition-colors duration-300">
                        <SelectValue placeholder="All types" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All types</SelectItem>
                        <SelectItem value="prepared-meals">Prepared Meals</SelectItem>
                        <SelectItem value="fresh-produce">Fresh Produce</SelectItem>
                        <SelectItem value="baked-goods">Baked Goods</SelectItem>
                        <SelectItem value="packaged-food">Packaged Food</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="timeframe">Available For</Label>
                    <Select value={selectedTimeframe} onValueChange={setSelectedTimeframe}>
                      <SelectTrigger className="hover:border-blue-400 transition-colors duration-300">
                        <SelectValue placeholder="Any time" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">Any time</SelectItem>
                        <SelectItem value="1-hour">Next 1 hour</SelectItem>
                        <SelectItem value="2-hours">Next 2 hours</SelectItem>
                        <SelectItem value="6-hours">Next 6 hours</SelectItem>
                        <SelectItem value="12-hours">Next 12 hours</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="flex items-end">
                    <Button className="w-full bg-gradient-to-r from-green-600 to-orange-500 hover:from-green-700 hover:to-orange-600 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl group">
                      <Sparkles className="w-4 h-4 mr-2 group-hover:animate-spin" />
                      Apply Filters
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Interactive Map */}
            <Card className="animate-fade-in-up animation-delay-200">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <MapPin className="w-5 h-5 text-green-600 animate-bounce" />
                  <span>Food & Community Centers Near You</span>
                </CardTitle>
                <CardDescription>
                  Interactive map showing available food donations (🍽️) and walk-in community centers (🏢) in your area
                </CardDescription>
              </CardHeader>
              <CardContent>
                <LeafletMap
                  center={[12.9716, 77.5946]} // Bangalore coordinates
                  zoom={13}
                  markers={mapMarkers}
                  height="500px"
                  showUserLocation={true}
                  onMarkerClick={handleMarkerClick}
                  className="shadow-lg"
                />
                <div className="mt-4 flex flex-wrap gap-4 text-sm text-gray-600">
                  <div className="flex items-center space-x-2">
                    <span className="w-4 h-4 bg-green-600 rounded-full"></span>
                    <span>🍽️ Available Food Donations</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="w-4 h-4 bg-blue-600 rounded-full"></span>
                    <span>🏢 Community Centers</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="w-4 h-4 bg-blue-500 rounded-full"></span>
                    <span>📍 Your Location</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Available Food List */}
            <Card className="animate-fade-in-up animation-delay-400">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <TrendingUp className="w-5 h-5 text-green-600" />
                  <span>Available Food Donations</span>
                </CardTitle>
                <CardDescription>{availableFood.length} food donations available near you</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {availableFood.map((food, index) => (
                    <div
                      key={food.id}
                      className="border rounded-lg p-6 hover:shadow-xl transition-all duration-500 transform hover:scale-[1.02] hover:-translate-y-1 group animate-fade-in-up"
                      style={{ animationDelay: `${600 + index * 200}ms` }}
                    >
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <h3 className="text-lg font-semibold text-gray-800 group-hover:text-green-600 transition-colors duration-300">
                            {food.title}
                          </h3>
                          <p className="text-sm text-gray-600">by {food.donor}</p>
                        </div>
                        <Badge className={getStatusColor(food.status)}>{food.status}</Badge>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                        <div className="flex items-center space-x-2 group-hover:text-green-600 transition-colors duration-300">
                          <Users className="w-4 h-4 text-gray-400 group-hover:text-green-600 transition-colors duration-300" />
                          <span className="text-sm text-gray-600 group-hover:text-green-600 transition-colors duration-300">
                            {food.quantity}
                          </span>
                        </div>
                        <div className="flex items-center space-x-2 group-hover:text-orange-600 transition-colors duration-300">
                          <MapPin className="w-4 h-4 text-gray-400 group-hover:text-orange-600 transition-colors duration-300" />
                          <span className="text-sm text-gray-600 group-hover:text-orange-600 transition-colors duration-300">
                            {food.distance}
                          </span>
                        </div>
                        <div className="flex items-center space-x-2 group-hover:text-red-600 transition-colors duration-300">
                          <Clock className="w-4 h-4 text-gray-400 group-hover:text-red-600 transition-colors duration-300" />
                          <span className="text-sm text-gray-600 group-hover:text-red-600 transition-colors duration-300">
                            Expires in {food.expiry}
                          </span>
                        </div>
                      </div>

                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm text-gray-500">{food.location}</p>
                          <p className="text-xs text-gray-400">Posted {food.posted}</p>
                        </div>
                        <div className="flex space-x-2">
                          <Button
                            variant="outline"
                            size="sm"
                            className="transform hover:scale-105 transition-all duration-300 group/btn"
                            onClick={() =>
                              window.open(
                                `https://www.google.com/maps/dir/?api=1&destination=${food.lat},${food.lng}`,
                                "_blank",
                              )
                            }
                          >
                            <Navigation className="w-4 h-4 mr-2 group-hover/btn:animate-bounce" />
                            Directions
                          </Button>
                          <Button
                            className="bg-gradient-to-r from-green-600 to-orange-500 hover:from-green-700 hover:to-orange-600 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl group/btn"
                            size="sm"
                          >
                            <Heart className="w-4 h-4 mr-2 group-hover/btn:animate-pulse" />
                            Claim Food
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Other tabs content remains the same */}
        {activeTab === "claimed-items" && (
          <Card className="animate-fade-in-up">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5 animate-pulse" />
                <span>My Claimed Items</span>
              </CardTitle>
              <CardDescription>Track your claimed food donations and pickup schedules</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Food Item</TableHead>
                      <TableHead>Donor</TableHead>
                      <TableHead>Quantity</TableHead>
                      <TableHead>Location</TableHead>
                      <TableHead>Pickup By</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Contact</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {claimedItems.map((item, index) => (
                      <TableRow
                        key={item.id}
                        className="hover:bg-green-50 transition-colors duration-300 animate-fade-in-up"
                        style={{ animationDelay: `${index * 200}ms` }}
                      >
                        <TableCell className="font-medium">{item.title}</TableCell>
                        <TableCell>{item.donor}</TableCell>
                        <TableCell>{item.quantity}</TableCell>
                        <TableCell className="max-w-xs truncate">{item.location}</TableCell>
                        <TableCell>
                          <div className="flex items-center space-x-1">
                            <Clock className="w-4 h-4 text-gray-400" />
                            <span>{item.pickupBy}</span>
                          </div>
                        </TableCell>
                        <TableCell>
                          <Badge className={getStatusColor(item.status)}>{item.status}</Badge>
                        </TableCell>
                        <TableCell>
                          <Button
                            variant="outline"
                            size="sm"
                            className="transform hover:scale-105 transition-all duration-300"
                          >
                            <Phone className="w-4 h-4 mr-2" />
                            Call
                          </Button>
                        </TableCell>
                        <TableCell>
                          <div className="flex space-x-2">
                            <Button
                              size="sm"
                              variant="outline"
                              className="transform hover:scale-105 transition-all duration-300"
                            >
                              <Navigation className="w-4 h-4" />
                            </Button>
                            {item.status === "Confirmed" && (
                              <Button
                                size="sm"
                                className="bg-green-600 hover:bg-green-700 transform hover:scale-105 transition-all duration-300"
                              >
                                Mark Picked Up
                              </Button>
                            )}
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </CardContent>
          </Card>
        )}

        {activeTab === "notifications" && (
          <Card className="animate-fade-in-up">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Bell className="w-5 h-5 animate-swing" />
                <span>Notifications</span>
              </CardTitle>
              <CardDescription>Stay updated on new food donations and pickup reminders</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {notifications.map((notification, index) => (
                  <div
                    key={notification.id}
                    className={`p-4 rounded-lg border transition-all duration-300 hover:shadow-lg transform hover:scale-[1.02] animate-fade-in-up ${
                      notification.read
                        ? "bg-gray-50 hover:bg-gray-100"
                        : "bg-blue-50 border-blue-200 hover:bg-blue-100"
                    }`}
                    style={{ animationDelay: `${index * 200}ms` }}
                  >
                    <div className="flex items-start space-x-3">
                      {notification.type === "new-food" && (
                        <Heart className="w-5 h-5 text-green-600 mt-0.5 animate-pulse" />
                      )}
                      {notification.type === "pickup-reminder" && (
                        <AlertCircle className="w-5 h-5 text-orange-600 mt-0.5 animate-bounce" />
                      )}
                      {notification.type === "claim-confirmed" && (
                        <CheckCircle className="w-5 h-5 text-blue-600 mt-0.5" />
                      )}
                      <div className="flex-1">
                        <p className="text-sm text-gray-800">{notification.message}</p>
                        <p className="text-xs text-gray-500 mt-1">{notification.time}</p>
                      </div>
                      {!notification.read && <div className="w-2 h-2 bg-blue-600 rounded-full animate-pulse"></div>}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        )}

        {/* Profile Tab */}
        {activeTab === "profile" && (
          <div className="space-y-6">
            {/* User Profile Card */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-1">
                <UserProfile />
              </div>

              <div className="lg:col-span-2">
                <Card className="animate-fade-in-up">
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <Users className="w-5 h-5" />
                      <span>Organization Profile</span>
                    </CardTitle>
                    <CardDescription>Manage your organization information and verification status</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <form className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <Label htmlFor="orgName">Organization Name</Label>
                          <Input
                            id="orgName"
                            defaultValue="Community Food Bank"
                            placeholder="Your organization name"
                            className="hover:border-green-400 focus:border-green-500 transition-colors duration-300"
                          />
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="orgType">Organization Type</Label>
                          <Select defaultValue="food-bank">
                            <SelectTrigger className="hover:border-orange-400 transition-colors duration-300">
                              <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="food-bank">Food Bank</SelectItem>
                              <SelectItem value="shelter">Homeless Shelter</SelectItem>
                              <SelectItem value="ngo">NGO</SelectItem>
                              <SelectItem value="community-center">Community Center</SelectItem>
                              <SelectItem value="religious">Religious Organization</SelectItem>
                              <SelectItem value="other">Other</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <Label htmlFor="contactName">Contact Person</Label>
                          <Input
                            id="contactName"
                            defaultValue="Sarah Johnson"
                            placeholder="Primary contact name"
                            className="hover:border-green-400 focus:border-green-500 transition-colors duration-300"
                          />
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="contactEmail">Contact Email</Label>
                          <Input
                            id="contactEmail"
                            type="email"
                            defaultValue="sarah@communityfoodbank.org"
                            placeholder="Contact email"
                            className="hover:border-orange-400 focus:border-orange-500 transition-colors duration-300"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <Label htmlFor="contactPhone">Phone Number</Label>
                          <Input
                            id="contactPhone"
                            type="tel"
                            defaultValue="+1 (555) 987-6543"
                            placeholder="Contact phone"
                            className="hover:border-blue-400 focus:border-blue-500 transition-colors duration-300"
                          />
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="capacity">Daily Capacity</Label>
                          <Input
                            id="capacity"
                            defaultValue="200 meals"
                            placeholder="How many people can you serve daily?"
                            className="hover:border-purple-400 focus:border-purple-500 transition-colors duration-300"
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="address">Organization Address</Label>
                        <Input
                          id="address"
                          defaultValue="456 Community Ave, Downtown, City 12345"
                          placeholder="Full organization address"
                          className="hover:border-green-400 focus:border-green-500 transition-colors duration-300"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="description">About Your Organization</Label>
                        <textarea
                          id="description"
                          className="w-full p-3 border border-gray-300 rounded-md resize-none hover:border-orange-400 focus:border-orange-500 transition-colors duration-300"
                          rows={4}
                          defaultValue="Community Food Bank has been serving families in need for over 15 years. We distribute food to over 500 families weekly and operate a soup kitchen serving 200 meals daily."
                          placeholder="Tell donors about your mission and impact..."
                        />
                      </div>

                      <div className="p-4 bg-gradient-to-r from-green-50 to-green-100 rounded-lg border border-green-200 animate-pulse">
                        <div className="flex items-center space-x-2">
                          <CheckCircle className="w-5 h-5 text-green-600 animate-bounce" />
                          <span className="font-medium text-green-800">Verification Status: Verified</span>
                        </div>
                        <p className="text-sm text-green-700 mt-1">
                          Your organization has been verified and can claim food donations.
                        </p>
                      </div>

                      <div className="flex justify-end space-x-4">
                        <Button variant="outline" className="transform hover:scale-105 transition-all duration-300">
                          Cancel
                        </Button>
                        <Button className="bg-gradient-to-r from-green-600 to-orange-500 hover:from-green-700 hover:to-orange-600 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
                          Save Changes
                        </Button>
                      </div>
                    </form>

                    {/* Logout Section */}
                    <Card className="border-red-200 bg-red-50">
                      <CardHeader>
                        <CardTitle className="flex items-center space-x-2 text-red-700">
                          <LogOut className="w-5 h-5" />
                          <span>Account Actions</span>
                        </CardTitle>
                        <CardDescription className="text-red-600">
                          Manage your account session and security
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="flex items-center justify-between p-4 bg-white rounded-lg border border-red-200">
                          <div>
                            <h4 className="font-medium text-gray-800">Sign Out</h4>
                            <p className="text-sm text-gray-600">Sign out of your account and return to the homepage</p>
                          </div>
                          <Button
                            variant="outline"
                            onClick={() => {
                              localStorage.removeItem("userData")
                              window.location.href = "/"
                            }}
                            className="border-red-300 text-red-600 hover:bg-red-50 hover:border-red-400 transform hover:scale-105 transition-all duration-300 group"
                          >
                            <LogOut className="w-4 h-4 mr-2 group-hover:animate-bounce" />
                            Sign Out
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        )}
      </div>
    </DashboardLayout>
  )
}
