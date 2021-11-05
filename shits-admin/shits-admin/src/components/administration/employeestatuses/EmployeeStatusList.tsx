import React from 'react'
import {List, Datagrid, Filter, SearchInput, CreateProps} from 'react-admin';

const EmployeeStatusListFilter = (props: CreateProps) => (
    <Filter {...props}>
        <SearchInput placeholder="" source='' resettable alwaysOn />
    </Filter>
)

const EmployeeStatusList = (props: CreateProps) => {
    return (
       <List {...props} filters={<EmployeeStatusListFilter/>}>
            <Datagrid rowClick='edit'>
                         
            </Datagrid>
        </List> 
    );
}

export default EmployeeStatusList;