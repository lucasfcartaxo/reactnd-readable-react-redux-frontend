import React, { Component } from 'react';
import style from '../assets/style/style.css'
import NavCategories from '../components/NavCategories'
class Categories extends Component {

  render() {

      const all = { name: "Todos", path: "all"}
      const { categories } = this.props.categories
      console.log('CATEGORIAS AAAAAAAAAAAAAAAA',categories)
    return (
        <div className='container space'>
            <nav class="nav nav-pills flex-column flex-sm-row">
            <NavCategories name={all.name} />
            {categories.map((categories) => (
            <NavCategories name={categories.name} />
            
            ))}
            
            </nav>
        </div>
    )
  }
}


export default Categories
