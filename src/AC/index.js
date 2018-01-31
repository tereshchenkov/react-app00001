import {CHANGE_SELECTION, DELETE_ARTICLE,
    CHANGE_DATE_RANGE, ADD_COMMENT, LOAD_ALL_ARTICLES} from '../constants'

export function changeSelection(selected) {
    return {
        type: CHANGE_SELECTION,
        payload: { selected }
    }
}

export function deleteArticle(id) {
    return {
        type: DELETE_ARTICLE,
        payload: { id }
    }
}

export function changeDateRange(dateRange) {
    return {
        type: CHANGE_DATE_RANGE,
        payload: {dateRange}
    }
}

export function addComment(comment, articleId) {
    return {
        type: ADD_COMMENT,
        payload: { comment, articleId },
        generateId: true
    }
}

export function loadAllArticles() {
    return {
        type: LOAD_ALL_ARTICLES,
        callAPI: '/api/article'
    }
}