import './TextArea.css';

const TextArea = ({ name, rows, cols, onInput }) => (
  <>
    <textarea
      type="text"
      name={name}
      id={name}
      className="text-area"
      rows={rows}
      cols={cols}
      onInput={onInput}
    />
  </>
);

export default TextArea;
