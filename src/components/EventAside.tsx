import React from 'react';

export default class EventAside extends React.Component {
    render() {
        return (
            <div className="profile-card">
                <span className="challenge-type">Challenge A</span>
                <h2 className="event-title">3D Animation</h2>
                <p className="event-description">This is a short description about this event. Let the competitor know a little bit about the event at first glance.</p>
                <ul className="event-profile-attributes">
                    <li>NQE Skill Development Program</li>
                    <li>Event Type: Team, Individual</li>
                    <li>Level: Middle School</li>
                    <li>Id: cacb7622-2d77-436d-8537-38158ff6ea06</li>
                </ul>
                <div className="event-actions card-action">
                    <a href="#" className="accent-button">Event Contact</a>
                    <a href="#" className="submit-button">Submit</a>
                </div>
            </div>
        );
    }
}