import './DraftList.css';
import Button from '../Button';

const DraftList = ({
  draftState,
  setDraftState,
  dispatch,
  setFormType,
  setIsOutputEmpty,
}) => {
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
            <span className="DraftList__container__summary">
              {item.summary}
            </span>
            <div className="DraftList__container__description">
              {item.taskType === `userStory`
                ? item.storyDescription
                : item.bugDescription}
            </div>
            <div className="DraftList__container__actions">
              <Button
                className="Button Button--filled Button--icon Button--use-icon"
                onClick={() => {
                  dispatch({
                    type: `useDraft`,
                    payload: { index },
                  });
                  setFormType(item.taskType);
                  setIsOutputEmpty(false);
                }}
              >
                Use Draft
              </Button>
              <Button
                className="Button Button--inverted Button--delete Button--icon Button--delete-icon"
                onClick={() => deleteDraft(index)}
              >
                Delete
              </Button>
            </div>
          </div>
        ))}
    </div>
  );
};

export default DraftList;
