import './TextInput.css';

const TextInput = ({ name, placeholder, required, onInput, value }) => (
  <>
    <input
      type="text"
      name={name}
      id={name}
      className="TextInput"
      placeholder={placeholder}
      {...(required ? required : null)}
      onInput={onInput}
      value={value}
    />
  </>
);

export default TextInput;
