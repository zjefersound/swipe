import { StyleSheet } from 'react-native';

import colors from '../../configs/colors';
import fonts from '../../configs/fonts';

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.secondary,
        paddingBottom: 12,
    },
    commentContainer: {
        paddingVertical: 12,
        padding: 20,
        flexDirection: 'row',
        minHeight: 48,
    },
    nickname: {
        fontFamily: fonts.rubikBold,
        fontWeight: 'bold',
        fontSize: 16,
    },
    text: {
        fontFamily: fonts.rubik,
        fontWeight: 'normal',
        fontSize: 16,
    },
    showAll: {
        marginHorizontal: 20,
        fontFamily: fonts.roboto,
        fontSize: 14,
        color: colors.subText,
    }
});

export default styles;