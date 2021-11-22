import FormField from '../FormField';
import TextInput from '../TextInput';
import TextArea from '../TextArea';
import './BugReportForm.css';

const BugReportForm = ({ handleChange, formData, state }) => (
  <form className="BugReportForm">
    {formData.map((item) => (
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
    ))}
  </form>
);

export default BugReportForm;
