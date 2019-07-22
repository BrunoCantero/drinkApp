import React from 'react';
import  { View, Text, Image  } from 'react-native';

import styles from './styles';

const DrinkComponent = ({name,photo}) => (
    <View style = {styles.drinkContainer}>
        <Image style={styles.drinkPhoto} source= {{ uri: photo}} />
        <Text style={styles.drinkTitle}> { name }  </Text>
    </View>
);

export default DrinkComponent;