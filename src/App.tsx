import { Routes, Route, Navigate } from 'react-router-dom'
import CustomCursor from './components/CustomCursor'
import Nav from './components/Nav'
import Footer from './components/Footer'
import Toast from './components/Toast'
import HomePage from './pages/HomePage'
import WorkPage from './pages/WorkPage'
import AboutPage from './pages/AboutPage'

export default function App() {
  return (
    <>
      <CustomCursor />
      <Nav />
      <Routes>
        <Route path="/" element={<Navigate to="/home" replace />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/work" element={<WorkPage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
      <Footer />
      <Toast />
    </>
  )
}
