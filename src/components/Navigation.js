import React, { Component } from 'react';
import { SideNavigation, SideNavigationItem } from '@ui5/webcomponents-react';
import '@ui5/webcomponents-react/dist/Assets.js';
import eventBus from './eventBus';

export default class Navigation extends Component {
    constructor(props) {
        super(props);
        this.state = {
            menuState: true
        }
    }

    componentDidMount() {
        eventBus.on("toggleMenu", () => this.setState({menuState: !this.state.menuState }));
        console.log("Toggled");
    }

    

    render() {
    return (
        <SideNavigation collapsed={this.state.menuState}>
                    <SideNavigationItem text="Home" icon="home"></SideNavigationItem>
                    <SideNavigationItem text="Employees" icon="group"></SideNavigationItem>
                    <SideNavigationItem text="Locations" icon="locate-me"></SideNavigationItem>
                    <SideNavigationItem slot="fixedItems" text="Administration" icon="home"></SideNavigationItem>
        </SideNavigation>
    );
    }
}