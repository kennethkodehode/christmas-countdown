import React from 'react'

import './styles.scss'

/**
 * Component for displaying the newsletter section.
 *
 * @component
 * @example
 * 
 * <NewsletterSection />
 */
const NewsletterSection: React.FC = () => {

  /**
   * Handler function for the newsletter form.
   * TODO: Implement actual handling of form data
   */
  const handleFormSubmit: React.FormEventHandler = (e) => {
    e.preventDefault()
  }

  return (
    <section className="newsletter contain-width">
      <h2 className="newsletter__title">Subscribe to our newsletter</h2>
      <form className="newsletter__form" onSubmit={handleFormSubmit}>
        <label className="newsletter__form__email-label" html-for="newsletter-email">E-mail address</label>
        <input className="newsletter__form__email" id="newsletter-email" type="email" placeholder="name@domain.com" />
        <input className="newsletter__form__submit" type="submit" value="Subscribe"/>
      </form>
    </section>
  )
}

export default NewsletterSection