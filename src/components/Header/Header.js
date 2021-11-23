import './Header.css';
import Logo from '../Logo';
import Button from '../Button';
import { useState } from 'preact/hooks';

const Header = () => {
  const [sidebarState, setSidebarState] = useState(`visible`);

  const toggleSidebar = () => {
    const draftList = document.querySelector(`.DraftList`);
    const toggleButton = document.querySelector(`.Header__sidebar-toggle`);
    if (draftList.getAttribute(`class`) === `DraftList DraftList--hidden`) {
      draftList.setAttribute(`class`, `DraftList`);
      toggleButton.setAttribute(`class`, `Button Header__sidebar-toggle`);
      setSidebarState(`visible`);
    } else {
      draftList.setAttribute(`class`, `DraftList DraftList--hidden`);
      toggleButton.setAttribute(
        `class`,
        `Button Header__sidebar-toggle Header__sidebar-toggle--hidden`
      );
      setSidebarState(`hidden`);
    }
  };
  return (
    <div className="Header">
      <div className="Header__fake-div" />
      <div className="Header__content">
        <span className="Header__title">Task Generator 1.0</span>
        <span className="Header__text">by</span>
        <a href="https://adaptagency.com/" target="_blank" rel="noreferrer">
          <Logo className="Header__logo" />
        </a>
      </div>
      <Button
        className="Button Header__sidebar-toggle"
        onClick={() => toggleSidebar()}
      >
        {sidebarState === `hidden` && (
          <img src="../../../node_modules/@fortawesome/fontawesome-free/svgs/solid/angle-double-left.svg" />
        )}
        {sidebarState === `visible` && (
          <img src="../../../node_modules/@fortawesome/fontawesome-free/svgs/solid/angle-double-right.svg" />
        )}
      </Button>
    </div>
  );
};

export default Header;
