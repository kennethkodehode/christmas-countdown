import React from 'react'

import './styles.scss'

/**
 * Component for displaying the site's footer section.
 * @component
 * @example
 * <SiteFooter /> 
 */
const SiteFooter: React.FC = () => (
  <footer className="site-footer contain-width">
    <h2 className="site-footer__title">Site footer</h2>

    <div className="site-footer__widget site-footer__widget--text">
      <h3 className="site-footer__widget__title">Holiday event</h3>
      <p>Spirit bough gift mistletoe gold Saint Nicholas mistletoe. Chilly sleigh Father Christmas tree ivy, Cupid chestnuts gift decorate love holiday. Guest mistletoe falala calendar, partridge stocking stuffers gold sugarplum angel Prancer santa green icy.</p>
    </div>

    <div className="site-footer__widget site-footer__widget--list">
      <h3 className="site-footer__widget__title">Who are we</h3>
      <ul>
        <li><a href="#">Company</a></li>
        <li><a href="#">Community</a></li>
        <li><a href="#">Past events</a></li>
        <li><a href="#">Carreers</a></li>
      </ul>
    </div>

    <div className="site-footer__widget site-footer__widget--list">
      <h3 className="site-footer__widget__title">Support</h3>
      <ul>
        <li><a href="#">Tickets</a></li>
        <li><a href="#">Time table</a></li>
        <li><a href="#">Map</a></li>
        <li><a href="#">FAQ</a></li>
      </ul>
    </div>
  </footer>
)

export default SiteFooter