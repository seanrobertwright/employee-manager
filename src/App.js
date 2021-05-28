import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import { ThemeProvider } from '@ui5/webcomponents-react';
import AppContext from "./Contexts/AppContext";

export const ApplicationContext = React.createContext()

export default function App() {
  const [mainContent, setMainContent] = useState("home")

  return (
      <ThemeProvider>
        <div class="container">
        <div class="header">Header</div>
        <div class="panel left">Left panel has a big penis in it</div>
        <div class="mainbody">Main body</div>
        <div class="panel right">Right panel</div>
        <div class="footer">Footer</div>
      </div>
      </ThemeProvider>    
  );
}