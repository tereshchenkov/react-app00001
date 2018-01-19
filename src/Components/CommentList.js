import React, {Component} from 'react'
import Comment from './Comment'

export default class CommentList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isOpen: false
        }
    }

    getBody() {
        if (!this.state.isOpen) return null
        const {comments} = this.props;
        const commentElement = comments.map(comment => <li key = {comment.id}><Comment comment = {comment} /></li>)
        return <section>{commentElement}</section>
    }

    toggleOpen = () => {
        this.setState(prevState => ({
            isOpen: !prevState.isOpen
        }))
    }

    render() {
        const {comments} = this.props
        const {isOpen} = this.state

        return (
            <div>
                <button onClick = {this.toggleOpen}>
                    {isOpen ? 'hide comments' : 'show comments'}
                </button>
                {this.getBody()}
            </div>
        )
    }
}