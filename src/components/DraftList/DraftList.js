import './DraftList.css';
import Button from '../Button';

const DraftList = () => {

  return(
    <div className="DraftList">
      <div className="DraftList__container DraftList__container--1">
        <span className="DraftList__container__summary">Task Summary Number One</span>
        <div className="DraftList__container__description">Description lorem ipsum dolor sit aeris du hast rammstein...</div>
        <div className="DraftList__container__actions">
          <Button className="Button Button--inverted Button--icon Button--edit-icon">Edit Draft</Button>
        </div>
      </div>
      <div className="DraftList__container DraftList__container--2">
        <span className="DraftList__container__summary">Task Summary Number Two</span>
        <div className="DraftList__container__description">Description lorem ipsum dolor sit aeris du hast rammstein...</div>
        <div className="DraftList__container__actions">
          <Button className="Button Button--inverted Button--icon Button--edit-icon">Edit Draft</Button>
        </div>
      </div>
      <div className="DraftList__container DraftList__container--3">
        <span className="DraftList__container__summary">Task Summary Number Three</span>
        <div className="DraftList__container__description">Description lorem ipsum dolor sit aeris du hast rammstein...</div>
        <div className="DraftList__container__actions">
          <Button className="Button Button--inverted Button--icon Button--edit-icon">Edit Draft</Button>
        </div>
      </div>
      <div className="DraftList__container DraftList__container--4">
        <span className="DraftList__container__summary">Task Summary Number Four</span>
        <div className="DraftList__container__description">Description lorem ipsum dolor sit aeris du hast rammstein...</div>
        <div className="DraftList__container__actions">
          <Button className="Button Button--inverted Button--icon Button--edit-icon">Edit Draft</Button>
        </div>
      </div>
    </div>
  )
};

export default DraftList;
