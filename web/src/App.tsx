import React from 'react';
import { AppRoutes } from './routes/AppRoutes';
import { GlobalStyle } from './styles/global';
import { AppContextProvider } from 'context/AppContext';

function App() {
  return (
    <React.StrictMode>
      <GlobalStyle />
      <AppContextProvider>
        <AppRoutes />
      </AppContextProvider>
    </React.StrictMode>
  );
}

export default App;
