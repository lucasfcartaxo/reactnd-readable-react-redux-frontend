import React, { Component } from 'react';
import Navbar from '../components/Nav'
import Categories from '../components/Categories'
import style from '../assets/style/style.css'

class App extends Component {

  render() {
    return (
      <div>
          <Navbar />
          <Categories />
          
     </div>
    )
  }
}


export default App
