import { StyleSheet, Platform } from 'react-native';

import colors from '../../configs/colors';
import fonts from '../../configs/fonts';

const styles = StyleSheet.create({
    container: {
        marginTop: Platform.OS === 'ios'? 40 : 0,
        padding: 12,
        borderBottomColor: '#8888',
        borderBottomWidth: 1,
        backgroundColor: colors.secondary,
    },
    containerRow: {
        flexDirection: 'row',
        alignItems: "center"
    },
    icon: {
        width: 24,
        height: 24,
        resizeMode: 'contain',
    },
    title: {
        fontSize: 24,
        fontFamily: fonts.rubik,
        fontWeight: 'bold',
        color: colors.mainText

    }
});

export default styles;