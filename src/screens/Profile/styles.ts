import { StyleSheet } from 'react-native';

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
    posts: {

    }
    
});

export default styles;