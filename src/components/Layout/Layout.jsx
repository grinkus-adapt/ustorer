import './Layout.css';
import Header from '../Header';
import DraftList from '../DraftList';
import { useState } from 'preact/hooks';
import { ReactComponent as IconOpen } from '@fortawesome/fontawesome-free/svgs/solid/angle-left.svg';
import { ReactComponent as IconClose } from '@fortawesome/fontawesome-free/svgs/solid/angle-right.svg';
import Button from '../Button';
import PopupModal from '../PopupModal/PopupModal';
import DeleteConfirm from '../DeleteConfirm';
import Footer from '../Footer/Footer';

const Layout = ({
  children,
  draftState,
  setDraftState,
  setFormType,
  setIsOutputEmpty,
}) => {
  const [sidebarState, setSidebarState] = useState(`visible`);
  const [popupModalTrigger, setPopupModalTrigger] = useState(null);

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

  const deleteDraft = (index) => {
    const draftFromLocalStorage = JSON.parse(
      localStorage.getItem(`formDraftState`)
    );
    const newDraft = [
      ...draftFromLocalStorage.slice(0, index),
      ...draftFromLocalStorage.slice(index + 1),
    ];
    localStorage.setItem(`formDraftState`, JSON.stringify(newDraft));
    setDraftState(newDraft);
  };

  return (
    <div className="Layout">
      <PopupModal trigger={popupModalTrigger}>
        <DeleteConfirm
          setPopupModalTrigger={setPopupModalTrigger}
          deleteDraft={deleteDraft}
          draftIndex={popupModalTrigger}
          draftList={draftState}
        />
      </PopupModal>
      <Header />
      <div className="Layout__wrapper">
        <div className="Layout__content">{children}</div>
        <DraftList
          draftState={draftState}
          setDraftState={setDraftState}
          setFormType={setFormType}
          setIsOutputEmpty={setIsOutputEmpty}
          setPopupModalTrigger={setPopupModalTrigger}
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
      <Footer />
    </div>
  );
};

export default Layout;
