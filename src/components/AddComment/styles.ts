import { StyleSheet } from 'react-native';

import colors from '../../configs/colors';
import fonts from '../../configs/fonts';

const styles = StyleSheet.create({
    container: {
        padding: 12,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: colors.secondary,
    },
    avatar: {
        borderRadius: 12,
        backgroundColor: colors.neutral,
        resizeMode: 'contain'
    },
    addComment: {
        marginLeft: 12,
        fontFamily: fonts.roboto,
        color: colors.mainText
    },
    addCommentIcon: {
        marginLeft: 12,
        color: colors.mainText,
    },
    editCommentArea: {
        flexDirection: 'row',
        alignItems: 'center',
        borderTopWidth: 1,
        borderColor: colors.neutral,
        backgroundColor: colors.secondary2,
    },
    cancelEditComment: {
        margin: 12,
        color: colors.mainText,
    },
    inputText: {
        flex: 1,
        paddingHorizontal: 12,
        color: colors.mainText,
        fontFamily: fonts.roboto,
        fontSize: 16
    },
});

export default styles;