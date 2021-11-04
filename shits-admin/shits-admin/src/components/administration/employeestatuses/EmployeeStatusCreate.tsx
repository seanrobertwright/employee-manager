import React from 'react'
import { Create, SimpleForm, useNotify, useRefresh, useRedirect, CreateProps} from 'react-admin';
const EmployeeStatusCreate = (props: CreateProps) => {
    const notify = useNotify();
    const refresh = useRefresh();
    const redirect = useRedirect();

    const onSuccess = (data: any) => {
        
        notify(`You have created a new Employee Status`, { type: 'success' });
       
        redirect('/employeestatus');
        refresh();
    };

    const onFailure = (error: Error) => {
  
        notify(`Could not create new EmployeeStatus: ${error.message}`);
        redirect('/employeestatus');
        refresh();
    }
    return (
        <Create {...props} title='Create New Employee Status' onSuccess={onSuccess} onFailure={onFailure}>
            <SimpleForm>

            </SimpleForm>
        </Create>
    );
}
export default EmployeeStatusCreate;