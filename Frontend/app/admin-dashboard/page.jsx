"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import {
  Shield,
  Users,
  TrendingUp,
  Activity,
  CheckCircle,
  XCircle,
  Eye,
  Heart,
  MapPin,
  Clock,
  Crown,
  LogOut,
} from "lucide-react"
import { DashboardLayout } from "@/components/dashboard-layout"
import { UserProfile } from "@/components/user-profile"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState("overview")

  // Mock data
  const verificationRequests = [
    {
      id: 1,
      name: "Green Valley Shelter",
      type: "Homeless Shelter",
      contact: "Mike Wilson",
      email: "mike@greenvalley.org",
      phone: "+1 (555) 234-5678",
      address: "789 Valley Road, Green Valley",
      submitted: "2 hours ago",
      status: "Pending",
    },
    {
      id: 2,
      name: "Downtown Community Kitchen",
      type: "Community Center",
      contact: "Lisa Chen",
      email: "lisa@downtownkitchen.org",
      phone: "+1 (555) 345-6789",
      address: "123 Downtown Ave, City Center",
      submitted: "1 day ago",
      status: "Pending",
    },
    {
      id: 3,
      name: "Hope Foundation",
      type: "NGO",
      contact: "David Rodriguez",
      email: "david@hopefoundation.org",
      phone: "+1 (555) 456-7890",
      address: "456 Hope Street, Riverside",
      submitted: "3 days ago",
      status: "Under Review",
    },
  ]

  const recentActivity = [
    {
      id: 1,
      type: "donation",
      message: "Downtown Cafe posted 50 servings of fresh sandwiches",
      time: "5 minutes ago",
      location: "Downtown",
    },
    {
      id: 2,
      type: "claim",
      message: "Community Food Bank claimed surplus bread from Sweet Bakery",
      time: "15 minutes ago",
      location: "Midtown",
    },
    {
      id: 3,
      type: "verification",
      message: "Green Valley Shelter submitted verification request",
      time: "2 hours ago",
      location: "Green Valley",
    },
    {
      id: 4,
      type: "completion",
      message: "Tony's Pizzeria donation successfully picked up",
      time: "3 hours ago",
      location: "Oak Avenue",
    },
  ]

  const analytics = {
    totalUsers: 1247,
    activeDonors: 342,
    activeReceivers: 89,
    totalDonations: 2847,
    mealsServed: 15420,
    foodSaved: "12.3 tons",
    co2Reduced: "8.7 tons",
  }

  const getActivityIcon = (type) => {
    switch (type) {
      case "donation":
        return <Heart className="w-4 h-4 text-green-600" />
      case "claim":
        return <CheckCircle className="w-4 h-4 text-blue-600" />
      case "verification":
        return <Shield className="w-4 h-4 text-orange-600" />
      case "completion":
        return <TrendingUp className="w-4 h-4 text-purple-600" />
      default:
        return <Activity className="w-4 h-4 text-gray-600" />
    }
  }

  const sidebarItems = [
    { id: "overview", label: "Overview", icon: TrendingUp },
    { id: "verification", label: "User Verification", icon: Shield },
    { id: "analytics", label: "Analytics", icon: Activity },
    { id: "activity", label: "Recent Activity", icon: Clock },
    { id: "profile", label: "Admin Profile", icon: Users },
  ]

  return (
    <DashboardLayout
      title="Admin Dashboard"
      sidebarItems={sidebarItems}
      activeTab={activeTab}
      onTabChange={setActiveTab}
    >
      <div className="space-y-6">
        {activeTab === "overview" && (
          <>
            {/* Analytics Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-600">Total Users</p>
                      <p className="text-3xl font-bold text-blue-600">{analytics.totalUsers}</p>
                    </div>
                    <Users className="w-8 h-8 text-blue-600" />
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-600">Active Donors</p>
                      <p className="text-3xl font-bold text-green-600">{analytics.activeDonors}</p>
                    </div>
                    <Heart className="w-8 h-8 text-green-600" />
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-600">Active Receivers</p>
                      <p className="text-3xl font-bold text-orange-600">{analytics.activeReceivers}</p>
                    </div>
                    <Shield className="w-8 h-8 text-orange-600" />
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-600">Total Donations</p>
                      <p className="text-3xl font-bold text-purple-600">{analytics.totalDonations}</p>
                    </div>
                    <TrendingUp className="w-8 h-8 text-purple-600" />
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Impact Metrics */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card>
                <CardContent className="p-6 text-center">
                  <div className="text-4xl font-bold text-green-600 mb-2">{analytics.mealsServed}</div>
                  <div className="text-sm text-gray-600">Meals Served</div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6 text-center">
                  <div className="text-4xl font-bold text-blue-600 mb-2">{analytics.foodSaved}</div>
                  <div className="text-sm text-gray-600">Food Saved</div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6 text-center">
                  <div className="text-4xl font-bold text-orange-600 mb-2">{analytics.co2Reduced}</div>
                  <div className="text-sm text-gray-600">CO₂ Emissions Reduced</div>
                </CardContent>
              </Card>
            </div>

            {/* Quick Actions */}
            <Card>
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
                <CardDescription>Common administrative tasks and system management</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <Button
                    className="h-20 flex flex-col items-center justify-center space-y-2"
                    onClick={() => setActiveTab("verification")}
                  >
                    <Shield className="w-6 h-6" />
                    <span>Review Verifications</span>
                  </Button>

                  <Button
                    variant="outline"
                    className="h-20 flex flex-col items-center justify-center space-y-2"
                    onClick={() => setActiveTab("analytics")}
                  >
                    <TrendingUp className="w-6 h-6" />
                    <span>View Analytics</span>
                  </Button>

                  <Button
                    variant="outline"
                    className="h-20 flex flex-col items-center justify-center space-y-2"
                    onClick={() => setActiveTab("activity")}
                  >
                    <Activity className="w-6 h-6" />
                    <span>Recent Activity</span>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </>
        )}

        {activeTab === "verification" && (
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Shield className="w-5 h-5" />
                <span>User Verification Requests</span>
              </CardTitle>
              <CardDescription>Review and approve new organization registrations</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Organization</TableHead>
                      <TableHead>Type</TableHead>
                      <TableHead>Contact</TableHead>
                      <TableHead>Location</TableHead>
                      <TableHead>Submitted</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {verificationRequests.map((request) => (
                      <TableRow key={request.id}>
                        <TableCell>
                          <div>
                            <div className="font-medium">{request.name}</div>
                            <div className="text-sm text-gray-500">{request.email}</div>
                          </div>
                        </TableCell>
                        <TableCell>{request.type}</TableCell>
                        <TableCell>
                          <div>
                            <div className="font-medium">{request.contact}</div>
                            <div className="text-sm text-gray-500">{request.phone}</div>
                          </div>
                        </TableCell>
                        <TableCell className="max-w-xs truncate">{request.address}</TableCell>
                        <TableCell>{request.submitted}</TableCell>
                        <TableCell>
                          <Badge
                            className={
                              request.status === "Pending"
                                ? "bg-yellow-100 text-yellow-800"
                                : "bg-blue-100 text-blue-800"
                            }
                          >
                            {request.status}
                          </Badge>
                        </TableCell>
                        <TableCell>
                          <div className="flex space-x-2">
                            <Button size="sm" variant="outline">
                              <Eye className="w-4 h-4" />
                            </Button>
                            <Button size="sm" className="bg-green-600 hover:bg-green-700">
                              <CheckCircle className="w-4 h-4" />
                            </Button>
                            <Button size="sm" variant="outline" className="text-red-600 hover:text-red-700">
                              <XCircle className="w-4 h-4" />
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

        {activeTab === "analytics" && (
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <TrendingUp className="w-5 h-5" />
                  <span>Platform Analytics</span>
                </CardTitle>
                <CardDescription>Comprehensive insights into platform usage and impact</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <div className="text-center p-6 bg-blue-50 rounded-lg">
                    <Users className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                    <div className="text-3xl font-bold text-blue-600 mb-2">{analytics.totalUsers}</div>
                    <div className="text-sm text-gray-600">Total Registered Users</div>
                    <div className="text-xs text-green-600 mt-1">↑ 12% from last month</div>
                  </div>

                  <div className="text-center p-6 bg-green-50 rounded-lg">
                    <Heart className="w-12 h-12 text-green-600 mx-auto mb-4" />
                    <div className="text-3xl font-bold text-green-600 mb-2">{analytics.activeDonors}</div>
                    <div className="text-sm text-gray-600">Active Donors</div>
                    <div className="text-xs text-green-600 mt-1">↑ 8% from last month</div>
                  </div>

                  <div className="text-center p-6 bg-orange-50 rounded-lg">
                    <Shield className="w-12 h-12 text-orange-600 mx-auto mb-4" />
                    <div className="text-3xl font-bold text-orange-600 mb-2">{analytics.activeReceivers}</div>
                    <div className="text-sm text-gray-600">Active Receivers</div>
                    <div className="text-xs text-green-600 mt-1">↑ 15% from last month</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Donation Trends</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-64 bg-gray-100 rounded-lg flex items-center justify-center">
                    <div className="text-center">
                      <TrendingUp className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                      <p className="text-gray-600">Donation Trends Chart</p>
                      <p className="text-sm text-gray-500">Chart visualization would appear here</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Geographic Distribution</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-64 bg-gray-100 rounded-lg flex items-center justify-center">
                    <div className="text-center">
                      <MapPin className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                      <p className="text-gray-600">Geographic Map</p>
                      <p className="text-sm text-gray-500">Map visualization would appear here</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        )}

        {activeTab === "activity" && (
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Activity className="w-5 h-5" />
                <span>Recent Platform Activity</span>
              </CardTitle>
              <CardDescription>Real-time feed of platform activities and transactions</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentActivity.map((activity) => (
                  <div key={activity.id} className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg">
                    {getActivityIcon(activity.type)}
                    <div className="flex-1">
                      <p className="text-sm text-gray-800">{activity.message}</p>
                      <div className="flex items-center space-x-4 mt-1">
                        <span className="text-xs text-gray-500">{activity.time}</span>
                        <div className="flex items-center space-x-1">
                          <MapPin className="w-3 h-3 text-gray-400" />
                          <span className="text-xs text-gray-500">{activity.location}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        )}

        {activeTab === "profile" && (
          <div className="space-y-6">
            {/* Admin Profile Card */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-1">
                <UserProfile />
              </div>

              <div className="lg:col-span-2">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <Shield className="w-5 h-5" />
                      <span>Administrator Profile</span>
                    </CardTitle>
                    <CardDescription>Manage your administrator account and system preferences</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <form className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <Label htmlFor="adminName">Full Name</Label>
                          <Input
                            id="adminName"
                            defaultValue="Admin User"
                            placeholder="Your full name"
                            className="hover:border-purple-400 focus:border-purple-500 transition-colors duration-300"
                          />
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="adminTitle">Job Title</Label>
                          <Input
                            id="adminTitle"
                            defaultValue="System Administrator"
                            placeholder="Your job title"
                            className="hover:border-blue-400 focus:border-blue-500 transition-colors duration-300"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <Label htmlFor="adminEmail">Email Address</Label>
                          <Input
                            id="adminEmail"
                            type="email"
                            defaultValue="admin@left2right.com"
                            placeholder="Admin email"
                            className="hover:border-green-400 focus:border-green-500 transition-colors duration-300"
                          />
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="adminPhone">Phone Number</Label>
                          <Input
                            id="adminPhone"
                            type="tel"
                            defaultValue="+1 (555) 000-0000"
                            placeholder="Admin phone"
                            className="hover:border-orange-400 focus:border-orange-500 transition-colors duration-300"
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="adminDepartment">Department</Label>
                        <Select defaultValue="operations">
                          <SelectTrigger className="hover:border-purple-400 transition-colors duration-300">
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="operations">Operations</SelectItem>
                            <SelectItem value="technical">Technical</SelectItem>
                            <SelectItem value="support">Support</SelectItem>
                            <SelectItem value="management">Management</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="adminBio">About</Label>
                        <Textarea
                          id="adminBio"
                          defaultValue="Experienced administrator managing the Left2Right platform to ensure smooth operations and maximum impact in fighting food waste."
                          placeholder="Brief description about yourself..."
                          rows={3}
                          className="hover:border-purple-400 focus:border-purple-500 transition-colors duration-300"
                        />
                      </div>

                      <div className="p-4 bg-gradient-to-r from-purple-50 to-blue-50 rounded-lg border border-purple-200">
                        <div className="flex items-center space-x-2">
                          <Crown className="w-5 h-5 text-purple-600 animate-bounce" />
                          <span className="font-medium text-purple-800">Administrator Privileges: Full Access</span>
                        </div>
                        <p className="text-sm text-purple-700 mt-1">
                          You have full administrative access to all platform features and user management.
                        </p>
                      </div>

                      <div className="flex justify-end space-x-4">
                        <Button variant="outline" className="transform hover:scale-105 transition-all duration-300">
                          Cancel
                        </Button>
                        <Button className="bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
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
                          Manage your administrator session and security
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="flex items-center justify-between p-4 bg-white rounded-lg border border-red-200">
                          <div>
                            <h4 className="font-medium text-gray-800">Sign Out</h4>
                            <p className="text-sm text-gray-600">
                              Sign out of your administrator account and return to the homepage
                            </p>
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
