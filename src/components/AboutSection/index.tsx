import React from 'react'

import Button from '../Button'

import'./styles.scss'

/**
 * Component for displaying the about section.
 * 
 * @component
 * @example
 * <AboutSection />
 */
const AboutSection: React.FC = () => (
  <section id="about" className="about">
    <h2 className="h2 about__title">About</h2>
    <p className="about__text">Spirit bough gift mistletoe gold Saint Nicholas mistletoe. Chilly sleigh Father Christmas tree ivy, Cupid chestnuts gift decorate love holiday. Guest mistletoe falala calendar, partridge stocking stuffers gold sugarplum angel Prancer santa green icy.</p>
    <Button value="Buy ticket" />
    <Button value="Learn more" variant="secondary" />
  </section>
)

export default AboutSection