import * as React from 'react';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import {
    useTranslate,
    DashboardMenuItem,
    MenuItemLink,
    MenuProps,
} from 'react-admin';

// Import Application Modules
// Add imports as more modules are added
import employee from '../employee';
import orca from '../orca';
import safework from '../safework';
import training from '../training';
import submenu from '../submenu';

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
                handleToggle{() => handleToggle('menuEmployee')}
                isOpen={state.menuEmployee}
                name="Employee"
                icon={<employee.icon />}
                dense={dense}
            >
                <MenuItemLink>
                
                </MenuItemLink>
                <MenuItemLink>
                
                </MenuItemLink>
                <MenuItemLink>
                
                </MenuItemLink>
            </SubMenu>
        </div>
    );
};

export default Menu;