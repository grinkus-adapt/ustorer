import './DraftList.css';
import Button from '../Button';
import { connect, mapActionsToProps } from '../../utilities/connect';
import { ReactComponent as IconUse } from '@fortawesome/fontawesome-free/svgs/solid/upload.svg';
import { ReactComponent as IconCheck } from '@fortawesome/fontawesome-free/svgs/solid/check.svg';
import { ReactComponent as IconDelete } from '@fortawesome/fontawesome-free/svgs/solid/trash-alt.svg';
import { formContext } from '../../contexts';

const DraftList = connect(
  formContext,
  mapActionsToProps([`useDraft`, `setSuccessClass`])
)(
  ({
    draftState,
    useDraft,
    setFormType,
    setIsOutputEmpty,
    setSuccessClass,
    setPopupModalTrigger,
  }) => (
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
                className="Button Button--delete DraftList__container__del-btn"
                onClick={() => setPopupModalTrigger(index)}
              >
                <IconDelete />
              </Button>
            </div>

            <div className="DraftList__container__description">
              {item.description}
            </div>
            <div className="DraftList__container__actions">
              <Button
                className="Button Button--inverted Button--anim DraftList__container__actions__use-btn"
                onClick={(e) => {
                  useDraft({ index });
                  setFormType(item.taskType);
                  setIsOutputEmpty(false);
                  setSuccessClass({ e });
                }}
              >
                <IconUse className="icon" />
                <IconCheck className="icon-check" />
                <span>Use Draft</span>
              </Button>
            </div>
          </div>
        ))}
      {draftState?.length < 1 && (
        <span className="DraftList__container--empty">No drafts saved..</span>
      )}
    </div>
  )
);

export default DraftList;
