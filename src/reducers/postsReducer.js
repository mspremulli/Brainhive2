import posts from '../mock/posts';
import store from '../store';
import {INCREMENT, SUBMIT_FORM} from '../actions/types.js';

const INITIAL_STATE = {
  list:[...posts],
  loading:false,
  errors:{},
  count:0,
}

export default (state = INITIAL_STATE, action) => {
  switch(action.type){
    case INCREMENT:
      return{
        ...state,
        count:action.payload,
      }
    case SUBMIT_FORM:
      const newPost = action.payload;
      newPost.id = store.list[store.list.length-1].id + 1;
      return{
        ...store,
        list:[...store.list, newPost],
      }
    default: return state;
  }
}