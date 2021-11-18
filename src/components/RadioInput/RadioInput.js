import './RadioInput.css';

const RadioInput = ({ id, name, value, onInput }) => (
  <div className="radio-input">
    <input
      type="radio"
      value={value}
      name={name}
      id={id}
      className="radio-input__selector"
      onInput={onInput}
    />
    <label for={id} className="radio-input__label">
      {value}
    </label>
  </div>
);

export default RadioInput;
