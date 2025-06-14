"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Plus, MapPin, Clock, Edit, Trash2, Eye, Heart, TrendingUp, Users, Leaf, Calendar, LogOut } from "lucide-react"
import { DashboardLayout } from "@/components/dashboard-layout"

// Import UserProfile component
import { UserProfile } from "@/components/user-profile"

export default function DonorDashboard() {
  const [activeTab, setActiveTab] = useState("post-food")

  // Mock data
  const myPosts = [
    {
      id: 1,
      title: "Fresh Sandwiches & Salads",
      quantity: "50 servings",
      location: "Downtown Cafe, 123 Main St",
      expiry: "2 hours",
      status: "Available",
      posted: "1 hour ago",
      claimed: 0,
    },
    {
      id: 2,
      title: "Leftover Pizza",
      quantity: "20 slices",
      location: "Tony's Pizzeria, 456 Oak Ave",
      expiry: "4 hours",
      status: "Claimed",
      posted: "3 hours ago",
      claimed: 1,
    },
    {
      id: 3,
      title: "Surplus Bread & Pastries",
      quantity: "30 items",
      location: "Sweet Bakery, 789 Pine St",
      expiry: "6 hours",
      status: "Partially Claimed",
      posted: "5 hours ago",
      claimed: 2,
    },
  ]

  const impactStats = {
    totalDonations: 127,
    mealsProvided: 1850,
    co2Saved: "245 kg",
    peopleHelped: 420,
  }

  const getStatusColor = (status) => {
    switch (status) {
      case "Available":
        return "bg-green-100 text-green-800"
      case "Claimed":
        return "bg-blue-100 text-blue-800"
      case "Partially Claimed":
        return "bg-orange-100 text-orange-800"
      case "Expired":
        return "bg-red-100 text-red-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  const sidebarItems = [
    { id: "post-food", label: "Post Food", icon: Plus },
    { id: "my-posts", label: "My Posts", icon: Eye },
    { id: "impact", label: "Impact Tracker", icon: TrendingUp },
    { id: "profile", label: "Profile", icon: Users },
  ]

  return (
    <DashboardLayout
      title="Donor Dashboard"
      sidebarItems={sidebarItems}
      activeTab={activeTab}
      onTabChange={setActiveTab}
    >
      <div className="space-y-6">
        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Total Donations</p>
                  <p className="text-3xl font-bold text-green-600">{impactStats.totalDonations}</p>
                </div>
                <Heart className="w-8 h-8 text-green-600" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Meals Provided</p>
                  <p className="text-3xl font-bold text-orange-600">{impactStats.mealsProvided}</p>
                </div>
                <Users className="w-8 h-8 text-orange-600" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">CO₂ Saved</p>
                  <p className="text-3xl font-bold text-green-600">{impactStats.co2Saved}</p>
                </div>
                <Leaf className="w-8 h-8 text-green-600" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">People Helped</p>
                  <p className="text-3xl font-bold text-blue-600">{impactStats.peopleHelped}</p>
                </div>
                <TrendingUp className="w-8 h-8 text-blue-600" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main Content */}
        {activeTab === "post-food" && (
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Plus className="w-5 h-5" />
                <span>Post New Food Donation</span>
              </CardTitle>
              <CardDescription>Share details about your surplus food to help those in need</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="foodTitle">Food Title *</Label>
                    <Input id="foodTitle" placeholder="e.g., Fresh Sandwiches & Salads" required />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="quantity">Quantity *</Label>
                    <Input id="quantity" placeholder="e.g., 50 servings, 20 meals" required />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="description">Description</Label>
                  <Textarea
                    id="description"
                    placeholder="Describe the food items, ingredients, preparation details..."
                    rows={3}
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="foodType">Food Type *</Label>
                    <Select defaultValue="prepared-meals" required>
                      <SelectTrigger>
                        <SelectValue placeholder="Select food type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="prepared-meals">Prepared Meals</SelectItem>
                        <SelectItem value="fresh-produce">Fresh Produce</SelectItem>
                        <SelectItem value="baked-goods">Baked Goods</SelectItem>
                        <SelectItem value="packaged-food">Packaged Food</SelectItem>
                        <SelectItem value="beverages">Beverages</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="expiryTime">Available Until *</Label>
                    <Select defaultValue="2-hours" required>
                      <SelectTrigger>
                        <SelectValue placeholder="Select timeframe" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="1-hour">1 hour</SelectItem>
                        <SelectItem value="2-hours">2 hours</SelectItem>
                        <SelectItem value="4-hours">4 hours</SelectItem>
                        <SelectItem value="6-hours">6 hours</SelectItem>
                        <SelectItem value="12-hours">12 hours</SelectItem>
                        <SelectItem value="24-hours">24 hours</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="location">Pickup Location *</Label>
                  <div className="relative">
                    <MapPin className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                    <Input
                      id="location"
                      placeholder="Enter your address or business location"
                      className="pl-10"
                      required
                    />
                  </div>
                  <p className="text-sm text-gray-500">
                    This will be shared with verified receivers for pickup coordination
                  </p>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="pickupInstructions">Pickup Instructions</Label>
                  <Textarea
                    id="pickupInstructions"
                    placeholder="Special instructions for pickup (e.g., back entrance, contact person, available hours...)"
                    rows={2}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="photo">Food Photo (Optional)</Label>
                  <Input
                    id="photo"
                    type="file"
                    accept="image/*"
                    className="file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-green-50 file:text-green-700 hover:file:bg-green-100"
                  />
                  <p className="text-sm text-gray-500">
                    Adding a photo helps receivers better understand what you're offering
                  </p>
                </div>

                <div className="flex justify-end space-x-4">
                  <Button variant="outline">Save as Draft</Button>
                  <Button className="bg-green-600 hover:bg-green-700">Post Food Donation</Button>
                </div>
              </form>
            </CardContent>
          </Card>
        )}

        {activeTab === "my-posts" && (
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Eye className="w-5 h-5" />
                <span>My Food Posts</span>
              </CardTitle>
              <CardDescription>Manage your active and past food donations</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Food Item</TableHead>
                      <TableHead>Quantity</TableHead>
                      <TableHead>Location</TableHead>
                      <TableHead>Expires In</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Claims</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {myPosts.map((post) => (
                      <TableRow key={post.id}>
                        <TableCell className="font-medium">{post.title}</TableCell>
                        <TableCell>{post.quantity}</TableCell>
                        <TableCell className="max-w-xs truncate">{post.location}</TableCell>
                        <TableCell>
                          <div className="flex items-center space-x-1">
                            <Clock className="w-4 h-4 text-gray-400" />
                            <span>{post.expiry}</span>
                          </div>
                        </TableCell>
                        <TableCell>
                          <Badge className={getStatusColor(post.status)}>{post.status}</Badge>
                        </TableCell>
                        <TableCell>{post.claimed}</TableCell>
                        <TableCell>
                          <div className="flex space-x-2">
                            <Button size="sm" variant="outline">
                              <Edit className="w-4 h-4" />
                            </Button>
                            <Button size="sm" variant="outline">
                              <Eye className="w-4 h-4" />
                            </Button>
                            <Button size="sm" variant="outline" className="text-red-600 hover:text-red-700">
                              <Trash2 className="w-4 h-4" />
                            </Button>
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

        {activeTab === "impact" && (
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <TrendingUp className="w-5 h-5" />
                  <span>Your Impact Summary</span>
                </CardTitle>
                <CardDescription>See the positive difference you're making in your community</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  <div className="text-center p-6 bg-green-50 rounded-lg">
                    <Heart className="w-12 h-12 text-green-600 mx-auto mb-4" />
                    <div className="text-3xl font-bold text-green-600 mb-2">{impactStats.totalDonations}</div>
                    <div className="text-sm text-gray-600">Total Donations</div>
                  </div>

                  <div className="text-center p-6 bg-orange-50 rounded-lg">
                    <Users className="w-12 h-12 text-orange-600 mx-auto mb-4" />
                    <div className="text-3xl font-bold text-orange-600 mb-2">{impactStats.mealsProvided}</div>
                    <div className="text-sm text-gray-600">Meals Provided</div>
                  </div>

                  <div className="text-center p-6 bg-green-50 rounded-lg">
                    <Leaf className="w-12 h-12 text-green-600 mx-auto mb-4" />
                    <div className="text-3xl font-bold text-green-600 mb-2">{impactStats.co2Saved}</div>
                    <div className="text-sm text-gray-600">CO₂ Emissions Saved</div>
                  </div>

                  <div className="text-center p-6 bg-blue-50 rounded-lg">
                    <TrendingUp className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                    <div className="text-3xl font-bold text-blue-600 mb-2">{impactStats.peopleHelped}</div>
                    <div className="text-sm text-gray-600">People Helped</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Recent Activity</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    { date: "Today", action: "Posted 50 servings of fresh sandwiches", impact: "Helped 25 people" },
                    {
                      date: "Yesterday",
                      action: "Donated surplus bread and pastries",
                      impact: "Saved 15kg of food waste",
                    },
                    { date: "2 days ago", action: "Shared leftover catered lunch", impact: "Fed 30 community members" },
                    { date: "3 days ago", action: "Posted fresh produce", impact: "Prevented 8kg CO₂ emissions" },
                  ].map((activity, index) => (
                    <div key={index} className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg">
                      <Calendar className="w-5 h-5 text-gray-400 mt-0.5" />
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <span className="font-medium text-gray-800">{activity.action}</span>
                          <span className="text-sm text-gray-500">{activity.date}</span>
                        </div>
                        <p className="text-sm text-green-600 mt-1">{activity.impact}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Update the profile tab content to show the full UserProfile */}
        {activeTab === "profile" && (
          <div className="space-y-6">
            {/* User Profile Card */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-1">
                <UserProfile />
              </div>

              <div className="lg:col-span-2">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <Users className="w-5 h-5" />
                      <span>Profile Settings</span>
                    </CardTitle>
                    <CardDescription>Manage your account information and preferences</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <form className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <Label htmlFor="businessName">Business/Organization Name</Label>
                          <Input
                            id="businessName"
                            defaultValue="Downtown Cafe"
                            placeholder="Your business name"
                            className="hover:border-green-400 focus:border-green-500 transition-colors duration-300"
                          />
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="contactPerson">Contact Person</Label>
                          <Input
                            id="contactPerson"
                            defaultValue="John Smith"
                            placeholder="Primary contact name"
                            className="hover:border-orange-400 focus:border-orange-500 transition-colors duration-300"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <Label htmlFor="email">Email Address</Label>
                          <Input
                            id="email"
                            type="email"
                            defaultValue="john@downtowncafe.com"
                            placeholder="Contact email"
                            className="hover:border-blue-400 focus:border-blue-500 transition-colors duration-300"
                          />
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="phone">Phone Number</Label>
                          <Input
                            id="phone"
                            type="tel"
                            defaultValue="+1 (555) 123-4567"
                            placeholder="Contact phone"
                            className="hover:border-purple-400 focus:border-purple-500 transition-colors duration-300"
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="address">Business Address</Label>
                        <Input
                          id="address"
                          defaultValue="123 Main Street, Downtown, City 12345"
                          placeholder="Full business address"
                          className="hover:border-green-400 focus:border-green-500 transition-colors duration-300"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="businessType">Business Type</Label>
                        <Select defaultValue="restaurant">
                          <SelectTrigger className="hover:border-orange-400 transition-colors duration-300">
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="restaurant">Restaurant</SelectItem>
                            <SelectItem value="cafe">Cafe</SelectItem>
                            <SelectItem value="bakery">Bakery</SelectItem>
                            <SelectItem value="catering">Catering Service</SelectItem>
                            <SelectItem value="grocery">Grocery Store</SelectItem>
                            <SelectItem value="individual">Individual</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="bio">About Your Organization</Label>
                        <Textarea
                          id="bio"
                          defaultValue="Downtown Cafe has been serving the community for over 10 years. We're committed to reducing food waste and helping those in need."
                          placeholder="Tell receivers about your organization..."
                          rows={3}
                          className="hover:border-green-400 focus:border-green-500 transition-colors duration-300"
                        />
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
