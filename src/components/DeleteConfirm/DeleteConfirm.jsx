import Button from '../Button';
import './DeleteConfirm.css';
import { ReactComponent as IconDelete } from '@fortawesome/fontawesome-free/svgs/solid/trash-alt.svg';
import { ReactComponent as IconCancel } from '@fortawesome/fontawesome-free/svgs/solid/ban.svg';

const DeleteConfirm = ({
  setPopupModalTrigger,
  deleteDraft,
  draftIndex,
  draftList,
}) => {
  let taskType = ``;
  if (draftList[draftIndex].taskType === `userStory`) {
    taskType = `user story`;
  } else {
    taskType = `bug report`;
  }
  const summaryName = draftList[draftIndex].summary;
  return (
    <div className="DeleteConfirm">
      <div className="DeleteConfirm__content">
        <h3 className="DeleteConfirm__title">
          Delete{` `}
          <span className="DeleteConfirm__title__task-type">{taskType}</span>?
        </h3>
        <p className="DeleteConfirm__text">
          Deleting <span className="DeleteConfirm__summary">{summaryName}</span>
          {` `}
          will permanently remove it from your draft list.
        </p>
      </div>
      <div className="DeleteConfirm__actions">
        <Button
          className="Button--anim Button--inverted DeleteConfirm__actions__cancel-btn"
          onClick={() => setPopupModalTrigger(null)}
        >
          <IconCancel />
          <span>No, keep {taskType}</span>
        </Button>
        <Button
          className="Button--anim Button--filled DeleteConfirm__actions__delete-btn"
          onClick={() => {
            deleteDraft(draftIndex);
            setPopupModalTrigger(null);
          }}
        >
          <IconDelete />
          <span>Yes, delete {taskType}</span>
        </Button>
      </div>
    </div>
  );
};

export default DeleteConfirm;
