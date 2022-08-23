
import { useState, useCallback,  useRef } from 'react';
import SearchList from '../components/list/SearchList';
import SearchBar from '../components/search/SearchBar';
import ScreenWrapper from '../components/wrapper/ScreenWrapper';
import SearchWrapper from '../components/wrapper/SearchWrapper';
import useDebounce from "../hooks/useDebounce";
import { useGetApiData } from '../hooks/useGetApiData';
import { BASE_API_PATH, SEARCH_JOKES_PATH } from '../constants/Api';

export default function SearchScreen() {

    const debounceFilter = useDebounce(500);

    const [searchText, setSearchText] = useState<string>("");
    const searchTextRef = useRef<any>("");

    const searchUrl: string = `${BASE_API_PATH}/${SEARCH_JOKES_PATH}=${searchText}`;
    const searchResult = useGetApiData(searchUrl, "result");

    const searchJokes = useCallback((searchValue: any) => {
        if (searchValue) {
            debounceFilter(() => {
                setSearchText(searchValue);
            }, () => searchPredicate(searchValue))
        }
    }, [debounceFilter]);

    const searchPredicate = (searchValue: string, min: number = 3, max: number = 120): boolean => {
        searchValue = searchValue.replace(/\S+$/, "");
        return (searchValue.length > min && searchValue.length <= max);
    }

    const resetSearch = (state: boolean = true) => {
        searchTextRef.current.clear();
        searchTextRef.current.focus();
        setSearchText("")
    }

    return (
        <ScreenWrapper>
            <SearchBar
                inputRef={searchTextRef}
                onCloseButtonClick={() => resetSearch()}
                onChangeText={(value: string) => searchJokes(value)}
            />
            <SearchWrapper>
                <SearchList searchResult={searchResult}
                    searchText={searchText}
                />
            </SearchWrapper>
        </ScreenWrapper>
    )
}