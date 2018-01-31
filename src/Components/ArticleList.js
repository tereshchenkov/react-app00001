import React, {Component} from 'react'
import PropTypes from 'prop-types'
import Article from './Article'
import accordion from '../decorators/accordion'
import Filters from './Filters'
import {connect} from 'react-redux'
import {filtratedArticlesSelector} from '../selectors'
import {loadAllArticles} from '../AC'

class ArticleList extends Component {

    static propTypes = {
        articles: PropTypes.arrayOf(
            PropTypes.object
        ).isRequired
    }

    componentDidMount() {
        const {loadAllArticles} = this.props;
        loadAllArticles();
    }
    render() {
        const {openId, toggleOpenAccordion, articles} = this.props
        const articleElement = articles.map(article => {
            return <li key = {article.id}>
                        <Article 
                            id = {article.id} 
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

export default connect((state) => {
    return {
        articles: filtratedArticlesSelector(state)
    }
}, {loadAllArticles})(accordion(ArticleList))