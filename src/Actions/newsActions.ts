import { Dispatch } from "redux"
import { newsDispatchTypes, NEWS_FAILED, NEWS_LOADING, NEWS_SUCCESS } from "./newsActionTypes"
import axios from 'axios'


export const getNews = () => async (dispatch: Dispatch<newsDispatchTypes>) => {
    try {
        dispatch({
            type: NEWS_LOADING
        }) 
    const res = await axios.get('https://newsapi.org/v2/everything?q=ai&apiKey=6c1b0c58f8544dccb30f21bfaa6fa7b5&pageSize=100')

    dispatch({
        type: NEWS_SUCCESS,
        payload: res.data.articles
    })
    
    } catch (e) {
        dispatch({
            type: NEWS_FAILED
        })
        
    }

}