import React from 'react'
import {Edit, SimpleForm, TextInput} from 'react-admin'

const xEdit = (props) => (
    <Edit {...props} >
        <SimpleForm>
            <TextInput disabled source=''/>
            <TextInput source='' />
            <TextInput source=''/>
        </SimpleForm>
    </Edit>
);

export default xEdit;
