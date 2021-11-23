import './Header.css';
import Logo from '../Logo';

const Header = () => (
  <div className="Header">
    <div className="Header__content">
      <span className="Header__title">Task Generator 1.0</span>
      <span className="Header__text">by</span>
      <a href="https://adaptagency.com/" target="_blank" rel="noreferrer">
        <Logo className="Header__logo" />
      </a>
    </div>
  </div>
);

export default Header;
