interface Spam {
    count: number
    total: number
    last: Date
}

interface UserDay {
    completed: {
        main: { completed: Date, score: number };
        side: { completed: Date, score: number };
    };
    day: string;
    main: string;
    side: string;
    number: number;
}
export interface User {
    _id: string;
    email: string;
    userName: string;
    firstName: string;
    lastName: string;
    spam?: Spam;
    scores: { [key: number]: number };
    days: UserDay[]
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