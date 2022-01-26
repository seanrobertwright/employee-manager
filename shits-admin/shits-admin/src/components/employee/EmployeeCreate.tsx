import React from 'react'
import {
        Create, SimpleForm, useNotify, useRefresh, useRedirect, TextInput, CreateProps } from 'react-admin';


const EmployeeCreate = (props: CreateProps) => {
    const notify = useNotify();
    const refresh = useRefresh();
    const redirect = useRedirect();

    const onSuccess = (data: any) => {
        
        notify(`New Employee created`, { type: 'success' });
       
        redirect('/employees');
        refresh();
    };

    const onFailure = (error: Error) => {
        alert(error.message);
        notify(`Could not create new employee. ${error.message}`);
        redirect('/employees');
        refresh();
    }
    return (
        <Create {...props} title='Create new Employee' onSuccess={onSuccess} onFailure={onFailure}>
            <SimpleForm>
                <TextInput disabled source='id'/>
                <TextInput source='firstName'/>
                <TextInput source='lastNumber'/>
                <TextInput source='email'/>
            </SimpleForm>
        </Create>
    );
}
export default EmployeeCreate;