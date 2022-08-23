import styled from "styled-components/native";
import { AppThemeContext } from "../../hooks/useColorScheme";

export const BaseCard = styled.TouchableOpacity`
    display:flex;
    flex-grow:1;
    flex-direction:row;
    align-items:center;
    background-color: ${(props: AppThemeContext) => props.theme.color.card}; 
    color: ${(props: AppThemeContext) => props.theme.color.secondaryText}; 
    min-height: ${(props: AppThemeContext) => props.theme.layout.cardHeight}; 
    height: auto;
    padding: ${(props: AppThemeContext) => props.theme.layout.smallPadding}; 
    border-radius: ${(props: AppThemeContext) => props.theme.layout.cardRadius}; 
    width: ${(props: AppThemeContext) => props.theme.layout.cardWidth}; 
    margin-top: ${(props: AppThemeContext) => props.theme.layout.cardMargin}; 
    margin-bottom: ${(props: AppThemeContext) => props.theme.layout.cardMargin}; 
 `;