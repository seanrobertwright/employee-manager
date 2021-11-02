import React from 'react'
import {Edit, SimpleForm, TextInput, CreateProps} from 'react-admin';

const CostCenterEdit = (props: CreateProps) => (
    <Edit {...props} >
        <SimpleForm>
            <TextInput disabled source='id'/>
            <TextInput source='costCenterName'/>
            <TextInput source='costCenterNumber' />
        </SimpleForm>
    </Edit>
);

export default CostCenterEdit;