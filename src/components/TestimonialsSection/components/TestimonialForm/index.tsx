import React from 'react'
import { v4 } from 'uuid'

import useTestimonials from '../../hooks/useTestimonials'

import './styles.scss'

/**
 * Component for displaying the Testimonials section.
 * 
 * @component
 * @example
 * <TestimonialsSection />
 */
const TestimonialForm: React.FC = () => {
  const { testimonials, setTestemonials } = useTestimonials()

  /**
   * Handles submission of new testimonial.
   * 
   * @param e FormEvent
   */
  const handleTestimonialSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const target = e.target as HTMLFormElement
    const data = new FormData(target)
    
    setTestemonials([
      ...testimonials,
      {
        id:        v4(),
        author:    data.get('name')?.toString()    || 'Unknown',
        email:     data.get('email')?.toString()   || 'unknown@domain.com',
        title:     data.get('title')?.toString()   || 'Untitled',
        content:   data.get('message')?.toString() || '',
        timestamp: Date.now()
      }
    ])

    target.reset()
  }

  return (
    <form className="testimonial-form" onSubmit={handleTestimonialSubmit}>
      <h3 className="h3 testimonial-form__title">Add a Testimonial</h3>
      
      <label
        html-for="testimonial-name"
        className="testimonial-form__name-label"
      >Name</label>
      <input
        id="testimonial-name"
        name="name"
        className="testimonial-form__name"
        type="text"
        placeholder="Chris Cringle"
        required
      />

      <label
        html-for="testimonial-email"
        className="testimonial-form__email-label"
      >E-mail address</label>
      <input
        id="testimonial-email"
        className="testimonial-form__email"
        name="email"
        type="email"
        placeholder="name@domain.com"
        required
      />

      <label html-for="testimonial-message-title">Title</label>
      <input
        id="testimonial-message-title"
        className="testimonial-form__message-title"
        name="title"
        type="text"
        required
      />

      <label html-for="testimonial-message">Message</label>
      <textarea
        id="testimonial-message"
        className="testimonial-form__message"
        name="message"
        rows={10}
        required
      />

      <input
        className="testimonial-form__submit"
        type="submit"
        value="Submit"
      />
    </form>
  )
}

export default TestimonialForm