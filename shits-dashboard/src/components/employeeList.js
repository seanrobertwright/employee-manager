import React from 'react'
import { Datagrid, List, TextField } from 'react-admin'


export default function employeeList(props) {
    return (
        <List {...props}>
            <Datagrid>
                <TextField source='id'/>
                <TextField source='firstName'/>
                <TextField source='lastName'/>
                <TextField source='email'/>
            </Datagrid>
        </List>
    )
}
