import styled from "styled-components/native";
import { AppThemeContext } from "../../hooks/useColorScheme";

export const BaseList = styled.FlatList`
    display:flex;
    flex-grow:1;
    height: ${(props: AppThemeContext) => props.theme.layout.window.heightInPx};
    width: ${(props: AppThemeContext) => props.theme.layout.window.widthInPx};
 `;