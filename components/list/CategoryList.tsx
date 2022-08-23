import { FC, Suspense, useEffect, useState } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { BASE_API_PATH, CATEGORY_PATH } from "../../constants/Api";
import { useGetApiData } from "../../hooks/useGetApiData";
import { ListProps } from "../types";
import CategoryCard from '../card/CategoryCard';
import { useNavigation } from "@react-navigation/native";
import ErrorCard from "../card/ErrorCard";
import LoadingCard from "../card/LoadingCard";
import { ApiCallStateEnum } from "../../services/types";
import { BaseList } from "./BaseList";


const LazyCategoryList: FC<ListProps> = (props) => {

    const route = props.route ?? "joke";

    const navigation = useNavigation();

    const categoryUrl: string = `${BASE_API_PATH}/${CATEGORY_PATH}`;
    const { success, status, data: categories = [] } = useGetApiData(categoryUrl);

    const categoryCardClickHandler = (title: any) => {
        if (title && navigation) {
            const routeParams = { category: title } as never
            navigation.navigate(route as never, routeParams)
        }
    }

    const keyExtractor = (item: any, index: number) => {
        return `${index}-${item}`;
    }
    const RenderItem = (item: any) => {
        return <CategoryCard title={item.item} onClick={categoryCardClickHandler} />;
    }
    const RenderCategoryList = (props: any) => {

        const categories: Array<string> = props.categories ?? [];

        if (status === ApiCallStateEnum.ERROR) {
            return <ErrorCard title="Error occurs while  loading categories" />
        } else if (status === ApiCallStateEnum.LOADING) {
            return <LoadingCard title="Loading Category..." />
        }
        return <BaseList
            data={categories}
            renderItem={RenderItem}
            keyExtractor={keyExtractor}
        />
    }
    useEffect(() => {
    }, [categories]);

    return (
        <ErrorBoundary fallback={<ErrorCard />}>
            <Suspense fallback={<LoadingCard />}>
                <RenderCategoryList categories={categories} />
            </Suspense>
        </ErrorBoundary>
    )
}

export default LazyCategoryList;