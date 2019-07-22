import React from 'react';
import { SafeAreaView } from 'react-native';

import styles from './styles';

const Container = ( { children }) => (
    <SafeAreaView style={styles.Container} >
        {children}
    </SafeAreaView>
);

export default Container;