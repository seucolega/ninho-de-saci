import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { AboutProvider, PageSelectionProvider, ReaderSelectorProvider } from './providers';

import useToggle from '../hooks/useToggle';
import valuesFactory from './utils/valuesFactory';

const AppContextProvider = ({ children }) => {
  const [showAbout, toggleShowAbout] = useToggle(false);
  const [selectedPage, setSelectedPage] = useState(() => 'home');
  const [isSinglePage, setSinglePage] = useState(() => true);

  const aboutValues = valuesFactory(showAbout, toggleShowAbout);
  const pageSelectionValues = valuesFactory(selectedPage, setSelectedPage);
  const readerSelectorValues = valuesFactory(isSinglePage, setSinglePage);

  return (
    <AboutProvider { ...aboutValues }>
      <PageSelectionProvider {...pageSelectionValues}>
        <ReaderSelectorProvider {...readerSelectorValues}>
          { children }
        </ReaderSelectorProvider>
      </PageSelectionProvider>
    </AboutProvider>
  );
};

export default AppContextProvider;

AppContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
