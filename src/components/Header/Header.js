import './Header.css';
import Logo from '../Logo';

const Header = () => (
  <div className="Header">
    <span className="Header__title">Task Generator 1.0</span>
    <span className="Header__text">by</span>
    <Logo className="Header__logo" />
  </div>
);

export default Header;
