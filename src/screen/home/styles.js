import {
    StyleSheet
} from 'react-native';

const styles = StyleSheet.create({
    outerContainer: {
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        marginHorizontal: 10,
        marginBottom: 10,
    },
    container: {
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 10,
        flexDirection: 'row',
    },
    imageContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
    },
    image: {
        width: '80%',
        height: '80%',
        borderRadius: 10,
    },
    newTag: {
        position: 'absolute',
        top: 10,
        right: 10,
        backgroundColor: 'green',
        paddingHorizontal: 5,
        paddingVertical: 3,
        color: 'white',
        borderRadius: 5,
        zIndex: 1,
    },
    textContainer: {
        flex: 1,
        padding: 10,
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    priceContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    price: {
        fontSize: 14,
        fontWeight: 'bold',
    },
    oldPrice: {
        fontSize: 12,
        textDecorationLine: 'line-through',
        marginRight: 5,
    },
    description: {
        fontSize: 12,
    },
    iconsContainer: {
        flexDirection: 'column',
        alignItems: 'flex-end',
        justifyContent: 'space-between',
        padding: 10,
    },
    icon: {
        marginLeft: 5,
        marginRight: 5,
    },
    topIcons: {
        flexDirection: 'row',
        alignItems: 'flex-start',
    },
    bottomIcons: {
        flexDirection: 'row',
        alignItems: 'flex-end',
    },
    buyText: {
        fontWeight: 'bold',
        marginRight: 5,
    },
});

export default styles;