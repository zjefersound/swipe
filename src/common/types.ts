import { ImageProps } from 'react-native';
import ImagePicker, { 
    ImagePickerResponse, 
} from 'react-native-image-picker';
export interface UserProps {
    name?: string;
    email: string;
    password?: string;
}
interface PostsReducer {
    posts: PostProps[];
}
export interface ReducerProps {
    user: UserProps;
    posts: PostsReducer;
}

export interface CommentProps {
    nickname: string;
    text: string;
}

export interface PostProps{
    id: number;
    nickname: string;
    email: string;
    date?: Date;
    // image: ImageProps;
    image: ImagePickerResponse;
    commentList: CommentProps[];
}

export interface ActionProps {
    type: string;
    payload?: any;
}
