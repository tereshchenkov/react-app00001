import React, {Component} from 'react'
import Comment from './Comment'
import toggleOpen from '../decorators/toggleOpen';
import PropTypes from 'prop-types'
import CommentForm from './CommentForm'

class CommentList extends Component {
    static propTypes = {
        comments: PropTypes.arrayOf(
            PropTypes.object
        ).isRequired
    }

    static defaultProps = {
        comments : []
    }

    getBody() {
        if (!this.props.isOpen) return null
        const {comments} = this.props;
        if (!comments.length) return <section>No comments yet</section>

        const commentElement = comments.map(comment => <li key = {comment.id}><Comment comment = {comment} /></li>)
        return <section>
                <ul>{commentElement}</ul>
                <CommentForm />               
            </section>
    }

    render() {
        const {comments, isOpen, toggleOpen} = this.props
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