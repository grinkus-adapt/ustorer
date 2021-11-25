import './Logo.css';

const Logo = ({ className }) => (
  <img
    src="../../../src/assets/images/logo_secondary.svg"
    alt="Adapt"
    className={`Logo ${className}`}
  />
);

export default Logo;
