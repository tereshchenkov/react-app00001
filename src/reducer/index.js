import {combineReducers} from 'redux'
import filters from './filters'
import articles from './articles'

export default combineReducers({
    filters,
    articles
})