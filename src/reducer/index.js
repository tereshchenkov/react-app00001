import {combineReducers} from 'redux'
import filters from './filters'
import articles from './articles'
import comments from './comments'

export default combineReducers({
    filters,
    articles,
    comments
})