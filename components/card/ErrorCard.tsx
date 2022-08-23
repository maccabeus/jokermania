import { FC } from "react";
import { CardProps } from "../types";
import styled from "styled-components/native";
import { AppThemeContext } from "../../hooks/useColorScheme";
import { BaseCard } from "./BaseCard";
import { BaseAntIcon } from "../icon/AntDesign";

export const Container = styled(BaseCard)`
    align-items:center;
    justify-content:center;
    flex-grow:1; 
    min-height: 100px; 
    height:auto;
    width:100%;
    flex-grow:0;
    padding:${(props: AppThemeContext) => props.theme.layout.smallPadding};
 `;

export const CardIconView = styled.View`
    margin-right: ${(props: AppThemeContext) => props.theme.layout.extraSmallPadding};
    border-radius:${(props: AppThemeContext) => props.theme.layout.fullBorderRadius};
    border-color:${(props: AppThemeContext) => props.theme.color.textDanger};
    align-items:center;
    justify-content:center;
    height:50px;
    width:50px;
    border-width: ${(props: AppThemeContext) => props.theme.layout.thinBorderRadius};
    padding:5px;
`
export const LoadingText = styled.Text`
    font-size:${(props: AppThemeContext) => props.theme.layout.mediumFont}; 
    color:${(props: AppThemeContext) => props.theme.color.textDanger};
 `;
const ErrorIcon = styled(BaseAntIcon)`
    color:${(props: AppThemeContext) => props.theme.color.textDanger};
`;

const ErrorCard: FC<CardProps> = (props) => {
    const { title, message } = props;
    return (
        <Container>
            <CardIconView >
                <ErrorIcon name="appstore-o" size={24} />
            </CardIconView>
            <LoadingText>{title ?? "Loading..."}</LoadingText>
        </Container>
    )
}
export default ErrorCard;