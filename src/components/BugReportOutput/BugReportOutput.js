import './BugReportOutput.css';
import Button from '../Button';
import useCopyAsMarkdown from '@cnakazawa/copy-as-markdown';
import TurndownService from 'turndown';
import SummaryOutputField from '../SummaryOutputField';

const BugReportOutput = ({ formData, inputData, isOutputEmpty }) => {
  const setRef = useCopyAsMarkdown();

  const showTooltip = () => {
    const tooltip = document.querySelector(`.BugReportOutput__tooltip`);
    tooltip.setAttribute(`class`, `BugReportOutput__tooltip disabled`);
    tooltip.setAttribute(`class`, `BugReportOutput__tooltip`);
    setTimeout(
      () =>
        tooltip.setAttribute(`class`, `BugReportOutput__tooltip disabled`),
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
    <div className="BugReportOutput">
      <h2 className="BugReportOutput__title">Bug Report</h2>
      <div className="BugReportOutput__content">
        {isOutputEmpty && (
          <span className="BugReportOutput__content--empty">
            Waiting for input...
          </span>
        )}
        {!isOutputEmpty && (
          <>
            <SummaryOutputField inputData={inputData} copyOutput={copyOutput} />
            <span className="BugReportOutput__content--body" ref={setRef}>
              {formData.map((item) => {
                if (item.label === `Description`)
                  return (
                    <div className="BugReportOutput__description">
                      <span className="BugReportOutput__description--label">
                        <b>{item.label}</b>
                      </span>
                      <div className="BugReportOutput__description--content">
                        {inputData[item.id]}
                      </div>
                    </div>
                  );
                if (item.label === `Browser`)
                  return (
                    <div className="BugReportOutput__browser">
                      <span className="BugReportOutput__browser--label">
                        <b>{item.label}</b>
                      </span>
                      <div className="BugReportOutput__browser--content">
                        {inputData[item.id]}
                      </div>
                    </div>
                  );
                if (item.label === `Devices`)
                  return (
                    <div className="BugReportOutput__devices">
                      <span className="BugReportOutput__devices--label">
                        <b>{item.label}</b>
                      </span>
                      <div className="BugReportOutput__devices--content">
                        {inputData[item.id]}
                      </div>
                    </div>
                  );
              })}
            </span>
            <div className="BugReportOutput__content--actions">
              <Button
                type="button"
                className="Button Button--filled Button--icon Button--copy-icon"
                onClick={() => copyOutput(`.BugReportOutput__content--body`)}
              >
                Copy Output
              </Button>
              <span className="BugReportOutput__tooltip disabled">
                Copied successfully!
              </span>
            </div>
          </>
        )}
      </div>
    </div>
  );
};
export default BugReportOutput;

// return `${item.label} ${inputData[item.id]}  ${
//   item.label === `description` && `testuojame`
// }`;
