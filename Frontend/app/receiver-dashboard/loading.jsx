"use client"

import { Skeleton } from "@/components/ui/skeleton"
import { Card, CardContent, CardHeader } from "@/components/ui/card"

export default function Loading() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-green-50 to-orange-50 flex">
      {/* Sidebar Skeleton */}
      <div className="w-64 bg-white/80 backdrop-blur-lg shadow-xl border-r border-green-100 p-4">
        <div className="flex items-center space-x-2 mb-8">
          <Skeleton className="w-8 h-8 rounded-lg" />
          <Skeleton className="w-24 h-6" />
        </div>
        <div className="space-y-2">
          {[...Array(4)].map((_, i) => (
            <Skeleton key={i} className="w-full h-12 rounded-lg" />
          ))}
        </div>
      </div>

      {/* Main Content Skeleton */}
      <div className="flex-1">
        {/* Header Skeleton */}
        <div className="h-16 bg-white/80 backdrop-blur-lg shadow-sm border-b border-green-100 flex items-center justify-between px-6">
          <Skeleton className="w-48 h-8" />
          <div className="flex items-center space-x-4">
            <Skeleton className="w-8 h-8 rounded-full" />
            <Skeleton className="w-32 h-8 rounded-lg" />
          </div>
        </div>

        {/* Content Skeleton */}
        <div className="p-6 space-y-6">
          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[...Array(4)].map((_, i) => (
              <Card key={i} className="animate-pulse">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div className="space-y-2">
                      <Skeleton className="w-20 h-4" />
                      <Skeleton className="w-16 h-8" />
                    </div>
                    <Skeleton className="w-8 h-8 rounded-full" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Main Content Card */}
          <Card className="animate-pulse">
            <CardHeader>
              <Skeleton className="w-48 h-6" />
              <Skeleton className="w-64 h-4" />
            </CardHeader>
            <CardContent className="space-y-4">
              {[...Array(3)].map((_, i) => (
                <div key={i} className="border rounded-lg p-6 space-y-4">
                  <div className="flex justify-between items-start">
                    <div className="space-y-2">
                      <Skeleton className="w-48 h-6" />
                      <Skeleton className="w-32 h-4" />
                    </div>
                    <Skeleton className="w-20 h-6 rounded-full" />
                  </div>
                  <div className="grid grid-cols-3 gap-4">
                    <Skeleton className="w-full h-4" />
                    <Skeleton className="w-full h-4" />
                    <Skeleton className="w-full h-4" />
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="space-y-1">
                      <Skeleton className="w-40 h-4" />
                      <Skeleton className="w-24 h-3" />
                    </div>
                    <div className="flex space-x-2">
                      <Skeleton className="w-20 h-8 rounded" />
                      <Skeleton className="w-24 h-8 rounded" />
                    </div>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
