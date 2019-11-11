import { GET_SPELLS, ITEMS_LOADING } from '../actions/types'

const initialState = {
  spells: [],
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
    case ITEMS_LOADING:
      return {
        ...state,
        loading: true
      }
    default:
      return state
  }
}
