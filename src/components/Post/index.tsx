import React, { useState } from 'react';
import { 
    View,
    Image,
    ImageProps,
    
} from 'react-native';

import styles from './styles';
import Author from '../Author';
import Comment from '../Comment';
import AddComment from '../AddComment';
import PostInteraction from '../PostInteraction';

import { PostProps } from '../../common/types';

const Post: React.FC<PostProps> = ({ image, commentList, email, nickname }) => {

    return (
        <View style = { styles.container }>
            <Author nickname = { nickname } email = { email } />
            <Image 
                source = { image } 
                style = { styles.image}
            />
            <PostInteraction />
            <Comment comments = { commentList }/>
            <AddComment nickname = { nickname } email = { email } />
        </View>
    );
}

export default Post;