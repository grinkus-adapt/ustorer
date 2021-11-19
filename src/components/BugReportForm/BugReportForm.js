import FormField from '../FormField';
import TextInput from '../TextInput';
import TextArea from '../TextArea';
import './BugReportForm.css';

const BugReportForm = ({ handleChange, formData }) => (
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
          />
        )}
        {item.type === `textarea` && (
          <TextArea
            name={item.id}
            placeholder={item.placeholder}
            required={item.required}
            onInput={(e) => handleChange(e)}
          />
        )}
      </FormField>
    ))}
  </form>
);

export default BugReportForm;
