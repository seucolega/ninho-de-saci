import React from 'react';
import styled from 'styled-components';
import ReactPlayer from 'react-player';

import { IoMdVolumeOff, IoMdVolumeHigh } from 'react-icons/io';
import {
  useSoundModeActionContext,
  useSoundModeDataContext
} from '../../context/contexts';
import audios from '../../assets/media/audio';

const SoundModeSelector = ({ className }) => {
  const activeSound = useSoundModeDataContext();
  const toggleActiveSound = useSoundModeActionContext();
  const params = {
    className,
    style: { color: 'white', fontSize: '50px' },
    onClick: () => toggleActiveSound(),
  };

  return (
    <>
      { activeSound ? <IoMdVolumeHigh {...params} /> : <IoMdVolumeOff {...params} /> }
      { activeSound && (
          <ReactPlayer
            url={ audios.audioAbertura }
            playing={ true }
            loop={ true }
            width={ 0 }
            height={ 0 }
            volume={ 0.3 }
          /> ) }
    </>
  );
};

export default styled(SoundModeSelector)`
  position: absolute;
  right: 50px;
  cursor: pointer;
  padding: 10px;
`;
