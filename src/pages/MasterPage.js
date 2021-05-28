import '@ui5/webcomponents-icons/dist/Assets.js';
import Navigation from '../components/Navigation';
import {
            Container,
            Header,
            Body,
            Content,
            Footer
        } from 'react-holy-grail-layout';
import * as Layout from 'react-holy-grail-layout';

import MainHeader from '../components/Header';
import Employees from './EmployeeManagement/Employees';

import React, { Component } from 'react'

export default class MasterPage extends Component {
    
    render() {
        const Aside = Layout.Aside.extend.attrs({width: 'fit-content', padding: '50px'})``
        return (
            <Container>
                <Header>
                    <MainHeader/>
                </Header>
                <Body>
                    <Content>
                        <Employees/>
                    </Content>
                    <Aside left primary>
                        <Navigation />
                    </Aside>
                </Body>
                <Footer/>
            </Container>
        )
    }
}

