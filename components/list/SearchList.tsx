import { FC, Suspense, useEffect, useState } from "react";
import { ErrorBoundary } from "react-error-boundary";

import { JokeItemProps, SearchListProps } from "../types";
import JokeCard from "../card/JokeCard";
import ErrorCard from '../card/ErrorCard';
import LoadingCard from '../card/LoadingCard';
import { ApiCallStateEnum, IApiGetData } from "../../services/types";
import { BaseList } from "./BaseList";

const SearchList: FC<SearchListProps> = (props) => {

    const { searchResult } = props;

    const JokeRenderer = (joke: JokeItemProps) => {
        return <JokeCard item={joke.item} index={joke.index} />
    }
    const keyExtractor = (joke: JokeItemProps) => {
        return joke.id;
    }

    const RenderSearchList = (props: { searchResult: IApiGetData }) => {

        if (!searchResult || !searchResult.data) {
            return null;
        }
        const { data, status } = searchResult;
        let searchData: Array<JokeItemProps> = data ?? [];

        if (status === ApiCallStateEnum.ERROR) {
            return <ErrorCard title="Error occurs while  searching" />
        }
        if (status === ApiCallStateEnum.LOADING) {
            return <LoadingCard title={`Searching...`} />
        }
        if (status === ApiCallStateEnum.COMPLETED && searchData.length <= 0) {
            return <LoadingCard title={`No result found`} />
        }

        return (
            <BaseList
                data={searchData}
                renderItem={JokeRenderer}
                keyExtractor={keyExtractor}
            />
        )
    }
    return (
        <ErrorBoundary fallback={<ErrorCard />}>
            <Suspense fallback={<LoadingCard />}>
                <RenderSearchList searchResult={searchResult} />
            </Suspense>
        </ErrorBoundary>

    )
}

export default SearchList;
