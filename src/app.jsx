import Layout from './components/Layout';
import Form from './components/Form';
import UserStory from './components/UserStory';
import { userStoryFormData } from './data/UserStoryForm';
import { useState, useReducer } from 'preact/hooks';

const initialState = { acceptanceCriteria: [``] };

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
  throw new Error();
};
export function App() {
  const [isOutputEmpty, setIsOutputEmpty] = useState(true);
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      {/* <pre>{JSON.stringify(state, undefined, 2)}</pre> */}
      <Layout>
        <Form
          setIsOutputEmpty={setIsOutputEmpty}
          formData={userStoryFormData}
          dispatch={dispatch}
        />
        <UserStory
          isOutputEmpty={isOutputEmpty}
          formData={userStoryFormData}
          inputData={state}
        />
      </Layout>
    </>
  );
}
// if (type === `setCriterionValue`) {
//   if (payload.value !== state.acceptanceCriteria[payload.id]) {
//     return {
//       ...state,
//       // Object.values - lists all object values to array
//       acceptanceCriteria: Object.values(
//         reducer(
//           state.acceptanceCriteria.reduce((acc, str, index) => {
//             acc[index] = str;
//             return acc;
//           }, {}),
//           { type: `setIdValue`, payload }
//         )
//       ),
//     };
//   }
//   return state;
// }
