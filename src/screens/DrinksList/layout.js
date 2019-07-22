import React from 'react';
import { FlatList, Text } from 'react-native';

import Container from '../../components/Container';

import styles from './styles';
import DrinkComponent from '../../components/DrinkComponent';

const DrinksLayout = ({ data , isloading , onRefresh }) => (
    <Container>
        <Text style = { styles.title }>Drinks</Text>
        <FlatList
          style= {styles.backgroundList}
          contentContainerStyle= {styles.containerList}
          data= {data}
          refreshing={isloading}
          onRefresh={onRefresh}
          keyExtractor={drink => drink.id}
          renderItem={({drink}) =>(
            <DrinkComponent {...drink} />
          )}
        />
    </Container>
);

export default DrinksLayout;