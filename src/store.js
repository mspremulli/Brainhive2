import thunk from 'redux-thunk'
import {createStore, applyMiddleware, compose} from 'redux';
import reducers from './reducers';



const INITIAL_STORE ={};
const middleware = [thunk];

const store = createStore(
  reducers,
  INITIAL_STORE,
  compose(applyMiddleware(...middleware))
)

export default store;
