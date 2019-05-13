import React, { Component } from 'react';
import style from '../assets/style/style.css'
import Category from '../components/Category'
class Categories extends Component {

  render() {
      const name = ["Todos","React","Redux","Udacity"]
    return (
        <div className='container space'>
            <nav class="nav nav-pills flex-column flex-sm-row">
            <Category name={name[0]} />
            <Category name={name[1]} />
            <Category name={name[2]} />
            <Category name={name[3]} />
            </nav>
        </div>
    )
  }
}


export default Categories
