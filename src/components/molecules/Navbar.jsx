import React from 'react';
import styled from 'styled-components';
import {
  useAboutActionContext,
  usePageSelectionActionContext,
} from '../../context/contexts';
import { navbarContent } from '../../utils/data';
import { HOME, READER } from '../../utils/pageTypes';
import { Nav, NavGroup, NavItem} from '../atoms';

const Navbar = ({ className }) => {
  const toggleShowAbout = useAboutActionContext();
  const setSelectedPage = usePageSelectionActionContext();
  const { home, about, bookReader, bookPdf } = navbarContent;

  return (
    <Nav className={ className }>
      <NavGroup>
        <NavItem onClick={ () => setSelectedPage(HOME) }>
          { home }
        </NavItem>
        <NavItem onClick={ toggleShowAbout }>
          { about }
        </NavItem>
        <NavItem onClick={ () => setSelectedPage(READER) }>
          { bookReader }
        </NavItem>
        <NavItem>
          <a href={ bookPdf.url } download>
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
  }

  a {
    text-decoration-line: none;
    color: white;
  }
`;
