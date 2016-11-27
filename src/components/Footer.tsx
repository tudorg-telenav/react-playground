import * as React from 'react';

interface FooterProps {};
interface FooterState {};

export default class Header extends React.Component<FooterProps, FooterState> {
    render() {
        return (
            <h1>footer content goes here</h1>
        );
    }
}