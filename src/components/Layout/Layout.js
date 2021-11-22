import './Layout.css';
import Header from '../Header';
import DraftList from '../DraftList';
import Button from '../Button';
import { useState } from 'preact/hooks';

const Layout = ({
  children,
  draftState,
  setDraftState,
  dispatch,
  setFormType,
}) => {
  const [sidebarState, setSidebarState] = useState(`visible`);

  const toggleSidebar = () => {
    const draftList = document.querySelector(`.DraftList`);
    const toggleButton = document.querySelector(`.Layout__sidebar-toggle`);
    if (draftList.getAttribute(`class`) === `DraftList DraftList--hidden`) {
      draftList.setAttribute(`class`, `DraftList`);
      toggleButton.setAttribute(`class`, `Button Layout__sidebar-toggle`);
      setSidebarState(`visible`);
    } else {
      draftList.setAttribute(`class`, `DraftList DraftList--hidden`);
      toggleButton.setAttribute(
        `class`,
        `Button Layout__sidebar-toggle Layout__sidebar-toggle--hidden`
      );
      setSidebarState(`hidden`);
    }
  };

  return (
    <div className="Layout">
      <Header />
      <div className="Layout__wrapper">
        <div className="Layout__content">{children}</div>
        <DraftList
          draftState={draftState}
          setDraftState={setDraftState}
          dispatch={dispatch}
          setFormType={setFormType}
        />
        <Button
          className="Button Layout__sidebar-toggle"
          onClick={() => toggleSidebar()}
        >
          {sidebarState === `hidden` && (
            <img
              src="../../../node_modules/@fortawesome/fontawesome-free/svgs/solid/angle-double-left.svg"
              width="20"
              height="20"
            />
          )}
          {sidebarState === `visible` && (
            <img
              src="../../../node_modules/@fortawesome/fontawesome-free/svgs/solid/angle-double-right.svg"
              width="20"
              height="20"
            />
          )}
        </Button>
      </div>
    </div>
  );
};

export default Layout;
