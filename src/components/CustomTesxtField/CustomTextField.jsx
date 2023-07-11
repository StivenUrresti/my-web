import * as React from 'react';
import TextField from '@mui/material/TextField';
import { outlinedInputClasses } from '@mui/material/OutlinedInput';
import { createTheme, ThemeProvider, useTheme } from '@mui/material/styles';

const customTheme = (outerTheme) =>
  createTheme({
    palette: {
      mode: outerTheme.palette.mode,
    },
    components: {
      MuiTextField: {
        color:'red',
        styleOverrides: {
          root: {
            color:'#ffffff',
            '--TextField-brandBorderColor': '#ffffff',
            '--TextField-brandBorderHoverColor': '#06F5FE',
            '--TextField-brandBorderFocusedColor': '#ffffff',
            '--TextField-color': '#ffffff',
            '& label.Mui-focused': {
              color: 'var(--TextField-brandBorderFocusedColor)',
            },
            '& .css-24rejj-MuiInputBase-input-MuiOutlinedInput-input': {
              color: 'var(--TextField-brandBorderFocusedColor)',
            },
            '& .css-14s5rfu-MuiFormLabel-root-MuiInputLabel-root': {
              color: 'var(--TextField-brandBorderColor)',
            },
          },
        },
      },
      MuiOutlinedInput: {
        styleOverrides: {
          notchedOutline: {
            borderColor: 'var(--TextField-brandBorderColor)',
          },
          root: {
            [`&:hover .${outlinedInputClasses.notchedOutline}`]: {
              borderColor: 'var(--TextField-brandBorderHoverColor)',
            },
            [`&.Mui-focused .${outlinedInputClasses.notchedOutline}`]: {
              borderColor: 'var(--TextField-brandBorderFocusedColor)',
            },
          },
        },
      },
    },
  });

export default function CustomTextField(props) {
const {title,customStyle} = props
  const outerTheme = useTheme();

  return (
      <ThemeProvider theme={customTheme(outerTheme)}>
        <TextField label={title} {...props} style={customStyle}  />
      </ThemeProvider>
  );
}