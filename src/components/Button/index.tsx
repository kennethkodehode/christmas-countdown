import React from 'react'

import './styles.scss'

interface ButtonProps {
  variant?: 'primary' | 'secondary'
  value: string
}

/**
 * Component for button elements.
 * 
 * @component
 * @example
 * <Button variant="secondary" value="Click me" />
 */
const Button: React.FC<ButtonProps> = ({ variant, value }) => (
  <input
    type="button"
    className={`button button--${variant || 'primary'}`}
    value={value}
  />
)

export default Button