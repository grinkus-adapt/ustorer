import './Layout.css';
import Header from '../Header';

const Layout = ({ children }) => (
  <div className="layout">
    <Header />
    <div className="layout__wrapper">{children}</div>
  </div>
);

export default Layout;
