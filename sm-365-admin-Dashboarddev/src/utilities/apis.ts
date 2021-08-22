
export enum StatusCodes {
    Created = 201,
    Success = 200,
    Forbidden = 403,
    InternalServerError = 500,
    UnAuthorized = 401,
    BadRequest = 400
}


export interface SuccessMessage {
    Code: string;
    Message: string;
}
export interface SuccessResponse {
    Code?: string;
    Data: object;
    Message?: string;
}

export interface ErrorResponse {
    ErrorCode: string;
    ErrorMessage: string;

}

export interface AuthErrorResponse extends ErrorResponse {
}

export interface InternalServerResponse extends ErrorResponse {
    ErrorData?: object;
}

export type GenericResponse = AuthErrorResponse | ErrorResponse[] | ErrorResponse | SuccessResponse | SuccessMessage | InternalServerResponse;


export interface ValidationResponse {
    valid: boolean;
    messages: ErrorResponse[];
}



export const HttpUrls = {
    LOGIN: `${process.env.REACT_APP_API_ENDPOINT_LOGIN}/admin/auth`
};



