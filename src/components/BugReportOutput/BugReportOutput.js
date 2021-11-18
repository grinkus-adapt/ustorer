import './BugReportOutput.css';
import Button from '../Button';
import useCopyAsMarkdown from '@cnakazawa/copy-as-markdown';
import TurndownService from 'turndown';
import SummaryOutputField from '../SummaryOutputField';

const BugReportOutput = ({ formData, inputData, isOutputEmpty }) => {
  const setRef = useCopyAsMarkdown();

  const showTooltip = () => {
    const tooltip = document.querySelector(`.bug-report-output__tooltip`);
    tooltip.setAttribute(`class`, `bug-report-output__tooltip disabled`);
    tooltip.setAttribute(`class`, `bug-report-output__tooltip`);
    setTimeout(
      () =>
        tooltip.setAttribute(`class`, `bug-report-output__tooltip disabled`),
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
    <div className="bug-report-output">
      <h2 className="bug-report-output__title">Bug Report</h2>
      <div className="bug-report-output__content">
        {isOutputEmpty && (
          <span className="bug-report-output__content--empty">
            Waiting for input...
          </span>
        )}
        {!isOutputEmpty && (
          <>
            <SummaryOutputField inputData={inputData} copyOutput={copyOutput} />
            <span className="bug-report-output__content--body" ref={setRef}>
              {formData.map((item) => {
                if (item.label === `Description`)
                  return (
                    <div className="bug-report-output__description">
                      <span className="bug-report-output__description--label">
                        <b>{item.label}</b>
                      </span>
                      <div className="bug-report-output__description--content">
                        {inputData[item.id]}
                      </div>
                    </div>
                  );
                return `${item.label} ${
                  !inputData[item.id] ? `...` : inputData[item.id]
                } `;
              })}
            </span>
            <div className="bug-report-output__content--actions">
              <Button
                type="button"
                className="btn btn--copy"
                onClick={() => copyOutput(`.bug-report-output__content--body`)}
              >
                Copy Output
              </Button>
              <span className="bug-report-output__tooltip disabled">
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
