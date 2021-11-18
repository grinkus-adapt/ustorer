import './UserStoryOutput.css';
import Button from '../Button';
import useCopyAsMarkdown from '@cnakazawa/copy-as-markdown';
import TurndownService from 'turndown';
import SummaryOutputField from '../SummaryOutputField';

const UserStoryOutput = ({ formData, inputData, isOutputEmpty }) => {
  const setRef = useCopyAsMarkdown();

  const showTooltip = () => {
    const tooltip = document.querySelector(`.user-story-output__tooltip`);
    tooltip.setAttribute(`class`, `user-story-output__tooltip disabled`);
    tooltip.setAttribute(`class`, `user-story-output__tooltip`);
    setTimeout(
      () =>
        tooltip.setAttribute(`class`, `user-story-output__tooltip disabled`),
      3000
    );
  };

  const copyOutput = (className) => {
    const nodeHTML = document.querySelector(className).innerHTML;
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
    <div className="user-story-output">
      <h2 className="user-story-output__title">User Story</h2>
      <div className="user-story-output__content">
        {isOutputEmpty && (
          <span className="user-story-output__content--empty">
            Waiting for input...
          </span>
        )}
        {!isOutputEmpty && (
          <>
            <SummaryOutputField inputData={inputData} copyOutput={copyOutput} />
            <span className="user-story-output__content--body" ref={setRef}>
              {formData.map((item) => {
                if (item.label === `Description`)
                  return (
                    <div className="user-story-output__description">
                      <span className="user-story-output__description--label">
                        <b>{item.label}</b>
                      </span>
                      <div className="user-story-output__description--content">
                        {inputData[item.id]}
                      </div>
                    </div>
                  );
                if (item.label === `Acceptance Criteria`)
                  return (
                    <div className="user-story-output__acceptance-criteria">
                      <span className="user-story-output__acceptance-criteria--label">
                        <b>{item.label}</b>
                      </span>
                      <ol className="user-story-output__acceptance-criteria--content">
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
            <div className="user-story-output__content--actions">
              <Button
                type="button"
                className="btn btn--copy"
                onClick={() => copyOutput(`.user-story-output__content--body`)}
              >
                Copy Output
              </Button>
              <span className="user-story-output__tooltip disabled">
                Copied successfully!
              </span>
            </div>
          </>
        )}
      </div>
    </div>
  );
};
export default UserStoryOutput;

// return `${item.label} ${inputData[item.id]}  ${
//   item.label === `description` && `testuojame`
// }`;
