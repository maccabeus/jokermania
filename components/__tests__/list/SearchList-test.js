import * as React from 'react';
import renderer from 'react-test-renderer';
import { ThemeProvider } from 'styled-components/native';
import { useThemeSettings } from '../../../hooks/useColorScheme';
import { jest } from '@jest/globals';
import SearchList from '../../list/SearchList';

describe("Search List Snapshot", () => {

    const scheme = jest.fn();
    let lightScheme = scheme.mockRejectedValue("light");
    let currentScheme = null;
    let searchResult = [];

    beforeAll(() => {
        currentScheme = useThemeSettings(lightScheme);
        searchResult = [
            { index: 0, item: { value: "First test joke" }, onClick: () => null },
            { index: 2, item: { value: "Second test joke" }, onClick: () => alert("ok") },
            { index: 3, item: { value: "Third test joke" }, onClick: () => undefined },
        ];
    });

    test(`Search List renders correctly`, () => {
        const tree = renderer.create(
            <ThemeProvider theme={currentScheme}>
                <SearchList searchResult={searchResult} />
            </ThemeProvider>
        ).toJSON();

        expect(tree).toMatchSnapshot();
    });

    afterAll(() => {
        currentScheme = null;
        currentScheme = null;
    });
});


