const palette = {
  black: '#121212',
  white: '#FFFFFF',
};

export const theme = {
  spacing: {
    xxs: 5,
    xs: 8,
    s: 10,
    m: 16,
    l: 24,
  },
  text: {
    heading: {
      fontSize: 24,
      fontWeight: 'bold',
    },
    subHeading: {
      fontSize: 16,
      fontWeight: 'bold',
    },
    body: {
      fontSize: 16,
      fontWeight: 'normal',
    },
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
