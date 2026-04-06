export interface ApiResponce<T>{
    success: boolean,
    message?: string,
    data?: T
};

export const ApiResponce = <T>(
    success: boolean,
    data: T,
    message: string,
): ApiResponce<T> =>{
    return {
        success,
        message,
        data
    }
}