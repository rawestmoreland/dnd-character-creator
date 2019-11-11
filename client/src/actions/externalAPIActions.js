import axios from 'axios'
import { GET_SPELLS, GET_CLASSES, GET_RACES, ITEMS_LOADING } from './types'

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

export const getClasses = () => dispatch => {
  dispatch(setItemsLoading())
  axios
    .get(`https://api.open5e.com/classes/`)
    .then(res =>
      dispatch({
        type: GET_CLASSES,
        payload: res.data
      })
    )
    .catch(err => console.log(err))
}
export const getRaces = () => dispatch => {
  dispatch(setItemsLoading())
  axios
    .get(`https://api.open5e.com/races/`)
    .then(res =>
      dispatch({
        type: GET_RACES,
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
