import { Backdrop, Dialog, DialogActions, DialogContent, DialogContentText } from '@mui/material';
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
        <Button isLoading={isLoading} variant="navbar" onClick={onConfirm}>
          Confirmar
        </Button>
      </DialogActions>
      <Backdrop open={isLoading} />
    </Dialog>
  );
};
