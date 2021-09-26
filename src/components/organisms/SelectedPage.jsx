import React from 'react';
import { usePageSelectionDataContext } from '../../context/contexts';
import Home from '../../pages/Home';
import Reader from '../../pages/Reader';
import { HOME, READER } from '../../utils/pageTypes';

const SelectedPage = () => {
  const selectedPage = usePageSelectionDataContext();
  switch (selectedPage) {
    case HOME:
      return <Home />;
    case READER:
      return <Reader />;
    default:
      return <div><h1>Page not found</h1></div>;
  }
}

export default SelectedPage;
