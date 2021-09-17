import React from 'react'
import {Edit, SimpleForm, TextInput} from 'react-admin';

const siteEdit = (props) => (
    <Edit {...props} >
        <SimpleForm>
            <TextInput disabled source='id'/>
            <TextInput source='siteName'/>
        </SimpleForm>
    </Edit>
);

export default siteEdit;