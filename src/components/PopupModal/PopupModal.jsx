import './PopupModal.css';

const PopupModal = ({ children, trigger }) =>
  typeof trigger === `number` && (
    <div className="PopupModal">
      <div className="PopupModal__container">{children}</div>
    </div>
  );

export default PopupModal;
