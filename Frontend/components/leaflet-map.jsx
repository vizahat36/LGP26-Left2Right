"use client"

import { useEffect, useRef } from "react"

export function LeafletMap({
  center = [12.9716, 77.5946], // Bangalore coordinates as default
  zoom = 12,
  markers = [],
  height = "400px",
  showUserLocation = true,
  onMarkerClick = null,
  className = "",
}) {
  const mapRef = useRef(null)
  const mapInstanceRef = useRef(null)

  useEffect(() => {
    // Dynamically import Leaflet to avoid SSR issues
    const initMap = async () => {
      if (typeof window === "undefined") return

      const L = (await import("leaflet")).default

      // Fix for default markers in Next.js
      delete L.Icon.Default.prototype._getIconUrl
      L.Icon.Default.mergeOptions({
        iconRetinaUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png",
        iconUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
        shadowUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
      })

      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove()
      }

      // Initialize map
      const map = L.map(mapRef.current).setView(center, zoom)

      // Add tile layer
      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      }).addTo(map)

      // Custom icons for different marker types
      const createCustomIcon = (type, color = "#059669") => {
        return L.divIcon({
          html: `
            <div style="
              background-color: ${color};
              width: 30px;
              height: 30px;
              border-radius: 50%;
              border: 3px solid white;
              box-shadow: 0 2px 8px rgba(0,0,0,0.3);
              display: flex;
              align-items: center;
              justify-content: center;
              color: white;
              font-size: 14px;
            ">
              ${type === "food" ? "🍽️" : type === "center" ? "🏢" : type === "user" ? "📍" : "📍"}
            </div>
          `,
          className: "custom-div-icon",
          iconSize: [30, 30],
          iconAnchor: [15, 15],
          popupAnchor: [0, -15],
        })
      }

      // Add markers
      markers.forEach((marker) => {
        const icon = createCustomIcon(marker.type, marker.color)
        const leafletMarker = L.marker([marker.lat, marker.lng], { icon }).addTo(map)

        // Create popup content
        const popupContent = `
          <div style="min-width: 200px;">
            <h3 style="margin: 0 0 8px 0; font-weight: bold; color: #1f2937;">${marker.title}</h3>
            ${marker.description ? `<p style="margin: 0 0 8px 0; color: #6b7280; font-size: 14px;">${marker.description}</p>` : ""}
            ${marker.quantity ? `<p style="margin: 0 0 4px 0; color: #059669; font-weight: 500;">📦 ${marker.quantity}</p>` : ""}
            ${marker.expiry ? `<p style="margin: 0 0 4px 0; color: #dc2626; font-weight: 500;">⏰ Expires in ${marker.expiry}</p>` : ""}
            ${marker.distance ? `<p style="margin: 0 0 8px 0; color: #6b7280;">📍 ${marker.distance}</p>` : ""}
            ${marker.phone ? `<p style="margin: 0 0 8px 0; color: #2563eb;">📞 ${marker.phone}</p>` : ""}
            <div style="display: flex; gap: 8px; margin-top: 12px;">
              ${
                marker.type === "food"
                  ? `
                <button onclick="claimFood('${marker.id}')" style="
                  background: linear-gradient(45deg, #059669, #ea580c);
                  color: white;
                  border: none;
                  padding: 6px 12px;
                  border-radius: 6px;
                  font-size: 12px;
                  cursor: pointer;
                  font-weight: 500;
                ">Claim Food</button>
              `
                  : ""
              }
              <button onclick="getDirections(${marker.lat}, ${marker.lng})" style="
                background: #3b82f6;
                color: white;
                border: none;
                padding: 6px 12px;
                border-radius: 6px;
                font-size: 12px;
                cursor: pointer;
                font-weight: 500;
              ">Directions</button>
            </div>
          </div>
        `

        leafletMarker.bindPopup(popupContent)

        if (onMarkerClick) {
          leafletMarker.on("click", () => onMarkerClick(marker))
        }
      })

      // Add user location if enabled
      if (showUserLocation && navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const userLat = position.coords.latitude
            const userLng = position.coords.longitude

            const userIcon = createCustomIcon("user", "#3b82f6")
            L.marker([userLat, userLng], { icon: userIcon })
              .addTo(map)
              .bindPopup('<div style="text-align: center; font-weight: bold; color: #3b82f6;">📍 Your Location</div>')
          },
          (error) => {
            console.log("Geolocation error:", error)
          },
        )
      }

      mapInstanceRef.current = map
    }

    initMap()

    // Cleanup
    return () => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove()
        mapInstanceRef.current = null
      }
    }
  }, [center, zoom, markers, showUserLocation, onMarkerClick])

  // Global functions for popup buttons
  useEffect(() => {
    if (typeof window !== "undefined") {
      window.claimFood = (foodId) => {
        alert(`Claiming food item: ${foodId}`)
        // Implement actual claim logic here
      }

      window.getDirections = (lat, lng) => {
        const url = `https://www.google.com/maps/dir/?api=1&destination=${lat},${lng}`
        window.open(url, "_blank")
      }
    }
  }, [])

  return (
    <>
      {/* Leaflet CSS */}
      <link
        rel="stylesheet"
        href="https://unpkg.com/leaflet@1.7.1/dist/leaflet.css"
        integrity="sha512-xodZBNTC5n17Xt2atTPuE1HxjVMSvLVW9ocqUKLsCC5CXdbqCmblAshOMAS6/keqq/sMZMZ19scR4PsZChSR7A=="
        crossOrigin=""
      />

      <div
        ref={mapRef}
        style={{ height, width: "100%" }}
        className={`rounded-lg border border-gray-200 ${className}`}
      />
    </>
  )
}
