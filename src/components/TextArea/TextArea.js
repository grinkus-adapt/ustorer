import './TextArea.css';

const TextArea = ({ name, rows, cols }) => (
  <>
    <textarea
      type="text"
      name={name}
      id={name}
      className="text-area"
      rows={rows}
      cols={cols}
    />
  </>
);

export default TextArea;
