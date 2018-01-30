import React, {Component} from 'react'
import CommentList from './CommentList'
import toggleOpen from '../decorators/toggleOpen'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {deleteArticle} from '../AC'

class Article extends Component {
    static propTypes = {
        article: PropTypes.shape({
            id: PropTypes.string.isRequired,
            title: PropTypes.string.isRequired,
            text: PropTypes.string.isRequired
        }).isRequired
    }

    handleDelete = () => {
        const {deleteArticle, article} = this.props
        deleteArticle(article.id)
        console.log('delete', article.id);
    }
    
    getBody() {
        if (!this.props.isOpen) return null
        const {article} = this.props;
        return (
            <div>
              <section>{article.text}</section>
              <CommentList article = {article} />
            </div>
        )
    }

    render() {
        const {article, isOpen, toggleOpen} = this.props
        return (
            <div>
                <h3>{article.title}</h3>
                <button onClick = {toggleOpen}>
                    {isOpen ? 'close' : 'open'}
                </button>
                <button onClick = {this.handleDelete}>
                    DELETE
                </button>
                {this.getBody()}
            </div>
        )
    }
}

export default connect((state, ownProps) => {
    return {
        article: state.articles[ownProps.id]
    }
},{deleteArticle})(Article)