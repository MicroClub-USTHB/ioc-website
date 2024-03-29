import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Day, Challenge, AnswersValues, CorrectAnswer, GetInputs } from "../../types/Day";
import { User, SignInValues, SignUpValues, LeaderboardItem } from "../../types/User";
import { DayRequest } from "../../types/Day";

export const api = createApi({
    reducerPath: "api",
    baseQuery: fetchBaseQuery({
        baseUrl: "https://ioc-backend.herokuapp.com/",
        //baseUrl: "https://ioc-beta.herokuapp.com/",
        //baseUrl: "http://localhost:3001/",
        credentials: "include",
    }),
    endpoints: (builder) => ({
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
        getInputs: builder.mutation<CorrectAnswer, GetInputs>({
            query: (body) => ({
                url: `challenge/${body.day}/${body.type}`,
                method: "GET",
            }),
        }),
        /* Submit Answers */
        submitAnswer: builder.mutation<User, AnswersValues>({
            query: (body) => ({
                url: `challenge/${body.day}/${body.type}`,
                method: "POST",
                body: { answer: body.answer },
            }),
        }),
        /* Get User Data */
        getUserData: builder.query<User, void>({
            query: () => ({ url: "/" }),
        }),
        /* Get Days' metadata */
        getDays: builder.query<Array<Day>, null>({ query: () => ({ url: "days" }) }),
        /* Get Day Details */
        getDay: builder.query<Challenge, DayRequest>({
            query: (body) => ({ url: "days/" + body._id + "/" + body.type }),
        }),
        getLeaderboard: builder.query<LeaderboardItem[], null>({
            query: (query) => ({
                url: "/leaderboard",
            }),
        }),
    }),
});

export const {
    useSignInMutation,
    useLogOutMutation,
    useSignUpMutation,
    useSubmitAnswerMutation,
    useGetInputsMutation,
    useGetUserDataQuery,
    useGetDaysQuery,
    useGetDayQuery,
    usePrefetch,
    useGetLeaderboardQuery,
} = api;
