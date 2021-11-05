import React from 'react'
import { Create, SimpleForm, useNotify, useRefresh, useRedirect, CreateProps} from 'react-admin';

const sbuCreate = (props: CreateProps) => {
    const notify = useNotify();
    const refresh = useRefresh();
    const redirect = useRedirect();
    const onSuccess = (data: any) => {
        
        notify(``, { type: 'success' });
       
        redirect('/');
        refresh();
    };

    const onFailure = (error: Error) => {
  
        notify(`${error.message}`);
        redirect('/');
        refresh();
    }
    return (
        <Create {...props} title='' onSuccess={onSuccess} onFailure={onFailure}>
            <SimpleForm>
                 
            </SimpleForm>
        </Create>
    );
}
export default sbuCreate;