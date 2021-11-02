import * as React from 'react';
import { FC, Fragment, ReactElement } from 'react';
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
import { ExpandLessTwoTone } from '@material-ui/icons';

const SubMenu: FC<Props> = ({
    handleToggle,
    isOpen,
    name,
    icon,
    children,
    dense
}) => {
    const sideeIsOpen = useSelector<ReduxState, boolean>(
        state => state.admin.ui.sidebarOpen
    );

    const header = (
        <MenuItem dense={dense} button onClick{handleToggle}>
            <ListItemIcon>
                {isOpen ? <ExpandMore> : icon}
            </ListItemIcon>
        </MenuItem>
    )
}