import React from 'react'
import {List, Datagrid, TextField, Filter, SearchInput} from 'react-admin';

const SiteFilter = (props) => (
    <Filter {...props}>
        <SearchInput placeholder="Site Name" source='siteName' resettable alwaysOn />
    </Filter>
)



export default function siteList(props) {
    return (
       <List {...props} filters={<SiteFilter/>}>
            <Datagrid rowClick='edit'>
                <TextField source='id' label='ID' />
                <TextField source='siteName' label='Site Name' />
            </Datagrid>
        </List> 
    );
}

