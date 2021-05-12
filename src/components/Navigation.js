import React from 'react';
import { SideNavigation, SideNavigationItem } from '@ui5/webcomponents-react';
import '@ui5/webcomponents-react/dist/Assets.js';

export default function Navigation() {
    return (
        <SideNavigation>
                    <SideNavigationItem text="Home" icon="home"></SideNavigationItem>
                    <SideNavigationItem text="Employees" icon="group"></SideNavigationItem>
                    <SideNavigationItem text="Locations" icon="locate-me"></SideNavigationItem>
                    <SideNavigationItem slot="fixedItems" text="Administration" icon="home"></SideNavigationItem>
        </SideNavigation>
    );
}