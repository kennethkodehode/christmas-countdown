import SiteHeader          from './components/SiteHeader'
import HeroSection         from './components/HeroSection'
import AboutSection        from './components/AboutSection'
import HostsSection        from './components/HostsSection'
import TicketsSection      from './components/TicketsSection'
import NewsletterSection   from './components/NewsletterSection'
import TestimonialsSection from './components/TestimonialsSection'
import SiteFooter          from './components/SiteFooter'

import './App.css'

function App() {
  return (
    <div className="App">
      <SiteHeader />
      <HeroSection />
      <AboutSection />
      <HostsSection />
      <TicketsSection />
      <NewsletterSection />
      <TestimonialsSection />
      <SiteFooter />
    </div>
  )
}

export default App
