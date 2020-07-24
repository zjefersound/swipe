// import { ImageProps } from 'react-native';
import { 
    ImagePickerResponse, 
} from 'react-native-image-picker';
export interface UserProps {
    name?: string;
    email: string;
    password?: string;
}

export interface CommentProps {
    nickname: string;
    text: string;
}

export interface PayloadCommentProps {
    postId: string;
    comment: CommentProps;
}

export interface PostProps{
    id: string;
    nickname: string;
    email: string;
    date?: Date;
    // image: ImageProps;
    image: ImagePickerResponse;
    commentList: CommentProps[];
}

interface PostsReducer {
    posts: PostProps[];
}
export interface ReducerProps {
    user: UserProps;
    posts: PostsReducer;
}

export interface ActionProps {
    type: string;
    payload?: any;
}
