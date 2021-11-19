import './TextInput.css';

const TextInput = ({ name, placeholder, required, onInput }) => (
  <>
    <input
      type="text"
      name={name}
      id={name}
      className="TextInput"
      placeholder={placeholder}
      {...(required ? required : null)}
      onInput={onInput}
    />
  </>
);

export default TextInput;
