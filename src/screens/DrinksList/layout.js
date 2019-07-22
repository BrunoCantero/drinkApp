import React from 'react';
import { FlatList, Text } from 'react-native';
import PropTypes from 'prop-types';

import Container from '../../components/Container';

import styles from './styles';
import DrinkComponent from '../../components/DrinkComponent';

const drinksProps = {
 id: PropTypes.string.isRequired,
 name: PropTypes.string.isRequired,
 photo: PropTypes.string.isRequired,
};

const drinksStateProps = {
    isloading: PropTypes.bool.isRequired,
    error: PropTypes.bool.isRequired,
    list: PropTypes.arrayOf(PropTypes.shape(drinksProps)).isRequired,
};

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

DrinksLayout.PropTypes = {
    data: PropTypes.arrayOf(PropTypes.shape(drinksProps)).isRequired,
    isloading: PropTypes.bool.isRequired,
    onRefresh: PropTypes.func.isRequired,
};


export default DrinksLayout;