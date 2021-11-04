import * as React from 'react';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import {
    useTranslate,
    DashboardMenuItem,
    MenuItemLink,
    MenuProps,
} from 'react-admin';
import {
    List,
    MenuItem,
    ListItemIcon,
    Typography,
    Collapse,
    Tooltip,
} from '@material-ui/core';

// Import Application Modules
// Add imports as more modules are added
import employee from '../employee';
import orca from '../orca';
import safework from '../safework';
import training from '../training';
import SubMenu from './submenu';

type MenuName = 'menuEmployee' | 'menuORCA' | 'menuSafeWork' | 'menuTraining';

const Menu = ({ dense = false}: MenuProps) => {
    const [state, setState] = useState({
        menuEmployee: true,
        menuORCA: true,
        menuSafeWork: true,
        menuTraining: true
    });
    const handleToggle = (menu: MenuName) => {
        setState(state => ({ ...state, [menu]: !state[menu] }));
    };

    return (
        <div>
            {' '}
            <DashboardMenuItem />
            <SubMenu
                handleToggle={() => handleToggle('menuEmployee')}
                isOpen={state.menuSales}
                name="pos.menu.sales"
                icon={<oemployees.icon />}
                dense={dense}
            >
                <MenuItemLink
                    to={{
                        pathname: '/commands',
                        state: { _scrollToTop: true },
                    }}
                    primaryText={translate(`resources.commands.name`, {
                        smart_count: 2,
                    })}
                    leftIcon={<orders.icon />}
                    dense={dense}
                />
                <MenuItemLink
                    to={{
                        pathname: '/invoices',
                        state: { _scrollToTop: true },
                    }}
                    primaryText={translate(`resources.invoices.name`, {
                        smart_count: 2,
                    })}
                    leftIcon={<invoices.icon />}
                    dense={dense}
                />
            </SubMenu>
            <SubMenu
                handleToggle={() => handleToggle('menuCatalog')}
                isOpen={state.menuCatalog}
                name="pos.menu.catalog"
                icon={<products.icon />}
                dense={dense}
            >
                <MenuItemLink
                    to={{
                        pathname: '/products',
                        state: { _scrollToTop: true },
                    }}
                    primaryText={translate(`resources.products.name`, {
                        smart_count: 2,
                    })}
                    leftIcon={<products.icon />}
                    dense={dense}
                />
                <MenuItemLink
                    to={{
                        pathname: '/categories',
                        state: { _scrollToTop: true },
                    }}
                    primaryText={translate(`resources.categories.name`, {
                        smart_count: 2,
                    })}
                    leftIcon={<categories.icon />}
                    dense={dense}
                />
            </SubMenu>
            <SubMenu
                handleToggle={() => handleToggle('menuCustomers')}
                isOpen={state.menuCustomers}
                name="pos.menu.customers"
                icon={<visitors.icon />}
                dense={dense}
            >
                <MenuItemLink
                    to={{
                        pathname: '/customers',
                        state: { _scrollToTop: true },
                    }}
                    primaryText={translate(`resources.customers.name`, {
                        smart_count: 2,
                    })}
                    leftIcon={<visitors.icon />}
                    dense={dense}
                />
                <MenuItemLink
                    to={{
                        pathname: '/segments',
                        state: { _scrollToTop: true },
                    }}
                    primaryText={translate(`resources.segments.name`, {
                        smart_count: 2,
                    })}
                    leftIcon={<LabelIcon />}
                    dense={dense}
                />
            </SubMenu>
            <MenuItemLink
                to={{
                    pathname: '/reviews',
                    state: { _scrollToTop: true },
                }}
                primaryText={translate(`resources.reviews.name`, {
                    smart_count: 2,
                })}
                leftIcon={<reviews.icon />}
                dense={dense}
            />
        </div>
    );
};

export default Menu;