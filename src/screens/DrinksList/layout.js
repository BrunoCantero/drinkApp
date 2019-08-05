import React from 'react';
import { FlatList, Text } from 'react-native';

import Container from '../../components/Container';
import styles from './styles';
import DrinkComponent from '../../components/DrinkComponent';

const DrinksLayout = ({ data , loading , onRefresh }) => (
    <Container> 
        <Text style = { styles.title }>Drinks</Text>
        <FlatList
          style= {styles.backgroundList}
          contentContainerStyle= {styles.containerList}
          data= {data}
          refreshing={loading}
          onRefresh={onRefresh}
          keyExtractor={drink => drink.id}
          renderItem={({item}) =>(
            <DrinkComponent {...item} />
          )}
        />
    </Container>
);

export default DrinksLayout;