import './TextInput.css';

const TextInput = ({ name, placeholder, required, onInput, value, className, onKeyDown }) => (
  <>
    <input
      type="text"
      name={name}
      id={name}
      className={`TextInput ${className}`}
      placeholder={placeholder}
      {...(required ? required : null)}
      onInput={onInput}
      onKeyDown={onKeyDown}
      value={value}
    />
  </>
);

export default TextInput;
