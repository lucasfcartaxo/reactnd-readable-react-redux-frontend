import React, { Component } from 'react';
import style from '../assets/style/style.css'

class NavBar extends Component {

  render() {
    return (
      <div>
        <nav className="navbar navbar-light teste2">
          <a class="navbar-brand" href="#teste">
          <i class="fab fa-react"></i>
             <span className="teste"> Readable</span>
          </a>

          <a class="navbar-brand testeborda" href="#teste">
          <i class="fas fa-plus-circle newpost"></i>
             <span className="newpost"> New Post </span>
          </a>
       
        </nav>
        
      </div>
    )
  }
}


export default NavBar
