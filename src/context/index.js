import React, { useMemo, useState } from 'react';
import PropTypes from 'prop-types';

import {
  AboutProvider,
  MenuProvider,
  PageSelectionProvider,
  ReaderModeProvider,
  ReaderProgressProvider,
  SoundModeProvider,
} from './providers';

import useToggle from '../hooks/useToggle';
import valuesFactory from './utils/valuesFactory';
import useMediaQuery from '../hooks/useMediaQuery';

const AppContextProvider = ({ children }) => {
  const [showAbout, toggleShowAbout] = useToggle(false);
  const [selectedPage, setSelectedPage] = useState(() => 'home');
  const [isSinglePage, setSinglePage] = useState(() => true);
  const [[isAtFirstPage, isAtLastPage], setReaderProgress] = useState(() => [true, false]);
  const pagesAmount = useMemo(() => isSinglePage ? 1 : 2, [isSinglePage]);
  const [activeSound, toggleActiveSound] = useToggle(false);
  const [showMenu, toggleShowMenu] = useToggle(useMediaQuery());

  const aboutValues = useMemo(
    () => valuesFactory(showAbout, toggleShowAbout),
    [showAbout],
  );
  const pageSelectionValues = useMemo(
    () => valuesFactory(selectedPage, setSelectedPage),
    [selectedPage],
  );
  const readerModeValues = useMemo(
    () => valuesFactory([isSinglePage, pagesAmount], setSinglePage),
    [isSinglePage],
  );
  const readerProgressValues = useMemo(
    () => valuesFactory([isAtFirstPage, isAtLastPage], setReaderProgress),
    [isAtFirstPage, isAtLastPage],
  );
  const soundModeValues = useMemo(
    () => valuesFactory(activeSound, toggleActiveSound),
    [activeSound],
  );
  const menuValues = useMemo(
    () => valuesFactory(showMenu, toggleShowMenu),
    [showMenu],
  );

  return (
    <AboutProvider { ...aboutValues }>
      <PageSelectionProvider {...pageSelectionValues}>
        <ReaderModeProvider {...readerModeValues}>
          <ReaderProgressProvider {...readerProgressValues}>
            <SoundModeProvider {...soundModeValues}>
              <MenuProvider {...menuValues}>
                { children }
              </MenuProvider>
            </SoundModeProvider>
          </ReaderProgressProvider>
        </ReaderModeProvider>
      </PageSelectionProvider>
    </AboutProvider>
  );
};

export default AppContextProvider;

AppContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
