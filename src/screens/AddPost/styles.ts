import { 
    StyleSheet,
    Dimensions,
    Platform,
} from 'react-native';

import colors from '../../configs/colors';
import fonts from '../../configs/fonts';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.secondary,
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    imageContainer: { 
        width: Dimensions.get('window').width, 
        height: Dimensions.get('window').width,
        backgroundColor: colors.secondary3 
    },
    buttonAddImage: {
        backgroundColor: colors.secondary,
        flexDirection: 'row',
        width: Dimensions.get('window').width, 
        padding: 12,
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonAddImageText: {
        fontSize: 16,
        marginLeft: 12,
        color: colors.primary,
    },
    buttonAddImageIcon: {
        color: colors.primary,
    },
});

export default styles;