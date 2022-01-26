import * as React from 'react';
import { useState } from 'react';
import {
    DashboardMenuItem,
    MenuProps,
    MenuItemLink,
    useTranslate,
} from 'react-admin';


// Import Application Modules
// Add imports as more modules are added
import employee from '../employee';
import costcenters from '../administration/costcenters';
import orca from '../orca';
import safework from '../safework';
import training from '../training';
import SubMenu from './submenu';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import ModelTrainingIcon from '@mui/icons-material/ModelTraining';

type MenuName = 'menuActionItems' | 'menuAdministration' | 'menuEmployees' | 'menuORCA' | 'menuGapAnalyses' | 'menuSafeWork' | 'menuTraining' | 'menuComplianceCalendar' | 'menuManagementReview';

const Menu = ({ dense = false}: MenuProps) => {
    const [state, setState] = useState({
        menuEmployees: true,
        menuORCA: true,
        menuSafeWork: true,
        menuTraining: true,
        menuActionItems: true,
        menuAdministration: true,
        menuGapAnalyses: true,
        menuComplianceCalendar: true,
        menuManagementReview: true
    });
    const translate = useTranslate();
    const handleToggle = (menu: MenuName) => {
        setState(state => ({ ...state, [menu]: !state[menu] }));
    };

    return (
        <div>
            <DashboardMenuItem />
            <SubMenu
                handleToggle = {() => handleToggle('menuAdministration')}
                isOpen={state.menuAdministration}
                icon={<AdminPanelSettingsIcon />}
                dense={dense}
                name="Administration">
                
                <MenuItemLink
                    to={{
                        pathname: '/cost-centers',
                        state: { _scrollToTop: true },
                    }}
                    primaryText={translate(`Cost Centers`, {
                        smart_count: 2,
                    })}
                    leftIcon={<costcenters.icon />}
                    dense={dense}
                />
            </SubMenu>
            <SubMenu
                handleToggle = {() => handleToggle('menuActionItems')}
                isOpen={state.menuActionItems}
                icon={<AdminPanelSettingsIcon />}
                dense={dense}
                name="Action Items">
                
            </SubMenu>
            <SubMenu
                handleToggle = {() => handleToggle('menuEmployees')}
                isOpen={state.menuEmployees}
                icon={<AdminPanelSettingsIcon />}
                dense={dense}
                name="Employees">
                
            </SubMenu>
            <SubMenu
                handleToggle = {() => handleToggle('menuORCA')}
                isOpen={state.menuORCA}
                icon={<AdminPanelSettingsIcon />}
                dense={dense}
                name="ORCA">
                
            </SubMenu>
            <SubMenu
                handleToggle = {() => handleToggle('menuGapAnalyses')}
                isOpen={state.menuGapAnalyses}
                icon={<AdminPanelSettingsIcon />}
                dense={dense}
                name="Gap Analyses">
                
            </SubMenu>
            <SubMenu
                handleToggle = {() => handleToggle('menuSafeWork')}
                isOpen={state.menuSafeWork}
                icon={<AdminPanelSettingsIcon />}
                dense={dense}
                name="Safe Work">
                
            </SubMenu>
            <SubMenu
                handleToggle = {() => handleToggle('menuTraining')}
                isOpen={state.menuTraining}
                icon={<ModelTrainingIcon />}
                dense={dense}
                name="Training">
                
            </SubMenu>
            <SubMenu
                handleToggle = {() => handleToggle('menuComplianceCalendar')}
                isOpen={state.menuComplianceCalendar}
                icon={<AdminPanelSettingsIcon />}
                dense={dense}
                name="Compliance Calendar">
                
            </SubMenu>
            <SubMenu
                handleToggle = {() => handleToggle('menuManagementReview')}
                isOpen={state.menuManagementReview}
                icon={<AdminPanelSettingsIcon />}
                dense={dense}
                name="Management Review">
                
            </SubMenu>
        </div>
    );
};

export default Menu;