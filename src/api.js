const api = 'http://localhost:3001'

const headers = {
  "Accept": "application/json",
  "Authorization": "free",
  "Content-Type": "application/json"
}

export const getAllCategories = () =>
  fetch(`${api}/categories`, { headers })
    .then(res => res.json())