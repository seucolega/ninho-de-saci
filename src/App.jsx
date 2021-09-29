import React, { useEffect } from 'react';
import styled, { css } from 'styled-components';
import BounceLoader from "react-spinners/BounceLoader";

import media from './assets/media';
import AppContextProvider from './context';
import useToggle from './hooks/useToggle';
import Main from './pages/Main';
import cacheFiles from './utils/cacheFiles';
import { Container } from './components/atoms';

const loaderCss = css`
  display: grid;
  place-items: center;

  ::after {
    content: 'Carregando...';
    color: white;
    font-size: 1.5rem;
    z-index: 3;
  }
`;

const AppContainer = styled(Container)`
  width: 100vw;
  height: 100vh;
  display: grid;
  place-items: center;
`;

const App = () => {
  const [isLoading, toggleIsLoading] = useToggle(true);

  useEffect(
    () => {
      const imagesSrc = Object.values(media.cover)
        .concat(...media.pages.map(({ image, texts }) => [image, texts])).filter(i => i);
      cacheFiles(imagesSrc, toggleIsLoading);
    },
    [],
  );

  return (
    <AppContextProvider>
      <AppContainer>
        { isLoading
           ? <BounceLoader css={ loaderCss } size={150} color="rgb(59, 52, 94)" />
           : <Main /> }
      </AppContainer>
    </AppContextProvider>
  );
}

export default App;
