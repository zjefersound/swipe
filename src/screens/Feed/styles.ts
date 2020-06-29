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
});

export default styles;