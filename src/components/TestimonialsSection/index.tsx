import React from 'react'

import useTestimonials from './hooks/useTestimonials'
import Testimonial from './components/Testimonial'
import TestimonialForm from './components/TestimonialForm'
import santaAvatar from '../../assets/avatar.jpg'

import './styles.scss'

/**
 * Component for displaying the Testimonials section.
 * 
 * @component
 * @example
 * <TestimonialsSection />
 */
const TestimonialsSection: React.FC = () => {
  const { testimonials } = useTestimonials()

  return (
    <section id="testimonials" className="testimonials">
      <h2 className="h2 testimonials__title">Testimonials</h2>
      
      <h3 className="testimonials__sub-title screen-reader-text">List of testimonials</h3>
      
      {testimonials.map((testimonial) => (<Testimonial
        key={testimonial.id}
        avatar={santaAvatar}
        author={testimonial.author}
        title={testimonial.title}
        content={testimonial.content}
        timestamp={testimonial.timestamp}
      />))}

      <TestimonialForm />
    </section>
  )
}

export default TestimonialsSection