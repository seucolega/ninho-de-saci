import React from 'react';
import styled from 'styled-components';
import generateKey from '../../utils/uniqueKeyGenerator';
import { Container } from '../atoms';
import PageItem from './PageItem';
import { useReaderModeDataContext } from '../../context/contexts';

const PageContainer = styled(Container)`
  width: 100vw;
  display: flex;
  height: 100%;
`;

const PageFrame = ({ pages, isNext }, ref) => {
  const [isSinglePage] = useReaderModeDataContext();

  return (
    <PageContainer ref={ ref }>
      { pages.map((page, index) => (
        <PageItem
          key={ generateKey() }
          index={ index }
          isSinglePage={ isSinglePage }
          page={ page }
          isNext={ isNext }
        />)) }
    </PageContainer>
  );
};

export default React.forwardRef(PageFrame);
