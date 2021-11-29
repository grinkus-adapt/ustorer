import Button from '../Button';
import './SummaryOutputField.css';
import { connect, mapActionsToProps } from '../../utilities/connect';
import { ReactComponent as IconCheck } from '@fortawesome/fontawesome-free/svgs/solid/check.svg';
import { ReactComponent as IconCopy } from '@fortawesome/fontawesome-free/svgs/solid/copy.svg';
import { formContext } from '../../contexts';

const SummaryOutputField = connect(
  formContext,
  mapActionsToProps([`setSuccessClass`])
)(({ state, copyOutput, setSuccessClass }) => (
  <div className="SummaryOutputField">
    <label
      for="SummaryOutputField__content"
      className="SummaryOutputField__title"
    >
      <b>Summary</b>
    </label>
    <div className="SummaryOutputField__content">{state[`summary`]}</div>
    <div className="SummaryOutputField__content__actions">
      <Button
        className="Button Button--filled Button--anim SummaryOutputField__content__actions__copy-btn"
        onClick={(e) => {
          copyOutput(`.SummaryOutputField__content`);
          setSuccessClass({ e });
        }}
      >
        <IconCopy className="icon" />
        <IconCheck className="icon-check" />
        <span>Copy Summary</span>
      </Button>
    </div>
  </div>
));

export default SummaryOutputField;
