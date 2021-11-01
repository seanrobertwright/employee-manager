import React, { FC } from 'react'
import {
        Create, SimpleForm, useNotify, useRefresh, useRedirect, TextInput, CreateProps
} from 'react-admin';


const CreateCostCenter: FC<CreateProps> = (props) => {
    const notify = useNotify();
    const refresh = useRefresh();
    const redirect = useRedirect();

    const onSuccess = () => {
        alert('Created!');
        notify('New Cost Center created');
        redirect('/cost-centers/');
        refresh();
    };

    const onFailure = () => {
        notify('Could not create new cost center. ');
        redirect('/cost-centers');
        refresh();
    }
    return (
        <Create {...props} title='Create new Cost Center' onSuccess={onSuccess} onFailure={onFailure}>
            <SimpleForm>
                <TextInput disabled source='id'/>
                <TextInput source='costCenterName'/>
                <TextInput source='costCenterNumber'/>
            </SimpleForm>
        </Create>
    );
}
export default CreateCostCenter;