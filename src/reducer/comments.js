import {normalizedComments as defaultState} from '../fixtures'
import { ADD_COMMENT } from '../constants'

const commentsMap = defaultState.reduce((acc, comment) => {
    acc[comment.id] = comment
    return acc
}, {})


export default (commentState = commentsMap, action) => {
    const {type, payload, randomId} = action

    switch (type) {
        case ADD_COMMENT:
            return {...commentState,
                 [randomId] : {...payload.comment, id: randomId}
            }
    }

    return commentState
}