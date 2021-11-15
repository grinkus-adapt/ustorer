import './Button.css';

const Button = ({ type, className, text, onClick }) => (
  <button type={type} className={className} onClick={onClick}>
    {text}
  </button>
);

export default Button;
