import React from 'react';
import { Link } from 'react-router-dom';
import { Constants } from '../Constants';

interface HeaderProps {
    appName: string;
    rootPage: string;
}
interface HeaderState { }

export default class Header extends React.Component<HeaderProps, HeaderState> {
    render() {
        return (
            <header className="site-header" role="banner">
                <div className="bounds">
                    <Link
                        to={this.props.rootPage}
                        className="branding"
                        title={this.props.appName}
                        rel="home">
                        {this.props.appName}
                    </Link>
                </div>
            </header>
        )
    }
}