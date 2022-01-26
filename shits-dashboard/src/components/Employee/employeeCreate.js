import React from 'react'
import {
    Create,
    SimpleForm,
    useNotify,
    useRefresh,
    useRedirect,
    TextInput
} from 'react-admin';


const CreateEmployee = (props) => {
    const notify = useNotify();
    const refresh = useRefresh();
    const redirect = useRedirect();

    const onSuccess = ({
        data
    }) => {
        notify('New Employee created');
        redirect(`/employee?filter=%7B"id"%3A"${data.id}"%7D`);
        refresh();
    };

    return ( <
        Create {
            ...props
        }
        title = 'Create new Employee'
        onSuccess = {
            onSuccess
        } >
        <
        SimpleForm >
        <
        TextInput disabled source = 'id' / >
        <
        TextInput source = 'firstName' / >
        <
        TextInput source = 'lastName' / >
        <
        TextInput source = 'email' / >
        <
        /SimpleForm>   <
        /Create>
    );
}
export default CreateEmployee;