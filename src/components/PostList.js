import React, { Component } from 'react';
import style from '../assets/style/style.css'

class PostList extends Component {

  render() {
    return (
        <div class="row rowespace">
            <div class="col-sm">

          
          <div class="dropdown dropsorted">
         <span class="sortedby">Sorted By </span> 
            <button class="btn btn-roxo dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Date
            </button>
            <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
              <a class="dropdown-item" href="#">Date</a>
              <a class="dropdown-item" href="#">Score</a>
          </div>
</div>
      

      <div class="card cardespace">
        <div class="card-header">
	          Udacity is the best place to learn React
        </div>
        <div class="card-body">
          <h5 class="card-title text-muted"> 
          <i class="fas fa-user-circle"></i> <span> thingtwo</span> 
          <i class="far fa-clock"></i>Jun-28-2016 11:21pm</h5>
          <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
        </div>
        <div class="card-footer text-muted">

        <i class="far fa-edit likes"></i><span class="roxo"> Edit</span>
        <i class="far fa-trash-alt likes"></i><span class="roxo"> Delete</span>
        <span class="espacos">
        <i class="far fa-comment-dots likes"></i> <span class="roxo">2</span>
        </span>
        <span class="espacos">
        <button type="button" class="btn far fa-thumbs-up likes2"></button>
         <span class="badge badge-secondary score">Score: 2</span> 
         <button type="button" class="btn far fa-thumbs-down likes2"></button>
         </span>
        <span class="badge badge-roxo">React</span>
        </div>
      </div>


      <div class="card cardespace">
        <div class="card-header">
	          React is very show JS
        </div>
        <div class="card-body">
          <h5 class="card-title text-muted"> 
          <i class="fas fa-user-circle"></i> <span> João</span> 
          <i class="far fa-clock"></i>Jun-28-2016 11:21pm</h5>
          <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
        </div>
        <div class="card-footer text-muted">

        <i class="far fa-edit likes"></i><span class="roxo"> Edit</span>
        <i class="far fa-trash-alt likes"></i><span class="roxo"> Delete</span>
        <span class="espacos">
        <i class="far fa-comment-dots likes"></i> <span class="roxo">2</span>
        </span>
        <span class="espacos">
        <button type="button" class="btn far fa-thumbs-up likes2"></button>
         <span class="badge badge-secondary score">Score: 60</span> 
         <button type="button" class="btn far fa-thumbs-down likes2"></button>
         </span>
        <span class="badge badge-roxo">Udacity</span>
        </div>
      </div>

      <div class="card cardespace">
        <div class="card-header">
	          Learn Redux in 10 minutes
        </div>
        <div class="card-body">
          <h5 class="card-title text-muted"> 
          <i class="fas fa-user-circle"></i> <span> lucas</span> 
          <i class="far fa-clock"></i>Jun-28-2016 11:21pm</h5>
          <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
        </div>
        <div class="card-footer text-muted">

        <i class="far fa-edit likes"></i><span class="roxo"> Edit</span>
        <i class="far fa-trash-alt likes"></i><span class="roxo"> Delete</span>
        <span class="espacos">
        <i class="far fa-comment-dots likes"></i> <span class="roxo">151</span>
        </span>
        <span class="espacos">
        <button type="button" class="btn far fa-thumbs-up likes2"></button>
         <span class="badge badge-secondary score">Score: -1</span> 
         <button type="button" class="btn far fa-thumbs-down likes2"></button>
         </span>
        <span class="badge badge-roxo">Redux</span>
        </div>
      </div>


</div>
     
      </div>
    )
  }
}


export default PostList
