import { articleI, newsDispatchTypes , NEWS_SUCCESS, NEWS_FAILED, NEWS_LOADING} from "../Actions/newsActionTypes"

interface DefaultStateI {
    loading: boolean,
    articles: articleI[]

}


const defaultState : DefaultStateI= {
    loading: false,
    articles: []
}


const newsReducer = (state: DefaultStateI = defaultState, action: newsDispatchTypes): DefaultStateI => {
    switch(action.type){
       case NEWS_FAILED: 
       return {
           ...state,
           loading: false
       }
       case NEWS_LOADING: 
       return {
           ...state, 
           loading: true
       } 
       case NEWS_SUCCESS: 
       return {
           loading: false,
           articles: action.payload 
       }
       default: 
        return state
    }
}


export default newsReducer