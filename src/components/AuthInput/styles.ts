import { StyleSheet, Dimensions } from 'react-native';

import colors from '../../configs/colors';
import fonts from '../../configs/fonts';

const styles = StyleSheet.create({
    container: {
        marginTop: 16,
        height: 48,
        width: Dimensions.get('window').width - 64,
        borderRadius: 24,
        backgroundColor: colors.secondary2,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 24,
    },
    invalid: {
        borderWidth: 1,
        borderColor: colors.danger
    },
    invalidText: {
        fontSize: 12,
        marginTop: 8,
        color: colors.danger
    },
    inputText: {
        paddingHorizontal: 16,
        fontSize: 16,
        color: colors.mainText
    },
    inputTextIcon: {
        fontSize: 16,
        color: colors.primary
    },

});


export default styles;
