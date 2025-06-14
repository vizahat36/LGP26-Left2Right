"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { TrendingUp, Users, Leaf, Heart, Calendar, MapPin, Award, Target } from "lucide-react"
import Link from "next/link"
import { LeafletMap } from "@/components/leaflet-map"

export default function ImpactAnalyticsPage() {
  const globalStats = {
    totalFoodSaved: "127.5 tons",
    mealsProvided: 89420,
    co2Reduced: "85.3 tons",
    peopleHelped: 12847,
    activeCities: 45,
    partnersJoined: 1247,
  }

  const monthlyData = [
    { month: "Jan", donations: 245, meals: 3420 },
    { month: "Feb", donations: 289, meals: 4150 },
    { month: "Mar", donations: 312, meals: 4680 },
    { month: "Apr", donations: 356, meals: 5240 },
    { month: "May", donations: 398, meals: 5890 },
    { month: "Jun", donations: 445, meals: 6520 },
  ]

  const topContributors = [
    { name: "Downtown Restaurant Group", donations: 156, meals: 2340 },
    { name: "City Catering Services", donations: 134, meals: 2010 },
    { name: "Fresh Market Chain", donations: 98, meals: 1470 },
    { name: "Community Bakeries", donations: 87, meals: 1305 },
    { name: "Local Food Trucks", donations: 76, meals: 1140 },
  ]

  const impactMilestones = [
    {
      milestone: "100,000 Meals Served",
      date: "March 2024",
      description: "Reached our first major milestone of serving 100,000 meals to communities in need",
    },
    {
      milestone: "50 Tons of Food Saved",
      date: "February 2024",
      description: "Prevented 50 tons of food from going to waste through our platform",
    },
    {
      milestone: "1,000 Active Users",
      date: "January 2024",
      description: "Welcomed our 1,000th active user to the Left2Right community",
    },
  ]

  // Sample impact data with geographic coordinates for Karnataka cities
  const impactMapData = [
    {
      id: "bangalore",
      title: "Bangalore",
      description: "25,420 meals served • 156 active donors",
      lat: 12.9716,
      lng: 77.5946,
      type: "impact",
      color: "#059669",
      meals: 25420,
      donors: 156,
    },
    {
      id: "mysore",
      title: "Mysore",
      description: "8,340 meals served • 45 active donors",
      lat: 12.2958,
      lng: 76.6394,
      type: "impact",
      color: "#ea580c",
      meals: 8340,
      donors: 45,
    },
    {
      id: "mangalore",
      title: "Mangalore",
      description: "12,150 meals served • 67 active donors",
      lat: 12.9141,
      lng: 74.856,
      type: "impact",
      color: "#3b82f6",
      meals: 12150,
      donors: 67,
    },
    {
      id: "hubli",
      title: "Hubli",
      description: "6,890 meals served • 32 active donors",
      lat: 15.3647,
      lng: 75.124,
      type: "impact",
      color: "#8b5cf6",
      meals: 6890,
      donors: 32,
    },
    {
      id: "belgaum",
      title: "Belgaum",
      description: "5,240 meals served • 28 active donors",
      lat: 15.8497,
      lng: 74.4977,
      type: "impact",
      color: "#f59e0b",
      meals: 5240,
      donors: 28,
    },
    {
      id: "gulbarga",
      title: "Gulbarga",
      description: "4,180 meals served • 21 active donors",
      lat: 17.3297,
      lng: 76.8343,
      type: "impact",
      color: "#ef4444",
      meals: 4180,
      donors: 21,
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-orange-50">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-green-600 to-orange-500 rounded-lg flex items-center justify-center">
              <Heart className="w-5 h-5 text-white" />
            </div>
            <span className="text-2xl font-bold text-gray-800">Left2Right</span>
          </div>
          <nav className="flex items-center space-x-6">
            <Link href="/" className="text-gray-600 hover:text-green-600 transition-colors">
              Home
            </Link>
            <Link href="/auth" className="text-gray-600 hover:text-green-600 transition-colors">
              Dashboard
            </Link>
          </nav>
        </div>
      </header>

      <div className="container mx-auto px-4 py-12">
        {/* Page Header */}
        <div className="text-center mb-12">
          <Badge className="mb-4 bg-green-100 text-green-800 border-green-200">🌍 Global Impact Report</Badge>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6">
            Our Collective
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-orange-500"> Impact</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            See how the Left2Right community is making a real difference in fighting food waste and hunger across
            communities worldwide.
          </p>
        </div>

        {/* Global Impact Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          <Card className="text-center p-8 border-2 hover:border-green-200 transition-colors">
            <CardContent className="pt-6">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Leaf className="w-8 h-8 text-green-600" />
              </div>
              <div className="text-4xl font-bold text-green-600 mb-2">{globalStats.totalFoodSaved}</div>
              <div className="text-gray-600 font-medium">Food Saved from Waste</div>
              <div className="text-sm text-gray-500 mt-2">Equivalent to 255,000 meals</div>
            </CardContent>
          </Card>

          <Card className="text-center p-8 border-2 hover:border-orange-200 transition-colors">
            <CardContent className="pt-6">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="w-8 h-8 text-orange-600" />
              </div>
              <div className="text-4xl font-bold text-orange-600 mb-2">
                {globalStats.mealsProvided.toLocaleString()}
              </div>
              <div className="text-gray-600 font-medium">Meals Provided</div>
              <div className="text-sm text-gray-500 mt-2">To families and individuals in need</div>
            </CardContent>
          </Card>

          <Card className="text-center p-8 border-2 hover:border-blue-200 transition-colors">
            <CardContent className="pt-6">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <TrendingUp className="w-8 h-8 text-blue-600" />
              </div>
              <div className="text-4xl font-bold text-blue-600 mb-2">{globalStats.co2Reduced}</div>
              <div className="text-gray-600 font-medium">CO₂ Emissions Prevented</div>
              <div className="text-sm text-gray-500 mt-2">Environmental impact reduction</div>
            </CardContent>
          </Card>

          <Card className="text-center p-8 border-2 hover:border-purple-200 transition-colors">
            <CardContent className="pt-6">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart className="w-8 h-8 text-purple-600" />
              </div>
              <div className="text-4xl font-bold text-purple-600 mb-2">{globalStats.peopleHelped.toLocaleString()}</div>
              <div className="text-gray-600 font-medium">People Helped</div>
              <div className="text-sm text-gray-500 mt-2">Across all communities</div>
            </CardContent>
          </Card>

          <Card className="text-center p-8 border-2 hover:border-green-200 transition-colors">
            <CardContent className="pt-6">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <MapPin className="w-8 h-8 text-green-600" />
              </div>
              <div className="text-4xl font-bold text-green-600 mb-2">{globalStats.activeCities}</div>
              <div className="text-gray-600 font-medium">Active Cities</div>
              <div className="text-sm text-gray-500 mt-2">Growing network worldwide</div>
            </CardContent>
          </Card>

          <Card className="text-center p-8 border-2 hover:border-orange-200 transition-colors">
            <CardContent className="pt-6">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Award className="w-8 h-8 text-orange-600" />
              </div>
              <div className="text-4xl font-bold text-orange-600 mb-2">
                {globalStats.partnersJoined.toLocaleString()}
              </div>
              <div className="text-gray-600 font-medium">Community Partners</div>
              <div className="text-sm text-gray-500 mt-2">Donors and receivers combined</div>
            </CardContent>
          </Card>
        </div>

        {/* Geographic Impact Map */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <MapPin className="w-6 h-6" />
              <span>Geographic Impact Across Karnataka</span>
            </CardTitle>
            <CardDescription>Interactive map showing our impact across different cities in Karnataka</CardDescription>
          </CardHeader>
          <CardContent>
            <LeafletMap
              center={[14.5204, 75.7224]} // Karnataka center coordinates
              zoom={7}
              markers={impactMapData}
              height="500px"
              showUserLocation={false}
              className="shadow-lg"
            />
            <div className="mt-4 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 text-sm">
              {impactMapData.map((city) => (
                <div key={city.id} className="flex items-center space-x-2">
                  <span className="w-4 h-4 rounded-full" style={{ backgroundColor: city.color }}></span>
                  <span className="font-medium">{city.title}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Monthly Trends */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <TrendingUp className="w-6 h-6" />
              <span>Monthly Growth Trends</span>
            </CardTitle>
            <CardDescription>Platform activity and impact growth over the past 6 months</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-semibold mb-4 text-gray-800">Donations by Month</h4>
                <div className="space-y-3">
                  {monthlyData.map((data, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <span className="font-medium text-gray-700">{data.month} 2024</span>
                      <div className="flex items-center space-x-4">
                        <span className="text-green-600 font-semibold">{data.donations} donations</span>
                        <div className="w-24 bg-gray-200 rounded-full h-2">
                          <div
                            className="bg-green-600 h-2 rounded-full"
                            style={{ width: `${(data.donations / 500) * 100}%` }}
                          ></div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="font-semibold mb-4 text-gray-800">Meals Served by Month</h4>
                <div className="space-y-3">
                  {monthlyData.map((data, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <span className="font-medium text-gray-700">{data.month} 2024</span>
                      <div className="flex items-center space-x-4">
                        <span className="text-orange-600 font-semibold">{data.meals.toLocaleString()} meals</span>
                        <div className="w-24 bg-gray-200 rounded-full h-2">
                          <div
                            className="bg-orange-600 h-2 rounded-full"
                            style={{ width: `${(data.meals / 7000) * 100}%` }}
                          ></div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Top Contributors */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Award className="w-6 h-6" />
              <span>Top Contributors</span>
            </CardTitle>
            <CardDescription>Organizations making the biggest impact in food donation</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {topContributors.map((contributor, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-4 bg-gradient-to-r from-green-50 to-orange-50 rounded-lg"
                >
                  <div className="flex items-center space-x-4">
                    <div className="w-10 h-10 bg-gradient-to-r from-green-600 to-orange-500 rounded-full flex items-center justify-center text-white font-bold">
                      {index + 1}
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800">{contributor.name}</h4>
                      <p className="text-sm text-gray-600">{contributor.meals.toLocaleString()} meals provided</p>
                    </div>
                  </div>
                  <Badge className="bg-green-100 text-green-800">{contributor.donations} donations</Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Impact Milestones */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Target className="w-6 h-6" />
              <span>Impact Milestones</span>
            </CardTitle>
            <CardDescription>Key achievements in our mission to reduce food waste</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {impactMilestones.map((milestone, index) => (
                <div key={index} className="flex items-start space-x-4 p-6 bg-gray-50 rounded-lg">
                  <Calendar className="w-6 h-6 text-green-600 mt-1" />
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-semibold text-gray-800">{milestone.milestone}</h4>
                      <Badge className="bg-green-100 text-green-800">{milestone.date}</Badge>
                    </div>
                    <p className="text-gray-600 leading-relaxed">{milestone.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Call to Action */}
        <Card className="bg-gradient-to-r from-green-600 to-orange-500 text-white">
          <CardContent className="p-12 text-center">
            <h2 className="text-3xl font-bold mb-4">Join Our Growing Impact</h2>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Every donation matters. Every meal counts. Be part of the solution to food waste and hunger.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/auth?role=donor">
                <button className="bg-white text-green-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-colors">
                  Start Donating Food
                </button>
              </Link>
              <Link href="/auth?role=receiver">
                <button className="border-2 border-white text-white hover:bg-white hover:text-green-600 px-8 py-4 rounded-lg font-semibold transition-colors">
                  Join as Partner Organization
                </button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
