import { Alert, Snackbar } from '@mui/material';
import React, { createContext, useState } from 'react';

interface SnackbarOptions {
  message: string;
  error?: boolean;
}

interface SnackbarContextProps {
  openSnackbar: (snackbarOptions: SnackbarOptions) => void;
}

interface SnackbarProviderProps {
  children: React.ReactNode;
}

const SnackbarContext = createContext({} as SnackbarContextProps);

export const useSnackbarContext = () => React.useContext(SnackbarContext);

export const SnackbarProvider = ({ children }: SnackbarProviderProps) => {
  const [open, setOpen] = useState(false);
  const [snackbarProps, setSnackbarProps] = useState({} as SnackbarOptions);

  const openSnackbar = (snackbarOptions: SnackbarOptions) => {
    setSnackbarProps(snackbarOptions);
    setOpen(true);
  };

  return (
    <SnackbarContext.Provider
      value={{
        openSnackbar,
      }}
    >
      {children}
      <Snackbar
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
        autoHideDuration={4000}
        open={open}
        onClose={() => setOpen(false)}
      >
        <Alert severity={snackbarProps.error ? 'error' : 'success'}>{snackbarProps.message}</Alert>
      </Snackbar>
    </SnackbarContext.Provider>
  );
};
