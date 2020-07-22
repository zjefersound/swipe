import { ADD_POST } from '../actions/actionTypes';
import { PostProps, ActionProps } from '../../common/types';

const initialState = {
    posts: [
        {
            id: Math.random(),
            nickname: 'zjefersound',
            email: 'jefe123@gmail.com',
            image: require('../../../assets/imgs/bw.jpg'),
            commentList: [
                {
                    nickname: 'zika',
                    text: 'sdsd'
                },
                {
                    nickname: 'pablito',
                    text: 'sdsd dsdddjfjdsjfsjfjdssdsmdmdmd d d d d dd  as dasdaasda jfdsjfsjfjsj jdsjfjsdfjs jsdjsjas sad a asaa'
                },
            ],
        },
        {
            id: Math.random(),
            nickname: 'ana',
            email: 'ana123@gmail.com',
            image: require('../../../assets/imgs/fence.jpg'),
            commentList: [
                {
                    nickname: 'merlyn',
                    text: 'sdsd'
                },
                {
                    nickname: 'gustt',
                    text: 'sdsd dsdddjfjdsjfsjfjdssdsmdmdmd d d d d dd  as dasdaasda jfdsjfsjfjsj jdsjfjsdfjs jsdjsjas sad a asaa'
                },
            ],
        },
    ]
}

const reducer = (state = initialState, action: ActionProps) => {
    switch (action.type) {
        case ADD_POST:
            return {
                ...state,
                posts: state.posts.concat({
                    ...action.payload
                })
            };
        default: 
            return state;
    }
}

export default reducer;