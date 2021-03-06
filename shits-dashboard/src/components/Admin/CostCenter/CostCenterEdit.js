import React from 'react'
import {Edit, SimpleForm, TextInput} from 'react-admin';

const CostCenterEdit = (props) => (
    <Edit {...props} >
        <SimpleForm>
            <TextInput disabled source='id'/>
            <TextInput source='costCenterNumber' />
            <TextInput source='costCenterName'/>
        </SimpleForm>
    </Edit>
);

export default CostCenterEdit;