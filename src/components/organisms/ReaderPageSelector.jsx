import React from 'react';
import styled from 'styled-components';
import media from '../../assets/media';
import { useReaderSelectorActionContext, useReaderSelectorDataContext } from '../../context/contexts';
import { Container } from '../atoms';
import ReaderPageSelectorIcon from '../molecules/ReaderPageSelectorIcon';

const ReaderPageSelector = ({ className }) => {
  const isSinglePage = useReaderSelectorDataContext();
  const setSinglePage = useReaderSelectorActionContext();

  return (
    <Container className={ className }>
      <ReaderPageSelectorIcon
        onClick={ () => setSinglePage(true) }
        iconObject={ media.icons.singlePage }
        active={ isSinglePage }
      />
      <ReaderPageSelectorIcon
        onClick={ () => setSinglePage(false) }
        iconObject={ media.icons.doublePage }
        active={ !isSinglePage }
      />
    </Container>
  );
};

export default styled(ReaderPageSelector)``;
