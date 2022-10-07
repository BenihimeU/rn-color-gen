// 1. Import the extendTheme function
import { extendTheme, NativeBaseProvider } from 'native-base';
import Home from './Home/Home';
import { enableLatestRenderer } from 'react-native-maps';
import CustomMapView from './MapView/MapView';
import { View } from 'react-native';

enableLatestRenderer();
// 2. Extend the theme to include custom colors, fonts, etc
const newColorTheme = {
  brand: {
    900: '#8287af',
    800: '#7c83db',
    700: '#b3bef6',
  },
};
const theme = extendTheme({ colors: newColorTheme });
// 3. Pass the `theme` prop to the `NativeBaseProvider`
const App = () => (
  <NativeBaseProvider theme={theme}>
    <Home />
  </NativeBaseProvider>
  // <CustomMapView />
);

export default App;
