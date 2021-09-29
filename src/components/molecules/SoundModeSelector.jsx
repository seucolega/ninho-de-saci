import React from 'react';
import styled from 'styled-components';
import { IoMdVolumeOff, IoMdVolumeHigh } from 'react-icons/io';
import {
  useSoundModeActionContext,
  useSoundModeDataContext
} from '../../context/contexts';

const SoundModeSelector = ({ className }) => {
  const activeSound = useSoundModeDataContext();
  const toggleActiveSound = useSoundModeActionContext();
  const params = {
    className,
    style: { color: 'white', fontSize: '50px' },
    onClick: () => toggleActiveSound(),
  };

  return activeSound ? <IoMdVolumeHigh {...params} /> : <IoMdVolumeOff {...params} />;
};

export default styled(SoundModeSelector)`
  position: absolute;
  right: 50px;
  cursor: pointer;
  padding: 10px;
`;
