import React from 'react'
import Article from './Article'
import CommentList from './CommentList'

export default function ArticleList({articles}) {
    const articleElement = articles.map(article => {
        return (
            <div key = {article.id}>
                <li>
                    <Article article = {article} />
                    {article.comments ? <CommentList comments = {article.comments} /> : null}
                </li>
            </div>
   )
    })

    return (
        <ul>
            {articleElement}
        </ul>
    )
}