import {CHANGE, SUBMIT_FORM} from '../actions/types';


const INITIAL_STATE = {
  form:{

    id: 0,
    posterName: "",
    resourceAuthor: "",
    jobSkillLevel: "",
    cohort: "",
    title: "",
    categories: "",
    summary: "",
    link: "",
    resourceType: "",
    datePublished: "",
    videoLength: "",
    timeToComplete: "",
    rating: "",
    comments:[]
  },
  loading:false,
  errors:null
}

export default(store = INITIAL_STATE,action) =>{
  switch(action.type){
    case CHANGE:
      return{
        ...store,
        form:{
          ...store.form,
          [action.payload.field]: action.payload.value

        }
      } 
    
    case SUBMIT_FORM:
      return{
        ...INITIAL_STATE,

      }  
    default: return store;
  }
}