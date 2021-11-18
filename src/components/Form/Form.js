import { useState } from 'preact/hooks';
import FormField from '../FormField';
import TextInput from '../TextInput';
import TextArea from '../TextArea';
import Button from '../Button';
import './Form.css';

const Form = ({ formData, dispatch, setIsOutputEmpty }) => {
  const [criteriaList, setCriteriaList] = useState([``]);

  const addList = () => {
    setCriteriaList([...criteriaList, ``]);
  };

  const remList = (index) => {
    setCriteriaList([
      ...criteriaList.slice(0, index),
      ...criteriaList.slice(index + 1),
    ]);
  };

  const changeCriterion = (e, index) => {
    const currentInput = e.target;
    dispatch({
      type: `setCriterionValue`,
      payload: { id: index, value: currentInput.value },
    });
    e.preventDefault();
  };

  const handleChange = (e) => {
    const currentInput = e.target;
    dispatch({
      type: `setIdValue`,
      payload: { id: currentInput.id, value: currentInput.value },
    });
    setIsOutputEmpty(false);
    e.preventDefault();
  };

  return (
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
};

export default Form;
