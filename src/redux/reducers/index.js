import { combineReducers } from 'redux'
import isLogged from './isLogged'
import profile from './profile'
import friends from './friends'

export default combineReducers({
  isLogged,
  profile,
  friends,
})