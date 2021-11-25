import './Header.css';
import Logo from '../Logo';
import Button from '../Button';
import { useState } from 'preact/hooks';

const Header = () => {

  return (
    <div className="Header">
      <div className="Header__wrapper">
        <div className="Header__fake-div" />
        <div className="Header__content">
          <span className="Header__title">Task Generator 1.0</span>
          <span className="Header__text">by</span>
          <a href="https://adaptagency.com/" target="_blank" rel="noreferrer">
            <Logo className="Header__logo" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
