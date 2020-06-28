import { Dimensions, StyleSheet, Platform } from 'react-native';

import colors from '../../configs/colors';
import fonts from '../../configs/fonts';

const styles = StyleSheet.create({
    container: {
        borderBottomColor: colors.neutral,
        borderBottomWidth: 1,
        backgroundColor: colors.secondary,
        padding: 12,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    iconsLeft: {
        flexDirection: 'row'
    },
    icon: {
        height: 28,
        width: 28,
        color: colors.subText,
        marginRight: 12,
    },
    iconEnd: {
        height: 28,
        width: 28,
        color: colors.subText,
    },
});

export default styles;