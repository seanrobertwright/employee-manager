import React, { FC } from 'react'
import {Edit, SimpleForm, TextInput, CreateProps} from 'react-admin';

const CostCenterEdit: FC<CreateProps> = (props) => (
    <Edit {...props} >
        <SimpleForm>
            <TextInput disabled source='id'/>
            <TextInput source='costCenterNumber' />
            <TextInput source='costCenterName'/>
        </SimpleForm>
    </Edit>
);

export default CostCenterEdit;