import React from 'react'
import { Route, Routes } from 'react-router-dom'
import AboutUsPage from './pages/AboutUsPage'
import MainPage from './pages/MainPage'
import PromotionalPage from './pages/PromotionalPage'
import TeamsPage from './pages/TeamsPage'

function App() {
  return (
      <Routes>
        <Route path="/promotion" element={<PromotionalPage />} />
        <Route path="/team" element={<TeamsPage />} />
        <Route path="/about" element={<AboutUsPage />} />
        <Route exact path="/" element={<MainPage />} />
      </Routes>
  )
}

export default App