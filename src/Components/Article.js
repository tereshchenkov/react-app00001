import React, {Component} from 'react'
import CommentList from './CommentList'
import toggleOpen from '../decorators/toggleOpen'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {deleteArticle, loadArticle} from '../AC'
import Loader from './loader'
class Article extends Component {
    static propTypes = {
        id: PropTypes.string.isRequired,
        isOpen: PropTypes.bool,
        toggleOpen: PropTypes.func,
        //from connect
        article: PropTypes.shape({
            id: PropTypes.string,
            title: PropTypes.string,
            text: PropTypes.string
        })
    }

    componentDidMount() {
        const {loadArticle, article, id} = this.props
        if (!article || (!article.text && !article.loadind)) loadArticle(id)
    }

    handleDelete = () => {
        const {deleteArticle, article} = this.props
        deleteArticle(article.id)
        console.log('delete', article.id);
    }
    
    getBody() {

        const {article, isOpen} = this.props;
        if (!isOpen) return null
        if (article.loadind) return <Loader />
        return (
            <div>
              <section>{article.text}</section>
              <CommentList article = {article} />
            </div>
        )
    }

    render() {
        const {article, isOpen, toggleOpen} = this.props
        if (!article) return null
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
            article: state.articles.entities.get(ownProps.id)
        }
    },
    {deleteArticle, loadArticle},
    null,
    { pure: true}
)(Article)