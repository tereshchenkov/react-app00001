import React, {Component} from 'react'
import Comment from './Comment'
import Loader from './Loader'
import toggleOpen from '../decorators/toggleOpen'
import PropTypes from 'prop-types'
import CommentForm from './CommentForm'
import { loadArticleComments } from '../AC'
import { connect } from 'react-redux'

class CommentList extends Component {
  
    componentWillReceiveProps({ isOpen, article, loadArticleComments }) {
        if (!this.props.isOpen && isOpen && !article.commentsLoading && !article.commentsLoaded) {
            loadArticleComments(article.id)
        }
    }

    getBody({article: {comments = [], id, commentsLoaded, commentsLoading}, isOpen}) {
        if (!isOpen) return null
        if (commentsLoading) return <Loader />
        if (!commentsLoaded) return null

        if (!comments.length) return <section>
            No comments yet
            <CommentForm articleId = {id}/>
            </section>
    
        const commentElement = comments.map(id => <li key = {id}><Comment id = {id} /></li>)
        return <section>
                <ul>{commentElement}</ul>
                <CommentForm articleId = {id}/>               
            </section>
    }

    render() {
        const {article, isOpen, toggleOpen} = this.props
        return (
            <div>
                <button onClick = {toggleOpen}>
                    {isOpen ? 'hide comments' : 'show comments'}
                </button>
                {this.getBody({article, isOpen})}
            </div>
        )
    }
}

export default connect(null, { loadArticleComments }, null, {pure: false})(toggleOpen(CommentList))