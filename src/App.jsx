import React from 'react';
import AppContextProvider from './context';
import Main from './pages/Main';

const App = () => {
  return (
    <AppContextProvider>
      <Main />
    </AppContextProvider>
  );
}

export default App;
