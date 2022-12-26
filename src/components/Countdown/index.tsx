import React, { useEffect, useState } from 'react'

import './styles.scss'

interface CounterProps {
  value: number
  text: string
}

/**
 * Component for displaying a counter.
 * 
 * @component
 * @example
 * 
 * <Counter value={24} text="Foobar" />
 */
const Counter: React.FC<CounterProps> = ({ value, text }) => (
  <div className="counter">
    <span className="font-heading counter__value">{value}</span>
    <span className="counter__text">{text}</span>
  </div>
)

/**
 * Component for displaying the countdown.
 ** If it's more than 24 hours left it will display the remaining days, hours and minutes.
 ** Otherwise it will display the remaining hours, minutes and seconds.
 * 
 * @component
 * @example
 * 
 * <Countdown />
 */
const Countdown: React.FC = () => {
  const now  = new Date()
  const then = new Date()

  then.setSeconds(0)
  then.setMinutes(0)
  then.setMonth(11)
  then.setHours(0)
  then.setDate(25)
  then.setFullYear(now.getFullYear() + (0 > then.valueOf() - now.valueOf() ? 1 : 0))

  const [ remaining, setRemaining ] = useState(then.valueOf() - now.valueOf())

  useEffect(() => {
    const interval = setInterval(() => {
      setRemaining(0 < remaining ? then.valueOf() - Date.now() : 0)
    }, 1000)

    return () => {
      clearInterval(interval)
    }
  }, [])

  return (
    <div className="countdown">
      <p className="font-festive countdown__text">The festivities start in</p>
      <div className="countdown__counters">
        { 8.64e+7 < remaining && <Counter value={Math.floor(remaining / 8.64e+7)} text="Days" /> }
        <Counter value={Math.floor(remaining % 8.64e+7 / 3.6e+6)} text="Hours"/>
        <Counter value={Math.floor(remaining % 8.64e+7 % 3.6e+6 / 60000)} text="Minutes"/>
        { 8.64e+7 >= remaining && <Counter value={Math.floor(remaining % 8.64e+7 % 3.6e+6 % 60000 / 1000)} text="Seconds"/> }
      </div>
    </div>
  )
}

export default Countdown