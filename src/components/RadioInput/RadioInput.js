import './RadioInput.css';

const RadioInput = ({ id, name, value, onInput }) => (
  <div className="RadioInput">
    <input
      type="radio"
      value={value}
      name={name}
      id={id}
      className="RadioInput__selector"
      onInput={onInput}
    />
    <label for={id} className="RadioInput__label">
      {value}
    </label>
  </div>
);

export default RadioInput;
