
import { callApi } from '../services/ApiService';
import { useState, useEffect } from 'react';
import { ApiCallStateEnum, IApiGetData } from '../services/types';

export type Predicate = ((...args: any) => boolean) | null;

export const useGetApiData = (apiPath: string, dataIndex: string | null = null, canFetch: Predicate = null): IApiGetData => {
    return fetchApiData(apiPath, null, dataIndex, canFetch);
}

export const fetchApiData = (apiPath: string, queryParam: string | null = null, dataIndex: string | null = null, canFetch: Predicate = null): IApiGetData => {

    const [status, setStatus] = useState(ApiCallStateEnum.IDLE);
    const [data, setData] = useState(undefined);
    const [success, setSuccess] = useState(false);

    useEffect(() => {
        if ((canFetch && canFetch() === true) || !canFetch) {
            /** set loading status */
            const apiFullPath = queryParam ? `${apiPath}=${queryParam}` : apiPath;
            setStatus(ApiCallStateEnum.LOADING);
            callApi(apiFullPath, "GET").then(response => {
                const { success, data } = response;
                if (success) {
                    // if there is a data index to retrieve, dig a bit deeper in  
                    dataIndex ? setData(data[dataIndex]) : setData(data);
                } else {
                    setData(undefined);
                }
                /** set the call success and status values */
                setSuccess(success);
                setStatus(ApiCallStateEnum.COMPLETED);
            }).catch((e: any) => {
                setStatus(ApiCallStateEnum.ERROR);
            })
        }
    }, [apiPath]);

    return { success, status, data, }
}