import './Footer.css';

const Footer = () => (
  <div className="Footer">
    <div className="Footer__content">
      <h5>
        If you encounter any problems, please {` `}
        <a
          href="https://adaptagency.slack.com/team/U02HC5NUFJR"
          target="_blank"
          rel="noreferrer"
          className="Footer__content__link"
        >
          contact Tomas L. on Slack
        </a>
        .
      </h5>
    </div>
  </div>
);

export default Footer;
