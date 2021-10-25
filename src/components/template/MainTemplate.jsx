import React from 'react';
import styled from 'styled-components';
import { useAboutDataContext, useMenuDataContext } from '../../context/contexts';
import About from '../../pages/About';
import { getThemeColor } from '../../styles/utils';
import { Container } from '../atoms';
import Menu from '../organisms/Menu';
import SelectedPage from '../organisms/SelectedPage';

const MainTemplate = ({ className }) => {
  const showAbout = useAboutDataContext();
  const showMenu = useMenuDataContext();
  
  return (
    <Container className={ className }>
      <Menu show={ showMenu } />
      <>
        <SelectedPage />
        { showAbout && <About /> }
      </>
    </Container>
  );
};

export default styled(MainTemplate)`
  display: grid;
  grid-template-rows: 12vh 88vh;
  
  ${Menu} {
    background-color: ${getThemeColor('primaryTransparent')};
    width: 100vw;
    z-index: 2;
  }

  @media (max-width: 900px) {
    /* display: inline; */
    width: 100vw;
    height: 100vh;

    ${Menu} {
      height: 100vh;
      z-index: 99;
    }
  }
`;
