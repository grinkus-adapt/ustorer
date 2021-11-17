import './Button.css';

const Button = ({ type, className, children, onClick }) => (
  <button type={type} className={className} onClick={onClick}>
    {children}
  </button>
);

export default Button;
