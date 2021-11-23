import './UserStoryOutput.css';
import Button from '../Button';
import useCopyAsMarkdown from '@cnakazawa/copy-as-markdown';
import TurndownService from 'turndown';
import SummaryOutputField from '../SummaryOutputField';

const UserStoryOutput = ({ formData, inputData, isOutputEmpty }) => {
  const setRef = useCopyAsMarkdown();

  const showTooltip = () => {
    const tooltip = document.querySelector(`.UserStoryOutput__tooltip`);
    tooltip.setAttribute(`class`, `UserStoryOutput__tooltip disabled`);
    tooltip.setAttribute(`class`, `UserStoryOutput__tooltip`);
    setTimeout(
      () => tooltip.setAttribute(`class`, `UserStoryOutput__tooltip disabled`),
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
    <div className="UserStoryOutput">
      <h2 className="UserStoryOutput__title">User Story</h2>
      <div className="UserStoryOutput__content">
        {isOutputEmpty && (
          <span className="UserStoryOutput__content--empty">
            Waiting for input...
          </span>
        )}
        {!isOutputEmpty && (
          <>
            <SummaryOutputField inputData={inputData} copyOutput={copyOutput} />
            <span className="UserStoryOutput__content--body" ref={setRef}>
              {formData.map((item) => {
                if (item.label === `Description`)
                  return (
                    <div className="UserStoryOutput__description">
                      <span className="UserStoryOutput__description--label">
                        <b>{item.label}</b>
                      </span>
                      <div className="UserStoryOutput__description--content">
                        {inputData[item.id]}
                      </div>
                    </div>
                  );
                if (item.label === `Acceptance Criteria`)
                  return (
                    <div className="UserStoryOutput__acceptance-criteria">
                      <span className="UserStoryOutput__acceptance-criteria--label">
                        <b>{item.label}</b>
                      </span>
                      <ol className="UserStoryOutput__acceptance-criteria--content">
                        {inputData[item.id].map((listItem, index) => (
                          <li key={index}>{listItem}</li>
                        ))}
                      </ol>
                    </div>
                  );
                return `${item.label} ${
                  !inputData[item.id] ? `...` : inputData[item.id]
                } `;
              })}
            </span>
            <div className="UserStoryOutput__actions">
              <Button
                type="button"
                className="Button Button--filled Button--icon Button--copy-icon"
                onClick={() => copyOutput(`.UserStoryOutput__content--body`)}
              >
                Copy Output
              </Button>
              <div className="UserStoryOutput__tooltip disabled">
                Copied successfully!
              </div>
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
