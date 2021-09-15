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
        this.homeSelected = this.homeSelected.bind(this);
    }

    componentDidMount() {
        eventBus.on("toggleMenu", () => this.setState({menuState: !this.state.menuState }));
        console.log("Toggled");
    }

    homeSelected(e) {
        const menuSelection = e.detail.item.id;
        if (menuSelection === "home") {

        }
        if (menuSelection === "employees") {

        }
        if (menuSelection === "locations") {
            
        }
        alert(e.detail.item.text + " Clicked");
        console.log(e.detail.item.text);
    }

    render() {
    return (
        <SideNavigation collapsed={this.state.menuState} onSelectionChange={(e) => this.homeSelected(e)}>
                    <SideNavigationItem text="Home" icon="home" id="home"></SideNavigationItem>
                    <SideNavigationItem text="Employees" icon="group" id="employees"></SideNavigationItem>
                    <SideNavigationItem text="Risk Assessments" icon="alert" id="riskAssessments"></SideNavigationItem>
                    <SideNavigationItem text="Management Review" icon="manager" id="managementReview"></SideNavigationItem>
                    <SideNavigationItem slot="fixedItems" text="Administration" icon="home" id="administration"></SideNavigationItem>
        </SideNavigation>
    );
    }
}