type Keys = `20${number}${number}`;
type Scores = {
    [key in Keys]?: number;
};
export interface User {
    _id: string;
    email: string;
    userName: string;
    firstName: string;
    lastName: string;
    scores: Scores;
}

/* AUTHENTICATION */
/* SIGN IN */
export interface SignInValues {
    email: string;
    password: string;
}

/* SIGN UP */
export interface SignUpValues {
    email: string;
    userName: string;
    firstName: string;
    lastName: string;
    password: string;
    password_confirm: string;
    login?: boolean;
}

type ioc_years = "2021" | "2022" | "2023" | "2024";
export interface LeaderboardItem {
    _id: string
    userName: string
    scores: {
        [key in ioc_years]: number
    }
}