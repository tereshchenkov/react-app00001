import React, {Component} from 'react'
import PropTypes from 'prop-types'
import Article from './Article'

export default class ArticleList extends Component {

    static propTypes = {
        articles: PropTypes.arrayOf(
            PropTypes.object
        ).isRequired
    }

    state = {
        openArticleId: null
    }

    toggleOpenArticle (openArticleId) {
        
        if (openArticleId === this.state.openArticleId) {
           this.setState({openArticleId : null})
        } else {
            this.setState({openArticleId})
        }
    } 

    render() {
        const articleElement = this.props.articles.map(article => {
            return <li key = {article.id}>
                        <Article 
                            article = {article} 
                            isOpen = {article.id === this.state.openArticleId}
                            toggleOpen = {this.toggleOpenArticle.bind(this, article.id)}
                        />
                    </li>
        })

        return (
            <ul>
                {articleElement}
            </ul>
        )
    }
}