import UserStoryForm from '../UserStoryForm';
import FormField from '../FormField';
import TextArea from '../TextArea';
import RadioInput from '../RadioInput';
import './Form.css';
import BugReportForm from '../BugReportForm/BugReportForm';
import Button from '../Button';
import { connect, mapActionsToProps } from '../../utilities/connect';
import { formContext } from '../../contexts';
import { ReactComponent as IconSave } from '@fortawesome/fontawesome-free/svgs/solid/save.svg';
import { ReactComponent as IconCheck } from '@fortawesome/fontawesome-free/svgs/solid/check.svg';

const SummaryFormField = connect(formContext)(({ handleChange, state }) => (
  <FormField
    label="Summary"
    labelFor="form-summary"
    className="FormField__summary"
  >
    <TextArea
      className="TextArea__summary"
      id="summary"
      onInput={handleChange}
      value={state.summary}
    />
  </FormField>
));

const TaskTypeField = connect(
  formContext,
  mapActionsToProps([`changeTaskType`])
)(({ formType, setFormType, changeTaskType }) => (
  <FormField
    label="Choose Task type"
    labelFor="form-type"
    className="FormField__type-select"
  >
    <RadioInput
      value="User Story"
      name="form-type"
      id="type-user-story"
      onInput={() => {
        setFormType(`userStory`);
        changeTaskType({ value: `userStory` });
      }}
      checked={formType === `userStory`}
    />
    <RadioInput
      value="Bug Report"
      name="form-type"
      id="type-bug-report"
      onInput={() => {
        setFormType(`bugReport`);
        changeTaskType({ value: `bugReport` });
      }}
      checked={formType === `bugReport`}
    />
  </FormField>
));

const Form = connect(
  formContext,
  mapActionsToProps([`setIdValue`, `setCriterionValue`, `setSuccessClass`])
)(
  ({
    FormData,
    setIdValue,
    setCriterionValue,
    setIsOutputEmpty,
    formType,
    setFormType,
    setDraftState,
    setSuccessClass,
    state,
  }) => {
    const changeCriterion = (e, index) => {
      const currentInput = e.target;
      setCriterionValue({ id: index, value: currentInput.value });
      e.preventDefault();
    };

    const handleChange = (e) => {
      const currentInput = e.target;
      setIdValue({ id: currentInput.id, value: currentInput.value });
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
        <h2 className="Form__title">Generation Form</h2>
        <TaskTypeField formType={formType} setFormType={setFormType} />
        <SummaryFormField handleChange={handleChange} />
        {formType === `userStory` && (
          <UserStoryForm
            changeCriterion={changeCriterion}
            handleChange={handleChange}
            FormData={FormData}
          />
        )}
        {formType === `bugReport` && (
          <BugReportForm FormData={FormData} handleChange={handleChange} />
        )}
        <Button
          className="Button--filled Button--anim Form__save-btn"
          onClick={(e) => {
            saveFormDraft();
            setSuccessClass({ e });
          }}
        >
          <IconSave className="icon" />
          <IconCheck className="icon-check" />
          <span>Save Draft</span>
        </Button>
      </div>
    );
  }
);

export default Form;
