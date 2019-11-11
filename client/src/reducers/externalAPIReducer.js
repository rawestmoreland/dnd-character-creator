import {
  GET_SPELLS,
  GET_CLASSES,
  GET_RACES,
  ITEMS_LOADING
} from '../actions/types'

const initialState = {
  spells: {},
  classes: {},
  races: {},
  loading: false
}

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_SPELLS:
      return {
        ...state,
        spells: action.payload,
        loading: false
      }
    case GET_CLASSES:
      return {
        ...state,
        classes: action.payload,
        loading: false
      }
    case GET_RACES:
      return {
        ...state,
        races: action.payload,
        loading: false
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
