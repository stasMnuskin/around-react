import logoPath from '../blocks/images/heade-logo.svg';
import React from 'react';

export default function Header() {
  return (
    <header className="header">
      <img src={logoPath} alt="header logo" className="header__logo" />
    </header>
  );
}
