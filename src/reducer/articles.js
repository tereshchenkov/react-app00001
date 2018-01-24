import {DELETE_ARTICLE} from '../constants'
import {articles as defaultState} from '../fixtures'

export default (articleState = defaultState, action) => {
    const {type, payload} = action

    switch (type) {
        case DELETE_ARTICLE:
            return articleState.filter((article) => article.id != payload.id)
    }

    return articleState
}