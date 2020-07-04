import { StyleSheet, Dimensions } from 'react-native';

import colors from '../../configs/colors';
import fonts from '../../configs/fonts';


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.secondary,
    },

    //HEADER COM NUMEROS
    avatar: {
        marginVertical: 12,
        marginHorizontal: 20,
        borderWidth: 1,
        height: 88,
        width: 88,
        borderColor: colors.neutral,
        borderRadius: 44,
        backgroundColor: colors.neutral,
        alignItems: 'center',
        justifyContent: 'center'
    },
    headerInfo: {
        flexDirection: 'row',
        marginRight: 20,
    },
    numbersInfo: {
        flexDirection: 'row',
        justifyContent: 'space-around', 
        flex: 1
    },
    numbersInfoItem: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    numbersInfoItemNumber: {
        color: colors.mainText,
        fontSize: 18,
        fontWeight: 'bold'
    },
    numbersInfoItemLabel: {
        color: colors.mainText,
        fontSize: 14
    },

    //INFO DO NOME E DESCRIÇÃO
    textInfo: {
        paddingHorizontal: 20,
        paddingBottom: 32,
        borderBottomColor: colors.secondary2,
        borderBottomWidth: 1
    }, 
    name: {
        color: colors.mainText,
        fontSize: 16,
        fontWeight: 'bold',

    },
    description: {
        fontSize: 14,
        color: colors.subText
    },
    //BOTOES PARA EDITAR PERFIL 
    buttonsBar: {
        paddingVertical: 12,
        paddingHorizontal: 20,
        marginBottom: 8,
        flexDirection: 'row',
        justifyContent: 'flex-end'
    },
    buttonAction: {
        backgroundColor: colors.secondary2,
        height: 32,
        borderRadius: 16,
        paddingHorizontal: 16,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 12
    },
    buttonEditText: {
        color: colors.primary,
        fontSize: 14,
    },
    buttonLogoutText: {
        color: colors.danger,
        fontSize: 14,
    },
    buttonActionLabel: {
        paddingLeft: 12
    }, 
    //TIMELINE DA CONTA
    postList: {
        flexDirection: 'row',
        flexWrap: 'wrap'
    },
    postImage: {
        width: Dimensions.get('window').width / 3,
        height: Dimensions.get('window').width / 3,
        backgroundColor: colors.secondary2,
        borderWidth: 1,
        borderColor: colors.secondary
    },
    
});

export default styles;