import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogActions from '@mui/material/DialogActions';

interface DialogHireMeProps {
    isOpen: boolean;
    handleClose: () => void;
  }


const DialogHireMe: React.FC<DialogHireMeProps> = ({ isOpen, handleClose }) => {
  return (
    <Dialog open={isOpen} onClose={handleClose}>
      <DialogTitle className=' text-2xl'>Tomó la desición correcta!</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Gracias por depositarme su confianza, sientase libre de contactarme por cualquier medio que disponga.
          Espero que podamos lograr cosas grandiosas juntos. No se arrepentirá.
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="primary">
          Cerrar
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export {DialogHireMe}