
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import Home from './SourceDefinition';
import LayoutDefinition from './LayoutDefinition';
import RecordTokenizer from './RecordTokenizer';
export default class Routes extends Component {

    render() {
        return (
            <div>
                <Router>
                        <div >
                            <Switch>
                                <Route
                                    exact
                                    path="/"
                                    component={Home}
                                />
                                <Route
                                    exact
                                    path="/LayoutDefinition"
                                    component={LayoutDefinition}
                                />
                                <Route
                                    exact
                                    path="/RecordTokenizer"
                                    component={RecordTokenizer}
                                />
                            </Switch>
                        </div>
                </Router>
            </div>
        );
    }
}