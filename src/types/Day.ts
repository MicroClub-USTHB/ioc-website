export interface DayRequest {
    _id: string;
}
export interface Day {
    _id: string;
    title: string;
    number: number;
    main: string;
    side: string;
}
export interface ExtendedDay {
    _id: string;
    title: string;
    number: number;
    main: Challenge;
    side: Challenge;
}
type Lang = "EN" | "FR";

export interface Challenge {
    baseScore: number;
    content: {
        [key in Lang]?: ChallengeDetails;
    };
}
export interface ChallengeDetails {
    title: string;
    story: string;
    content: string;
    example?: string;
    finishingMsg?: string;
    scoreBase: number;
}

export interface DayLinkPassedState {
    number: number;
    type: "main" | "side";
}
