import { combineReducers } from 'redux'
import isLogged from './isLogged'
import isOpen from './isOpen'
import profile from './profile'
import friends from './friends'

export default combineReducers({
  isLogged,
  isOpen,
  profile,
  friends,
})