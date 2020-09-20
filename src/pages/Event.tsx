import React from 'react';
import { Link } from 'react-router-dom';
import EventAlert from '../components/EventAlert';
import EventAside from '../components/EventAside';
import { Constants } from '../Constants';

export class Event extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Link to={Constants.RootPage} title="Go home" className="go-back">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="32px" height="32px"><path d="M0 0h24v24H0z" fill="none"/><path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"/></svg>
                    <span>Go back</span>
                </Link>
                <div className="event-profile-grid">
                    <div>
                        <EventAside />
                    </div>
                    <div>
                        <EventAlert />
                    </div>
                </div>
            </React.Fragment>

        )
    }
}