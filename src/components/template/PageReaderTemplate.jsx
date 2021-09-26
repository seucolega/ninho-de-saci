import React from 'react';
import styled, { css } from 'styled-components';
import { useReaderSelectorDataContext } from '../../context/contexts';
import usePageReader from '../../hooks/usePageReader';
import { getThemeColor } from '../../styles/utils';
import { Button, Container } from '../atoms';
import PageBoard from '../molecules/PageBoard';
import ReaderPageSelector from '../organisms/ReaderPageSelector';

const PageNavButton = styled(Button)`
  ${props => props.marginRight && css`margin-right: 1%;`}
`;

const PageReaderTemplate = ({ className }) => {
  const {
    pages,
    goToNextPage,
    goToPreviousPage,
    isAtLastPage,
    isAtFirstPage,
  } = usePageReader();

  const isSinglePage = useReaderSelectorDataContext();

  return (
    <Container className={ className }>
      <PageBoard pages={ pages } isSinglePage={ isSinglePage || isAtLastPage } />
      { isAtLastPage || <ReaderPageSelector /> }
      { isAtFirstPage
        || <PageNavButton onClick={ () => goToPreviousPage() }>{'<'}</PageNavButton> }
      <PageNavButton onClick={ () => goToNextPage() } marginRight={ isSinglePage }>
      {/* <PageNavButton onClick={ () => goToNextPage() }> */}
        { isAtLastPage ? '↻': '>' }
      </PageNavButton>
    </Container>
  );
};

export default styled(PageReaderTemplate)`
  position: relative;
  max-width: 100vw;
  height: 100%;

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

  ${ReaderPageSelector} {
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

  ${PageBoard} {
    width: 100%;
  }
`;
