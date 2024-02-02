import { CircularProgress } from "@mui/material";
import React from "react";
import { createTheme, ThemeProvider } from '@mui/material/styles';
const theme = createTheme({
    palette: {
      primary: {
        main:'#FFFFFF'
      },
    },
  });

export default function MySpinner(){
    return (
        <ThemeProvider theme={theme}>
            <CircularProgress color="primary" />    
        </ThemeProvider>
    )
}