import React from 'react'
import {List, Datagrid, Filter, SearchInput, CreateProps} from 'react-admin';

const EmployeeTypeListFilter = (props: CreateProps) => (
    <Filter {...props}>
        <SearchInput placeholder="" source='' resettable alwaysOn />
    </Filter>
)

const EmployeeTypeList = (props: CreateProps) => {
    return (
       <List {...props} filters={<EmployeeTypeListFilter/>}>
            <Datagrid rowClick='edit'>
                         
            </Datagrid>
        </List> 
    );
}

export default EmployeeTypeList;