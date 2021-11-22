import './DraftList.css';
import Button from '../Button';

const DraftList = ({ draftState }) => (
  <div className="DraftList">
    {draftState &&
      draftState.map((item, index) => (
        <div
          key={index}
          className={`DraftList__container DraftList__container--${index}`}
        >
          <span className="DraftList__container__summary">{item.summary}</span>
          <div className="DraftList__container__description">
            {item.taskType === `userStory`
              ? item.storyDescription
              : item.bugDescription}
          </div>
          <div className="DraftList__container__actions">
            <Button className="Button Button--filled Button--icon Button--edit-icon">
              Edit Draft
            </Button>
          </div>
        </div>
      ))}
  </div>
);

export default DraftList;
