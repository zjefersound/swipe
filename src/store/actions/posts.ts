import { ADD_POST, ADD_COMMENT } from './actionTypes';
import { PostProps, PayloadCommentProps } from '../../common/types';

export const addPost = (post: PostProps) => {
    return {
        type: ADD_POST,
        payload: post
    }
}

export const addComment = (payload: PayloadCommentProps) => {
    return {
        type: ADD_COMMENT,
        payload: payload
    }
}