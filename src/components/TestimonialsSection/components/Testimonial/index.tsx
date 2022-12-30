import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faCalendarAlt } from '@fortawesome/free-solid-svg-icons'

import './styles.scss'

interface TestimonialProps {
  avatar: string
  title: string
  content: string
  author: string
  timestamp: number
}

/**
 * Compoment for displaying a testimonial.
 * 
 * @compoment
 * @example
 * import avatarImg from '../assets/avatar.png'
 * 
 * <Testimonial
 *  avatar={avatarImg}
 *  title="Foobar"
 *  content="foo bar baz."
 *  author="John Doe"
 *  timestamp={Date.now()}
 * />
 */
const Testimonial: React.FC<TestimonialProps> = ({
  avatar,
  title,
  content,
  author,
  timestamp
}) => (
  <article className="testimonial">
    <img className="testimonial__avatar" src={avatar} alt={author} />
    <h4 className="testimonial__title">{title}</h4>
    <p className="testimonial__content">{content}</p>
    <span className="testimonial__author">
      <FontAwesomeIcon icon={faUser} />
      <span className="testimonial__author__text">{author}</span>
    </span>
    <span className="testimonial__date-posted">
      <FontAwesomeIcon icon={faCalendarAlt} />
      <span className="testimonial__author__text">{Intl.DateTimeFormat().format((new Date(timestamp)))}</span>
    </span>
  </article>
)

export default Testimonial