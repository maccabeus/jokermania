import { FC } from "react";
import { CardProps } from "../types";
import styled from "styled-components/native";
import { AppThemeContext } from "../../hooks/useColorScheme";

export const Container = styled.View`
    display: flex;
    flex-grow:1;
    align-items:center;
    justify-content:center;
    `;
export const LoadingText = styled.Text`
    font-size:${(props: AppThemeContext) => props.theme.layout.mediumFont}; 
    color:${(props: AppThemeContext) => props.theme.color.text};
 `;

const LoadingCard: FC<CardProps> = (props) => {
    const { title, message, showSpinner } = props;
    return (
        <Container>
            <LoadingText>{title ?? "Loading..."}</LoadingText>
        </Container>
    )
}
export default LoadingCard;