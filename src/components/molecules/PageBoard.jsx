import React from 'react';
import styled, { css } from 'styled-components';
import { Container, Image, Wrapper } from '../atoms';

const PageBoard = ({ className, pages }) => {
  return (
    <Container className={ className }>
      { pages.map((page) => (
          <Wrapper>
            <Image src={ page.image }/>
            <Image src={ page.texts }/>
          </Wrapper>
      )) }
    </Container>
  );
};

export default styled(PageBoard)`
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;

  ${Wrapper} {
    position: relative;
    width: 100vw;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  ${Image} {
    position: absolute;

    ${(props) => props.isSinglePage
      ? css`height:88vh;`
      : css`width: 50vw;`
    }

    :first-of-type {
      z-index: -3;
    }
  }
`;
