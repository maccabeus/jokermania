import { FC } from "react";
import { ComponentProps } from '../types';
import { AppThemeContext } from '../../hooks/useColorScheme';
import styled from "styled-components/native";


const SafeView = styled.SafeAreaView`
    background-color: ${(props: AppThemeContext) => {
        return props?.plainMode ? props.theme.color.secondaryBackground : props.theme.color.background
    }};
    display:flex;
    padding:0;
    margin:0;
    flex: 1;
    height: ${(props: AppThemeContext) => props.theme.layout.window.heightInPx};
    width: ${(props: AppThemeContext) => props.theme.layout.window.widthInPx};
`
const ScreenWrapper: FC<ComponentProps> = (props) => {

    return (
        <SafeView {...props}>
            {props.children}
        </SafeView>
    )
}

export default ScreenWrapper;