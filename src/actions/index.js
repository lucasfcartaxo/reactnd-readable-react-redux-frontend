import * as API from '../api'

export const RECEIVE_CATEGORY = 'RECEIVE_CATEGORY'

export function fetchCategories() {
    return dispatch => {
      API.getAllCategories().then(categories => dispatch({ type: RECEIVE_CATEGORY, categories }))
    }
  }

