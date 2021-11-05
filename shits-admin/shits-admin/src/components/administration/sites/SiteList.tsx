import React from 'react'
import {List, Datagrid, Filter, SearchInput, CreateProps} from 'react-admin';

const SiteListFilter = (props: CreateProps) => (
    <Filter {...props}>
        <SearchInput placeholder="" source='' resettable alwaysOn />
    </Filter>
)

const SiteList = (props: CreateProps) => {
    return (
       <List {...props} filters={<SiteListFilter/>}>
            <Datagrid rowClick='edit'>
                         
            </Datagrid>
        </List> 
    );
}

export default SiteList;