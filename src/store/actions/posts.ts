import { ADD_POST } from './actionTypes';
import { PostProps } from '../../common/types';

export const addPost = (post: PostProps) => {
    return {
        type: ADD_POST,
        payload: post
    }
}