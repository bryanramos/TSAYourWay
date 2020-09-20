import React from 'react';
import {
    BrowserRouter,
    Switch, 
    Route,
    Redirect
} from 'react-router-dom';
import './App.css';
import { Constants } from './Constants';
import {
    Event,
    NotFound,
    Portal
} from './pages';

export default function App() {
    return (
        <div className="tsa-your-way-2020">
            <BrowserRouter>
                <Switch>
                    <Route path={Constants.RootPage} component={Portal} exact />
                    <Route path={Constants.EventPage} component={Event} />
                    <Redirect from={Constants.EventPath} to={Constants.RootPage} />
                    <Route component={NotFound} />
                </Switch>
            </BrowserRouter>
        </div>
    );
}
