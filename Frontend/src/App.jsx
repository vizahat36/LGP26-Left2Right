import { Routes, Route } from "react-router-dom"
import LandingPage from "./pages/LandingPage"
import AuthPage from "./pages/AuthPage"
import DonorDashboard from "./pages/DonorDashboard"
import ReceiverDashboard from "./pages/ReceiverDashboard"
import AdminDashboard from "./pages/AdminDashboard"
import ImpactAnalytics from "./pages/ImpactAnalytics"

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/auth" element={<AuthPage />} />
      <Route path="/donor-dashboard" element={<DonorDashboard />} />
      <Route path="/receiver-dashboard" element={<ReceiverDashboard />} />
      <Route path="/admin-dashboard" element={<AdminDashboard />} />
      <Route path="/impact-analytics" element={<ImpactAnalytics />} />
    </Routes>
  )
}

export default App
