import React, { Component } from 'react';
import { Alert } from 'react-bootstrap';

import { Switch, Route, Link } from 'react-router-dom';

import HeaderComponent from './header-component';
import SearchComponent from './search-component';
import ClueParserComponent from './parser-component';

class App extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return (
            <div>
                <HeaderComponent/>
                <Main/>
            </div>
        )
    }
}

const Main = () => (
    <main>
        <Switch>
            <Route exact path='/' component={SearchComponent} />
            <Route path='/clue' component={ClueParserComponent} />
            <Route path='*' component={NotFound} />
        </Switch>
    </main>
)

const NotFound = () => (
    <Alert bsStyle="warning">
        <strong>404</strong> - page not found.
    </Alert>
)

export default App;

