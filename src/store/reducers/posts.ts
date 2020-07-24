import { ADD_POST, ADD_COMMENT } from '../actions/actionTypes';
import { PostProps, ActionProps } from '../../common/types';
interface InitialStateProps {
    posts: PostProps[];
}
const initialState: InitialStateProps = {
    posts: [
        {
            id: String(Math.random()),
            nickname: 'zjefersound',
            email: 'jefe123@gmail.com',
            image: require('../../../assets/imgs/bw.jpg'),
            commentList: [
                {
                    nickname: 'zika',
                    text: 'sdsd'
                },
            ],
        },
        {
            id: String(Math.random()),
            nickname: 'zjefersound',
            email: 'jefe123@gmail.com',
            image: require('../../../assets/imgs/bw.jpg'),
            commentList: [
                {
                    nickname: 'zika',
                    text: 'sdsd'
                },
            ],
        },
        {
            id: String(Math.random()),
            nickname: 'zjefersound',
            email: 'jefe123@gmail.com',
            image: require('../../../assets/imgs/bw.jpg'),
            commentList: [
                {
                    nickname: 'zika',
                    text: 'sdsd'
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
        case ADD_COMMENT:
            return {
                ...state,
                posts: state.posts.map(post => {
                    if (String(post.id) === action.payload.postId) {
                        return {
                            ...post,
                            commentList: post.commentList.concat(action.payload.comment)
                        }
                    } else {
                        return post;
                    }
                })
            };
        default: 
            return state;
    }
}

export default reducer;