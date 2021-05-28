import React, { Component, useState} from 'react';
import { HashRouter } from 'react-router-dom';

import './App.css';
import { ThemeProvider } from '@ui5/webcomponents-react';
import MasterPage from './pages/MasterPage'
import { UserProvider } from './Contexts/UserContext'
class App2 extends Component {
    
    render() {
        return (
            
            <HashRouter>
                <ThemeProvider>
                    
                        <MasterPage />
                        
                </ThemeProvider>
            </HashRouter>
            
        );
    }
}

export default App2;


