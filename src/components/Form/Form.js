import { useState } from 'preact/hooks';
import UserStoryForm from '../UserStoryForm';
import RadioInput from '../RadioInput/RadioInput';
import FormField from '../FormField';
import TextArea from '../TextArea';
import './Form.css';
import BugReportForm from '../BugReportForm/BugReportForm';

const Form = ({
  formData,
  bugFormData,
  dispatch,
  setIsOutputEmpty,
  formType,
  setFormType,
}) => {
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
    <div className="Form">
      <FormField
        label="Choose Task type"
        labelFor="form-type"
        className="form-type-select"
      >
        <RadioInput
          value="User Story"
          name="form-type"
          id="type-user-story"
          onInput={() => setFormType(`userStory`)}
        />
        <RadioInput
          value="Bug Report"
          name="form-type"
          id="type-bug-report"
          onInput={() => setFormType(`bugReport`)}
        />
      </FormField>
      <FormField
        label="Summary"
        labelFor="form-summary"
        className="FormField__summary"
      >
        <TextArea
          className="TextArea__summary"
          id="summary"
          onInput={handleChange}
        />
      </FormField>
      {formType === `userStory` && (
        <UserStoryForm
          addList={addList}
          remList={remList}
          changeCriterion={changeCriterion}
          handleChange={handleChange}
          formData={formData}
          criteriaList={criteriaList}
        />
      )}
      {formType === `bugReport` && (
        <BugReportForm formData={bugFormData} handleChange={handleChange} />
      )}
    </div>
  );
};

export default Form;
