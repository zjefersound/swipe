export interface UserProps {
    name?: string;
    email: string;
    password?: string;
}

export interface ReducerProps {
    user: UserProps;
}
