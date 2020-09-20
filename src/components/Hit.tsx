import React from 'react';
import { Link } from 'react-router-dom';

interface HitProps {
    hit: any;
}
interface HitState {}

export default class Hit extends React.Component<HitProps, HitState> {
    render() {
        return (
            <React.Fragment>
                <div className="catalog-card-body">
                    <span className="tsa-badge">Challenge A</span>
                    <h3>{this.props.hit.name}</h3>
                    <ul className="event-attributes">
                        <li>Individual</li>
                        <li>Team</li>
                        <li>Middle School</li>
                    </ul>
                    <p>This is a short description about this event. Let the competitor know a little bit about the event at first glance.</p>
                </div>
                <div className="card-action">
                    <Link to={"/event/" + this.props.hit.objectID} className="accent-button">
                        Event Info
                    </Link>
                    <Link to={"/event/submit" + this.props.hit.objectID} className="submit-button">
                        Submit
                    </Link>
                </div>
            </React.Fragment>
        );
    }
}