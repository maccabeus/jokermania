import 'react-native-gesture-handler';
import { ThemeProvider } from 'styled-components/native';
import useColorScheme, { useThemeSettings } from './hooks/useColorScheme';
import AppMainNavigator from './navigation/index';

export default function App() {

  const colorScheme = useColorScheme();
  const currentScheme = useThemeSettings(colorScheme);

  return (
    <ThemeProvider theme={currentScheme}>
      <AppMainNavigator />
    </ThemeProvider>
  );
}