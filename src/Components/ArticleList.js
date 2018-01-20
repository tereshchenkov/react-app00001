import React, {Component} from 'react'
import PropTypes from 'prop-types'
import Article from './Article'
import accordion from '../decorators/accordion';

class ArticleList extends Component {

    static propTypes = {
        articles: PropTypes.arrayOf(
            PropTypes.object
        ).isRequired
    }


    render() {
        const {openId, toggleOpenAccordion} = this.props
        const articleElement = this.props.articles.map(article => {
            return <li key = {article.id}>
                        <Article 
                            article = {article} 
                            isOpen = {article.id === openId}
                            toggleOpen = {toggleOpenAccordion.bind(null, article.id)}
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

export default accordion(ArticleList)