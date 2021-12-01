import './Button.css';

const Button = ({ type, className, children, onClick }) => (
  <button type={type} className={`Button ${className}`} onClick={onClick}>
    {children}
  </button>
);

export default Button;
