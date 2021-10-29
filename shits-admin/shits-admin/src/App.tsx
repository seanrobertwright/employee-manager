import * as React from 'react';
import { Admin, Resource } from 'react-admin';
import lb4Provider from 'ra-data-lb4';

import './App.css';

import { Dashboard } from './components/dashboard';
import costcenters from './components/administration/costcenters';

const App = () => {
  return (
    <Admin title="SHITS" dataProvider={lb4Provider("http://localhost:4000/")} dashboard={Dashboard}>
      <Resource name="costcenters" {...costcenters} options={{ label: 'Cost Centers'}} />
    </Admin>
  );
};

export default App;
