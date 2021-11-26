import FormField from '../FormField';
import TextInput from '../TextInput';
import TextArea from '../TextArea';
import './BugReportForm.css';
import { formContext } from '../../contexts';
import { connect } from '../../utilities/connect';

const BugReportForm = ({ handleChange, FormData, state }) => (
  <form className="BugReportForm">
    {FormData.map(
      (item) =>
        (item.id === `description` ||
          item.id === `browser` ||
          item.id === `devices`) && (
          <FormField
            key={item.id}
            label={item.label}
            labelFor={item.id}
            className={item.className}
          >
            {item.type === `textinput` && (
              <TextInput
                name={item.id}
                placeholder={item.placeholder}
                required={item.required}
                onInput={(e) => handleChange(e)}
                value={state[item.id]}
              />
            )}
            {item.type === `textarea` && (
              <TextArea
                name={item.id}
                placeholder={item.placeholder}
                required={item.required}
                onInput={(e) => handleChange(e)}
                value={state[item.id]}
              />
            )}
          </FormField>
        )
    )}
  </form>
);

export default connect(formContext)(BugReportForm);
