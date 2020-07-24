import React, { useState, FunctionComponent } from 'react';
import { connect } from 'react-redux';
import { addPost } from '../../store/actions/posts';
import { 
    Text, 
    View, 
    Image, 
    Dimensions,
    ScrollView,
    SafeAreaView,
    TouchableOpacity,
    TextInput,
    Alert,
} from 'react-native';
import ImagePicker, { 
    ImagePickerResponse, 
    ImagePickerOptions,
} from 'react-native-image-picker';
import Feather from 'react-native-vector-icons/Feather';
import { UserProps, PostProps, ReducerProps } from '../../common/types';

import styles from './styles';
import Header from '../../components/Header';
import colors from '../../configs/colors';

interface AddPostProps extends UserProps {
    onAddPost: Function;
    navigation: any;
}
const imageInitialState = {
    customButton: '',
    didCancel: false,
    error: '',
    data: '',
    uri: '/',
    isVertical: true,
    width: 0,
    height: 0,
    fileSize: 0,
}

const AddPost: React.FC<AddPostProps> = (props) => {
    const [imageError, setImageError] = useState('');
    const [descriptionError, setDescriptionError] = useState('');

    const [ image, setImage ] = useState<ImagePickerResponse>({
        ...imageInitialState
    });
    const [ comment, setComment ] = useState('');


    const [ filePath, setFilePath ] = useState<ImagePickerResponse>({
        ...imageInitialState
    });

    const chooseFile = () => {
        const options: ImagePickerOptions = {
        title: 'Escolha a imagem',
        maxHeight: Dimensions.get('window').width,
        maxWidth: Dimensions.get('window').width,
        storageOptions: {
            skipBackup: true,
            path: 'images',
        },
        };
        ImagePicker.showImagePicker(options, response => {
        if (response.didCancel) {
        } else {
            let source = response;
            setImage(source);
            setImageError('');
        }
        });
    
    };

    const save = async () => {
        const post: PostProps = await {
            id: String(Math.random()),
            nickname: props.name || '',
            email: props.email,
            image: image,
            commentList: [
                {
                    nickname: props.name || '',
                    text: comment
                }
            ]
        };
        if (post.image.fileSize == 0){
            setImageError('Insira uma imagem!');
        }
        if (!comment) {
            setDescriptionError('Digite uma descrição!');
        }
        
        if (post.image.fileSize > 0 
            && comment) {
            props.onAddPost(post);
            setImage(imageInitialState);
            setComment('');
            props.navigation.navigate('Feed');     
        }
    }

    return (
        <>
        <Header title = 'Criar post'/>
        <ScrollView style = { styles.background }>
            <View style={styles.container}>
            <TouchableOpacity 
                onPress = { chooseFile }
            >
                {image.data === ''
                ? (
                    <View style = { styles.imageContainer }>
                    <Feather 
                        name = 'plus' 
                        size = {100} 
                        color = {colors.secondary} 
                    />
                    </View>
                ) 
                : (
                    <Image
                        source={{ uri: image.uri }}
                        style = { styles.imageContainer }
                    />
                )
                }
            </TouchableOpacity>
            { 
                    imageError
                    ? <Text style = { styles.invalidText }>{imageError}</Text>
                    : null
                }
            <TouchableOpacity 
                onPress = { chooseFile }
                style = { styles.buttonAddImage }
            >
                <Feather 
                    name = 'camera' 
                    size = {20}
                    style = { styles.buttonAddImageIcon }
                />
                <Text style = { styles.buttonAddImageText }>Adicione a imagem</Text>
            </TouchableOpacity>
            <SafeAreaView style = { styles.inputTextContainer }>
                { 
                    descriptionError
                    ? <Text style = { styles.invalidText }>{descriptionError}</Text>
                    : null
                }
                <TextInput 
                    value = { comment }
                    onChangeText = { text => {
                        setDescriptionError('')
                        return setComment(text)
                    } }
                    multiline
                    style = { styles.inputText } 
                    placeholderTextColor = { colors.subText }
                    placeholder = 'Digite a legenda do seu post...'
                />
            </SafeAreaView>
            </View>
        </ScrollView>
        <View style = { styles.buttonSaveContainer }>
            <TouchableOpacity 
                onPress = { save }
                style = { styles.buttonSave }
                activeOpacity = {0.8}
            >
            <Feather 
                name = 'check' 
                size = {20} 
                style = { styles.buttonSaveIcon } 
            />
            <Text style = { styles.buttonSaveText }>Publicar</Text>
            </TouchableOpacity>
        </View>
        </>
    );

}

// export default AddPost;

const mapStateToProps = ({user}: ReducerProps) => {
    return {
        email: user.email,
        name: user.name, 
    }
}

const mapDispatchToProps = (dispatch: Function) => {
    return {
        onAddPost: (post: PostProps) => dispatch(addPost(post))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(AddPost)