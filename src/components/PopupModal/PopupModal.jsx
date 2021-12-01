import './PopupModal.css';
import { useSpring, animated, config } from 'react-spring';

const Modal = ({ children }) => {
  const opacityAnimation = useSpring({
    to: { opacity: 1 },
    from: { opacity: 0 },
    config: config.molasses,
  });

  const transformAnimation = useSpring({
    to: { x: 0, z: 0, rotateY: 0 },
    from: { x: 720, z: 90, rotateY: 60 },
    config: config.molasses,
  });

  return (
    <animated.div style={opacityAnimation} className="PopupModal">
      <animated.div
        style={transformAnimation}
        className="PopupModal__container"
      >
        {children}
      </animated.div>
    </animated.div>
  );
};

// Modal is outside because of React Spring
const PopupModal = ({ trigger, ...props }) =>
  typeof trigger === `number` && <Modal {...props} />;

export default PopupModal;
