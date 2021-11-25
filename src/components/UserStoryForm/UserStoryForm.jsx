import FormField from '../FormField';
import TextInput from '../TextInput';
import TextArea from '../TextArea';
import Button from '../Button';
import './UserStoryForm.css';
import { useContext } from 'preact/hooks';
import { stateContext } from '../../app';

const UserStoryForm = ({
  FormData,
  handleChange,
  changeCriterion,
  dispatch,
}) => {

  const state = useContext(stateContext);

return(
  <form className="UserStoryForm">
    {FormData.map(
      (item) =>
        (item.id === `persona` ||
          item.id === `goal` ||
          item.id === `reason` ||
          item.id === `description` ||
          item.id === `acceptanceCriteria`) && (
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
                value={state[item.id]}
              />
            )}
            {item.type === `textarea` && (
              <TextArea
                name={item.id}
                placeholder={item.placeholder}
                required={item.required}
                onInput={(e) => handleChange(e)}
                value={state[item.id]}
              />
            )}
            {item.type === `acceptanceCriteria` && (
              <>
                <Button
                  type="button"
                  className="Button Button--inverted Button--icon Button--add-icon"
                  onClick={() =>
                    dispatch({
                      type: `addCriteriaList`,
                    })
                  }
                >
                  Add Criterion
                </Button>
                <ol className="FormField__criteria-list">
                  {state.acceptanceCriteria.map((item, index) => (
                    <li key={index}>
                      <div className="criterion-fake-input">
                        <TextInput
                          name={`criterion-input-${index}`}
                          className="form-input"
                          onInput={(e) => changeCriterion(e, index)}
                          value={item}
                        />
                        <Button
                          type="button"
                          className="Button Button--rem"
                          onClick={() =>
                            dispatch({
                              type: `remCriteriaList`,
                              payload: { index },
                            })
                          }
                        >
                          ×
                        </Button>
                      </div>
                    </li>
                  ))}
                </ol>
              </>
            )}
          </FormField>
        )
    )}
  </form>
)};

export default UserStoryForm;
