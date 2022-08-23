import { ElementRef, ReactElement, Ref } from "react";
import { ColorSchemeName } from "react-native";
import { AppThemeContext } from "../hooks/useColorScheme";
import { IApiGetData } from "../services/types";


export type ElementEventCallback = (...args: any) => any;

export interface ComponentProps {
    children?: ReactElement | any;
    navigation?: any;
    onClick?: ElementEventCallback;
    onEditing?: ElementEventCallback;
    onSubmitEditing?: ElementEventCallback;
    onCloseButtonClick?: ElementEventCallback;
    [propName: string]: any;
}
export interface ThemeProviderProps extends ComponentProps {
    theme: AppThemeContext
}

export interface ListProps<T = any> extends ComponentProps {
    data?: T
    searchText?: string
}
export interface SearchListProps extends ListProps {
    searchText: string;
    searchResult: IApiGetData;
}

export interface SearchBarProps<T = any> extends ComponentProps {
    inputRef?: T;
    onTextChange?: ElementEventCallback;
    onCloseButtonClick?: ElementEventCallback;

}
export interface CardProps extends ComponentProps {
    title?: string;
    message?: string
    icon?: any;
}
export interface JokeItemProps<T = JokeItemData> extends CardProps {
    index: number,
    item: T
}

export type JokeResults = Array<JokeItemProps> | null | undefined;

export type StyledElementProps = {
    colorScheme?: NonNullable<ColorSchemeName>
}

export interface JokeItemData extends ComponentProps {
    id: string
    categories: string;
    value: string;
    url?: string;
    icon_url?: string;
}