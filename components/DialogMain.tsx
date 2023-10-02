import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogActions from '@mui/material/DialogActions';
import { makeStyles } from '@mui/styles';
import 'tailwindcss/tailwind.css';

interface DialogMainProps {
    isOpen: boolean;
    handleClose: () => void;
    text1: string;
    text2: string;
  }

  const useStyles = makeStyles((theme) => ({
    customDialog: {
      backgroundColor: 'orange', // Cambia el color de fondo a "lightblue" o tu color personalizado
    },
  }));

const DialogMain: React.FC<DialogMainProps> = ({ isOpen, handleClose, text1, text2 }) => {
  
    const classes = useStyles();

    return (
        <Dialog
      open={isOpen}
      onClose={handleClose}
      classes={{ paper: classes.customDialog }} // Aplica las clases personalizadas al diálogo
    >
      <DialogTitle className=' text-2xl text-center font-bold'>{text1}</DialogTitle>
      <DialogContent>
        <DialogContentText className=' font-semibold text-center'>
          {text2}
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

export {DialogMain}