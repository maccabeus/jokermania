import * as React from 'react';
import renderer from 'react-test-renderer';
import { ThemeProvider } from 'styled-components/native';
import { useThemeSettings } from '../../../hooks/useColorScheme';
import { jest } from '@jest/globals';
import SearchButton from '../../button/SearchButton';

describe("Search Button Snapshot", () => {

  const scheme = jest.fn();
  let lightScheme = scheme.mockReturnValue("light");
  let currentScheme = null;

  beforeEach(() => {
    currentScheme = useThemeSettings(lightScheme)
  });

  test(`Search button renders correctly`, () => {
    const tree = renderer.create(
      <ThemeProvider theme={currentScheme}>
        <SearchButton />
      </ThemeProvider>
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});


