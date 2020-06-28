import { StyleSheet } from 'react-native';

import colors from '../../configs/colors';
import fonts from '../../configs/fonts';

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.secondary,
        paddingBottom: 8,
    },
    commentContainer: {
        paddingHorizontal: 20,
        paddingTop: 8,
        flexDirection: 'row',
    },
    nickname: {
        color: colors.mainText,
        fontFamily: fonts.rubikBold,
        fontWeight: 'bold',
        fontSize: 16,
    },
    text: {
        color: colors.mainText,
        fontFamily: fonts.rubik,
        fontWeight: 'normal',
        fontSize: 16,
    },
    showAll: {
        paddingTop: 12,
        marginHorizontal: 20,
        fontFamily: fonts.roboto,
        fontSize: 14,
        color: colors.subText,
    }
});

export default styles;