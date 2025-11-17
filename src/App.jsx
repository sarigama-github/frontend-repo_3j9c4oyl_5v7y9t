import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Work from './components/Work'
import CTA from './components/CTA'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-gray-50 text-gray-900">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Work />
        <CTA />
        <footer id="about" className="py-10 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} Mackupstudio. All rights reserved.
        </footer>
      </main>
    </div>
  )
}

export default App
