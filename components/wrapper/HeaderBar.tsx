import { FC } from "react";
import { ComponentProps } from '../types';
import styled from "styled-components/native";
import { AppThemeContext } from "../../hooks/useColorScheme";


const HeaderContent = styled.View`
    display: flex;
    flex-direction:row;
    padding: ${(props: AppThemeContext) => props.theme.layout.smallPadding};
    width: ${(props: AppThemeContext) => props.theme.layout.window.widthInPx};
`
const HeaderBar: FC<ComponentProps> = (props) => {
    return (
        <HeaderContent>
            {props.children}
        </HeaderContent>
    )
}

export default HeaderBar;