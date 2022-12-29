import SiteHeader   from './components/SiteHeader'
import HeroSection from './components/HeroSection'
import AboutSection from './components/AboutSection'
import HostsSection from './components/HostsSection'

import './App.css'

function App() {
  return (
    <div className="App">
      <SiteHeader />
      <HeroSection />
      <AboutSection />
      <HostsSection />
    </div>
  )
}

export default App
