import React, {Component} from 'react'
import Comment from './Comment'
import toggleOpen from '../decorators/toggleOpen';
import PropTypes from 'prop-types'
import CommentForm from './CommentForm'

class CommentList extends Component {
  

    getBody() {
        const {article : {comments, id}, isOpen} = this.props
        if (!isOpen) return null
        if (!comments) return <section>
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
                {this.getBody()}
            </div>
        )
    }
}

export default toggleOpen(CommentList)