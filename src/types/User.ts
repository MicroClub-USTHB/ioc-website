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
