import { Platform } from 'react-native';

const theme = {
    colors: {
      textPrimary: '#24292e',
      textSecondary: '#586069',
      primary: '#0366d6',
      secondary: '#ffffff',
      background: '#e1e4e8',
      secondaryLight: '#cccccc',
      error: '#d73a4a',
    },
    fontSizes: {
      body: 14,
      subheading: 16,
    },
    fonts: {
      main: Platform.select({
        android: 'Roboto',
        ios: 'Arial',
        default: 'System',
      }),
    },
    fontWeights: {
      normal: '400',
      bold: '700',
    },
    padding: {
        default: 20,
        medium: 10,
        small: 5,
    }
  };
  
  export default theme;