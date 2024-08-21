import { StrictMode } from 'react';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { ThemeProvider } from '@mui/material';
import { AppRoutes } from './routes/AppRoutes';
import { GlobalStyle } from './styles/global';
import { AppContextProvider } from 'context/AppContext';
import { muiTheme } from 'styles/mui-theme';

function App() {
  return (
    <StrictMode>
      <GlobalStyle />
      <ThemeProvider theme={muiTheme}>
        <GoogleOAuthProvider clientId={`${process.env.REACT_APP_CLIENT_ID}`}>
          <AppContextProvider>
            <AppRoutes />
          </AppContextProvider>
        </GoogleOAuthProvider>
      </ThemeProvider>
    </StrictMode>
  );
}

export default App;
