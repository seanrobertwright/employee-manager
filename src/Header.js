import React, { Component } from 'react';
import { ShellBar, Button } from '@ui5/webcomponents-react';
import '@ui5/webcomponents-icons/dist/Assets.js';

class Header extends Component {
    render() {
        return (
            <ShellBar primary-title="SHITS" secondary-title="Safety & Health Information Tracking System" show-co-pilot>
                <Button icon="menu" slot="startButton" id="startButton"></Button>>
            </ShellBar>
        );
    }
} 

export default Header;