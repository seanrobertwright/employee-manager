import * as React from 'react';
import { useState } from 'react';
import {
    DashboardMenuItem,
    MenuProps,
} from 'react-admin';


// Import Application Modules
// Add imports as more modules are added
import employee from '../employee';
import orca from '../orca';
import safework from '../safework';
import training from '../training';
import SubMenu from './submenu';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';

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
    const handleToggle = (menu: MenuName) => {
        setState(state => ({ ...state, [menu]: !state[menu] }));
    };

    return (
        <div>
            <DashboardMenuItem />
            <SubMenu
                handleToggle = {() => handleToggle('menuAdministration')}
                isOpen={state.menuAdministration}
                icon={AdminPanelSettingsIcon}
                dense={dense}
                name="administration">
                
            </SubMenu>
            <SubMenu
                handleToggle = {() => handleToggle('menuActionItems')}
                isOpen={state.menuActionItems}
                icon={AdminPanelSettingsIcon}
                dense={dense}
                name="actionitems">
                
            </SubMenu>
            <SubMenu
                handleToggle = {() => handleToggle('menuEmployees')}
                isOpen={state.menuEmployees}
                icon={AdminPanelSettingsIcon}
                dense={dense}
                name="employees">
                
            </SubMenu>
            <SubMenu
                handleToggle = {() => handleToggle('menuORCA')}
                isOpen={state.menuORCA}
                icon={AdminPanelSettingsIcon}
                dense={dense}
                name="orca">
                
            </SubMenu>
            <SubMenu
                handleToggle = {() => handleToggle('menuGapAnalyses')}
                isOpen={state.menuGapAnalyses}
                icon={AdminPanelSettingsIcon}
                dense={dense}
                name="gapanalyses">
                
            </SubMenu>
            <SubMenu
                handleToggle = {() => handleToggle('menuSafeWork')}
                isOpen={state.menuSafeWork}
                icon={AdminPanelSettingsIcon}
                dense={dense}
                name="safework">
                
            </SubMenu>
            <SubMenu
                handleToggle = {() => handleToggle('menuTraining')}
                isOpen={state.menuTraining}
                icon={AdminPanelSettingsIcon}
                dense={dense}
                name="training">
                
            </SubMenu>
            <SubMenu
                handleToggle = {() => handleToggle('menuComplianceCalendar')}
                isOpen={state.menuComplianceCalendar}
                icon={AdminPanelSettingsIcon}
                dense={dense}
                name="compliancecalendar">
                
            </SubMenu>
            <SubMenu
                handleToggle = {() => handleToggle('menuManagementReview')}
                isOpen={state.menuManagementReview}
                icon={AdminPanelSettingsIcon}
                dense={dense}
                name="managementreview">
                
            </SubMenu>
        </div>
    );
};

export default Menu;