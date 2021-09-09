import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Day, ExtendedDay, AnswersValues, CorrectAnswer, GetInputs } from "../../types/Day";
import { User, SignInValues, SignUpValues } from "../../types/User";
import { DayRequest } from "../../types/Day";

export const api = createApi({
    reducerPath: "api",
    baseQuery: fetchBaseQuery({
        baseUrl: "https://ioc-backend.herokuapp.com/",
        //baseUrl: "http://localhost:3001/",
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
        /* getInputs Answers */
        getInputs: builder.mutation<string, GetInputs>({
            query: (body) => ({
                url: `challenge/${body.day}/${body.type}`,
                method: "GET",
            }),
        }),
        /* Submit Answers */
        submitAnswer: builder.mutation<CorrectAnswer, AnswersValues>({
            query: (body) => ({
                url: `challenge/${body.day}/${body.type}`,
                method: "POST",
                body: { answer: body.answer },
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
    useSubmitAnswerMutation,
    useGetInputsMutation,
    useGetUserDataMutation,
    useReAuthenticateQuery,
    useGetDaysQuery,
    useGetDayQuery,
    usePrefetch,
} = api;
