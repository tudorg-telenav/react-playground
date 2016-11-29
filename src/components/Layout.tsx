import * as React from 'react';

import Header from "./Header";
import Footer from "./Footer";

interface LayoutProps {};
interface LayoutState {
    isHeaderVisible: boolean,
    isFooterVisible: boolean,
    title: string
};

export default class Layout extends React.Component<LayoutProps, LayoutState> {

    constructor() {
        super();
        this.state = {
            isHeaderVisible: true,
            isFooterVisible: true,
            title: 'header content goes here'
        };
    }

    toggleFooter() {
        let currentState: LayoutState = this.state;
        if (this.state.isFooterVisible) {
            currentState.isFooterVisible = false;
        } else {
            currentState.isFooterVisible = true;
        }
        this.setState(currentState);
    }

    render() {
        return (
            <div>
                {this.state.isHeaderVisible ? <Header toggleFooter={this.toggleFooter.bind(this)} title={this.state.title} /> : null}
                {this.props.children}
                {this.state.isFooterVisible ? <Footer /> : null}
            </div>
        );
    }
}