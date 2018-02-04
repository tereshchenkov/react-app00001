import {CHANGE_SELECTION, DELETE_ARTICLE,
    CHANGE_DATE_RANGE, ADD_COMMENT, LOAD_ALL_ARTICLES, LOAD_ARTICLE, START, SUCCESS, FAIL, LOAD_ARTICLE_COMMENTS} from '../constants'
import {push, replace} from 'react-router-redux'

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

export function loadArticleComments(articleId) {
    return {
        type: LOAD_ARTICLE_COMMENTS,
        payload: { articleId },
        callAPI: `/api/comment?article=${articleId}`
    }
}
export function loadArticle(id) {
    return (dispatch) => {
        dispatch({
            type: LOAD_ARTICLE + START,
            payload: { id }
        })

        setTimeout(() => {
            fetch(`/api/article/${id}`)
                .then(res => {
                    if (res.status >= 400) {
                        throw new Error(res.statusText)
                    }
                    return res.json()
                })
                .then( response => dispatch({
                    type: LOAD_ARTICLE + SUCCESS,
                    payload: {id, response}
                }))
                .catch( error => {
                    dispatch({
                        type: LOAD_ARTICLE + FAIL,
                        payload: { id, error}
                    })
                })
        }, 500)
    }
}