import FormField from '../FormField';
import TextInput from '../TextInput';
import TextArea from '../TextArea';
import Button from '../Button';
import './UserStoryForm.css';

const UserStoryForm = ({
  formData,
  handleChange,
  addList,
  changeCriterion,
  remList,
  criteriaList,
}) => (
  <form className="user-story-form">
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
        {item.type === `acceptanceCriteria` && (
          <>
            <Button type="button" className="btn btn--add" onClick={addList}>
              Add Criterion
            </Button>
            <ol>
              {criteriaList.map((item, index) => (
                <li key={index}>
                  <TextInput
                    name={`criterion-input-${index}`}
                    className="form-input"
                    onInput={(e) => changeCriterion(e, index)}
                  />
                  <Button
                    type="button"
                    className="btn btn--rem"
                    onClick={() => remList(index)}
                  >
                    X
                  </Button>
                </li>
              ))}
            </ol>
          </>
        )}
      </FormField>
    ))}
  </form>
);

export default UserStoryForm;
