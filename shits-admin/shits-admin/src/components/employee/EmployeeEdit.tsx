import React from 'react'
import {Edit, SimpleForm, TextInput, CreateProps} from 'react-admin';

const EmployeeEdit = (props: CreateProps) => {
    <Edit {...props} >
        <SimpleForm>
            <TextInput disabled source='id'/>
            <TextInput source='firstName'/>
            <TextInput source='lastNumber' />
            <TextInput source='email' />
        </SimpleForm>
    </Edit>
};

export default EmployeeEdit;