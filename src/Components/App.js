import React, { Component } from 'react'
import {articles} from '../fixtures'
import ArticleList from './ArticleList'
import Filters from './Filters'

class App extends Component {
    static propTypes = {

    };

    render() {
        return (
            <div>
                <Filters articles = {articles} />
                <ArticleList articles = {articles} />
            </div>
        )
    }
}

export default App
