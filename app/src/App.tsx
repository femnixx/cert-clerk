import { Routes, Route, Navigate } from 'react-router-dom'
import MagicLinkRequest from './pages/auth/MagicLinkRequest'
import MagicLinkSent from './pages/auth/MagicLinkSent'
import MagicLinkConsume from './pages/auth/MagicLinkConsume'
import Dashboard from './pages/Dashboard'
import Styleguide from './pages/Styleguide'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/auth/request" replace />} />
      <Route path="/auth/request" element={<MagicLinkRequest />} />
      <Route path="/auth/sent" element={<MagicLinkSent />} />
      <Route path="/auth/consume" element={<MagicLinkConsume />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/styleguide" element={<Styleguide />} />
    </Routes>
  )
}

export default App
