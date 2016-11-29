import * as React from 'react';

import { Link } from 'react-router';

interface HeaderProps {
    title: string,
    toggleFooter: () => void
};
interface HeaderState {};

export default class Header extends React.Component<HeaderProps, HeaderState> {

    handleToggleClick() {
        this.props.toggleFooter();
    }

    render() {
        return (
            <div>
                <h1>{this.props.title}</h1>
                <button onClick={this.handleToggleClick.bind(this)}>Toggle</button>
                <Link to="home"><button>home</button></Link>
                <Link to="settings"><button>settings</button></Link>
            </div>
        );
    }
}