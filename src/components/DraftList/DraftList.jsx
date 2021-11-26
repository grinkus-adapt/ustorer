import './DraftList.css';
import Button from '../Button';
import { connect, mapActionsToProps } from '../../utilities/connect';
import { formContext } from '../../contexts';

const DraftList = connect(
  formContext,
  mapActionsToProps([`useDraft`])
)(({ draftState, setDraftState, useDraft, setFormType, setIsOutputEmpty }) => {
  const deleteDraft = (index) => {
    const draftFromLocalStorage = JSON.parse(
      localStorage.getItem(`formDraftState`)
    );
    const newDraft = [
      ...draftFromLocalStorage.slice(0, index),
      ...draftFromLocalStorage.slice(index + 1),
    ];
    localStorage.setItem(`formDraftState`, JSON.stringify(newDraft));
    setDraftState(newDraft);
  };
  return (
    <div className="DraftList">
      <h2 className="DraftList__title">Saved Drafts</h2>
      {draftState &&
        draftState.map((item, index) => (
          <div
            key={index}
            className={`DraftList__container DraftList__container--${index}`}
          >
            <div
              className={`DraftList__container__task-type ${
                item.taskType === `userStory`
                  ? `DraftList__container__task-type--story`
                  : `DraftList__container__task-type--bug`
              }`}
            >
              {item.taskType === `userStory` && `User Story`}
              {item.taskType === `bugReport` && `Bug Report`}
            </div>
            <div className="DraftList__container__title">
              <span className="DraftList__container__summary">
                {item.summary}
              </span>
              <Button
                className="Button Button--delete Button--icon Button--icon-delete"
                onClick={() => deleteDraft(index)}
              >
                {` `}
              </Button>
            </div>

            <div className="DraftList__container__description">
              {item.description}
            </div>
            <div className="DraftList__container__actions">
              <Button
                className="Button Button--inverted Button--icon Button--icon-use"
                onClick={() => {
                  useDraft({ index });
                  setFormType(item.taskType);
                  setIsOutputEmpty(false);
                }}
              >
                Use Draft
              </Button>
            </div>
          </div>
        ))}
      {draftState?.length < 1 && (
        <span className="DraftList__container--empty">No drafts saved..</span>
      )}
    </div>
  );
});

export default DraftList;
