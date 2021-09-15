import React from 'react'
import {
        Create, SimpleForm, useNotify, useRefresh, useRedirect, TextInput
} from 'react-admin';


const CreateCostCenter = (props) => {
    const notify = useNotify();
    const refresh = useRefresh();
    const redirect = useRedirect();

    const onSuccess = ({ data }) => {
        notify('New Cost Center created');
        redirect(`/cost-centers?filter=%7B"id"%3A"${data.id}"%7D`);
        refresh();
    };

    return (
        <Create {...props} title='Create new Cost Center' onSuccess={onSuccess}>
            <SimpleForm>
                <TextInput disabled source='id'/>
                <TextInput source='costCenterName'/>
                <TextInput source='costCenterNumber'/>
            </SimpleForm>
        </Create>
    );
}
export default CreateCostCenter;