import { ColorSchemeName, useColorScheme as _useColorScheme } from 'react-native';
import Layout from '../constants/Layout';
import { light, dark } from '../constants/Colors';

export type AppColorScheme = NonNullable<ColorSchemeName>;
export type AppColors = typeof light | typeof dark;
export type Layout = typeof Layout;

export type AppPropKeys = "theme" | any;

export type AppTheme = {
  color: AppColors;
  layout: Layout;
}

export type AppColorSchemeData = {
  [propName: string]: AppColors;
}

export type AppThemeContext = {
  [propName in AppPropKeys]: AppTheme
}
// export type AppThemeContext = {
//   theme: AppTheme
// }

export function useThemeSettings(colorScheme: AppColorScheme): AppTheme {
  return (
    {
      color: colorScheme === "dark" ? dark : light,
      layout: Layout
    }
  );
}

export default function useColorScheme(): AppColorScheme {
  return _useColorScheme() as AppColorScheme;
}