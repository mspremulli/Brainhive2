const INITIAL_STATE = {
  list:[]

}


export default (state = INITIAL_STATE, action) => {
  switch(action.type){
    case "INCREMENT":
      return{
        ...state,
        count:action.payload,
      }
    default: return state;
  }
}