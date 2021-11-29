import './Output.css';
import Button from '../Button';
import useCopyAsMarkdown from '@cnakazawa/copy-as-markdown';
import TurndownService from 'turndown';
import SummaryOutputField from '../SummaryOutputField';
import { connect, mapActionsToProps } from '../../utilities/connect';
import { formContext } from '../../contexts';

const Output = connect(
  formContext,
  mapActionsToProps([`setSuccessClass`])
)(({ FormData, state, isOutputEmpty, formType, setSuccessClass }) => {
  const setRef = useCopyAsMarkdown();

  const copyOutput = (className) => {
    const nodeHTML = document.querySelector(className).innerHTML;
    navigator.clipboard.writeText(
      new TurndownService({
        codeBlockStyle: `fenced`,
        headingStyle: `atx`,
        hr: `---`,
      }).turndown(nodeHTML)
    );
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
            <SummaryOutputField copyOutput={copyOutput} />
            <span className="Output__content--body" ref={setRef}>
              {FormData.map((item) => {
                if (item.label === `Description`)
                  return (
                    <div className="Output__description">
                      <span className="Output__description--label">
                        <b>{item.label}</b>
                      </span>
                      <div className="Output__description--content">
                        {state[item.id]}
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
                          {state[item.id]}
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
                          {state[item.id]}
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
                          {state[item.id].map((listItem, index) => (
                            <li key={index}>{listItem}</li>
                          ))}
                        </ol>
                      </div>
                    );
                  if (item.label !== `Browser` && item.label !== `Devices`) {
                    return `${item.label} ${
                      !state[item.id] ? `...` : state[item.id]
                    } `;
                  }
                }
              })}
            </span>
            <div className="Output__actions">
              <Button
                type="button"
                className="Button Button--filled Button--icon Button--icon-copy"
                onClick={(e) => {
                  copyOutput(`.Output__content--body`);
                  setSuccessClass({ e });
                }}
              >
                <span>Copy Output</span>
              </Button>
            </div>
          </>
        )}
      </div>
    </div>
  );
});
export default Output;

// return `${item.label} ${state[item.id]}  ${
//   item.label === `description` && `testuojame`
// }`;
