export interface User {
  _id: string
  email: string
  name: string
  score: number
  challenges: Array<{
    main: {
      completed: string | string
      correct_answer?: string
    }
    side: {
      completed: string | string
      correct_answer?: string
    }
  }>
}

/* AUTHENTICATION */
/* SIGN IN */
export interface SignInValues {
  email: string
  password: string
}

export interface SignInResponse {
  token: string
  user: User
}

/* SIGN UP */
export interface SignUpValues {
  email: string
  name: string
  password: string
  password_confirm: string
  login?: boolean
}

export interface SignUpResponse extends Partial<SignInResponse> {
  msg?: string
}