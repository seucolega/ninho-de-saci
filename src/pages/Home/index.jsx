import React from 'react';
import styled from 'styled-components';
import media from '../../assets/media';
import { Button, Main } from '../../components/atoms';
import { usePageSelectionActionContext } from '../../context/contexts';
import { getThemeColor } from '../../styles/utils';
import { homeContent } from '../../utils/data';
import { READER } from '../../utils/pageTypes';

const Home = ({ className }) => {
  const setSelectedPage = usePageSelectionActionContext();
  const { buttonText } = homeContent;

  return (
    <Main className={ className }>
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
