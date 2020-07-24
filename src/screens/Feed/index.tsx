import React, { useState } from 'react';
import { View, FlatList } from 'react-native';
import { connect } from 'react-redux';

//styles
import styles from './styles';
import colors from '../../configs/colors';

//components 
import Header from '../../components/Header';
import Post from '../../components/Post';

import { PostProps, ReducerProps } from '../../common/types';

interface FeedProps {
    posts: PostProps[];
}

const Feed: React.FC<FeedProps> = ({posts}) => {

    return (
        <>
            <View style = { styles.background }>
                <Header title = 'Swipeit' />
                <FlatList 
                    data = { posts } 
                    keyExtractor = {post => post.id}
                    renderItem = { post => (
                        <Post key = {post.item.id} { ...post.item }/>
                        // <Post { ...post.item }/>
                    )}
                />
                    
            </View>
        </>
    );
}

// export default Feed;

const mapStateToProps = ({posts}: ReducerProps) => {
    return {
        posts: posts.posts
    }
}

export default connect(mapStateToProps)(Feed);