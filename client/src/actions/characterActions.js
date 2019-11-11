import axios from 'axios'
import {
  GET_CHARACTERS,
  ITEMS_LOADING,
  ADD_CHARACTER,
  DELETE_CHARACTER
} from './types'

export const getCharacters = () => dispatch => {
  dispatch(setItemsLoading())
  axios
    .get('/api/characters')
    .then(res => {
      console.log(res.data)
      dispatch({
        type: GET_CHARACTERS,
        payload: res.data
      })
    })
    .catch(err => console.log(`ERROR: ${err}`))
}

export const addCharacter = character => dispatch => {
  axios
    .post('/api/characters', character)
    .then(res =>
      dispatch({
        type: ADD_CHARACTER,
        payload: res.data
      })
    )
    .catch(err => console.log(err))
}

export const deleteCharacter = id => dispatch => {
  axios.delete(`/api/characters/${id}`).then(res =>
    dispatch({
      type: DELETE_CHARACTER,
      payload: id
    })
  )
}

export const setItemsLoading = () => {
  return {
    type: ITEMS_LOADING
  }
}
