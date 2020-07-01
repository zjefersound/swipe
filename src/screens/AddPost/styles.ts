import { 
    StyleSheet,
    Dimensions,
    Platform,
} from 'react-native';

import colors from '../../configs/colors';
import fonts from '../../configs/fonts';

const styles = StyleSheet.create({
    background: {
        flex: 1,
        backgroundColor: colors.secondary,
    },
    container: {
        flex: 1,
        backgroundColor: colors.secondary,
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    imageContainer: { 
        width: Dimensions.get('window').width, 
        height: Dimensions.get('window').width,
        backgroundColor: colors.secondary3, 
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonAddImage: {
        backgroundColor: colors.secondary,
        flexDirection: 'row',
        width: Dimensions.get('window').width, 
        padding: 12,
        alignItems: 'center',
        justifyContent: 'center',
        borderBottomWidth: 1,
        borderBottomColor: colors.secondary2,
    },
    buttonAddImageText: {
        fontSize: 16,
        marginLeft: 12,
        color: colors.primary,
    },
    buttonAddImageIcon: {
        color: colors.primary,
    },
    inputTextContainer: {
        minHeight: 90,
        backgroundColor: colors.secondary,
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
    },
    inputText: {
        fontFamily: fonts.roboto,
        fontSize: 16,
        width: Dimensions.get('window').width, 
        paddingHorizontal: 20,
        paddingVertical: 12,
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        color: colors.mainText

    },
    buttonSaveContainer: {
        backgroundColor: colors.secondary,
        paddingVertical: 12
    },
    buttonSave: {
        backgroundColor: colors.primaryNeutral,
        marginHorizontal: 20,
        height: 44,
        borderRadius: 22,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row'
    },
    buttonSaveIcon: {
        color: colors.imageDetail
    },
    buttonSaveText: {
        color: colors.imageDetail,
        fontSize: 18,
        marginLeft: 12,

    }
});

export default styles;