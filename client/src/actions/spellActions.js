import axios from 'axios'
import { GET_SPELLS, ITEMS_LOADING } from './types'

// Proxy to get around CORS
const proxy = 'https://cors-anywhere.herokuapp.com/'

export const getSpells = () => dispatch => {
  dispatch(setItemsLoading())
  axios
    .get(`${proxy}https://api.open5e.com/spells/`)
    .then(res =>
      dispatch({
        type: GET_SPELLS,
        payload: res.data
      })
    )
    .catch(err => console.log(err))
}

export const setItemsLoading = () => {
  return {
    type: ITEMS_LOADING
  }
}
