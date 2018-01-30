import {createStore, applyMiddleware} from 'redux'
import reducer from '../reducer'
import logger from '../middlewares/logger'
import generateId from '../middlewares/generateId'

const enhancer = applyMiddleware(generateId, logger)

const store = createStore(reducer, {}, enhancer);


//dev only 
window.store = store

export default store