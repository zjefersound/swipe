import { USER_LOGGED_IN, USER_LOGGED_OUT } from './actionTypes';

import { UserProps } from '../../common/types';

export const login = (user: UserProps) => {
    return {
        type: USER_LOGGED_IN,
        payload: user
    }
} 

export const logout = () => {
    return {
        type: USER_LOGGED_OUT    
    }
}