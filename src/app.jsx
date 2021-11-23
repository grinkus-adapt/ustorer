import Layout from './components/Layout';
import Form from './components/Form';
import UserStoryOutput from './components/UserStoryOutput';
import BugReportOutput from './components/BugReportOutput';
import { userStoryFormData } from './data/UserStoryForm';
import { bugReportFormData } from './data/BugReportForm';
import { useState, useReducer } from 'preact/hooks';

const initialState = { acceptanceCriteria: [``], taskType: `userStory` };
// const initialState = { ...JSON.parse(localStorage.getItem(`formDraftState`)) };

const reducer = (state, action) => {
  const { type, payload } = action;
  if (type === `setIdValue`) {
    const { id, value } = payload;
    if (value !== state[id]) {
      return { ...state, [id]: value };
    }
    return state;
  }
  if (type === `setCriterionValue`) {
    if (payload.value !== state.acceptanceCriteria[payload.id]) {
      const acceptanceCriteria = [...state.acceptanceCriteria];
      acceptanceCriteria[payload.id] = payload.value;
      return {
        ...state,
        acceptanceCriteria,
      };
    }
  }
  if (type === `changeTaskType`) {
    const taskType = payload.value;
    return { ...state, taskType };
  }
  if (type === `addCriteriaList`) {
    const acceptanceCriteria = [...state.acceptanceCriteria];
    acceptanceCriteria.push(``);
    return {
      ...state,
      acceptanceCriteria,
    };
  }
  if (type === `remCriteriaList`) {
    const oldAcceptanceCriteria = [...state.acceptanceCriteria];
    const { index } = payload;
    const acceptanceCriteria = [
      ...oldAcceptanceCriteria.slice(0, index),
      ...oldAcceptanceCriteria.slice(index + 1),
    ];
    return {
      ...state,
      acceptanceCriteria,
    };
  }
  if (type === `useDraft`) {
    const { index } = payload;
    const draftFromLocalStorage = JSON.parse(
      localStorage.getItem(`formDraftState`)
    );
    const newState = draftFromLocalStorage[index];
    return newState;
  }
  throw new Error();
};
export function App() {
  const [isOutputEmpty, setIsOutputEmpty] = useState(true);
  const [formType, setFormType] = useState(`userStory`);
  const [draftState, setDraftState] = useState(
    JSON.parse(localStorage.getItem(`formDraftState`))
  );
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      <Layout
        draftState={draftState}
        setDraftState={setDraftState}
        dispatch={dispatch}
        setFormType={setFormType}
        setIsOutputEmpty={setIsOutputEmpty}
      >
        <Form
          setIsOutputEmpty={setIsOutputEmpty}
          formData={userStoryFormData}
          bugFormData={bugReportFormData}
          dispatch={dispatch}
          formType={formType}
          setFormType={setFormType}
          state={state}
          setDraftState={setDraftState}
        />
        {formType === `userStory` && (
          <UserStoryOutput
            isOutputEmpty={isOutputEmpty}
            formData={userStoryFormData}
            inputData={state}
          />
        )}
        {formType === `bugReport` && (
          <BugReportOutput
            isOutputEmpty={isOutputEmpty}
            formData={bugReportFormData}
            inputData={state}
          />
        )}
      </Layout>
    </>
  );
}
