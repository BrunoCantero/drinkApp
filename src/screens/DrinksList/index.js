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
        const { showDrinks } = this.props
        return showDrinks();
    }
   
   static navigationOptions = {
       title: 'Drinks',
       headerTitleStyle: Styles.navigation,
   }
   
   render (){
    const {drinks} = this.props;
       return(
           <DrinksLayout 
            loading={drinks.isloading}
            data = {drinks.list}
            onRefresh={this.handleRefresh}
           />
       );
   }
}


const mapStateToProps = (state) => {
    return{
    drinks: state.drinks.toObject(),
  };
 }
const mapDispatchToProps = dispatch => ({
    showDrinks: () => dispatch(showDrinks()),
});

export default connect(mapStateToProps,mapDispatchToProps)(DrinksList);