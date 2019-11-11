import { combineReducers } from 'redux'
import characterReducer from './characterReducer'
import externalAPIReducer from './externalAPIReducer'

export default combineReducers({
  character: characterReducer,
  external: externalAPIReducer
})
