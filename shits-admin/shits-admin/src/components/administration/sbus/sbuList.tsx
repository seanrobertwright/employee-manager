import React from 'react'
import {List, Datagrid, Filter, SearchInput, CreateProps} from 'react-admin';

const SBUListFilter = (props: CreateProps) => (
    <Filter {...props}>
        <SearchInput placeholder="SBU Name" source='sbuName' resettable alwaysOn />
    </Filter>
)

const sbuList = (props: CreateProps) => {
    return (
       <List {...props} filters={<SBUListFilter/>}>
            <Datagrid rowClick='edit'>
                         
            </Datagrid>
        </List> 
    );
}

export default sbuList;