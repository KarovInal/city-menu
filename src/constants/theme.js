export const colors = {
  primaryColor: '#ec1c24',
  secondaryColor: '#231f20',
  primaryTextColor: '#1a1a1a',
  secondaryTextColor: '#616161',
  disabledTextColor: '#949494',
  borderColor: '#e6e6e6',
  primaryBackgroundColor: '#fff',
  secondaryBackgroundColor: '#231f20',
};

export const logo = 'https://citymenu.s3.eu-north-1.amazonaws.com/KeksFamily/%D0%9B%D0%BE%D0%B3%D0%BE%D1%82%D0%B8%D0%BF+%D0%BA%D0%B5%D0%BA%D1%81.png';

export const createThemeConfig = (mode) => {
  const theme = {
    overrides: {
      MuiButton: {
        root: {
          borderRadius: '8px',
        },
      },
      MuiAppBar: {
        root: {
          boxShadow: 'none'
        },
      },
      MuiToolbar: {
        root: {
          color: colors.primaryTextColor,
          backgroundColor: colors.primaryBackgroundColor,
        },
      }
    },
    palette: {
      primary: {
        main: colors.primaryColor
      },
      secondary: {
        main: colors.secondaryColor
      }
    },
    light: {
      primary: {
        primaryColor: colors.primaryColor,
        primaryTextColor: colors.primaryTextColor,
        primaryBackgroundColor: colors.primaryBackgroundColor,
        disabledTextColor: colors.disabledTextColor,
        borderColor: colors.borderColor,
      },
      secondary: {
        secondaryColor: colors.secondaryColor,
        secondaryTextColor: colors.secondaryTextColor,
        secondaryBackgroundColor: colors.secondaryBackgroundColor,
        disabledTextColor: colors.disabledTextColor,
        borderColor: colors.borderColor,
      },
    },
    // TODO [NZ] 23.09.2020: Define dark theme colors, now same as 'light theme'
    dark: {
      primary: {
        primaryColor: colors.primaryColor,
        primaryTextColor: colors.primaryTextColor,
        primaryBackgroundColor: colors.primaryBackgroundColor,
        disabledTextColor: colors.disabledTextColor,
        borderColor: colors.borderColor,
      },
      secondary: {
        secondaryColor: colors.secondaryColor,
        secondaryTextColor: colors.secondaryTextColor,
        secondaryBackgroundColor: colors.secondaryBackgroundColor,
        disabledTextColor: colors.disabledTextColor,
        borderColor: colors.borderColor,
      },
    },
  };

  return {
    ...theme,
    mode: theme[mode],
  };
};
