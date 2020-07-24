import { ADD_POST, ADD_COMMENT } from './actionTypes';
import { PostProps, PayloadCommentProps } from '../../common/types';

import api from '../../services/api';

export const addPost = (post: PostProps) => {
    return async (dispatch: Function) => {
        await api.post('/posts.json', { ...post })
            .catch(err => console.log(err))
            .then( (resposnse: any) => resposnse.data)
    }
    // return {
    //     type: ADD_POST,
    //     payload: post
    // }
}

export const addComment = (payload: PayloadCommentProps) => {
    return {
        type: ADD_COMMENT,
        payload: payload
    }
}