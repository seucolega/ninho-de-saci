import React from 'react';
import styled from 'styled-components';
import { Header} from '../atoms';
import Navbar from '../molecules/Navbar';
import SoundModeSelector from '../molecules/SoundModeSelector';

const Menu = ({ className }) => (
  <Header className={ className }>
    <Navbar />
    <SoundModeSelector />
  </Header>
);

export default styled(Menu)`
  display: flex;
  align-items: center;
  position: relative;

  ${SoundModeSelector} {
    position: absolute;
    right: 100px;
  }
`;
