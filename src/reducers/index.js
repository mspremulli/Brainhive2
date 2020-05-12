import {combineReducers} from 'redux'
import postReducer from './postsReducer';
import addPostReducer from './addPostReducers'

export default combineReducers({
  posts:postReducer,
  newPost:addPostReducer,
})