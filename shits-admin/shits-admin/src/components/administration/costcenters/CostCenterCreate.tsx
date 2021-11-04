import React from 'react'
import {
        Create, SimpleForm, useNotify, useRefresh, useRedirect, TextInput, CreateProps, ErrorProps
} from 'react-admin';


const CreateCostCenter = (props: CreateProps) => {
    const notify = useNotify();
    const refresh = useRefresh();
    const redirect = useRedirect();

    const onSuccess = (data: any) => {
        
        notify(`New Cost Center created`, { type: 'success' });
       
        redirect('/cost-centers');
        refresh();
    };

    const onFailure = (error: Error) => {
        alert(error.message);
        notify(`Could not create new cost center. ${error.message}`);
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