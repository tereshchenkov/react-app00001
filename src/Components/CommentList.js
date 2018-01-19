import React, {Component} from 'react'
import Comment from './Comment'
import toggleOpen from '../decorators/toggleOpen';

class CommentList extends Component {
    static defaultProps = {
        comments : []
    }

    getBody() {
        if (!this.props.isOpen) return null
        const {comments} = this.props;
        if (!comments.length) return <section>No comments yet</section>

        const commentElement = comments.map(comment => <li key = {comment.id}><Comment comment = {comment} /></li>)
        return <section><ul>{commentElement}</ul></section>
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