import { StrictMode, useEffect } from 'react';
import TagManager from 'react-gtm-module';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from 'lib/react-query';
import { ThemeProvider } from '@mui/material';
import { AppRoutes } from './routes/AppRoutes';
import { GlobalStyle } from './styles/global';
import { AppProvider } from 'context/AppContext';
import { SnackbarProvider } from 'context/SnackbarContext';
import { muiTheme } from 'styles/mui-theme';

function App() {
  useEffect(() => {
    const tagManagerArgs = {
      gtmId: 'G-KKGVJH0DRX',
    };

    TagManager.initialize(tagManagerArgs);
  }, []);

  return (
    <StrictMode>
      <GlobalStyle />
      <ThemeProvider theme={muiTheme}>
        <QueryClientProvider client={queryClient}>
          <SnackbarProvider>
            <GoogleOAuthProvider clientId={`${process.env.REACT_APP_CLIENT_ID}`}>
              <AppProvider>
                <AppRoutes />
              </AppProvider>
            </GoogleOAuthProvider>
          </SnackbarProvider>
        </QueryClientProvider>
      </ThemeProvider>
    </StrictMode>
  );
}

export default App;
