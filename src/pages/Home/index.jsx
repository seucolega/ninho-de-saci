import gsap from 'gsap/all';
import React, { useLayoutEffect, useRef } from 'react';
import ReactPlayer from 'react-player';
import styled from 'styled-components';
import media from '../../assets/media';
import audios from '../../assets/media/audio';
import { Button, Main } from '../../components/atoms';
import {
  usePageSelectionActionContext,
  useSoundModeDataContext
} from '../../context/contexts';
import { getThemeColor } from '../../styles/utils';
import { homeContent } from '../../utils/data';
import { READER } from '../../utils/pageTypes';

const Home = ({ className }) => {
  const setSelectedPage = usePageSelectionActionContext();
  const activeSound = useSoundModeDataContext();

  const { buttonText } = homeContent;
  const main = useRef(null);

  useLayoutEffect(
    () => {;
      gsap.fromTo(
        main.current,
        { autoAlpha: 0, scale: 1.2 },
        { autoAlpha: 1, duration: 3, scale: 1 },
      );
    },
    [],
  );

  return (
    <Main ref={ main } className={ className }>
      { activeSound && <ReactPlayer url={ audios.audioAbertura } playing={ true }/> }
      <Button onClick={ () => setSelectedPage(READER) }>
        { buttonText }
      </Button>
    </Main>
  );
};

export default styled(Home)`
  background: url(${media.cover.text}), url(${media.cover.image});
  background-color: ${getThemeColor('secondary')};
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  display: grid;
  height: 100vh;
  padding: 0 0 7% 0;
  place-items: end center;
  position: absolute;
  width: 100%;
  z-index: -1;

  ${Button} {
    background-color: ${getThemeColor('primary')};
    border: 0;
    box-shadow: 4px 4px ${getThemeColor('secondary')};
    color: white;
    cursor: pointer;
    font-size: 1.8rem;
    padding: 2rem;
    text-transform: uppercase;
    height: 2.5rem;
    display: flex;
    place-items: center;

    :active {
      background-color: ${getThemeColor('primaryTransparent')};
      box-shadow: 2px 2px ${getThemeColor('secondary')};
      transform: translateY(3px) translateX(3px);
    }
  }
`;
