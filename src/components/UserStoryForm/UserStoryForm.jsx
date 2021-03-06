import { useState } from 'preact/hooks';
import './UserStoryForm.css';
import FormField from '../FormField';
import TextInput from '../TextInput';
import TextArea from '../TextArea';
import Button from '../Button';
import { connect, mapActionsToProps } from '../../utilities/connect';
import { ReactComponent as IconPlus } from '@fortawesome/fontawesome-free/svgs/solid/plus.svg';
import { formContext } from '../../contexts';

const UserStoryForm = connect(
  formContext,
  mapActionsToProps([`addCriteriaList`, `remCriteriaList`])
)(
  ({
    FormData,
    handleChange,
    changeCriterion,
    remCriteriaList,
    state,
    addCriteriaList,
  }) => {
    const [cursorPosition, setCursorPosition] = useState(0);

    const screenWidth = window.screen.width;

    const handleKeycode = (e, index) => {
      // 13 - Enter
      if (e.keyCode === 13) {
        addCriteriaList({ index });
      }
      // 46 - Delete ; 8 - Backspace
      if (e.keyCode === 46 || (e.keyCode === 8 && e.target.value === ``)) {
        remCriteriaList({ index });
        const previousInput = document.querySelector(
          `#criterion-input-${e.keyCode === 8 ? index - 1 : index + 1}`
        );
        previousInput && previousInput.focus();
        if (e.keyCode === 8) {
          e.preventDefault();
          e.stopPropagation();
        }
      }
    };

    return (
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
                    onInput={(e) => {
                      if (screenWidth > 640) {
                        handleChange(e);
                      }
                    }}
                    onBlur={(e) => {
                      if (screenWidth < 640) {
                        handleChange(e);
                      }
                    }}
                    value={state[item.id]}
                  />
                )}
                {item.type === `textarea` && (
                  <TextArea
                    name={item.id}
                    placeholder={item.placeholder}
                    required={item.required}
                    onInput={(e) => {
                      if (screenWidth > 640) {
                        handleChange(e);
                      }
                    }}
                    onBlur={(e) => {
                      if (screenWidth < 640) {
                        handleChange(e);
                      }
                    }}
                    value={state[item.id]}
                  />
                )}
                {item.type === `acceptanceCriteria` && (
                  <>
                    <ol className="FormField__criteria-list">
                      {state.acceptanceCriteria.map((listItem, index) => (
                        <li key={`${listItem.length ? listItem : index}`}>
                          <div className="criterion-fake-input">
                            <TextInput
                              name={`criterion-input-${index}`}
                              className="form-input"
                              onInput={(e) => {
                                if (screenWidth > 640) {
                                  setCursorPosition(e.target.selectionStart);
                                  changeCriterion(e, index);
                                }
                              }}
                              onBlur={(e) => {
                                if (screenWidth < 640) {
                                  setCursorPosition(e.target.selectionStart);
                                  changeCriterion(e, index);
                                }
                              }}
                              onFocus={(e) => {
                                e.target.selectionStart = cursorPosition;
                                e.target.selectionEnd = cursorPosition;
                              }}
                              onKeyDown={(e) => handleKeycode(e, index)}
                              value={listItem}
                              placeholder={item.placeholder}
                            />
                            <Button
                              type="button"
                              className="Button FormField__criteria-list__rem-btn"
                              onClick={() => remCriteriaList({ index })}
                            >
                              ??
                            </Button>
                          </div>
                        </li>
                      ))}
                    </ol>
                    <Button
                      type="button"
                      className="FormField__criteria-list__add-btn"
                      onClick={() => {
                        addCriteriaList({ index: `` });
                      }}
                    >
                      <IconPlus className="icon" />
                      <span>Add Criterion</span>
                    </Button>
                  </>
                )}
              </FormField>
            )
        )}
      </form>
    );
  }
);

export default UserStoryForm;
