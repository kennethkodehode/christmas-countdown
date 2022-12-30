import React from 'react'

import Button from '../Button'

import './styles.scss'

interface TicketProps {
  name: string
  available: number
  emoji: string
  price: number
  accolades: string[]
}

/**
 * Component for displaying an event ticket.
 * 
 * @component
 * @example
 * <Ticket
 *   name="foobar"
 *   available={52}
 *   emoji="🎅"
 *   price={32}
 *   accolades={['foo', 'bar', 'baz']}
 * /> 
 */
const Ticket: React.FC<TicketProps> = ({
  name,
  available,
  emoji,
  price,
  accolades
}) => (
  <div className={`ticket ticket--${name.toLocaleLowerCase()}`}>
    <h3 className="h3 ticket__name">{name}</h3>
    <p className="ticket__available"><b>{available}</b> Tickets available</p>
    <p className="ticket__emoji">{emoji}</p>
    <hr className="ticket__separator ticket__separator--first" />
    <b className="ticket__price">€ {price}</b>
    <hr className="ticket__separator ticket__separator--second" />
    <ul className="ticket__accolades">
      {accolades.map((accolade, i) => <li key={`${accolade}-${i+1}`}>{accolade}</li>)}
    </ul>
    <Button variant={'premium' === name.toLocaleLowerCase() ? 'primary' : 'secondary'} value="Buy" />
  </div>
)

/**
 * Component for displaying the tickets section.
 * 
 * @component
 * @example
 * <TicketsSection />
 */
const TicketsSection: React.FC = () => (
  <section id="tickets" className="tickets contain-width">
    <h2 className="h2 tickets__title">Tickets</h2>

    <Ticket
      name="Premium"
      available={256}
      emoji="🎄"
      price={119}
      accolades={['Item 1', 'Item 2', 'item 3']}
    />

    <Ticket
      name="Standard"
      available={512}
      emoji="❄️"
      price={59}
      accolades={['Item 1', 'Item 2', 'item 3']}
    />

    <Ticket
      name="Gold"
      available={32}
      emoji="🎅"
      price={199}
      accolades={['Item 1', 'Item 2', 'item 3']}
    />
  </section>
)

export default TicketsSection