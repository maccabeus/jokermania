import { FC } from "react";
import { ComponentProps } from '../types';
import { AppThemeContext } from '../../hooks/useColorScheme';
import styled from "styled-components/native";

const BodyContent = styled.SafeAreaView`
    display:flex;
    flex: 1;
    background-color: ${(props: AppThemeContext) => props.theme.color.secondaryBackground};
    padding-left: ${(props: AppThemeContext) => props.theme.layout.tinyPadding};
    padding-right: ${(props: AppThemeContext) => props.theme.layout.tinyPadding};
    padding-top: 2px;
    padding-bottom: 0;
    height: ${(props: AppThemeContext) => props.theme.layout.window.heightInPx};
    width: ${(props: AppThemeContext) => props.theme.layout.window.widthInPx};
`
const SearchWrapper: FC<ComponentProps> = (props) => {
    return (
        <BodyContent>
            {props.children}
        </BodyContent>
    )
}

export default SearchWrapper;