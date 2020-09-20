import React from 'react';
import {
    BrowserRouter,
    Switch, 
    Route,
    Redirect
} from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import { Constants } from './Constants';
import {
    Event,
    NotFound,
    Portal
} from './pages';
import Footer from './components/Footer';

export default function App() {
    return (
        <div className="tsa-your-way-2020">
            <BrowserRouter>
                <Header
                    appName={Constants.AppName}
                    rootPage={Constants.RootPage} />
                <div className="content">
                    <Switch>
                        <Route path={Constants.RootPage} component={Portal} exact />
                        <Route path={Constants.EventPage} component={Event} />
                        <Redirect from={Constants.EventPath} to={Constants.RootPage} />
                        <Route component={NotFound} />
                    </Switch>
                </div>
                <Footer/>
            </BrowserRouter>
        </div>
    );
}
