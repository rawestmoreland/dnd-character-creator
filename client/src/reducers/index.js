import { combineReducers } from 'redux'
import spellReducer from './spellReducer'
import characterReducer from './characterReducer'

export default combineReducers({
  character: characterReducer,
  spells: spellReducer
})
