import { FC } from "react";
import styled from "styled-components/native";
import { AppThemeContext } from "../../hooks/useColorScheme";
import CloseButton from "../button/CloseButton";
import SearchButton from "../button/SearchButton";
import { ComponentProps, SearchBarProps } from "../types";

const SearchContainer = styled.View`
    display:flex;
    flex:0.25;
    flex-direction:row;
    margin-top: ${(props: AppThemeContext) => props.theme.layout.appPaddingTopInPx}; 
    background-color: ${(props: AppThemeContext) => props.theme.color.background}; 
    justify-content:space-between;
`;
const SearchInput = styled.TextInput`
    flex:1;
    color: ${(props: AppThemeContext) => props.theme.color.textWhite}; 
    height: 100%;
    padding: ${(props: AppThemeContext) => props.theme.layout.inputPadding}; 
    font-size: ${(props: AppThemeContext) => props.theme.layout.bigFont};
    text-align:center;
`

const SearchBar: FC<SearchBarProps> = (props) => {
    const { onChangeText, onCloseButtonClick, value, placeholder, onSubmitEditing, inputRef } = props;
    return (
        <SearchContainer>
            <SearchButton />
            <SearchInput
                ref={inputRef}
                placeholder={placeholder ?? "Search"}
                placeholderTextColor='white'
                value={value}
                onChangeText={onChangeText}
                onSubmitEditing={onSubmitEditing}
            />
            <CloseButton onPress={() => onCloseButtonClick ? onCloseButtonClick() : null} />
        </SearchContainer>
    )
}
export default SearchBar;