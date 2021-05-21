import '@ui5/webcomponents-icons/dist/Assets.js';
import Navigation from '../components/Navigation';
import {
            Container,
            Header,
            Body,
            Content,
            Aside,
            Footer
        } from 'react-holy-grail-layout';

import MainHeader from '../components/Header';
import Employees from './EmployeeManagement/Employees';

import React, { Component } from 'react'

export default class MasterPage extends Component {
    render() {
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

