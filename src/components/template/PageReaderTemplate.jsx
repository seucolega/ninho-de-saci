import gsap from 'gsap';
import React, { useLayoutEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { getThemeColor } from '../../styles/utils';
import { Button, Container } from '../atoms';
import PageNavButton from '../atoms/PageNavButton';
import PagesContainer from '../organisms/PagesContainer';

const PageReaderTemplate = ({ className }) => {
  const [browseDirection, setBrowseDirection] = useState(() => 0);
  const container = useRef();

  useLayoutEffect(
    () => {
      gsap.fromTo(
        container.current,
        { xPercent: 100 },
        { xPercent: 0, duration: 1 },
      );
    },
    [],
  );

  return (
    <Container className={ className }>
      <PagesContainer
        ref={ container }
        browseDirection={ browseDirection }
        setBrowseDirection={ setBrowseDirection }
      />
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

  @media (max-width: 900px) {
    width: 100vw;
    height: 100vh;
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
`;
