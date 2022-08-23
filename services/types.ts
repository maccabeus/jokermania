
export type ApiCallType = "GET" | "POST";

export type ApiCallStates = "idle" | "loading" | "loaded" | "error";

export enum ApiCallStateEnum {
    IDLE = "idle",
    LOADING = "loading",
    COMPLETED = "completed",
    ERROR = "error"
}

export interface IAPiService<T, TOut> {
    (
        apiFullPathAndQuery: string,
        method: ApiCallType,
        data?: T
    ): Promise<TOut>
}
export type APiService<T = any, TOut = ApiResponse<T>> = IAPiService<T, TOut>;

export interface ApiResponse<T = any> {
    success: boolean;
    message: string
    data: T
}
export interface IApiGetData<T = any> {
    success: boolean;
    status: ApiCallStateEnum
    data: T
}
export interface IApiResponse<T = any> {
    (success: boolean, message: string, data?: T): ApiResponse<T>
}
