import Layout from './components/Layout';
import Form from './components/Form';
import FormData from './data';
import { useState } from 'preact/hooks';
import Output from './components/Output';
import { FormProvider } from './contexts/formContext';

export function App() {
  const [isOutputEmpty, setIsOutputEmpty] = useState(true);
  const [formType, setFormType] = useState(`userStory`);
  const [draftState, setDraftState] = useState(
    JSON.parse(localStorage.getItem(`formDraftState`))
  );

  return (
    <FormProvider>
      <Layout
        draftState={draftState}
        setDraftState={setDraftState}
        setFormType={setFormType}
        setIsOutputEmpty={setIsOutputEmpty}
      >
        <Form
          setIsOutputEmpty={setIsOutputEmpty}
          FormData={FormData}
          formType={formType}
          setFormType={setFormType}
          setDraftState={setDraftState}
        />
        <Output
          isOutputEmpty={isOutputEmpty}
          FormData={FormData}
          formType={formType}
        />
      </Layout>
    </FormProvider>
  );
}
