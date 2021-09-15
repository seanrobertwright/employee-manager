import React from 'react'
import {Edit, SimpleForm, TextInput} from 'react-admin';

const SBUEdit = (props) => (
    <Edit {...props} >
        <SimpleForm>
            <TextInput disabled source='id'/>
            <TextInput source='sbuName' />
        </SimpleForm>
    </Edit>
);

export default SBUEdit;