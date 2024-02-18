import { extendTheme, ComponentStyleConfig, Button } from '@chakra-ui/react';

export const AppColors = {
  primary: '#2E3FFF',
  secondary: '#06F9B4',
  accent: '#EEEEEE',
  appBackground: '#333333',
};

export const buttonStyleConfig: ComponentStyleConfig = {
  baseStyle: {
    fontWeight: '500',
    color: AppColors.primary,
    rounded: 'md',
    border: 'none',
    cursor: 'pointer',
  },
  sizes: {
    xs: {
      fontSize: '12px',
      px: 2,
      py: 1,
    },
    sm: {
      fontSize: '16px',
    },
    md: {
      fontSize: '18px',
      px: 8,
      py: 4,
    },
    lg: {
      fontSize: '20px',
    },
    xl: {
      fontSize: '26px',
      px: 8,
      py: 4,
    },
    xxl: {
      fontSize: '36px',
      px: 8,
      py: 4,
    },
  },
  defaultProps: {
    size: 'md',
    variant: 'solid',
  },
};

export const theme = extendTheme({
  components: { Button: buttonStyleConfig },
});

