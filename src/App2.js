import React, { Component } from 'react';
import './App.css';
import '@ui5/webcomponents-icons/dist/Assets.js';
import Navigation from './components/Navigation';
import {
            Container,
            Header,
            Body,
            Content,
            Aside,
            Footer
        } from 'react-holy-grail-layout';

import MainHeader from './components/Header';
import NewEmployee from './pages/EmployeeManagement/NewEmployee';

class App2 extends Component {
    render() {
        return (
            <div>
                <Container>
                    <Header>
                        <MainHeader/>
                    </Header>
                    <Body>
                        <Content>
                             <NewEmployee/>
                        </Content>
                        <Aside left primary>
                            <Navigation/>
                        </Aside>
                    </Body>
                    <Footer/>
                </Container>
            </div>
        );
    }
}

export default App2;