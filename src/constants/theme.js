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
        primaryColor: '#ec1c24',
        primaryTextColor: '#1a1a1a',
        primaryBackgroundColor: '#fff',
        disabledTextColor: '#949494',
        borderColor: '#e6e6e6',
      },
      secondary: {
        secondaryColor: '#231f20',
        secondaryTextColor: '#616161',
        secondaryBackgroundColor: '#231f20',
        disabledTextColor: '#949494',
        borderColor: '#e6e6e6',
      },
    },
    // TODO [NZ] 23.09.2020: Define dark theme colors, now same as 'light theme'
    dark: {
      primary: {
        primaryColor: '#ec1c24',
        primaryTextColor: '#1a1a1a',
        primaryBackgroundColor: '#fff',
        disabledTextColor: '#949494',
        borderColor: '#e6e6e6',
      },
      secondary: {
        secondaryColor: '#231f20',
        secondaryTextColor: '#616161',
        secondaryBackgroundColor: '#231f20',
        disabledTextColor: '#949494',
        borderColor: '#e6e6e6',
      },
    },
  };

  return {
    ...theme,
    mode: theme[mode],
  };
};
