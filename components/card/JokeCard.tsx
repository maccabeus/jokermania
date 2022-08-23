import { FC } from "react";
import styled from "styled-components/native";
import { AppThemeContext } from "../../hooks/useColorScheme";
import { JokeItemProps } from "../types";

export const StyledTouchableOpacity = styled.TouchableOpacity`
    display:flex;
    align-items:center;
    justify-content:center;
    flex-direction:row;
    flex-grow:1;
    background-color: ${(props: AppThemeContext) => props.theme.color.card}; 
    color: ${(props: AppThemeContext) => props.theme.color.secondaryText}; 
    min-height: ${(props: AppThemeContext) => props.theme.layout.cardHeightWideInPx}; 
    height: auto;
    width: ${(props: AppThemeContext) => props.theme.layout.cardWidthWideInPx}; 
    padding: ${(props: AppThemeContext) => props.theme.layout.tinyPadding}; 
    border-radius: ${(props: AppThemeContext) => props.theme.layout.cardRadius}; 
    margin-top: ${(props: AppThemeContext) => props.theme.layout.cardMargin}; 
    margin-bottom: ${(props: AppThemeContext) => props.theme.layout.cardMargin}; 
 `;

export const CardText = styled.Text`
    display: flex;
    flex-grow:1;
    color:${(props: AppThemeContext) => props.theme.color.text};
`;
const JokeCard: FC<JokeItemProps> = (props) => {
    const { onClick, item, index } = props;
    // const joke= {"index": 3, "item": {"categories": [], "created_at": "2020-01-05 13:42:26.991637", "icon_url": "https://assets.chucknorris.host/img/avatar/chuck-norris.png", "id": "0cyirBrJSay5yYEL1yYw_A", "updated_at": "2020-01-05 13:42:26.991637", "url": "https://api.chucknorris.io/jokes/0cyirBrJSay5yYEL1yYw_A", "value": "In the original making of Scarface when Tony said \"say hello to my little friend\" Chuck Norris appeared. However, the director cut it out said it was too gruesome for a R rated movie."}, "separators": {"highlight": [Function highlight], "unhighlight": [Function unhighlight], "updateProps": [Function updateProps]}}
    return (
        <StyledTouchableOpacity key={index} onPress={() => onClick ? onClick(props) : null}>
            <CardText>{item.value}</CardText>
        </StyledTouchableOpacity>
    )
}

export default JokeCard;