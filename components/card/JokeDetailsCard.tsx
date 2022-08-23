import { FC } from "react";
import styled from "styled-components/native";
import { AppThemeContext } from "../../hooks/useColorScheme";
import { JokeItemData } from "../types";
import { BaseCard } from "./BaseCard";

export const DetailCard = styled(BaseCard)`
    align-items:flex-start;
    justify-content:center;
    flex-grow:1; 
    min-height: ${(props: AppThemeContext) => props.theme.layout.cardHeight}; 
    height:auto;
    width:100%;
 `;
export const Container = styled.View`
    padding-left:${(props: AppThemeContext) => props.theme.layout.tinyPadding};
    padding-right:${(props: AppThemeContext) => props.theme.layout.tinyPadding};
    align-items:flex-start;
 `;
export const CardText = styled.Text`
    display: flex;
    color:${(props: AppThemeContext) => props.theme.color.text};
`;
const JokeDetailsCard: FC<JokeItemData> = (props) => {
    const { id, value, onClick, } = props;
    return (
        <Container>
            <DetailCard>
                <CardText>
                    {value}
                </CardText>
            </DetailCard>
        </Container>
    )

}

export default JokeDetailsCard;