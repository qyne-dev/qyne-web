import { Routes, Route } from 'react-router-dom'
import { RootLayout } from './components/layout/RootLayout'
import Home from './pages/Home'
import HowItWorks from './pages/HowItWorks'
import ForAcademies from './pages/ForAcademies'
import ForAthletes from './pages/ForAthletes'
import About from './pages/About'
import NotFound from './pages/NotFound'

export default function App() {
  return (
    <Routes>
      <Route element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path="how-it-works" element={<HowItWorks />} />
        <Route path="for-academies" element={<ForAcademies />} />
        <Route path="for-athletes" element={<ForAthletes />} />
        <Route path="about" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}
