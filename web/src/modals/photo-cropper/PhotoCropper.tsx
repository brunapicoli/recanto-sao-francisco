import { createRef, useState } from 'react';
import { ReactCropperElement } from 'react-cropper';
import { Backdrop, Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material';
import { Button } from 'components/atoms/button/Button';
import 'cropperjs/dist/cropper.css';
import { CropperContainer } from './style';

type PhotoCropperProps = {
  open: boolean;
  photo: File;
  onClose: () => void;
  onCrop: (croppedPhoto: File) => void;
};

export const PhotoCropper = ({ open, photo, onClose, onCrop }: PhotoCropperProps) => {
  const cropperRef = createRef<ReactCropperElement>();
  const [isLoading, setIsLoading] = useState(false);

  const cropperContent = (
    <CropperContainer
      ref={cropperRef}
      src={URL.createObjectURL(photo)}
      aspectRatio={7.41 / 10}
      viewMode={1}
      autoCropArea={1}
      background={false}
      guides={false}
      modal={false}
      center={false}
      highlight={false}
      checkOrientation={false}
      cropBoxMovable={false}
      cropBoxResizable={false}
      dragMode="move"
    />
  );

  const handleConfirm = async () => {
    setIsLoading(true);
    if (typeof cropperRef.current?.cropper !== 'undefined') {
      const croppedPhoto = cropperRef.current?.cropper.getCroppedCanvas().toDataURL(photo.type);
      await fetch(croppedPhoto)
        .then((res) => res.blob())
        .then(async (blob) => {
          const file = new File([blob], photo.name, {
            ...photo,
          });
          onCrop(file);
        });
    }
    onClose();
    setIsLoading(false);
  };

  return (
    <Dialog open={open}>
      <DialogTitle>Ajustar foto</DialogTitle>
      <DialogContent>{cropperContent}</DialogContent>
      <DialogActions>
        <Button variant="secondary" onClick={onClose}>
          Cancelar
        </Button>
        <Button isLoading={isLoading} onClick={handleConfirm}>
          Confirmar
        </Button>
      </DialogActions>
      <Backdrop open={isLoading} />
    </Dialog>
  );
};
