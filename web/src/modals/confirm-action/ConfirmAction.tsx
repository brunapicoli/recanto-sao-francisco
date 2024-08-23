import { Backdrop, CircularProgress, Dialog, DialogActions, DialogContent, DialogContentText } from '@mui/material';
import { DialogProps } from '@mui/material/Dialog';
import { Button } from 'components/atoms/button/Button';

type ConfirmActionProps = DialogProps & {
  contentText: string;
  isLoading?: boolean;
  onConfirm: () => void;
  onClose: () => void;
};

export const ConfirmAction = ({ contentText, isLoading = false, open, onClose, onConfirm }: ConfirmActionProps) => {
  return (
    <Dialog open={open} onClose={onClose}>
      <DialogContent>
        <DialogContentText>{contentText}</DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button variant="secondary" onClick={onClose}>
          Cancelar
        </Button>
        <Button variant="navbar" onClick={onConfirm}>
          {isLoading ? <CircularProgress color="inherit" size="1.8rem" /> : 'Confirmar'}
        </Button>
      </DialogActions>
      <Backdrop open={isLoading} />
    </Dialog>
  );
};
