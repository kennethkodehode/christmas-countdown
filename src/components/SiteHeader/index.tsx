import React from 'react'

import './styles.scss'

/**
 * Component for displaying the site's header with navigation.
 * 
 * @component
 * @example
 * <SiteHeader />
 */
const SiteHeader: React.FC = () => {
  return (
    <header className="site-header contain-width">
      <h1 className="font-branding logo">Holiday event</h1>
      <nav className="site-navigation">
        <a className="site-navigation__link" href="#about">About</a>
        <a className="site-navigation__link" href="#hosts">Hosts</a>
        <a className="site-navigation__link" href="#tickets">Tickets</a>
        <a className="site-navigation__link" href="#testimonials">Testimonials</a>
      </nav>
    </header>
  )
}

export default SiteHeader