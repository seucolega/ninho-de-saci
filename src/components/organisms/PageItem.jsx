import React, { useLayoutEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import ReactPlayer from 'react-player';

import styled, { css } from 'styled-components';
import { Image, Wrapper } from '../atoms';
import { useReaderProgressDataContext, useSoundModeDataContext } from '../../context/contexts';

const PageWrapper = styled(Wrapper)`
  position: relative;
  width: 100vw;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  ${Image} {
    position: absolute;

    ${(props) => props.isSinglePage
      ? css`height: 88vh;`
      : css`width: 50vw;`
    }

    :first-of-type {
      z-index: -3;
    }
    @media (max-width: 900px) {
      ${(props) => props.isSinglePage
        ? css`
            height: 88vh;
            width: 100vw;
            object-fit: contain;
          `
        : css`width: 50vw;`
      }
    }
  }
`;

const PageItem = ({ isSinglePage, page, isNext, index }) => {
  const isAtLastPage = useReaderProgressDataContext()[1];
  const activeSound = useSoundModeDataContext();
  const [shouldPlayAudio, setShouldPlayAudio] = useState(() => false);
  const wrapper = useRef(null);
  const text = useRef(null);
  const player = useRef(null);

  const [startTime, endTime] = page.audio.time;
  const isOnlyOneToPlay = index === 0;

  const stopOnEndTime = ({ playedSeconds }) => {
    if ( isSinglePage && playedSeconds >= endTime ) {
      setShouldPlayAudio(false);
    }
  };

  useLayoutEffect(() => {
    gsap.fromTo(
      text.current,
      {autoAlpha: 0 },
      { autoAlpha: 1, delay: 1, onComplete: () => { setShouldPlayAudio(activeSound); } },
    );
    if (activeSound && (isSinglePage || isOnlyOneToPlay)) player.current.seekTo(startTime);
  }, [activeSound]);
  
  return (
    <PageWrapper ref={ wrapper } isSinglePage={ isSinglePage || isAtLastPage }>
      { activeSound && isOnlyOneToPlay && (
          <ReactPlayer
            ref={ player }
            url={ page.audio.file }
            playing={ shouldPlayAudio }
            onProgress={ stopOnEndTime }
            progressInterval={ isSinglePage && 100 }
            width={ 0 }
            height={ 0 }
          />) }
      <Image src={ page.image }/>
      { isNext || <Image ref={ text } src={ page.texts }/> }
    </PageWrapper>
  );
};

export default PageItem;
