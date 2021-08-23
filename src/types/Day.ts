export interface Day {
  _id: string
  title: string
  number: number
  content: {
    english: {
      main: ChallengeDetails,
      side: ChallengeDetails,
    },
    french: {
      main: ChallengeDetails,
      side: ChallengeDetails,
    }
  }
  main: ChallengeDetails
  side: ChallengeDetails
  fromDate: string
  toDate: string
}

export interface ChallengeDetails {
  story: string
  content: string
  example?: string
  scoreBase: number
}

export interface DayLinkPassedState {
  number: number
  day: 'main' | 'side'
}