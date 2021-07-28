import React from 'react';
import { Admin, Resource} from 'react-admin';
import lb4Provider from 'react-admin-lb4';
import './App.css';

function App() {
  return (
    <Admin dataProvider={lb4Provider('http:localhost:4000')}>
      <Resource name='employees' />
    </Admin>  );
}

export default App;
