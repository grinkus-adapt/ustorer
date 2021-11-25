import './Layout.css';
import Header from '../Header';
import DraftList from '../DraftList';
import { useState } from 'preact/hooks';
import Button from '../Button';

const Layout = ({
  children,
  draftState,
  setDraftState,
  dispatch,
  setFormType,
  setIsOutputEmpty,
}) => {
  const [sidebarState, setSidebarState] = useState(`visible`);

  const toggleSidebar = () => {
    const draftList = document.querySelector(`.DraftList`);
    if (draftList.getAttribute(`class`) === `DraftList DraftList--hidden`) {
      draftList.setAttribute(`class`, `DraftList`);
      setSidebarState(`visible`);
    } else {
      draftList.setAttribute(`class`, `DraftList DraftList--hidden`);
      setSidebarState(`hidden`);
    }
  };
  
  return(
  <div className="Layout">
    <Header />
    <div className="Layout__wrapper">
      <div className="Layout__content">{children}</div>
      <DraftList
        draftState={draftState}
        setDraftState={setDraftState}
        dispatch={dispatch}
        setFormType={setFormType}
        setIsOutputEmpty={setIsOutputEmpty}
      />
      {sidebarState === `hidden` && (
        <Button
        className="Button Button--icon Button--icon-toggle-open Layout__wrapper__sidebar-toggle"
        onClick={() => toggleSidebar()}>
          Open Drafts
        </Button>
      )}
      {sidebarState === `visible` && (
        <Button
        className="Button Button--icon Button--icon-toggle-close Layout__wrapper__sidebar-toggle"
        onClick={() => toggleSidebar()}>
          Close Drafts
        </Button>
      )}
    </div>
  </div>
)};

export default Layout;