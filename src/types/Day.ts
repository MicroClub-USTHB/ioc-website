export interface Day {
  _id: string
  main: ChallengeDetails
  side: ChallengeDetails
  fromDate: string
  toDate: string
}

export interface ChallengeDetails {
  _id?: string
  story: string
  content: string
  example?: string
  scoreBase: number
}