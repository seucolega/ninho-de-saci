import React, { useLayoutEffect, useRef } from 'react';
import styled from 'styled-components';
import { useReaderModeDataContext } from '../../context/contexts';
import useCurrentPage from '../../hooks/useCurrentPage';
import { getPages } from '../../utils/pages';
import setAnimation from '../../utils/setAnimation';
import { Container } from '../atoms';
import PagesFrame from './PagesFrame';

const PagesContainer = ({ className, browseDirection, setBrowseDirection }) => {
  const [isSinglePage, pagesAmount] = useReaderModeDataContext();
  const [currentIndex, setNextIndex] = useCurrentPage(browseDirection);
  
  const pages = getPages({ index: currentIndex, isSinglePage });
  const nextPages = getPages({
    index: currentIndex + pagesAmount * browseDirection,
    isSinglePage,
  });

  const currentPage = useRef(null);
  const nextPage = useRef(null);

  const onComplete = () => {
    setBrowseDirection(0);
    setNextIndex();
  };

  useLayoutEffect(
    () => {
      const animationParams = {
        current: currentPage.current,
        next: nextPage.current,
        direction: browseDirection,
        onComplete,
      };

      const tl = setAnimation(animationParams);

      if (!!browseDirection) {
        tl.play();
      } else {
        tl.kill();
      }
    },
    [browseDirection],
  );

  return (
    <Container className={ className }>
      <PagesFrame pages={ pages } ref={ currentPage } />
      { !!browseDirection && <PagesFrame pages={ nextPages } ref={ nextPage } isNext /> }
    </Container>
  );
};

export default styled(PagesContainer)`
  display: flex;
  width: 400vw;
  height: 100%;
`;
