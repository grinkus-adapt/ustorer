import './UserStory.css';

const UserStory = () => (
  <div className="user-story">
    <h2 className="user-story--title">User Story</h2>
    <div className="user-story__content">
      <span className="user-story__content--empty">
        Waiting for generation...
      </span>
    </div>
  </div>
);

export default UserStory;
