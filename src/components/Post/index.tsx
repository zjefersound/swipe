import React, { useState } from 'react';
import { 
    View,
    Image,
} from 'react-native';

import styles from './styles';
import Author from '../Author';
import Comment from '../Comment';
import AddComment from '../AddComment';
import PostInteraction from '../PostInteraction';

import { PostProps } from '../../common/types';

const Post: React.FC<PostProps> = (
    { id, image, commentList, email, nickname }
) => {
    return (
        <View style = { styles.container }>
            <Author nickname = { nickname } email = { email } />
            <Image 
                source = { image } 
                style = { styles.image}
            />
            <PostInteraction />
            {commentList &&
                <Comment comments = { commentList }/>
            }
            <AddComment 
                postId = {id} 
            />
        </View>
    );
}

export default Post;