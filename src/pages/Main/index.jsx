import React from 'react';
import styled from 'styled-components';
import MenuIcon from '../../components/atoms/MenuIcon';
import MainTemplate from '../../components/template/MainTemplate';

const Container = styled.div``;

const Main = ({ className }) => (
  <Container className={ className }>
    <MainTemplate />
    <MenuIcon />
  </Container>
);

export default Main;
