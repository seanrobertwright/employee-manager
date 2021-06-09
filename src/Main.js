import React from 'react';
import '@ui5/webcomponents-icons/dist/Assets.js';

import {    ShellBar, 
            ShellBarItem, 
            Avatar, 
            SideNavigation, 
            SideNavigationItem, 
            FlexBox, 
            FlexBoxDirection, 
            ThemeProvider,
            Button } from "@ui5/webcomponents-react";

export default function Main() {
    return (
        
        <div>
            
                <ShellBar primary-title="SHITS" secondary-title="Safety & Health Information Tracking System" show-co-pilot>
                    <Button icon="menu" slot="startButton" id="startButton" onClick={()=> this.SideNavigation.collapsed = ! this.SideNavigation.collapsed}></Button>
                </ShellBar>
                <SideNavigation>
                    <SideNavigationItem text="Home" icon="home"></SideNavigationItem>
                    <SideNavigationItem text="Employees" icon="group"></SideNavigationItem>
                    <SideNavigationItem text="Risk Assessments" icon="alert"></SideNavigationItem>
                    <SideNavigationItem slot="fixedItems" text="Administration" icon="home"></SideNavigationItem>
                </SideNavigation>
                
            
            
        </div>       
        );
}

