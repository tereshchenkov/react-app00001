import React from 'react'
import Article from './Article'
import PropTypes from 'prop-types'

export default function ArticleList({articles}) {

    const articleElement = articles.map(article => {
        return <li key = {article.id}><Article article = {article} /></li>
    })

    return (
        <ul>
            {articleElement}
        </ul>
    )
}


ArticleList.propTypes = {
    articles: PropTypes.arrayOf(
        PropTypes.object
    ).isRequired
}