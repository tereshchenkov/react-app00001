import React, {Component} from 'react'
import CommentList from './CommentList'

export default class Article extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isOpen: false
        }
    }

    getBody() {
        if (!this.state.isOpen) return null
        const {article} = this.props;
        return (
            <div>
              <section>{article.text}</section>
              {article.comments ? <CommentList comments = {article.comments} /> : null}
            </div>
        )
    }

    toggleOpen = () => {
        this.setState(prevState => ({
            isOpen: !prevState.isOpen
        }))
    }

    render() {
        const {article} = this.props
        const {isOpen} = this.state
        return (
            <div>
                <h3>{article.title}</h3>
                <button onClick = {this.toggleOpen}>
                    {isOpen ? 'close' : 'open'}
                </button>
                {this.getBody()}
            </div>
        )
    }
}