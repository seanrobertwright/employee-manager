import React from 'react'
import {List, Datagrid, TextField, Filter, SearchInput} from 'react-admin';

const SBUFilter = (props) => (
    <Filter {...props}>
        <SearchInput placeholder="SBU Name" source='sbuNumber' resettable alwaysOn />
    </Filter>
)



export default function SBUList(props) {
    return (
       <List {...props} filters={<SBUFilter/>}>
            <Datagrid rowClick='edit'>
                <TextField source='id' label='ID' />
                <TextField source='sbuName' label='SBU Name' />
            </Datagrid>
        </List> 
    );
}
