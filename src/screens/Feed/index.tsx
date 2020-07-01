import React, { useState } from 'react';
import { View, StatusBar, ImageProps, FlatList } from 'react-native';

//styles
import styles from './styles';
import colors from '../../configs/colors';

//components 
import Header from '../../components/Header';
import Post from '../../components/Post';

interface CommentProps {
    nickname: string;
    text: string;
}

interface PostProps{
    id: number;
    nickname: string;
    email: string;
    date?: Date;
    image: ImageProps;
    commentList: CommentProps[];
}

const Feed: React.FC = () => {
    const staticPosts = [
        {
            id: Math.random(),
            nickname: 'zjefersound',
            email: 'jefe123@gmail.com',
            image: require('../../assets/imgs/bw.jpg'),
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
            image: require('../../assets/imgs/fence.jpg'),
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
    ];
    const [ posts, setPosts ] = useState<PostProps[]>(staticPosts);
    
    return (
        <>
            <StatusBar 
                barStyle = { colors.secondary > "#888" ? "dark-content" : "light-content" } 
                backgroundColor = {colors.secondary} 
            />
            <View>
                <Header title = 'Swipeit' />
                <FlatList 
                    data = { posts } 
                    keyExtractor = {post => String(post.id)}
                    renderItem = { post => (
                        <Post key = {post.item.id} { ...post.item }/>
                    )}
                />
                    
            </View>
        </>
    );
}

export default Feed;