import './UserStory.css';
import Button from '../Button';
import useCopyAsMarkdown from '@cnakazawa/copy-as-markdown';
import TurndownService from 'turndown';

const UserStory = ({ formData, inputData, isOutputEmpty }) => {
  const setRef = useCopyAsMarkdown();

  const showTooltip = () => {
    const tooltip = document.querySelector(`.user-story__tooltip`);
    tooltip.setAttribute(`class`, `user-story__tooltip disabled`);
    tooltip.setAttribute(`class`, `user-story__tooltip`);
    console.log(tooltip.getAttribute(`class`));
    setTimeout(
      () => tooltip.setAttribute(`class`, `user-story__tooltip disabled`),
      3000
    );
  };

  const copyOutput = () => {
    const nodeHTML = document.querySelector(
      `.user-story__content--body`
    ).innerHTML;
    navigator.clipboard.writeText(
      new TurndownService({
        codeBlockStyle: `fenced`,
        headingStyle: `atx`,
        hr: `---`,
      }).turndown(nodeHTML)
    );
    showTooltip();
  };

  return (
    <div className="user-story">
      <h2 className="user-story--title">User Story</h2>
      <div className="user-story__content">
        {isOutputEmpty && (
          <span className="user-story__content--empty">
            Waiting for input...
          </span>
        )}
        {!isOutputEmpty && (
          <>
            <span className="user-story__content--body" ref={setRef}>
              {formData.map((item) => {
                if (item.label === `Description`)
                  return (
                    <div className="user-story__description">
                      <span className="user-story__description--label">
                        <b>{item.label}</b>
                      </span>
                      <div className="user-story__description--content">
                        {inputData[item.id]}
                      </div>
                    </div>
                  );
                if (item.label === `Acceptance Criteria`)
                  return (
                    <div className="user-story__acceptance-criteria">
                      <span className="user-story__acceptance-criteria--label">
                        <b>{item.label}</b>
                      </span>
                      <ol className="user-story__acceptance-criteria--content">
                        {inputData[item.id].map((listItem) => (
                          <li key={listItem}>{listItem}</li>
                        ))}
                      </ol>
                    </div>
                  );
                return `${item.label} ${
                  !inputData[item.id] ? `...` : inputData[item.id]
                } `;
              })}
            </span>
            <div className="user-story__content--actions">
              <Button
                type="button"
                className="btn btn--copy"
                onClick={() => copyOutput()}
              >
                Copy Output
              </Button>
              <span className="user-story__tooltip disabled">
                Copied successfully!
              </span>
            </div>
          </>
        )}
      </div>
    </div>
  );
};
export default UserStory;

// return `${item.label} ${inputData[item.id]}  ${
//   item.label === `description` && `testuojame`
// }`;
