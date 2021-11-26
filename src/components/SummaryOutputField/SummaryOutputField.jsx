import Button from '../Button';
import './SummaryOutputField.css';
import { connect } from '../../utilities/connect';
import { formContext } from '../../contexts';

const SummaryOutputField = connect(formContext)(({ state, copyOutput }) => (
  <div className="summary-output-field">
    <label
      for="summary-output-field__content"
      className="summary-output-field__title"
    >
      <b>Summary</b>
    </label>
    <div className="summary-output-field__content">{state[`summary`]}</div>
    <div className="summary-output-field__content--actions">
      <Button
        className="Button Button--filled Button--icon Button--icon-copy"
        onClick={() => copyOutput(`.summary-output-field__content`)}
      >
        Copy Summary
      </Button>
    </div>
  </div>
));

export default SummaryOutputField;
