import * as React from 'react';
import renderer from 'react-test-renderer';
import { ThemeProvider } from 'styled-components/native';
import { useThemeSettings } from '../../../hooks/useColorScheme';
import CloseButton from '../../button/CloseButton';
import { jest } from '@jest/globals';

describe("Close button Test", () => {

  const scheme = jest.fn();
  let lightScheme = scheme.mockRejectedValue("light");
  let currentScheme = null;

  beforeEach(() => {
    currentScheme = useThemeSettings(lightScheme)
  });

  test(`Close button renders correctly`, () => {
    const tree = renderer.create(
      <ThemeProvider theme={currentScheme}>
        <CloseButton />
      </ThemeProvider>
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});


