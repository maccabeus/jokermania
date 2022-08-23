import { FC } from "react";
import { ComponentProps } from '../types';
import { AppThemeContext } from '../../hooks/useColorScheme';
import styled from "styled-components/native";


const BodyContent = styled.SafeAreaView`
    background-color: ${(props: AppThemeContext) => props.theme.color.bodyBackground};
    display:flex;
    flex: 1;
    bottom:0;
    padding-left: ${(props: AppThemeContext) => props.theme.layout.smallPadding};
    padding-right: ${(props: AppThemeContext) => props.theme.layout.smallPadding};
    padding-top: 2px;
    border-top-left-radius: ${(props: AppThemeContext) => props.theme.layout.largeBorderRadius};
    height: ${(props: AppThemeContext) => props.theme.layout.window.heightInPx};
    width: ${(props: AppThemeContext) => props.theme.layout.window.widthInPx};
`
const BodyWrapper: FC<ComponentProps> = (props) => {
    return (
        <BodyContent>
            {props.children}
        </BodyContent>
    )
}

export default BodyWrapper;