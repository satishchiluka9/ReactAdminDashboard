export interface AuthState {
    user: User | null;
    loading: boolean;
    status: Status;
    authenticated: boolean;

}

export enum Status {
    NotLoggedIn = 'Not LoggedIn',
    InProgress = 'In Progress',
    LoggedIn = 'Logged In',
    LoggedOut = 'Logged Out',
}

export interface User {
    name: string;
    id: number;
    status: Status;
    value?: number;
}

export const initialAuthState: AuthState = {
    user: null,
    loading: false,
    status: Status.NotLoggedIn,
    authenticated: false
};
