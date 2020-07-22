import React, { useState } from 'react';
import { 
    View,
    Text,
    TouchableWithoutFeedback,
    Alert,

} from 'react-native';

import styles from './styles';

import { CommentProps } from '../../common/types';

interface CommentList {
    comments: CommentProps[];
}

const Comment: React.FC<CommentList> = ({ comments }) => {
    const [showAll, setShowAll] = useState(false);
    let list;
    if(comments){
        const visibleComments = showAll ? comments : [comments[0]];  
        list = visibleComments.map((comment, index) => {
            return (
                <View 
                    key = { index }
                    style = { styles.commentContainer }
                >
                    <Text style = { styles.text }>
                        <Text style = { styles.nickname }>
                            { comment.nickname+"  " }
                        </Text>
                        { comment.text }
                    </Text>
                </View>
            );
        });
    }
    return (
        <>
            <View style = { styles.container }> 
                <TouchableWithoutFeedback 
                    onPress = { () => setShowAll( !showAll )}
                    >
                    <Text style = { styles.showAll }>
                        {showAll ? 'Mostrar menos...' : 'Mostrar mais...'}
                    </Text>
                </TouchableWithoutFeedback>
                {list}
            </View>
        </>
    ); 
}

export default Comment;