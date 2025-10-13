// import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Features from './components/FeaturesPreview'
import Footer from './components/Footer'
import Hero from './components/Hero'
import SheetsGuide from './components/SheetFormatPreview'
import Contribute from './components/Contribute'
function App() {
  return (
    <div className="overflow-x-hidden min-h-screen flex flex-col">
      <Navbar />

      <main className="p-4 max-w-7xl mx-auto flex flex-col items-center">
        < Hero />
        < Features />
        < SheetsGuide />
        < Contribute />
      </main>
      
      {/* < Footer /> */}
    </div>
  )
}

export default App
