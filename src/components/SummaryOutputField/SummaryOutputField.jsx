import Button from '../Button';
import './SummaryOutputField.css';
import { connect, mapActionsToProps } from '../../utilities/connect';
import { formContext } from '../../contexts';

const SummaryOutputField = connect(
  formContext,
  mapActionsToProps([`setSuccessClass`])
)(({ state, copyOutput, setSuccessClass }) => (
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
        onClick={(e) => {
          copyOutput(`.summary-output-field__content`);
          setSuccessClass({ e });
        }}
      >
        <span>Copy Summary</span>
      </Button>
    </div>
  </div>
));

export default SummaryOutputField;
