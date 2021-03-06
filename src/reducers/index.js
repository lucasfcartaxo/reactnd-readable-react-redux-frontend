import { combineReducers } from 'redux'

import {
    RECEIVE_CATEGORY
 } from '../actions'


 const categories = (state = {}, action) => {
    switch (action.type) {
      case RECEIVE_CATEGORY:
        return {
          ...state,
          allCategories: action.categories
        }
      default:
        return { ...state }
    }
  }

  export default combineReducers({
    categories
  })