import React, { Component } from 'react';
import { connect } from 'react-redux';

import { showDrinks } from '../../actions/drinks';

import DrinksLayout from './layout';

class DrinksList extends Component {
    
    componentDidMount(){
        this.handleRefresh();
    }

   handleRefresh = () => this.props.showDrinks();

   render (){
       const {drinks} = this.props;
       return(
           <DrinksLayout 
            isloading={drinks.isloading}
            data = {drinks.list}
            onRefresh={this.handleRefresh}
           />
       );
   }
}

const mapStateToProps = state => ({
    drinks: state.drinks.toObject(),
});

const mapDispatchToProps = dispatch => ({
    showDrinks: () => dispatch(showDrinks()),
});

export default connect(mapStateToProps,mapDispatchToProps)(DrinksList);