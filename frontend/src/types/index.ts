export interface User {
    uid: string;
    email: string;
    displayName?: string;
    photoURL?: string;
}

export interface AuthCredentials {
    email: string;
    password: string;
}

export interface SignupData extends AuthCredentials {
    displayName: string;
}