import './Layout.css';
import Header from '../Header';
import DraftList from '../DraftList';
const Layout = ({
  children,
  draftState,
  setDraftState,
  dispatch,
  setFormType,
  setIsOutputEmpty,
}) => (
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
    </div>
  </div>
);

export default Layout;
