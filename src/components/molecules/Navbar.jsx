import React from 'react';
import styled from 'styled-components';
import {
  useAboutActionContext,
  useMenuActionContext,
  usePageSelectionActionContext,
} from '../../context/contexts';
import useMediaQuery from '../../hooks/useMediaQuery';
import { navbarContent } from '../../utils/data';
import { HOME, READER } from '../../utils/pageTypes';
import { Nav, NavGroup, NavItem } from '../atoms';

const Navbar = ({ className }) => {
  const toggleShowAbout = useAboutActionContext();
  const isDesktop = useMediaQuery();
  const toggleShowMenu = useMenuActionContext();
  const setSelectedPage = usePageSelectionActionContext();
  const { home, about, bookReader, bookPdf } = navbarContent;

  const clickNavItem = (callback) => () => {
    if (!isDesktop) {
      toggleShowMenu();
    }
    callback();
  };

  return (
    <Nav className={ className }>
      <NavGroup>
        <NavItem onClick={ clickNavItem(() => setSelectedPage(HOME)) }>
          { home }
        </NavItem>
        <NavItem onClick={ clickNavItem(toggleShowAbout) }>
          { about }
        </NavItem>
        <NavItem onClick={ clickNavItem(() => setSelectedPage(READER)) }>
          { bookReader }
        </NavItem>
        <NavItem>
          <a href={ bookPdf.url } onClick={ clickNavItem(() => null) } download>
            { bookPdf.text }
          </a>
        </NavItem>
      </NavGroup>
    </Nav>
  );
};

export default styled(Navbar)`
  display: flex;
  justify-content: center;
  height: 100%;
  width: 100%;

  ${NavGroup} {
    display: flex;
    justify-content: space-between;
    width: 50%;

    @media (max-width: 900px) {
      flex-direction: column;
      justify-content: center;
      width: auto;
    }

  }

  ${NavItem} {
    color: white;
    cursor: pointer;
    font-size: 1.5rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    list-style: none;
    margin-top: .5rem;
    text-transform: uppercase;
    user-select: none;

    ::after {
      background-color: #a08cff;
      content: "";
      height: 0.25rem;
      opacity: 1;
      transform: scaleX(0);
      transform-origin: center;
      transition: opacity 500ms, transform 500ms;
      width: 100%;
    }

    :hover:after {
      transform: scaleX(1);
    }

    @media (max-width: 900px) {
      text-align: center;
    }


  }

  a {
    text-decoration-line: none;
    color: white;
  }


`;
