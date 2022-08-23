import { FC } from "react";
import { CardProps } from "../types";
import styled from "styled-components/native";
import { AppThemeContext } from "../../hooks/useColorScheme";
import { BaseOcticons } from "../icon/Octicons";

export const SearchIconView = styled.TouchableOpacity`
    border-radius:${(props: AppThemeContext) => props.theme.layout.fullBorderRadius};
    margin-right:${(props: AppThemeContext) => props.theme.layout.cardMargin};
    align-items:center;
    justify-content:center;
    height:50px;
    width:50px;
    padding: ${(props: AppThemeContext) => props.theme.layout.extraSmallPadding};;
    color: ${(props: AppThemeContext) => props.theme.color.text};;
`
const Icon: any = styled(BaseOcticons)`
    opacity:0.9;
`;

const CloseButton: FC<CardProps> = (props) => {
    return (
        <SearchIconView  {...props}>
            <Icon name="x-circle" size={24} />
        </SearchIconView >
    )
}
export default CloseButton;