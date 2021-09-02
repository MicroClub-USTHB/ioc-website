import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Day, ExtendedDay } from "../../types/Day";
import { authResponse, SignInValues, SignUpValues } from "../../types/User";
import { DayRequest } from "../../types/Day";

export const api = createApi({
    reducerPath: "api",
    baseQuery: fetchBaseQuery({
        //baseUrl: 'https://ioc-backend.herokuapp.com/',
        baseUrl: "http://localhost:3001/",
        credentials: "include",
    }),
    endpoints: (builder) => ({
        /* AUTH END POINTS */
        /* Sign In */
        signIn: builder.mutation<authResponse, SignInValues>({
            query: (body) => ({
                url: "login",
                method: "POST",
                body: body,
            }),
            transformResponse: (response: authResponse) => {
                localStorage.setItem("User", JSON.stringify(response));
                return response;
            },
        }),
        /* Log out */
        logOut: builder.mutation<any, void>({
            query: () => ({
                url: "logout",
                method: "GET",
            }),
            transformResponse: (response) => {
                localStorage.removeItem("User");
                return response;
            },
        }),
        /* Sign Up */
        signUp: builder.mutation<authResponse, SignUpValues>({
            query: (body) => ({
                url: "register",
                method: "POST",
                body: { ...body, login: true }, // auto signIn set to true
            }),
            transformResponse: (response: authResponse) => {
                localStorage.setItem("User", JSON.stringify(response));
                return response;
            },
        }),
        /* Get User Data */
        getUserData: builder.mutation<authResponse, void>({
            query: () => ({ url: "users" }),
            transformResponse: (response: authResponse) => {
                localStorage.setItem("User", JSON.stringify(response));
                return response;
            },
        }),
        /* Reauthenticate */
        reAuthenticate: builder.query<authResponse | undefined, null>({
            query: () => ({
                url: "reauthenticate",
                method: "POST",
                validateStatus: (response, result) => {
                    console.log(result, response);
                    if(response.status==450)localStorage.removeItem("User");
                    return response.status < 400;
                },
            }),

            transformResponse: (response: authResponse) => {
                localStorage.setItem("User", JSON.stringify(response));
                return response;
            },
        }),
        /* CHALLENGES & DAYS */
        getDays: builder.query<Array<Day>, null>({ query: () => ({ url: "days" }) }),
        getDay: builder.query<ExtendedDay, DayRequest>({
            query: (body) => ({ url: "days/" + body._id }),
        }),
    }),
});

export const {
    useSignInMutation,
    useLogOutMutation,
    useSignUpMutation,
    useGetUserDataMutation,
    useReAuthenticateQuery,
    useGetDaysQuery,
    useGetDayQuery,
    usePrefetch,
} = api;
