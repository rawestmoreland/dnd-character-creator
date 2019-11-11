import {
  GET_CHARACTERS,
  ITEMS_LOADING,
  ADD_CHARACTER,
  DELETE_CHARACTER
} from '../actions/types'

const initialState = {
  characters: [],
  loading: false
}

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_CHARACTERS:
      return {
        ...state,
        characters: action.payload,
        loading: false
      }
    case ADD_CHARACTER:
      return {
        ...state,
        characters: [action.payload, ...state.characters]
      }
    case DELETE_CHARACTER:
      return {
        ...state,
        characters: state.characters.filter(char => char._id !== action.payload)
      }
    case ITEMS_LOADING:
      return {
        ...state,
        loading: true
      }
    default:
      return state
  }
}
