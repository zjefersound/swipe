import { StyleSheet, Dimensions } from 'react-native';

import colors from '../../configs/colors';
import fonts from '../../configs/fonts';


const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 12,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.secondary,
    },
    icon: {
        width: 100,
        height: 100,
    },
    iconLabel: {
        fontSize: 28,
        fontFamily: fonts.rubik,
        fontWeight: 'bold',
        color: colors.primary,
        marginBottom: 12,
    },
    inputText: {
        fontSize: 16,
    },
    button: {
        marginTop: 16,
        height: 48,
        width: Dimensions.get('window').width - 64,
        borderRadius: 24,
        backgroundColor: colors.primaryNeutral,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 24
    },
    buttonIcon: {
        fontSize: 18,
        color: colors.imageDetail,
        marginRight: 12
    },
    buttonText: {
        fontSize: 16,
        fontWeight: '700',
        color: colors.imageDetail,
    },
    register: {
        marginTop: 16,
        fontSize: 14,
        color: colors.mainText
    },
    registerColor: {
        fontWeight: 'bold',
        color: colors.primaryNeutral,
    }
});

export default styles;