import Button from '../Button';
import './SummaryOutputField.css';

const SummaryOutputField = ({ inputData, copyOutput }) => (
  <div className="summary-output-field">
    <label
      for="summary-output-field__content"
      className="summary-output-field__title"
    >
      <b>Summary</b>
    </label>
    <div className="summary-output-field__content">{inputData[`summary`]}</div>
    <div className="summary-output-field__content--actions">
      <Button
        className="btn btn--copy"
        onClick={() => copyOutput(`.summary-output-field__content`)}
      >
        Copy Summary
      </Button>
    </div>
  </div>
);

export default SummaryOutputField;
