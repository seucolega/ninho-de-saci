import React, { useState } from 'react';
import styled from 'styled-components';
import { getThemeColor } from '../../styles/utils';
import { Button, Container } from '../atoms';
import PageNavButton from '../atoms/PageNavButton';
import PagesContainer from '../organisms/PagesContainer';
import ReaderModeSelector from '../organisms/ReaderModeSelector';

const PageReaderTemplate = ({ className }) => {
  const [browseDirection, setBrowseDirection] = useState(() => 0);

  return (
    <Container className={ className }>
      <PagesContainer browseDirection={ browseDirection } setBrowseDirection={ setBrowseDirection } />
      <ReaderModeSelector />
      <PageNavButton previous onClick={ () => setBrowseDirection(-1) } />
      <PageNavButton next onClick={ () => setBrowseDirection(1) } />
    </Container>
  );
};

export default styled(PageReaderTemplate)`
  position: relative;
  max-width: 100vw;
  height: 100%;

  ${PagesContainer} {
    display: flex;
    align-items: center;
  }

  ${Button} {
    width: 5%;
    position: absolute;
    bottom: 0;
    height: 100%;
    font-size: 2.5rem;
    background: none;
    border: 0;
    color: white;
    cursor: pointer;
    font-weight: 900;
    text-shadow: 3px 3px ${getThemeColor('secondary')};

    :last-child {
      right: 0;
    }
  }

  ${ReaderModeSelector} {
    background-color: ${getThemeColor('primary')};
    box-shadow: 5px 5px ${getThemeColor('secondary')};
    position: absolute;
    top: 0;
    right: 0;
    height: max(10vh, 45px);
    width: max(15vw, 145px);
    display: flex;
    justify-content: space-evenly;
    padding: 5px;
    z-index: 33;
  }
`;
