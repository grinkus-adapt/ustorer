import './Output.css';
import Button from '../Button';
import useCopyAsMarkdown from '@cnakazawa/copy-as-markdown';
import TurndownService from 'turndown';
import SummaryOutputField from '../SummaryOutputField';

const Output = ({ FormData, inputData, isOutputEmpty, formType }) => {
  const setRef = useCopyAsMarkdown();

  const showTooltip = () => {
    const tooltip = document.querySelector(`.Output__tooltip`);
    tooltip.setAttribute(`class`, `Output__tooltip disabled`);
    tooltip.setAttribute(`class`, `Output__tooltip`);
    setTimeout(
      () => tooltip.setAttribute(`class`, `Output__tooltip disabled`),
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
    <div className="Output">
      <h2 className="Output__title">
        {formType === `userStory` ? `User Story` : `Bug Report`}
      </h2>
      <div className="Output__content">
        {isOutputEmpty && (
          <span className="Output__content--empty">Waiting for input...</span>
        )}
        {!isOutputEmpty && (
          <>
            <SummaryOutputField inputData={inputData} copyOutput={copyOutput} />
            <span className="Output__content--body" ref={setRef}>
              {FormData.map((item) => {
                if (item.label === `Description`)
                  return (
                    <div className="Output__description">
                      <span className="Output__description--label">
                        <b>{item.label}</b>
                      </span>
                      <div className="Output__description--content">
                        {inputData[item.id]}
                      </div>
                    </div>
                  );
                if (formType === `bugReport`) {
                  if (item.label === `Browser`)
                    return (
                      <div className="Output__browser">
                        <span className="Output__browser--label">
                          <b>{item.label}</b>
                        </span>
                        <div className="Output__browser--content">
                          {inputData[item.id]}
                        </div>
                      </div>
                    );
                  if (item.label === `Devices`)
                    return (
                      <div className="Output__devices">
                        <span className="Output__devices--label">
                          <b>{item.label}</b>
                        </span>
                        <div className="Output__devices--content">
                          {inputData[item.id]}
                        </div>
                      </div>
                    );
                }
                if (formType === `userStory`) {
                  if (item.label === `Acceptance Criteria`)
                    return (
                      <div className="Output__acceptance-criteria">
                        <span className="Output__acceptance-criteria--label">
                          <b>{item.label}</b>
                        </span>
                        <ol className="Output__acceptance-criteria--content">
                          {inputData[item.id].map((listItem, index) => (
                            <li key={index}>{listItem}</li>
                          ))}
                        </ol>
                      </div>
                    );
                  if (item.label !== `Browser` && item.label !== `Devices`) {
                    return `${item.label} ${
                      !inputData[item.id] ? `...` : inputData[item.id]
                    } `;
                  }
                }
              })}
            </span>
            <div className="Output__actions">
              <Button
                type="button"
                className="Button Button--filled Button--icon Button--copy-icon"
                onClick={() => copyOutput(`.Output__content--body`)}
              >
                Copy Output
              </Button>
              <div className="Output__tooltip disabled">
                Copied successfully!
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};
export default Output;

// return `${item.label} ${inputData[item.id]}  ${
//   item.label === `description` && `testuojame`
// }`;
