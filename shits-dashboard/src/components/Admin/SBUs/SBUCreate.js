import React from 'react'
import {
        Create, SimpleForm, useNotify, useRefresh, useRedirect, TextInput
} from 'react-admin';


const CreateSBU = (props) => {
    const notify = useNotify();
    const refresh = useRefresh();
    const redirect = useRedirect();

    const onSuccess = ({ data }) => {
        notify('New SBU created');
        redirect(`/sbus?filter=%7B"id"%3A"${data.id}"%7D`);
        refresh();
    };

    return (
        <Create {...props} title='Create new SBU' onSuccess={onSuccess}>
            <SimpleForm>
                <TextInput disabled source='id'/>
                <TextInput source='sbuName'/>
            </SimpleForm>
        </Create>
    );
}
export default CreateSBU;