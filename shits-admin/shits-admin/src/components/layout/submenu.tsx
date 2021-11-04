import * as React from 'react';
import { FC, Fragment, ReactElement, ReactNode } from 'react';
import { useSelector } from 'react-redux';
import {
    List,
    MenuItem,
    ListItemIcon,
    Typography,
    Collapse,
    Tooltip,
} from '@material-ui/core';
import { ReduxState } from 'ra-core';
import { ExpandMore } from '@material-ui/icons';

interface Props {
    dense: boolean;
    handleToggle: () => void;
    icon: ReactElement;
    isOpen: boolean;
    name: string;
    children: ReactNode;
}

const SubMenu = (props: Props) => {
    const { handleToggle, isOpen, name, icon, children, dense } = props;
    
    const sidebarIsOpen = useSelector<ReduxState, boolean>(
        state => state.admin.ui.sidebarOpen
    );

    const header = (
        <MenuItem dense={dense} button onClick={handleToggle}>
            <ListItemIcon>
                {isOpen ? <ExpandMore /> : icon}
            </ListItemIcon>
        </MenuItem>

    );
    return (
        <Fragment>
            {sidebarIsOpen || isOpen ? (
                header
            ) : (
                <Tooltip title={"Tooltip!"} placement="right">
                    {header}
                </Tooltip>
            )}
            <Collapse in={isOpen} timeout="auto" unmountOnExit>
                <List
                    dense={dense}
                    component="div"
                    disablePadding>
                    {children}
                </List>
            </Collapse>
        </Fragment>
        
    );
};

export default SubMenu;
