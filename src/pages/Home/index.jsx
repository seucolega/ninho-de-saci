import React, { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap/all';
import styled from 'styled-components';

import { Button, Main } from '../../components/atoms';

import { getThemeColor } from '../../styles/utils';
import media from '../../assets/media';

const Home = ({ className }) => {
  const main = useRef(null);

  useLayoutEffect(
    () => {
      gsap.fromTo(
        main.current,
        { autoAlpha: 0, scale: 1.2 },
        { autoAlpha: 1, duration: 2, scale: 1 },
      );
    },
    [],
  );

  return <Main ref={ main } className={ className }/>;
};

export default styled(Home)`
  background: url(${media.cover.text}), url(${media.cover.image});
  background-color: ${getThemeColor('secondary')};
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  display: grid;
  height: 100%;
  padding: 0 0 7% 0;
  place-items: end center;
  position: absolute;
  width: 100%;

  ${Button} {
    background-color: ${getThemeColor('primary')};
    border: 0;
    box-shadow: 4px 4px ${getThemeColor('secondary')};
    color: white;
    cursor: pointer;
    display: flex;
    font-size: 1.8rem;
    height: 2.5rem;
    padding: 2rem;
    place-items: center;
    text-transform: uppercase;
    z-index: 2;

    :active {
      background-color: ${getThemeColor('primaryTransparent')};
      box-shadow: 2px 2px ${getThemeColor('secondary')};
      transform: translateY(3px) translateX(3px);
    }
  }
`;
