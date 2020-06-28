import React, { useState } from 'react';
import {
    Alert,
    View,
    Text,
    Modal,
    TextInput,
    SafeAreaView,
    TouchableWithoutFeedback,
} from 'react-native';
import Gravatar from '@krosben/react-native-gravatar';
import Feather from 'react-native-vector-icons/Feather';

import styles from './styles';

interface AddCommentProps {
    email: string;
    nickname: string;
}

const AddComment: React.FC<AddCommentProps> = ({email, nickname}) => {
    const [ comment, setComment ] = useState('');
    const [ editMode, setEditMode ] = useState(false);

    const handleAddComment = () => {
        Alert.alert('Adicionado!', comment);
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

export default AddComment;