import { createContext } from 'preact';
import { formReducer } from '../reducers';
import { useReducer } from 'preact/hooks';

export const formContext = createContext();

const initialState = { acceptanceCriteria: [``], taskType: `userStory` };

const actionsToCreate = [
  `setIdValue`,
  `setCriterionValue`,
  `changeTaskType`,
  `addCriteriaList`,
  `remCriteriaList`,
  `useDraft`,
];
const createActions = (dispatch, actions) => {
  const output = {};
  actions.forEach((actionType) => {
    output[actionType] = (payload) => dispatch({ type: actionType, payload });
  });
  return output;
};

export const FormProvider = ({ children }) => {
  const [state, dispatch] = useReducer(formReducer, initialState);
  const actions = createActions(dispatch, actionsToCreate);
  return (
    <formContext.Provider value={{ state, actions }}>
      {children}
    </formContext.Provider>
  );
};
