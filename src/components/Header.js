import React, { Component } from 'react';
import { ShellBar, Button } from '@ui5/webcomponents-react';
import '@ui5/webcomponents-icons/dist/Assets.js';
import eventBus from './eventBus'
class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            menuState: true
        };
    }

    toggleMenu = () => {
        eventBus.dispatch("toggleMenu", "Menu Toggled");
    };

    render() {
        return (
            <ShellBar primary-title="SHITS" secondary-title="Safety & Health Information Tracking System" show-co-pilot>
                <Button icon="menu" slot="startButton" id="startButton" onClick={this.toggleMenu}></Button>
            </ShellBar>
        );
    }
} 

export default Header;