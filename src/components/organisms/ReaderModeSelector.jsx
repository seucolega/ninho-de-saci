import React from 'react';
import styled from 'styled-components';
import media from '../../assets/media';
import { useReaderModeActionContext, useReaderModeDataContext } from '../../context/contexts';
import { Container } from '../atoms';
import ReaderModeSelectorIcon from '../molecules/ReaderModeSelectorIcon';

const ReaderModeSelector = ({ className }) => {
  const setSinglePage = useReaderModeActionContext();
  const [isSinglePage] = useReaderModeDataContext();

  return (
    <Container className={ className }>
      <ReaderModeSelectorIcon
        onClick={ () => setSinglePage(true) }
        iconObject={ media.icons.singlePage }
        active={ isSinglePage }
      />
      <ReaderModeSelectorIcon
        onClick={ () => setSinglePage(false) }
        iconObject={ media.icons.doublePage }
        active={ !isSinglePage }
      />
    </Container>
  );
};

export default styled(ReaderModeSelector)``;
