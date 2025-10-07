import { definePreset } from '@primeuix/themes';
import Material from '@primeuix/themes/material';

export default definePreset(Material, {
  semantic: {
    primary: {
      50: '#fff7ed',
      100: '#ffedd5',
      200: '#fed7aa',
      300: '#fdba74',
      400: '#fb923c',
      500: '#f97316',
      600: '#ea580c',
      700: '#c2410c',
      800: '#9a3412',
      900: '#7c2d12'
    },
    secondary: {
      500: '#1E3A8A' 
    },
    surface: {
      0: '#ffffff', 
      900: '#000000'
    },
    text: {
      primary: '#000000',
      secondary: '#ffffff'
    }
  }
});
