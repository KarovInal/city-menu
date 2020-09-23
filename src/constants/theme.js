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

export const logo = 'https://firebasestorage.googleapis.com/v0/b/molvee-e32fd.appspot.com/o/Logo.png?alt=media&token=a4a6579b-80f6-48b0-bde3-40ea76793b46';

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
