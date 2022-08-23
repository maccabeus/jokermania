
import { ApiResponse, APiService, IApiResponse } from './types';

/**
 * Call an API endpoint and return response data
 * 
 * @note this call handles both the `GET` and `POST` request
 * 
 * @param apiFullPathAndQuery The  full api path information
 * @returns  The response information from the server
 */
export const callApi: APiService = async (apiFullPathAndQuery, method, data = null) => new Promise((resolve: Function, reject: Function) => {

    let postData: any = method === "POST" && data ? {
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    } : {};


    fetch(apiFullPathAndQuery, {
        method: method,
        ...postData
    })
        .then((responseData: any) => responseData.json())
        .then((responseData: any) => {
            const message = "Data found";
            resolve(apiResponse(true, message, responseData))
        }).catch((e: any) => {
            reject(apiResponse(true, e.message))
        }).catch((e: any) => {
            reject(apiResponse(true, e.message))
        })
});

export const callApiOld: APiService = async (apiFullPathAndQuery, method, data = null) => {

    let postData: any = method === "POST" && data ? {
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    } : {};

    try {
        const response = await fetch(apiFullPathAndQuery, {
            method: method,
            ...postData
        });
        const responseData = await response.json();
        const message = "Data found";
        return apiResponse(true, message, responseData);
    } catch (e: any) {
        /** handles by logging service  */
        console.log(e)
        return apiResponse(false, e.message);
    }
}

const apiResponse: IApiResponse = (success, message, data) => {
    return ({ success, message, data: data ?? null });
}
