import { useState } from 'react'
import { Star, Globe, ShoppingCart, Package } from 'lucide-react'

export default function LandingPage() {
  const [url, setUrl] = useState('')

  const handleAnalyze = () => {
    console.log('Analyzing URL:', url)
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
      {/* Stars Background */}
      <div className="absolute inset-0">
        {[...Array(100)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              opacity: Math.random() * 0.8 + 0.2
            }}
          />
        ))}
      </div>

      {/* Header */}
      <header className="relative z-10 px-6 py-4 bg-white/5 backdrop-blur-sm border-b border-white/10">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center">
              <Globe className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-white">SnapDNA</span>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-white/80 hover:text-white transition-colors">Home</a>
            <a href="#" className="text-white/80 hover:text-white transition-colors">Preise</a>
            <a href="#" className="text-white/80 hover:text-white transition-colors">Hilfezentrum</a>
            <a href="#" className="text-white/80 hover:text-white transition-colors">Anmelden</a>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors">
              Kostenlos starten
            </button>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="relative z-10 flex flex-col items-center justify-center min-h-[80vh] px-6 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-300 text-sm mb-8">
            <Star className="w-4 h-4 mr-2" />
            #1 KI-Verkaufsbooster
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Steigere deine<br />
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Conversion-Rate
            </span><br />
            um bis zu 47%
          </h1>

          {/* Subtitle */}
          <p className="text-xl text-white/80 mb-12 max-w-2xl mx-auto">
            Analysiere deine Website in Sekunden und erhalte KI-gestützte Empfehlungen 
            zur Optimierung deiner Verkaufsseiten
          </p>

          {/* Input Section */}
          <div className="flex flex-col sm:flex-row gap-4 max-w-2xl mx-auto mb-16">
            <input
              type="url"
              placeholder="Gib deine Website-URL ein..."
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              className="flex-1 px-6 py-4 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/60 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <button
              onClick={handleAnalyze}
              className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors whitespace-nowrap"
            >
              Kostenlos analysieren
            </button>
          </div>

          {/* Platform Logos */}
          <div className="text-center">
            <p className="text-white/60 text-sm mb-6">Funktioniert mit allen E-Commerce-Plattformen</p>
            <div className="flex justify-center items-center gap-8 opacity-60">
              <div className="flex items-center gap-2 text-white">
                <ShoppingCart className="w-6 h-6" />
                <span className="font-semibold">Shopify</span>
              </div>
              <div className="flex items-center gap-2 text-white">
                <Package className="w-6 h-6" />
                <span className="font-semibold">WooCommerce</span>
              </div>
              <div className="flex items-center gap-2 text-white">
                <Globe className="w-6 h-6" />
                <span className="font-semibold">Magento</span>
              </div>
              <div className="flex items-center gap-2 text-white">
                <Star className="w-6 h-6" />
                <span className="font-semibold">BigCommerce</span>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}