import { StyleSheet, Platform } from 'react-native';

import colors from '../../configs/colors';
import fonts from '../../configs/fonts';

const styles = StyleSheet.create({
    container: {
        marginTop: Platform.OS === 'ios'? 40 : 0,
        padding: 16,
        borderBottomColor: colors.neutral,
        borderBottomWidth: 1,
        backgroundColor: colors.secondary,
    },
    containerRow: {
        flexDirection: 'row',
        alignItems: "center"
    },
    icon: {
        width: 28,
        height: 28,
        resizeMode: 'contain',
        marginRight: 12,
    },
    title: {
        fontSize: 20,
        fontFamily: fonts.roboto,
        fontWeight: '700',
        color: colors.primary

    }
});

export default styles;