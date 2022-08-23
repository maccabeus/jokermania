import { FC } from "react";
import { ComponentProps } from '../types';
import styled from "styled-components/native";
import { AppThemeContext } from "../../hooks/useColorScheme";
import { BaseAntIcon } from "../icon/AntDesign";
import SearchButton from "../button/SearchButton";
import { useNavigation } from "@react-navigation/native";
import { APP_NAME } from '../../config/App';


const HeaderContent = styled.View`
    display: flex;
    flex-direction:row;
    align-items:center;
    justify-content:center;
    background-color: ${(props: AppThemeContext) => props.theme.color.background};
    padding-top: ${(props: AppThemeContext) => props.theme.layout.largePadding};
    min-height: ${(props: AppThemeContext) => props.theme.layout.headerHeight};
    height:auto;
    width: ${(props: AppThemeContext) => props.theme.layout.window.widthInPx}; 
    `
const AppNameContainer = styled.View`
    margin-right: auto;
    flex-grow:1;
    margin-left: ${(props: AppThemeContext) => props.theme.layout.tinyPadding};
`
const AppNameText = styled.Text`
     color: ${(props: AppThemeContext) => props.theme.color.altText};
     opacity:0.9;
     font-size:${(props: AppThemeContext) => props.theme.layout.bigFont};
     font-weight: bold;
`;

const AppMenuIcon = styled(BaseAntIcon)`
    margin-right:auto;
    opacity:0.9;
    padding-left: ${(props: AppThemeContext) => props.theme.layout.smallPadding};
`;

const AppHeader: FC<ComponentProps> = (props) => {

    const navigation = useNavigation();

    const goToSearch = (route: any = "search") => {
        navigation.navigate(route);
    }

    return (
        <HeaderContent >
            <AppMenuIcon name="appstore-o" size={24} />
            <AppNameContainer>
                <AppNameText>
                    {APP_NAME}
                </AppNameText>
            </AppNameContainer>
            <SearchButton onPress={() => goToSearch()} />
        </HeaderContent>
    )
}

export default AppHeader;