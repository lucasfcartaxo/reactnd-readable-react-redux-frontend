import React, { Component } from 'react';
import style from '../assets/style/style.css'

class NavCategories extends Component {

  render() {
    return (
                <a class="flex-sm-fill text-sm-center nav-link separator" href="#">{this.props.name}
                {this.props.name === 'udacity' ? null :   
                <i class="fas fa-angle-right teste32"></i> }
                </a>   
    )
  }
}


export default NavCategories
