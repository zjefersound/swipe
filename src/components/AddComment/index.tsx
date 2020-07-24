import React, { useState } from 'react';
import {
    View,
    Text,
    Modal,
    TextInput,
    SafeAreaView,
    TouchableWithoutFeedback,
} from 'react-native';
import { connect } from 'react-redux';

import { addComment } from '../../store/actions/posts';
import { PayloadCommentProps, ReducerProps } from '../../common/types';

import Gravatar from '@krosben/react-native-gravatar';
import Feather from 'react-native-vector-icons/Feather';

import styles from './styles';

interface AddCommentProps {
    postId: string;
    email: string;
    nickname: string;
    onAddComment: Function;
}

const AddComment: React.FC<AddCommentProps> = (
    { postId, email, nickname, onAddComment }
) => {

    const [ comment, setComment ] = useState('');
    const [ editMode, setEditMode ] = useState(false);

    const handleAddComment = () => {
        const payloadComment: PayloadCommentProps = {
            postId: postId,
            comment: {
                nickname: nickname,
                text: comment,
            }
        }

        onAddComment({
            postId: postId,
            comment: {
                nickname: nickname,
                text: comment,
            }
        });

        setEditMode(false);
        setComment('');
    }

    let editCommentArea = null;
    if ( editMode ) {
        editCommentArea = (
            <Modal 
                transparent 
                onRequestClose = {() => setEditMode(false)}
            >
                <View style = {{flex:1}} />
                <SafeAreaView style = { styles.editCommentArea }>
                    <TextInput 
                        style = { styles.inputText }
                        autoFocus
                        value = { comment }
                        onEndEditing = {() => setEditMode(false)}
                        onChangeText = { text => setComment(text) }
                        placeholder = { 'Comente como '+nickname } 
                        placeholderTextColor = '#888'
                        onSubmitEditing = {handleAddComment}
                    />
                    <TouchableWithoutFeedback
                        onPress = {() => setEditMode(false)}
                    >
                        <Feather 
                            name = 'x' 
                            size = {24}
                            style = { styles.cancelEditComment }
                        />
                    </TouchableWithoutFeedback>
                </SafeAreaView>
            </Modal>
        );
    } else {
        editCommentArea = (
            <TouchableWithoutFeedback 
                onPress = { () => setEditMode(true) }
            >
                <View style = {styles.container}>
                    <Gravatar 
                        size = {64}
                        email = { email } 
                        style = { styles.avatar }
                    />
                    <Text style = { styles.addComment }>
                        Adicionar comentário...
                    </Text>
                </View>
            </TouchableWithoutFeedback>
        );
    }
    return (
        <>
            {editCommentArea}
        </>
    );
}

const mapStateToProps = ({user}: ReducerProps ) => {
    return {
        nickname: String(user.name),
        email: user.email
    }
}

const mapDispatchToProps = (dispatch: Function) => {
    return {
        onAddComment: (payload: PayloadCommentProps) => dispatch(addComment(payload))
    }
}

// export default AddComment;

export default connect(mapStateToProps, mapDispatchToProps)(AddComment);