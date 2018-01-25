import React, {Component} from 'react'
import PropTypes from 'prop-types'
import Article from './Article'
import accordion from '../decorators/accordion'
import Filters from './Filters'
import {connect} from 'react-redux'

class ArticleList extends Component {

    static propTypes = {
        articles: PropTypes.arrayOf(
            PropTypes.object
        ).isRequired
    }


    render() {
        const {openId, toggleOpenAccordion, articles} = this.props
        const articleElement = articles.map(article => {
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

export default connect(({filters, articles}) => {
    const {selected, dateRange: {from, to}} = filters

    const filteredArticles = articles.filter( article => {
        const published = Date.parse(article.date)
        return (!selected.length || selected.includes(article.id)) 
                &&
                (!from || !to ||(published > from && published < to ))
    })
    
    return {
    articles: filteredArticles
    }
})(accordion(ArticleList))