import './TextInput.css';

const TextInput = ({ name, placeholder, required, value, onInput }) => (
  <>
    <input
      type="text"
      name={name}
      id={name}
      className="text-input"
      placeholder={placeholder}
      {...(required ? required : null)}
      value={value}
      onInput={onInput}
    />
  </>
);

export default TextInput;
