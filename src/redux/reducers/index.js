import { combineReducers } from 'redux'
import isLogged from './isLogged'
import isOpen from './isOpen'

export default combineReducers({
  isLogged,
  isOpen
})