import React, { useLayoutEffect, useRef } from 'react';
import styled from 'styled-components';
import { useReaderModeDataContext } from '../../context/contexts';
import useCurrentPage from '../../hooks/useCurrentPage';
import { getPages } from '../../utils/pages';
import setAnimation from '../../utils/setAnimation';
import { Container } from '../atoms';
import PagesFrame from './PagesFrame';

const InnerContainer = styled(Container)`
  display: flex;
  width: 400vw;
  height: 100%;
`;

const PagesContainer = ({ className, browseDirection, setBrowseDirection }, ref) => {
  const [isSinglePage, pagesAmount] = useReaderModeDataContext();
  const [currentIndex, setNextIndex] = useCurrentPage(browseDirection);
  
  const pages = getPages({ index: currentIndex, isSinglePage });
  const nextPages = getPages({
    index: currentIndex + pagesAmount * browseDirection,
    isSinglePage,
  });

  const currentPage = useRef(null);
  const nextPage = useRef(null);

  useLayoutEffect(
    () => {
      const animationParams = {
        current: currentPage.current,
        next: nextPage.current,
        direction: browseDirection,
        onComplete() {
          setBrowseDirection(0);
          setNextIndex();
        },
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
    <InnerContainer ref={ ref } className={ className }>
      <PagesFrame pages={ pages } ref={ currentPage } />
      { !!browseDirection && <PagesFrame pages={ nextPages } ref={ nextPage } isNext /> }
    </InnerContainer>
  );
};

export default React.forwardRef(PagesContainer);
