import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Alert} from 'react-native';

import { showDrinks } from '../../actions/drinks';

import DrinksLayout from './layout';
import Styles from './styles'



class DrinksList extends Component {

    componentDidMount(){
        this.handleRefresh();
    }

    componentWillReceiveProps (nextProps){
        const {drinks} = this.props;
        if (drinks !== nextProps.drinks && nextProps.drinks.error) {
            Alert.alert('error recuperando tragos');
          }
    }
    handleRefresh = () =>{
        const { showDrinks } = this.props;
        return showDrinks();
    }
   
   static navigationOptions = {
       title: 'Home',
       titleStyle: Styles.navigation,
       tabBarOptions :{
            activeTintColor: 'blue',
            labelStyle: {
            fontSize: 15,
            padding: 12,
            },
            style: {
            backgroundColor: 'white',
            },
        }
   }
  
   render (){
    const {drinksList , drinksIsloading} = this.props;
       return(
           <DrinksLayout 
            loading={drinksIsloading}
            data = {drinksList}
            onRefresh={this.handleRefresh}
           />
       );
   }
}


const mapStateToProps = state => ({

    drinksList: state.drinks.list,
    drinksIsloading: state.drinks.isloading,
   
});
const mapDispatchToProps = dispatch => ({
    showDrinks: () => dispatch(showDrinks()),
});

export default connect(mapStateToProps,mapDispatchToProps)(DrinksList);