import React, { useEffect, useState } from 'react'
import { v4 } from 'uuid'

export interface Testimonial {
  id: string
  author: string
  email: string
  title: string
  content: string
  timestamp: number
}

/**
 * Custom hook for handling testimonial data.
 * 
 * @hook
 * @example
 * const { testimonials, setTestemonials } = useTestimonials()
 */
const useTestimonials = (): [Testimonial[], React.Dispatch<React.SetStateAction<Testimonial[]>>] => {
  const initialTestimonials: Testimonial[] = [
    {
      id:        v4(),
      author:    'Chris Cringle',
      email:     'chris@cringle.com',
      title:     'Spirit bough gift mistletoe',
      content:   'Spirit bough gift mistletoe gold Saint Nicholas mistletoe. Chilly sleigh Father Christmas tree ivy, Cupid chestnuts gift decorate love holiday. Guest mistletoe falala calendar, partridge stocking stuffers gold sugarplum angel Prancer santa green icy.',
      timestamp: (new Date(2022, 11, 12)).valueOf()
    },
    {
      id:        v4(),
      author:    'Chris Cringle',
      email:     'chris@cringle.com',
      title:     'Spirit bough gift mistletoe',
      content:   'Spirit bough gift mistletoe gold Saint Nicholas mistletoe. Chilly sleigh Father Christmas tree ivy, Cupid chestnuts gift decorate love holiday. Guest mistletoe falala calendar, partridge stocking stuffers gold sugarplum angel Prancer santa green icy.',
      timestamp: (new Date(2022, 9, 12)).valueOf()
    }
  ]
  const storedTestimonials = localStorage.getItem('testimonials')
  const [ testimonials, setTestimonials ] = useState<Testimonial[]>(
    storedTestimonials
      ? JSON.parse(storedTestimonials)
      : initialTestimonials
  )

  useEffect(() => {
    localStorage.setItem('testimonials', JSON.stringify(testimonials))
  }, [testimonials])

  return [
    testimonials,
    setTestimonials
  ]
}

export default useTestimonials