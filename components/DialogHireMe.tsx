import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogActions from '@mui/material/DialogActions';
import { makeStyles } from '@mui/styles';
import 'tailwindcss/tailwind.css';

interface DialogHireMeProps {
  isOpen: boolean;
  handleClose: () => void;
  text1: string;
  text2: string;
  textbutton: string;
  emailRecipient: string; // Nuevo prop para el destinatario del correo
}

const useStyles = makeStyles((theme) => ({
  customDialog: {
    backgroundColor: 'orange',
  },
}));

const DialogHireMe: React.FC<DialogHireMeProps> = ({ isOpen, handleClose, text1, text2, textbutton, emailRecipient }) => {
  const classes = useStyles();

  const handleSendEmail = () => {
    window.location.href = `mailto:${emailRecipient}?subject=Oferta de trabajo`;
  };

  return (
    <Dialog
      open={isOpen}
      onClose={handleClose}
      classes={{ paper: classes.customDialog }}
    >
      <DialogTitle className='text-2xl text-center font-bold'>{text1}</DialogTitle>
      <DialogContent>
        <DialogContentText className='font-semibold text-center'>
          {text2}
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleSendEmail} color="secondary">
          {textbutton}
        </Button>
        <Button onClick={handleClose} color="primary">
          Cerrar
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export { DialogHireMe };
