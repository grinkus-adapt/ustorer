import './TextArea.css';

const TextArea = ({ name, id, rows, cols, onInput, className, value, placeholder }) => (
  <>
    <textarea
      type="text"
      name={name}
      id={id || name}
      className={`TextArea ${className}`}
      rows={rows}
      cols={cols}
      onInput={onInput}
      value={value}
      placeholder={placeholder}
    />
  </>
);

export default TextArea;
