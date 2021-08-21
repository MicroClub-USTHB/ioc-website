import store from "./store";

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

/* USER */
export interface UserData {
  token: string
  user: {
    _id: string
    score: number
    email: string
    name: string
    challenges: Array<UserChallengeDetails>
  }
}

interface UserChallengeDetails {
  _id: string
  main: UserChallenge
  side: UserChallenge
}

interface UserChallenge {
  correct_answer: string
  completed: string | null
}
