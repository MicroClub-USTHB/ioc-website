import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Day, ExtendedDay } from "../../types/Day";
import { User, SignInValues, SignUpValues } from "../../types/User";
import { DayRequest } from "../../types/Day";

export const api = createApi({
    reducerPath: "api",
    baseQuery: fetchBaseQuery({
        // baseUrl: 'https://ioc-backend.herokuapp.com/',
        baseUrl: "http://localhost:3001/",
        credentials: "include",
    }),
    endpoints: (builder) => ({
        /* AUTH END POINTS */
        /* Sign In */
        signIn: builder.mutation<User, SignInValues>({
            query: (body) => ({
                url: "login",
                method: "POST",
                body: body,
            }),
        }),
        /* Log out */
        logOut: builder.mutation<any, void>({
            query: () => ({
                url: "logout",
                method: "GET",
            }),
        }),
        /* Sign Up */
        signUp: builder.mutation<User, SignUpValues>({
            query: (body) => ({
                url: "register",
                method: "POST",
                body: { ...body, login: true }, // auto signIn set to true
            }),
        }),
        /* Get User Data */
        getUserData: builder.mutation<User, void>({
            query: () => ({ url: "users" }),
        }),
        /* Reauthenticate */
        reAuthenticate: builder.query<User, null>({
            query: () => ({
                url: "reauthenticate",
                method: "POST",
            }),
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
