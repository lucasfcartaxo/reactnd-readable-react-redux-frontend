import React, { Component } from 'react';
import Navbar from '../components/Nav'
import Categories from '../components/Categories'
import PostList from '../components/PostList'
import style from '../assets/style/style.css'

import { connect } from 'react-redux'
import { fetchCategories } from '../actions'

class App extends Component {

  componentDidMount() {
    this.props.fetchCategories()
  }


  categories = () => {
    if( this.props.categories.allCategories ) {
      const { allCategories } = this.props.categories

      return (
        <Categories categories={allCategories}/>
      )
    }
  }

  render() {

    return (
      <div>
          <Navbar />
            { this.categories()}
          <PostList />
          
     </div>
    )
  }
}

function mapStateToProps({categories}) {
  return {
    categories,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    fetchCategories: () => dispatch(fetchCategories())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)