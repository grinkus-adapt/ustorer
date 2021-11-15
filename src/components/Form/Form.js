import { useState } from 'preact/hooks';
import FormField from '../FormField';
import TextInput from '../TextInput';
import TextArea from '../TextArea';
import Button from '../Button';
import './Form.css';

const Form = () => {
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
    const newCriteriaList = [...criteriaList];
    newCriteriaList[index] = e.target.value;
    setCriteriaList(newCriteriaList);
  };

  return (
    <form className="user-story-form">
      <FormField label="As a" labelFor="persona">
        <TextInput name="persona" placeholder="type of user" required={true} />
      </FormField>
      <FormField label="I want to" labelFor="goal">
        <TextInput name="goal" placeholder="some goal" required={true} />
      </FormField>
      <FormField label="So that" labelFor="reason">
        <TextInput name="reason" placeholder="some reason" required={true} />
      </FormField>
      <FormField
        label="Description"
        labelFor="description-text-area"
        className="form-field__description"
      >
        <TextArea name="description-text-area" rows="5" cols="30" />
      </FormField>
      <FormField label="Acceptance Criteria" className="form-field__criteria">
        <Button
          type="button"
          className="criterion-button criterion-button--add"
          text="Add List"
          onClick={addList}
        />
        <ol>
          {criteriaList.map((item, index) => (
            <li key={index}>
              <TextInput
                name={`criterion-input-${index}`}
                className="form-input"
                value={item}
                onInput={(e) => changeCriterion(e, index)}
              />
              <Button
                type="button"
                className="criterion-button criterion-button--rem"
                text="X"
                onClick={() => remList(index)}
              />
            </li>
          ))}
        </ol>
      </FormField>
    </form>
  );
};

export default Form;
