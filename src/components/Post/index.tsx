import React, { useState } from 'react';
import { 
    View,
    Image,
    ImageProps,
    
} from 'react-native';

import styles from './styles';
import Author from '../Author';
import Comment from '../Comment';

interface CommentProps {
    nickname: string;
    text: string;
}

interface PostProps{
    image: File;
    commentList: CommentProps[];
}

const Post: React.FC<PostProps> = ({ image, commentList }) => {

    return (
        <View style = { styles.container }>
            <Author nickname = 'zjefersound' email = 'jefeacdc@gmail.com' />
            <Image 
                source = { image } 
                style = { styles.image}
            />
            <Comment comments = {commentList}/>
        </View>
    );
}

export default Post;