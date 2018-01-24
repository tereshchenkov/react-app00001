import React, { Component } from 'react'
import ArticleList from './ArticleList'
import Filters from './Filters'

class App extends Component {
    static propTypes = {

    };

    render() {
        return (
            <div>
                <Filters/>
                <ArticleList />
            </div>
        )
    }
}

export default App
