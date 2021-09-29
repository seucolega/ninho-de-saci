import React from 'react';
import styled from 'styled-components';
import { useAboutDataContext } from '../../context/contexts';
import About from '../../pages/About';
import { getThemeColor } from '../../styles/utils';
import { Container } from '../atoms';
import Menu from '../organisms/Menu';
import SelectedPage from '../organisms/SelectedPage';

const MainTemplate = ({ className }) => {
  const showAbout = useAboutDataContext();
  
  return (
    <Container className={ className }>
      <Menu />
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
`;
