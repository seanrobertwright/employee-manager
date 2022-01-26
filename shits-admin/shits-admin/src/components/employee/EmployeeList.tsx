import * as React from 'react';
import {
    List,
    ListProps,
    Datagrid,
    TextField
} from 'react-admin';

const EmployeeList = (props: ListProps) => {
    
        <List {...props}>
            <Datagrid>
                <TextField source="id" />
                <TextField source="firstName" />
                <TextField source="lastName" />
                <TextField source="email" />
            </Datagrid> 
        </List>
 
};

export default EmployeeList;