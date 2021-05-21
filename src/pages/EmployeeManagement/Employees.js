import React from 'react'

import { DynamicPage, DynamicPageHeader, DynamicPageTitle, Label, ObjectStatus,Button, Title } from '@ui5/webcomponents-react'

import { Component } from 'react'

export default class Employees extends Component {
    render() {
        return (
            <div>
                <DynamicPage    header={
                    <DynamicPageHeader>
                        
                            <Label>Location: Warehouse A</Label>
                            <Label>Halway: 23L</Label>
                            <Label>Rack: 34</Label>
                        
                            <Label>Availability:</Label>
                            <ObjectStatus state="Success">In Stock</ObjectStatus>
                        
                    </DynamicPageHeader>}
                            style={{
                                maxHeight: '700px'
                            }}
                            title={
                            <DynamicPageTitle actions={[
                                <Button key="edit" design="Emphasized">Edit</Button>, 
                                <Button key="delete" design="Transparent">Delete</Button>, 
                                <Button key="copy" design="Transparent">Copy</Button>, 
                                <Button key="action" design="Transparent" icon="action"/>
                            ]} 
                             
                            heading={<Title>Employees</Title>} 
                            navigationActions={[
                                <Button key="fullscreen" design="Transparent" icon="full-screen"/>, 
                                <Button key="exitFullscreen" design="Transparent" icon="exit-full-screen"/>, 
                                <Button key="decline" design="Transparent" icon="decline"/>]} 
                            subHeading={
                                <Label>This is a subheading</Label>}>
                               
                            </DynamicPageTitle>}>
                    
                </DynamicPage>
            </div>
        )
    }
}
