import { View, Text } from "react-native";
import ScreenWrapper from "../components/wrapper/ScreenWrapper";
import { ErrorBoundary } from 'react-error-boundary';
import { Suspense, useEffect } from 'react';
import ErrorCard from '../components/card/ErrorCard';
import LoadingCard from '../components/card/LoadingCard';
import { BASE_API_PATH, JOKE_BY_CATEGORY_PATH } from '../constants/Api';
import { useGetApiData } from "../hooks/useGetApiData";
import { useRoute } from '@react-navigation/native';
import JokeDetailsCard from "../components/card/JokeDetailsCard";
import { JokeItemData } from "../components/types";
import { ApiCallStateEnum } from '../services/types';

const JokeScreen = () => {

    const route = useRoute();
    const params: any = route.params;
    const category = params.category ?? null;

    const searchUrl: string = `${BASE_API_PATH}/${JOKE_BY_CATEGORY_PATH}=${category}`;
    const { status, data: joke = null } = useGetApiData(searchUrl);

    useEffect(() => {
    }, [joke]);

    const RenderJoke = (joke: JokeItemData) => {
        if (status === ApiCallStateEnum.ERROR) {
            return <ErrorCard />
        }
        else if (status === ApiCallStateEnum.LOADING) {
            return <LoadingCard title="Loading joke ..." />
        }
        return <JokeDetailsCard {...joke} />
    }

    return (
        <ErrorBoundary fallback={<ErrorCard />}>
            <Suspense fallback={<LoadingCard />}>
                <ScreenWrapper plainMode={true}>
                    <RenderJoke  {...joke} />
                </ScreenWrapper>
            </Suspense>
        </ErrorBoundary>
    )
}
export default JokeScreen;