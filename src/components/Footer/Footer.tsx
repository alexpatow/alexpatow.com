import * as React from 'react';

import './Footer.css';

export const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="row footer">
      <div className="four columns footer__text footer__text--left">
        <span>© Alex Patow {year}</span>
      </div>
      <div className="four columns footer__text footer__text--center">
        <a
          href="mailto:alexpatow@alexpatow.com"
          aria-label="send email to alexpatow@alexpatow.com"
        >
          alexpatow@alexpatow.com
        </a>
      </div>
      <div className="four columns footer__text footer__text--right">
        <a href="tel:+19529562602" aria-label="call +1 (952) 956-2602">
          +1 (952) 956-2602
        </a>
      </div>
    </footer>
  );
};
