import React from 'react';
import { Admin, Resource} from 'react-admin';
import lb4Provider from 'react-admin-lb4';
import CostCenterList from './components/Admin/CostCenter/CostCenterList';
import CostCenterEdit from './components/Admin/CostCenter/CostCenterEdit';
import CreateCostCenter from './components/Admin/CostCenter/CreateCostCenter';
import SBUList from './components/Admin/SBUs/SBUList';
import SBUEdit from './components/Admin/SBUs/SBUEdit';
import CreateSBU from './components/Admin/SBUs/SBUCreate';
import './App.css';

function App() {
  return (
    <Admin dataProvider={lb4Provider('http:localhost:4000')}>
      <Resource name='cost-centers' create={CreateCostCenter} list={CostCenterList} edit={CostCenterEdit}/>
      <Resource name='sbus' create={CreateSBU} list={SBUList} edit={SBUEdit}/>
    </Admin>  
    );
}

export default App;
