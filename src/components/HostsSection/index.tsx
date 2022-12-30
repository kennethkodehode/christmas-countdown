import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons'

import santaAvatar from '../../assets/avatar.jpg'

import type { IconDefinition } from '@fortawesome/free-brands-svg-icons'

import './styles.scss'

interface HostCardProps {
  className?: string
  avatarURL: string
  name: string
  socialMediaLinks: {
    icon: IconDefinition
    url: string
    title: string
  }[]
}

/**
 * Component for displaying a host card.
 * 
 * @component
 * @example
 * import { faInstagram } from '@fortawesome/free-brands-svg-icons'
 * import avatar from '@/assets/avatar.jpg'
 * 
 * const name = 'John Doe'
 * const socialMediaLinks = [
 *  {icon: faInstagram, url: 'https://instagram.com/johndoe', title: 'Instagram'}
 * ]
 * 
 * <HostCard
 *  avatarURL={avatar}
 *  name={name}
 *  socialMediaLinks={socialMediaLinks}
 * />
 */
const HostCard: React.FC<HostCardProps> = ({
  className,
  avatarURL,
  name,
  socialMediaLinks
}) => (
  <div id="hosts" className={`host-card${className ? ' '+className : ''}`}>
    <img className="host-card__avatar" src={avatarURL} alt={name} />
    <span className="host-card__name">{name}</span>
    <ul className="host-card__social-links">
      {socialMediaLinks.map(({ icon, url, title }) =>
        <li key={title.toLocaleLowerCase().replaceAll(' ', '-')}>
          <a href={url} title={`${name} on ${title}`} target="_blank"><FontAwesomeIcon icon={icon}/></a>
        </li>
      )}
    </ul>
  </div>
)

/**
 * Component for displaying a hosts section.
 * 
 * @component
 * @example
 * <HostsSection />
 */
const HostsSection: React.FC = () => {
  const name = 'Chris Cringle'

  const socialMediaLinks = [
    {icon: faTwitter,   url: '#', title: 'Twitter'},
    {icon: faInstagram, url: '#', title: 'Instagram'}
  ]
  
  return (
    <section className="hosts contain-width">
      <h2 className="h2 hosts__title">Hosts</h2>
      <HostCard
        className="hosts__card"
        avatarURL={santaAvatar}
        name={name}
        socialMediaLinks={socialMediaLinks}
      />
      <HostCard
        className="hosts__card"
        avatarURL={santaAvatar}
        name={name}
        socialMediaLinks={socialMediaLinks}
      />
      <HostCard
        className="hosts__card"
        avatarURL={santaAvatar}
        name={name}
        socialMediaLinks={socialMediaLinks}
      />
      <HostCard
        className="hosts__card"
        avatarURL={santaAvatar}
        name={name}
        socialMediaLinks={socialMediaLinks}
      />
    </section>
  )
}

export { HostCard }
export default HostsSection