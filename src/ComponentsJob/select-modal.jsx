import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import { createTheme, ThemeProvider } from '@mui/material';
import  Back  from '../assets/svg/Arrow - Left.svg';
import  Add  from '../assets/svg/adds.svg';

export default function SelectModal({ open, closeModal, children, title, experience }) {
    const theme = createTheme({
        components: {
            MuiBackdrop: {
                styleOverrides: {
                    root: {
                        background: 'rgba(0, 0, 0, 0.50)'
                    },
                },
            },
            MuiPaper: {
                styleOverrides: {
                root: {
                    backgroundColor: '#00141B',
                    borderRadius:'19.2px',
                    color:'#FFF',
                    width: experience ? '713px' : 'auto',
                    height: experience ? '703px':'auto' ,
                    padding: '24px',
                    boxShadow:'none'
                },
                },
            },
            MuiDialogContent: {
                styleOverrides: {
                    root: {
                        padding: '0',
                        display: 'flex',
                        flexDirection: 'column',
                    },
                },
            },
        },
    });
    
    return (
        <ThemeProvider theme={theme}>
            <Dialog
                open={open}
                keepMounted
                onClose={closeModal}
                aria-describedby="alert-dialog-slide-description"
            >
                <DialogContent>
                    <div className={`${experience ? 'justify-between': 'gap-[10.8px]'} flex phone:mb-[38.4px] mb-8 items-center`}>
                        {!experience && (
                            <Back 
                                className="cursor-pointer" 
                                onClick={() => {
                                    closeModal && closeModal();
                                }}
                            />
                        )}
                        <p className={`${experience && 'capitalize'} phone:text-[24.3px] text-[20.25px] font-medium text-white`}>{title}</p>
                        {experience && (
                            <Add 
                                className="cursor-pointer" 
                                onClick={() => {
                                    closeModal && closeModal();
                                }}
                            />
                        )}
                    </div>
                    {children}
                </DialogContent>
            </Dialog>
        </ThemeProvider>
    );
}