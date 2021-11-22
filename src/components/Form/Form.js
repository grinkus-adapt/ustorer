import { useState } from 'preact/hooks';
import UserStoryForm from '../UserStoryForm';
import RadioInput from '../RadioInput/RadioInput';
import FormField from '../FormField';
import TextArea from '../TextArea';
import './Form.css';
import BugReportForm from '../BugReportForm/BugReportForm';
import Button from '../Button';

const Form = ({
  formData,
  bugFormData,
  dispatch,
  setIsOutputEmpty,
  formType,
  setFormType,
  state,
  setDraftState,
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

  const saveFormDraft = () => {
    let newFormDraft = [];
    const lSValues = localStorage.getItem(`formDraftState`);
    if (lSValues) {
      newFormDraft = [...JSON.parse(lSValues)];
    }
    // state comes from props
    newFormDraft.push(state);
    localStorage.setItem(`formDraftState`, JSON.stringify(newFormDraft));
    setDraftState(newFormDraft);
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
          onInput={() => {
            setFormType(`userStory`);
            dispatch({
              type: `changeTaskType`,
              payload: { value: `userStory` },
            });
          }}
          checked={formType === `userStory`}
        />
        <RadioInput
          value="Bug Report"
          name="form-type"
          id="type-bug-report"
          onInput={() => {
            setFormType(`bugReport`);
            dispatch({
              type: `changeTaskType`,
              payload: { value: `bugReport` },
            });
          }}
          checked={formType === `bugReport`}
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
      <Button
        className="Button Button--filled Button--icon Button--save-icon"
        onClick={() => saveFormDraft()}
      >
        Save Draft
      </Button>
    </div>
  );
};

export default Form;
