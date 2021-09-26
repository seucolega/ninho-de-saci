import React from 'react';
import styled from 'styled-components';
import { Header} from '../atoms';
import Navbar from '../molecules/Navbar';

const Menu = ({ className }) => (
  <Header className={ className }>
    <Navbar />
  </Header>
);

export default styled(Menu)``;
