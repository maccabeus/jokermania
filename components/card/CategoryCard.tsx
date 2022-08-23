import { FC } from "react";
import styled from "styled-components/native";
import { AppThemeContext } from "../../hooks/useColorScheme";
import { CardProps } from "../types";
import CardShadow from "./CardShadow";

export const Card = styled.TouchableOpacity`
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

export const CardTitle = styled.Text`
    color: ${(props: AppThemeContext) => props.theme.color.text}; 
    font-size: ${(props: AppThemeContext) => props.theme.layout.bigFont}; 
    font-weight: 600;
    `
export const CardIconText = styled.Text`
    color: ${(props: AppThemeContext) => props.theme.color.white}; 
    font-size: ${(props: AppThemeContext) => props.theme.layout.bigFont}; 
    font-weight: 800;
    `
export const CardIconView = styled.View`
    margin-right: ${(props: AppThemeContext) => props.theme.layout.smallPadding};
    border-radius:300px; 
    align-items:center;
    justify-content:center;
    height:50px;
    width:50px;
    background-color: ${(props: AppThemeContext) => props.theme.color.background}; 
    color: ${(props: AppThemeContext) => props.theme.color.text}; 
 `
export const CardIconCaret = styled.View`
    margin-right: ${(props: AppThemeContext) => props.theme.layout.smallPadding};
    border-radius:300px; 
    align-items:center;
    justify-content:center;
    height:50px;
    width:50px;
    background-color: ${(props: AppThemeContext) => props.theme.color.background}; 
    color: ${(props: AppThemeContext) => props.theme.color.text}; 
 `

const CategoryCard: FC<CardProps> = (props) => {

    const { title, onClick, itemKey } = props;

    const firstLetterToUpper = (value: string | undefined) => {
        if (!value) {
            return value;
        }
        return `${value.substring(0, 1).toUpperCase()}${value.substring(1).toLowerCase()}`
    }
    return (
        <CardShadow>
            <Card key={itemKey} onPress={() => onClick ? onClick(title) : null}>
                <CardIconView>
                    <CardIconText>{title && title[0] ? title[0].toUpperCase() : null}</CardIconText>
                </CardIconView>
                <CardTitle>{firstLetterToUpper(title)}</CardTitle>
            </Card>
        </CardShadow>
    )
}
export default CategoryCard;