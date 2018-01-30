import {DELETE_ARTICLE, ADD_COMMENT} from '../constants'
import {normalizedArticles as defaultState} from '../fixtures'

const articlesMap = defaultState.reduce((acc, article) => {
    acc[article.id] = article
    return acc
}, {})

export default (articleState = articlesMap, action) => {
    const {type, payload, randomId} = action

    switch (type) {
        case DELETE_ARTICLE:
            delete articleState[payload.id]
            return articleState
        
        case ADD_COMMENT:
            const article = articleState[payload.articleId] 
           
            return {...articleState,
                [payload.articleId]: {
                    ...article,
                    comments: (article.comments || []).concat(randomId)
                }
            }
    }

    return articleState
}