import React from 'react'
import { Button } from '@mui/material'
import { createTheme, ThemeProvider } from '@mui/material/styles';

// const theme = createTheme({
//     palette: {
//       primary: '#fff',
//     },
//   });

export default function Buttons(
    { 
        text, 
        hoverText, 
        type, 
        resWidth, 
        bgColor, 
        functions, 
        icons2, 
        hoverColor, 
        color, 
        border, 
        padding, 
        icons, 
        width, 
        weight, 
        size, 
        frontIcon,
        smpadding,
        radius,
        gap,
        height,
        boxShadow
    }
) {
    return (
        <Button 
            type={type}
            sx={
                {
                    display: 'flex',
                    gap: gap ? gap :'16px',
                    padding: padding ? padding : '9px 17px',
                    borderRadius: radius ? radius : '8px',
                    textTransform: 'capitalize',
                    background: bgColor,
                    color: color,
                    fontWeight: weight ? weight : 600,
                    fontSize: size ? size : '16px',
                    fontFamily: 'inherit',
                    width: width,
                    height: height,
                    border: border,
                    transition: 'all 0.3s ease-in-out',
                    boxShadow: boxShadow,
                    "@media (max-width:800px)": {
                        padding: smpadding
                    },
                    "@media (max-width:600px)": {
                        width: resWidth
                    },
                    "&:hover": {
                      backgroundColor: hoverColor,
                      color: hoverText,
                    }
                }
            }
            onClick={functions}
        >
            {icons}
            {text}
            {frontIcon}
            {icons2}
        </Button>
    )
}
