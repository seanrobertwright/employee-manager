import React from 'react';
import { Admin, Resource} from 'react-admin';
import lb4Provider from 'react-admin-lb4';
import './App.css';
import employeeList from './components/employeeList';
import siteList from './components/siteList';

function App() {
  return (
    <Admin dataProvider={lb4Provider('http://localhost:4000')}>
      <Resource name='employees' list={employeeList}/>
      <Resource name='sites' list={siteList}/>
    </Admin>  );

}

export default App;
