export interface SignInValues {
  email: string
  password: string
}

export interface SignUpValues {
  email: string
  name: string
  password: string
  password_confirmation: string
}

interface UserChallenge {
  completed: Date | string
}

export interface SignInResponse {
  token: string
  user: {
    _id: string
    email: string
    name: string
    score: number
    challenges: Array<{
      main: {
        completed: Date | string
        correct_answer?: string
      }
      side: {
        completed: Date | string
        correct_answer?: string
      }
    }>
  }
}