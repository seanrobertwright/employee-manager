import * as React from 'react';
import { forwardRef } from 'react';
import { AppBar, UserMenu, MenuItemLink } from 'react-admin';
//import SettingsIcon from "@material-ui/icons/Settings";

const ConfigurationMenu = forwardRef<any, any>((props, ref) => {
    return (
        <div></div>
        /*<MenuItemLink
            ref={ref}
            to="/configuration"
            primaryText={'Configuration'}
            leftIcon={<SettingsIcon />}
            onClick={props.onClick}
            sidebarIsOpen
        />*/
    );
});

const CustomUserMenu = (props: any) => (
    <UserMenu {...props}>
        <ConfigurationMenu />
    </UserMenu>
);

const CustomAppBar = (props: any) => {
    return (
        <AppBar {...props} elevation={1} userMenu={<CustomUserMenu />}>
        </AppBar>
    );
};

export default CustomAppBar;