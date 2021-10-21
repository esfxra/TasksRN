import {TextStyle} from 'react-native';

const palette = {
  black: '#121212',
  white: '#FFFFFF',
};

export const theme = {
  colors: {
    foreground: palette.black,
    background: palette.white,
  },
  spacing: {
    xxs: 5,
    xs: 8,
    s: 10,
    m: 16,
    l: 24,
    xl: 28,
  },
  text: {
    heading: {
      fontSize: 24,
      fontWeight: 'bold',
    } as TextStyle,
    subHeading: {
      fontSize: 20,
      fontWeight: 'bold',
    } as TextStyle,
    body: {
      fontSize: 16,
      fontWeight: 'normal',
    } as TextStyle,
    bodyBold: {
      fontSize: 16,
      fontWeight: 'bold',
    } as TextStyle,
  },
};

export const lightTheme = {
  ...theme,
  colors: {
    foreground: palette.black,
    background: palette.white,
  },
};

export const darkTheme = {
  ...theme,
  colors: {
    foreground: palette.white,
    background: palette.black,
  },
};
