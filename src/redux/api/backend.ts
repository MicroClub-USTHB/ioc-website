import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Day } from '../../types/Day';
import { SignInResponse, SignInValues, SignUpResponse, SignUpValues, User } from '../../types/User';

export const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://ioc-backend.herokuapp.com/',
    prepareHeaders: (headers, {getState}) => {
      const token_from_storage = localStorage.getItem('Authorization');
      if (token_from_storage) {
        headers.set('Authorization', token_from_storage);
      }
      return headers;
    }
  }),
  endpoints: builder => ({
    /* AUTH ENDPINTS */
    /* Sign In */
    signIn: builder.mutation<SignInResponse, SignInValues>({
      query: (body) => ({
        url: 'login',
        method: 'POST',
        body: body
      }),
      transformResponse: (response: SignInResponse, meta) => {
        localStorage.setItem('Authorization', response.token);
        return response;
      },
    }),
    /* Sign Up */
    signUp: builder.mutation<SignUpResponse, SignUpValues>({
      query: (body) => ({
        url: 'register',
        method: 'POST',
        body: { ...body, login: true } // auto signin set to true
      }),
      transformResponse: (response: SignUpResponse, meta) => {
        if (response.token) {
          localStorage.setItem('Authorization', response.token)
        }
        return response;
      }
    }),
    /* Get User Data */
    getUserData: builder.query<User, null>({
      query: () => ({
        url: 'users',
        headers: {
          Authorization: localStorage.getItem('Authorization') ?? ''
        }
      }),
    }),
    /* CHALLENGES & DAYS */
    getDays: builder.query<Array<Day>, null>({
      query: () => ({
        url: 'days',
        headers: { Authorization: localStorage.getItem('Authorization') ?? '' }
      })
    })
  })
});

export const {
  useSignInMutation,
  useSignUpMutation,
  useGetUserDataQuery,
  useGetDaysQuery,
  usePrefetch
} = api;
