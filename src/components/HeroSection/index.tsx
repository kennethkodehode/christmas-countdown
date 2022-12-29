import React from 'react'

import Countdown from '../Countdown'

import './styles.scss'

/**
 * Component for displaying the hero section.
 * 
 * @component
 * @example
 * <HeroSection />
 */
const HeroSection: React.FC = () => (
  <section className="hero">
    <div className="hero__content contain-width">
      <p className="font-festive hero__content__text">Holiday event</p>
    </div>
    <Countdown className="hero__countdown contain-width" />
  </section>
)

export default HeroSection