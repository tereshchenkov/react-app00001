import React, {Component} from 'react'
import PropTypes from 'prop-types'
import Article from './Article'
import accordion from '../decorators/accordion'
import Filters from './Filters'

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
            <div>
                <Filters articles = {this.props.articles} />
                <ul>
                    {articleElement}
                </ul>
            </div>
        )
    }
}

export default accordion(ArticleList)