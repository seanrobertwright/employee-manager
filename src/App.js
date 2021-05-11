import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import { ThemeProvider } from '@ui5/webcomponents-react';
import Main from './Main';


export default function App() {
  return (
    <div>
      <ThemeProvider>
        <Main />
      </ThemeProvider>    
    </div>
  );
}