import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import { createTheme, ThemeProvider } from '@mui/material';

export default function Modal({ open, setOpen, width, children }) {
    const theme = createTheme({
        components: {
            MuiBackdrop: {
                styleOverrides: {
                    root: {
                        background: 'linear-gradient(180deg, rgba(0, 20, 27, 0.07) -53.04%, rgba(0, 20, 27, 0.07) 100%)',
                        borderRadius:'24px',
                        backdropFilter:'blur(13.5px)'
                    },
                },
            },
            MuiDialogcontainer: {
                styleOverrides: {
                    root: {
                        alignItems: 'end'
                    },
                },
            },
            MuiPaper: {
                styleOverrides: {
                root: {
                    backgroundColor: 'inherit',
                    borderRadius:'24px',
                    color:'#FFF',
                    width: width ? width :'416px',
                    boxShadow:'none'
                },
                },
            },
            MuiDialogContent: {
                styleOverrides: {
                root: {
                    padding: '24px'
                },
                },
            },
        },
    });
    
    const handleClose = () => {
        setOpen(false);
    };

    return (
        <ThemeProvider theme={theme}>
            <Dialog
                open={open}
                keepMounted
                onClose={handleClose}
                aria-describedby="alert-dialog-slide-description"
            >
                <DialogContent>
                    {children}
                </DialogContent>
            </Dialog>
        </ThemeProvider>
    );
}