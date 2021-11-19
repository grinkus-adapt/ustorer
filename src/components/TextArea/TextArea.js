import './TextArea.css';

const TextArea = ({ name, id, rows, cols, onInput, className }) => (
  <>
    <textarea
      type="text"
      name={name}
      id={id || name}
      className={`TextArea ${className}`}
      rows={rows}
      cols={cols}
      onInput={onInput}
    />
  </>
);

export default TextArea;
