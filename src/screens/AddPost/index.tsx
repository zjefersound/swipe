import React, { useState } from 'react';
import { 
  Text, 
  View, 
  Image, 
  Dimensions,
  Platform,
  ScrollView,
  SafeAreaView,
  Alert,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import ImagePicker, { 
  ImagePickerResponse, 
  ImagePickerOptions,
} from 'react-native-image-picker';
import Feather from 'react-native-vector-icons/Feather';

import styles from './styles';
import Header from '../../components/Header';
import colors from '../../configs/colors';

interface AddPostProps {
  props: any;
}

const AddPost: React.FC<AddPostProps> = ({props}) => {
  const [ image, setImage ] = useState<ImagePickerResponse>({
    customButton: '',
    didCancel: false,
    error: '',
    data: '',
    uri: '/',
    isVertical: true,
    width: 0,
    height: 0,
    fileSize: 0,
  });
  const [ comment, setComment ] = useState('');


  const [ filePath, setFilePath ] = useState<ImagePickerResponse>({
    customButton: '',
    didCancel: false,
    error: '',
    data: '',
    uri: '/',
    isVertical: true,
    width: 0,
    height: 0,
    fileSize: 0,
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
      }
    });
  
  };

  const save = async () => {
    Alert.alert('Boa', comment);
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
              <TextInput 
                value = { comment }
                onChangeText = { text => setComment(text) }
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

export default AddPost;