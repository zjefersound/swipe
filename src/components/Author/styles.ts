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
        width: 24,
        height: 24,
        borderRadius: 12,
        backgroundColor: '#8888',
    },
    nickname: {
        fontFamily: fonts.rubikBold,
        fontWeight: 'bold',
        marginLeft: 12,
        fontSize: 16,
    }
});

export default styles;