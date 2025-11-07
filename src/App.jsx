import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import CTA from './components/CTA'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <div className="fixed inset-0 pointer-events-none bg-[radial-gradient(60%_40%_at_50%_-10%,rgba(99,102,241,0.10),rgba(99,102,241,0)_60%),radial-gradient(40%_30%_at_80%_10%,rgba(34,197,94,0.10),rgba(34,197,94,0)_60%),radial-gradient(50%_30%_at_10%_20%,rgba(6,182,212,0.10),rgba(6,182,212,0)_60%)]" />
      <Navbar />
      <Hero />
      <Features />
      <CTA />
      <Footer />
    </div>
  )
}

export default App
