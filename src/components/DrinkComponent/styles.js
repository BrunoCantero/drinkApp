import { StyleSheet } from 'react-native';

const photo_size = 70;

const styles = StyleSheet.create ({
    drinkContainer:{
        backgroundColor:'#FFFFFF',
        flexDirection:'row',
        marginHorizontal:13,
        marginVertical: 7,
        padding: 13,
        shadowRadius: 5,
        shadowOpacity: 0.08,
        elevation: 3,
    },
    drinkPhoto:{
        width: photo_size,
        height: photo_size,
    },
    drinkTitle: {
        flex:2,
        color: '#201A19',
        fontSize: 20,
        paddingHorizontal : 30,
        fontWeight:'bold',
    },
});

export default styles;