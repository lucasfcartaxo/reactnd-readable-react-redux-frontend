import React, { Component } from 'react';
import style from '../assets/style/style.css'

class Category extends Component {

  render() {
    return (
                <a class="flex-sm-fill text-sm-center nav-link separator" href="#">{this.props.name}
                {this.props.name === 'Javascript' ? null :   
                <i class="fas fa-angle-right disabled"></i> }
                </a>   
    )
  }
}


export default Category
