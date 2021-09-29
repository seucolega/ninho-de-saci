import React, { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import styled, { css } from 'styled-components';
import { Image, Wrapper } from '../atoms';
import { useReaderProgressDataContext } from '../../context/contexts';

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
  }
`;

const PageItem = ({ isSinglePage, page, isNext }) => {
  const isAtLastPage = useReaderProgressDataContext()[1];
  const wrapper = useRef(null);
  const text = useRef(null);

  useLayoutEffect(() => {
    gsap.fromTo(text.current, { autoAlpha: 0 }, { autoAlpha: 1, delay: 1 });
  }, []);
  
  return (
    <PageWrapper ref={ wrapper } isSinglePage={ isSinglePage || isAtLastPage }>
      <Image src={ page.image }/>
      { isNext || <Image ref={ text } src={ page.texts }/> }
    </PageWrapper>
  );
};

export default PageItem;
