import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, Image, Dimensions } from 'react-native';
import ImagePicker from 'react-native-image-picker';

export default class AddPost extends React.Component {
    constructor(props: any) {
        super(props);
        this.state = {
            filePath: {},
        };
    }
    chooseFile = () => {
      const options = {
        title: 'Select Image',
        customButtons: [
            { name: 'customOptionKey', title: 'Choose Photo from Custom Option' },
        ],
        storageOptions: {
            skipBackup: true,
            path: 'images',
        },
      };
      ImagePicker.showImagePicker(options, response => {
        //console.log('Response = ', response);
        if (response.didCancel) {
          //console.log('User cancelled image picker');
        } else if (response.error) {
          //console.log('ImagePicker Error: ', response.error);
        } else if (response.customButton) {
          //console.log('User tapped custom button: ', response.customButton);
          //alert(response.customButton);
        } else {
          let source = response;
          // You can also display the image using data:
          //let source = { uri: 'data:image/jpeg;base64,' + response.data };
          this.setState({
            filePath: source,
          });
        }
      });
    };
    render() {
      return (
        <View style={styles.container}>
          <View style={styles.container}>
            {/* <Image 
            source={{ uri: this.state.filePath.path}} 
            style={{width: 100, height: 100}} /> */}
            {/* <Image
              source={{
                uri: 'data:image/jpeg;base64,' + this.state.filePath.data,
              }}
              style={{ width: 100, height: 100 }}
            /> */}
            <Image
              source={{ uri: this.state.filePath.uri }}
              style={{ width: Dimensions.get('window').width , height: Dimensions.get('window').width }}
            />
            {/* <Text style={{ alignItems: 'center' }}>
              {this.state.filePath.uri}
            </Text> */}
            <Button title="Escolha a foto" onPress={this.chooseFile.bind(this)} />
          </View>
        </View>
      );
    }
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'flex-start',
    },
});