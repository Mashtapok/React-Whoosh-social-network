import {newsAPI} from "../../api/api";

const SET_ARTICLES = "news/SET_ARTICLES";

const initialState = {
    articles: []
};

const newsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_ARTICLES:
            return {...state, articles: action.articles};
        default:
            return state;
    }
};

//ActionCreators
export const setArticles = (articles) => ({type: SET_ARTICLES, articles});

//ThunkCreators
export const requestArticles = () => async dispatch => {
    try {
        const data = await newsAPI.getNews();
        if (data.status === "ok") {
            dispatch(setArticles(data.articles))
        }
    }
    catch (error) {
        alert("API новостей решил прилечь")
    }
};

export default newsReducer;