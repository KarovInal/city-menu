export const isQrMenu = window.location.host.match(/^qr./)
  || process.env.QR_MENU
  || process.env.NODE_ENV === 'development';
