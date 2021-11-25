import './Header.css';
import Logo from '../Logo';
import Button from '../Button';
import { useState } from 'preact/hooks';

const Header = () => {

  return (
    <div className="Header">
      <div className="Header__wrapper">
        <div className="Header__content">
          <a href="https://adaptagency.com/" target="_blank" rel="noreferrer">
            <Logo className="Header__logo" />
          </a>
          <span className="Header__title">Task Generator</span>
        </div>
      </div>
    </div>
  );
};

export default Header;
