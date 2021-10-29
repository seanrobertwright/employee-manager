import * as React from 'react';
import { Admin, Resource } from 'react-admin';
import './App.css';

import Dashboard from './components/dashboard'

const App = () => {
  return ()
    <Admin 
      title="SHITS" 
      dataProvider={}>
      dashboard={Dashboard}
    </Admin>
  );
};

export default App;
