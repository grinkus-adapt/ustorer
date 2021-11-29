import './Layout.css';
import Header from '../Header';
import DraftList from '../DraftList';
import { useState } from 'preact/hooks';
import { ReactComponent as IconOpen } from '@fortawesome/fontawesome-free/svgs/solid/angle-left.svg';
import { ReactComponent as IconClose } from '@fortawesome/fontawesome-free/svgs/solid/angle-right.svg';
import Button from '../Button';

const Layout = ({
  children,
  draftState,
  setDraftState,
  setFormType,
  setIsOutputEmpty,
}) => {
  const [sidebarState, setSidebarState] = useState(`visible`);

  const toggleSidebar = () => {
    const draftList = document.querySelector(`.DraftList`);
    if (draftList.getAttribute(`class`) === `DraftList DraftList--hidden`) {
      draftList.classList.remove(`DraftList--hidden`);
      setSidebarState(`visible`);
    } else {
      draftList.classList.add(`DraftList--hidden`);
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
          setFormType={setFormType}
          setIsOutputEmpty={setIsOutputEmpty}
        />
        {sidebarState === `hidden` && (
          <Button
            className="Button Button--icon Layout__sidebar-toggle"
            onClick={() => toggleSidebar()}
          >
            <IconOpen />
            Open Drafts
          </Button>
        )}
        {sidebarState === `visible` && (
          <Button
            className="Button Button--icon Layout__sidebar-toggle"
            onClick={() => toggleSidebar()}
          >
            <IconClose />
            Close Drafts
          </Button>
        )}
      </div>
    </div>
  );
};

export default Layout;
