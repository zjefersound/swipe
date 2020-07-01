import React, { useState } from 'react';
import { 
  Text, 
  View, 
  Image, 
  Dimensions,
  Platform,
  ScrollView,
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
      // customButtons: [
      //   { name: 'customOptionKey', title: 'Choose Photo from Custom Option' },
      // ],
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
    <ScrollView>
      <Header title = 'Criar post'/>
      <View style={styles.container}>
        <TouchableOpacity 
          onPress = { chooseFile }
        >
        <Image
          source={{ uri: image.uri }}
          style = { styles.imageContainer }
        />
        </TouchableOpacity>
        <TouchableOpacity 
          onPress = { chooseFile }
          style = { styles.buttonAddImage }
        >
          <Feather name = 'camera' size = {20}/>
          <Text style = { styles.buttonAddImageText }>Adicione a imagem</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );

}

export default AddPost;