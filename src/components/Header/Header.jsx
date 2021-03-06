import './Header.css';
import Logo from '../Logo';

const Header = () => (
  <div className="Header">
    <div className="Header__wrapper">
      <div className="Header__content">
        <a
          href="https://adaptagency.com/"
          target="_blank"
          rel="noreferrer"
          className="Header__logo"
        >
          <Logo />
        </a>
        <span className="Header__title">Task Generator</span>
        <div className="Header__fake-div" />
      </div>
    </div>
  </div>
);

export default Header;
